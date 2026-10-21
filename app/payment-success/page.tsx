'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { endpoints } from '@/lib/api';

type State = { kind: 'loading' } | { kind: 'paid'; expiry?: string } | { kind: 'failed'; msg: string };

function Result() {
  const params = useSearchParams();
  const reference = params.get('reference') || params.get('trxref');
  const [state, setState] = useState<State>({ kind: 'loading' });

  useEffect(() => {
    if (!reference) { setState({ kind: 'failed', msg: 'No payment reference was found in this link.' }); return; }
    let tries = 0;
    const run = async () => {
      try {
        const r: any = await endpoints.payments.verify(reference);
        if (r.paid) setState({ kind: 'paid', expiry: r.expiryDate });
        else if (++tries < 3) setTimeout(run, 2500); // webhook may still be settling
        else setState({ kind: 'failed', msg: `Payment status: ${r.status || 'not confirmed'}.` });
      } catch (e) {
        setState({ kind: 'failed', msg: (e as Error).message });
      }
    };
    run();
  }, [reference]);

  return (
    <div className="mx-auto max-w-lg rounded-3xl bg-white p-10 text-center shadow-2xl shadow-ink/10">
      {state.kind === 'loading' && (<><Loader2 className="mx-auto h-12 w-12 animate-spin text-brand" /><h1 className="mt-6 text-2xl font-bold">Confirming your payment…</h1></>)}
      {state.kind === 'paid' && (<>
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
        <h1 className="mt-6 text-3xl font-bold">Payment received</h1>
        <p className="mt-3 text-slate-600">Thank you! Your domain &amp; hosting maintenance has been renewed{state.expiry ? <> until <b>{new Date(state.expiry).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</b></> : null}. A receipt is on its way to your inbox.</p>
      </>)}
      {state.kind === 'failed' && (<>
        <XCircle className="mx-auto h-14 w-14 text-rose-500" />
        <h1 className="mt-6 text-3xl font-bold">We couldn&apos;t confirm payment</h1>
        <p className="mt-3 text-slate-600">{state.msg} If you were charged, don&apos;t worry — contact us and we&apos;ll sort it out right away.</p>
      </>)}
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn btn-primary">Back to home</Link>
        <Link href="/contact" className="btn btn-outline">Contact us</Link>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <main className="bg-[var(--bg-tertiary)] px-5 pb-24 pt-40">
      <Suspense fallback={null}><Result /></Suspense>
    </main>
  );
}
