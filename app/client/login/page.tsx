'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/hooks';

export default function ClientLoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const ok = await login(email, password);
    setIsLoading(false);
    if (ok) {
      router.push('/client/dashboard');
    } else {
      setError('Invalid email or password');
    }
  }

  return (
    <main className="auth-shell">
      <aside className="auth-aside">
        <div>
          <Link href="/" className="auth-back">← Back to site</Link>
          <div className="auth-badge mt-8">Client Portal</div>
          <p className="auth-quote">&ldquo;Track your project, see milestones, and message us — all in one place.&rdquo;</p>
        </div>
        <div className="auth-points">
          <div className="auth-row">✓ Live project status &amp; milestones</div>
          <div className="auth-row">✓ Direct notes with our team</div>
          <div className="auth-row">✓ One account for every project</div>
        </div>
      </aside>

      <div className="auth-main">
        <div className="auth-card">
          <span className="auth-eyebrow">King Praise Web Design</span>
          <h1 className="font-display text-3xl font-bold text-white mt-2">Client Sign In</h1>
          <p className="text-slate-400 text-sm mt-2">Sign in to track your project&apos;s progress.</p>

          {error && <div className="toast error mt-5">{error}</div>}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="auth-field">
              <label className="block text-sm text-slate-400 mb-1.5">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
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
            New client? <Link href="/client/register" className="text-[var(--brand-2)]">Create an account →</Link>
          </p>
          <div className="auth-divider">or</div>
          <p className="auth-meta">
            <Link href="/admin/login" className="text-slate-500">Admin login →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
