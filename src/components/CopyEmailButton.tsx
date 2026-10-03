'use client';

import { useState } from 'react';

/** The only interactive piece of the Contact section: copies the email and confirms it. */
export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <>
      <button
        type="button"
        className="nudge-ne cursor-pointer border-0 bg-transparent px-[5px] py-3.5 text-[14px] text-[#c2beb3] hover:text-white"
        onClick={copy}
      >
        {status === 'copied' ? 'Copied ✓' : 'Copy email'} <span aria-hidden="true">↗</span>
      </button>
      {status !== 'idle' && (
        <span className="text-[12px] text-accent-light" role="status" aria-live="polite">
          {status === 'copied' ? 'Email address copied.' : 'Could not copy. Please copy it manually.'}
        </span>
      )}
    </>
  );
}
