/**
 * API Client Library
 * Handles requests to the Express backend API
 * For client-side use; Server Components should fetch directly
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000/api';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  isForm?: boolean;
  auth?: boolean;
  retry?: boolean;
  headers?: Record<string, string>;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  [key: string]: unknown;
}

/**
 * Token management (browser only)
 */
const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('kpwd_token');
};

const setToken = (token: string | null): void => {
  if (typeof window === 'undefined') return;
  if (token) {
    localStorage.setItem('kpwd_token', token);
    // Mirror to a (non-httpOnly) cookie so middleware.ts can gate /admin & /client routes.
    // The cookie only signals "logged in"; every real request is still authorized via the
    // Authorization header above, and the backend validates the JWT independently.
    document.cookie = `kpwd_token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  } else {
    localStorage.removeItem('kpwd_token');
    document.cookie = 'kpwd_token=; path=/; max-age=0';
  }
};

const getUser = (): Record<string, unknown> | null => {
  if (typeof window === 'undefined') return null;
  try {
    const user = localStorage.getItem('kpwd_user');
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

const setUser = (user: Record<string, unknown> | null): void => {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem('kpwd_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('kpwd_user');
  }
};

/**
 * Refresh expired token
 */
const refreshToken = async (): Promise<string | null> => {
  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!res.ok) return null;

    const data: ApiResponse = await res.json();
    if (data.success && (data as any).accessToken) {
      const newToken = (data as any).accessToken;
      setToken(newToken);
      if ((data as any).user) setUser((data as any).user);
      return newToken;
    }
  } catch (err) {
    console.error('Token refresh failed:', err);
  }

  return null;
};

/**
 * Core fetch wrapper
 */
async function request<T = unknown>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    method = 'GET',
    body,
    isForm = false,
    auth = true,
    retry = true,
    headers: customHeaders = {},
  } = options;

  const headers: Record<string, string> = { ...customHeaders };

  // Set content type
  if (!isForm && body) {
    headers['Content-Type'] = 'application/json';
  }

  // Add auth token if provided
  if (auth) {
    const token = getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers,
      credentials: 'include', // Send cookies
      body: body
        ? isForm
          ? (body as BodyInit)
          : JSON.stringify(body)
        : undefined,
    });
  } catch (err) {
    throw new Error(`Network error: ${(err as Error).message}`);
  }

  // Handle 401: Try refreshing token once
  if (res.status === 401 && auth && retry) {
    const newToken = await refreshToken();
    if (newToken) {
      // Retry with new token
      return request(path, { ...options, retry: false });
    }
    // Token refresh failed — redirect to login (handled by middleware)
    throw new Error('Unauthorized: Please log in again');
  }

  // Parse response
  let data: ApiResponse;
  const contentType = res.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    try {
      data = await res.json();
    } catch (err) {
      throw new Error('Invalid JSON response from server');
    }
  } else {
    data = { success: res.ok };
  }

  // Check for errors
  if (!res.ok) {
    const message =
      (data as any).message || data.message || `HTTP ${res.status}`;
    throw new Error(message);
  }

  // Return data (generic typing preserved)
  return data as T;
}

/**
 * Public API client
 */
export const api = {
  /**
   * GET request
   */
  get: async <T = unknown>(
    path: string,
    options?: Omit<RequestOptions, 'method' | 'body'>
  ): Promise<T> => {
    return request(path, { ...options, method: 'GET' });
  },

  /**
   * POST request
   */
  post: async <T = unknown>(
    path: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method' | 'body'>
  ): Promise<T> => {
    return request(path, { ...options, method: 'POST', body });
  },

  /**
   * PUT request
   */
  put: async <T = unknown>(
    path: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method' | 'body'>
  ): Promise<T> => {
    return request(path, { ...options, method: 'PUT', body });
  },

  /**
   * DELETE request
   */
  del: async <T = unknown>(
    path: string,
    options?: Omit<RequestOptions, 'method' | 'body'>
  ): Promise<T> => {
    return request(path, { ...options, method: 'DELETE' });
  },

  /**
   * PATCH request
   */
  patch: async <T = unknown>(
    path: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method' | 'body'>
  ): Promise<T> => {
    return request(path, { ...options, method: 'PATCH', body });
  },

  // ===== Token & Auth Management =====
  getToken,
  setToken,
  getUser,
  setUser,
  refreshToken,
};

/**
 * Specific API endpoints (typed)
 */
export const endpoints = {
  auth: {
    login: (email: string, password: string) =>
      api.post('/auth/login', { email, password }),
    adminLogin: (email: string, password: string) =>
      api.post('/auth/admin-login', { email, password }, { auth: false }),
    logout: () => api.post('/auth/logout', {}, { auth: false }),
    register: (
      name: string,
      email: string,
      password: string,
      extra?: { phone?: string; company?: string; country?: string }
    ) => api.post('/auth/register', { name, email, password, ...extra }, { auth: false }),
    me: () => api.get('/auth/me'),
  },

  blog: {
    list: (params?: Record<string, unknown>) => {
      const qs = new URLSearchParams(params as Record<string, string>);
      return api.get(`/blog?${qs.toString()}`);
    },
    get: (slug: string) => api.get(`/blog/${slug}`),
    create: (data: unknown, isForm = true) => api.post('/blog', data, { isForm }),
    update: (id: string, data: unknown, isForm = true) => api.put(`/blog/${id}`, data, { isForm }),
    delete: (id: string) => api.del(`/blog/${id}`),
  },

  projects: {
    list: () => api.get('/projects'),
    get: (id: string) => api.get(`/projects/${id}`),
    create: (data: unknown, isForm = true) => api.post('/projects', data, { isForm }),
    update: (id: string, data: unknown, isForm = true) => api.put(`/projects/${id}`, data, { isForm }),
    delete: (id: string) => api.del(`/projects/${id}`),
  },

  testimonials: {
    list: () => api.get('/testimonials', { auth: false }),
    get: (id: string) => api.get(`/testimonials/${id}`),
    create: (data: unknown, isForm = false) => api.post('/testimonials', data, { isForm }),
    update: (id: string, data: unknown, isForm = false) => api.put(`/testimonials/${id}`, data, { isForm }),
    delete: (id: string) => api.del(`/testimonials/${id}`),
  },

  team: {
    list: () => api.get('/team', { auth: false }),
    create: (data: unknown, isForm = true) => api.post('/team', data, { isForm }),
    update: (id: string, data: unknown, isForm = true) => api.put(`/team/${id}`, data, { isForm }),
    delete: (id: string) => api.del(`/team/${id}`),
  },

  announcements: {
    list: () => api.get('/announcements', { auth: false }),
    create: (data: unknown) => api.post('/announcements', data),
    update: (id: string, data: unknown) => api.put(`/announcements/${id}`, data),
    delete: (id: string) => api.del(`/announcements/${id}`),
  },

  bookings: {
    create: (data: unknown) => api.post('/bookings', data, { auth: false }),
    list: () => api.get('/bookings'),
    updateStatus: (id: string, status: string) => api.put(`/bookings/${id}`, { status }),
    delete: (id: string) => api.del(`/bookings/${id}`),
  },

  contact: {
    submit: (data: unknown) => api.post('/contact', data, { auth: false }),
    list: () => api.get('/contact'),
    markRead: (id: string) => api.put(`/contact/${id}/read`, {}),
    delete: (id: string) => api.del(`/contact/${id}`),
  },

  clientProjects: {
    mine: () => api.get('/client-projects/mine'),
    list: () => api.get('/client-projects'),
    listClients: () => api.get('/client-projects/clients/list'),
    get: (id: string) => api.get(`/client-projects/${id}`),
    create: (data: unknown) => api.post('/client-projects', data),
    update: (id: string, data: unknown) => api.put(`/client-projects/${id}`, data),
    delete: (id: string) => api.del(`/client-projects/${id}`),
    addMilestone: (id: string, title: string) => api.post(`/client-projects/${id}/milestones`, { title }),
    updateMilestone: (id: string, milestoneId: string, status: string) =>
      api.put(`/client-projects/${id}/milestones/${milestoneId}`, { status }),
    deleteMilestone: (id: string, milestoneId: string) =>
      api.del(`/client-projects/${id}/milestones/${milestoneId}`),
    addNote: (id: string, text: string) => api.post(`/client-projects/${id}/notes`, { text }),
  },
};

export default api;
