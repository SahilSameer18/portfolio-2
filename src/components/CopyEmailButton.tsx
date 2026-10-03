'use client';

import { useState } from 'react';

/** The only interactive piece of the Contact section: copies the email and confirms it. */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // clipboard blocked: nothing to do
    }
  };

  return (
    <>
      <button
        type="button"
        className="nudge-ne cursor-pointer border-0 bg-transparent px-[5px] py-3.5 text-[14px] text-[#c2beb3] hover:text-white"
        onClick={copy}
      >
        {copied ? 'Copied ✓' : 'Copy email'} <span>↗</span>
      </button>
      {copied && (
        <span className="text-[12px] text-[#c89d87]" role="status" aria-live="polite">
          Email address copied.
        </span>
      )}
    </>
  );
}


