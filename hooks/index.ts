/**
 * React Hooks for Client Components
 * Only used in "use client" components
 */

'use client';

import { useCallback, useEffect, useState } from 'react';
import { api, endpoints } from '@/lib/api';

/**
 * useAuth Hook
 * Manages user authentication state and login/logout
 */
export function useAuth() {
  const [user, setUser] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = api.getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response: any = await endpoints.auth.login(email, password);
        if (response.success) {
          api.setToken(response.accessToken);
          api.setUser(response.user);
          setUser(response.user);
          return true;
        }
        setError(response.message || 'Login failed');
        return false;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Login error';
        setError(errorMsg);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response: any = await endpoints.auth.register(name, email, password);
        if (response.success) {
          api.setToken(response.accessToken);
          api.setUser(response.user);
          setUser(response.user);
          return true;
        }
        setError(response.message || 'Registration failed');
        return false;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Registration error';
        setError(errorMsg);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await endpoints.auth.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      api.setToken(null);
      api.setUser(null);
      setUser(null);
      setIsLoading(false);
    }
  }, []);

  const isAuthenticated = !!user;

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
  };
}

/**
 * useFetch Hook
 * Data fetching with loading and error states
 * SSR-friendly: does NOT fetch on server, only on client
 */
export function useFetch<T>(
  url: string | null,
  options: {
    auth?: boolean;
    skip?: boolean;
    retry?: boolean;
  } = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { auth = true, skip = false, retry = true } = options;

  useEffect(() => {
    if (!url || skip) return;

    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await api.get<T>(url, { auth, retry });
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          const errorMsg = err instanceof Error ? err.message : 'Fetch error';
          setError(errorMsg);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, auth, retry, skip]);

  return { data, isLoading, error };
}

/**
 * useFormSubmit Hook
 * Handles form submission with loading and error states
 */
export function useFormSubmit<T>(
  submitFn: (data: T) => Promise<unknown>,
  onSuccess?: () => void
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = useCallback(
    async (data: T) => {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      try {
        await submitFn(data);
        setSuccess(true);
        onSuccess?.();
        return true;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Submission error';
        setError(errorMsg);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [submitFn, onSuccess]
  );

  return {
    submit,
    isLoading,
    error,
    success,
    clearError: () => setError(null),
    clearSuccess: () => setSuccess(false),
  };
}

/**
 * useIntersectionObserver Hook
 * Lazy load content when element enters viewport
 */
export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing after visibility detected
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isVisible;
}

/**
 * useLocalStorage Hook
 * Manage localStorage with React state
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key ${key}:`, error);
      return defaultValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
        setStoredValue(value);
      } catch (error) {
        console.error(`Error setting localStorage key ${key}:`, error);
      }
    },
    [key]
  );

  return [storedValue, setValue];
}

/**
 * useDebounce Hook
 * Debounce a value for expensive operations (search, etc.)
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default {
  useAuth,
  useFetch,
  useFormSubmit,
  useIntersectionObserver,
  useLocalStorage,
  useDebounce,
};
