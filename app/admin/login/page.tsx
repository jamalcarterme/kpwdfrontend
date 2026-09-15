'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { api, endpoints } from '@/lib/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const res: any = await endpoints.auth.adminLogin(email, password);
      if (res?.token) {
        api.setToken(res.token);
        if (res.user) api.setUser(res.user);
        router.push('/admin/dashboard');
      } else {
        setError('Invalid response from server');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="auth-shell">
      <aside className="auth-aside">
        <div>
          <Link href="/" className="auth-back">← Back to site</Link>
          <div className="auth-badge mt-8">Admin Access</div>
          <p className="auth-quote">
            &ldquo;Everything you need to run the agency &mdash; projects, blog, team, bookings and client work &mdash; in one dashboard.&rdquo;
          </p>
        </div>
        <div className="auth-points">
          <div className="auth-row">✓ Manage projects &amp; portfolio</div>
          <div className="auth-row">✓ Publish blog posts</div>
          <div className="auth-row">✓ Track bookings &amp; messages</div>
          <div className="auth-row">✓ Oversee client projects</div>
        </div>
      </aside>

      <div className="auth-main">
        <div className="auth-card">
          <span className="auth-eyebrow">King Praise Web Design</span>
          <h1 className="font-display text-3xl font-bold text-white mt-2">Admin Sign In</h1>
          <p className="text-slate-400 text-sm mt-2">Restricted access — administrators only.</p>

          {error && (
            <div className="toast error mt-5">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="auth-field">
              <label className="block text-sm text-slate-400 mb-1.5">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@kingpraisewebdesign.name.ng" />
            </div>
            <div className="auth-field has-toggle">
              <label className="block text-sm text-slate-400 mb-1.5">Password</label>
              <input type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              <button type="button" className="auth-toggle" onClick={() => setShowPassword((s) => !s)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <button type="submit" disabled={isLoading} className="btn-primary auth-submit mt-2">
              {isLoading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="auth-meta">
            Not an admin? <Link href="/client/login" className="text-[var(--brand-2)]">Client login →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
