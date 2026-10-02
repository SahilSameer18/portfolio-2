import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper p-8 text-center font-sans text-ink">
      <h1 className="mb-4 font-display text-[length:clamp(60px,12vw,140px)] leading-none">404</h1>
      <p className="mb-8 max-w-[420px] text-[18px] text-muted">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="inline-flex border border-ink px-6 py-3 text-[14px] tracking-[1px]">
        RETURN HOME
      </Link>
    </div>
  );
}
