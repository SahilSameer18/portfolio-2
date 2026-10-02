import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--paper)] p-8 text-center font-[family-name:var(--sans)] text-[var(--ink)]">
      <h1 className="mb-4 font-[family-name:var(--display)] text-[clamp(60px,12vw,140px)] leading-none">404</h1>
      <p className="mb-8 max-w-[420px] text-lg text-[var(--muted)]">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="inline-flex border border-[var(--ink)] px-6 py-3 text-sm tracking-[1px]">
        RETURN HOME
      </Link>
    </div>
  );
}
