'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { api, endpoints } from '@/lib/api';

export default function ClientRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', company: '', country: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const res: any = await endpoints.auth.register(form.name, form.email, form.password, {
        phone: form.phone || undefined,
        company: form.company || undefined,
        country: form.country || undefined,
      });
      if (res?.token) {
        api.setToken(res.token);
        if (res.user) api.setUser(res.user);
        router.push('/client/dashboard');
      } else {
        setError('Could not create account. Please try again.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create account.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="auth-shell">
      <aside className="auth-aside">
        <div>
          <Link href="/" className="auth-back">← Back to site</Link>
          <div className="auth-badge mt-8">Client Portal</div>
          <p className="auth-quote">&ldquo;Create your account once, and every project we build for you lives in one dashboard.&rdquo;</p>
        </div>
        <div className="auth-points">
          <div className="auth-row">✓ Free, no credit card required</div>
          <div className="auth-row">✓ Milestone &amp; status tracking</div>
          <div className="auth-row">✓ Direct line to our team</div>
        </div>
      </aside>

      <div className="auth-main">
        <div className="auth-card">
          <span className="auth-eyebrow">King Praise Web Design</span>
          <h1 className="font-display text-3xl font-bold text-white mt-2">Create Your Account</h1>
          <p className="text-slate-400 text-sm mt-2">Track your website or software project with us.</p>

          {error && <div className="toast error mt-5">{error}</div>}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="auth-field">
              <label className="block text-sm text-slate-400 mb-1.5">Full Name</label>
              <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Doe" />
            </div>
            <div className="auth-field">
              <label className="block text-sm text-slate-400 mb-1.5">Email</label>
              <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@company.com" />
            </div>
            <div className="auth-field">
              <label className="block text-sm text-slate-400 mb-1.5">Password</label>
              <input type="password" required minLength={6} value={form.password} onChange={(e) => update('password', e.target.value)} placeholder="At least 6 characters" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="auth-field">
                <label className="block text-sm text-slate-400 mb-1.5">Phone (optional)</label>
                <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+234…" />
              </div>
              <div className="auth-field">
                <label className="block text-sm text-slate-400 mb-1.5">Company (optional)</label>
                <input type="text" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Company name" />
              </div>
            </div>
            <div className="auth-field">
              <label className="block text-sm text-slate-400 mb-1.5">Country (optional)</label>
              <input type="text" value={form.country} onChange={(e) => update('country', e.target.value)} placeholder="Nigeria" />
            </div>
            <button type="submit" disabled={isLoading} className="btn-primary auth-submit mt-2">
              {isLoading ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <p className="auth-meta">
            Already have an account? <Link href="/client/login" className="text-[var(--brand-2)]">Sign in →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
