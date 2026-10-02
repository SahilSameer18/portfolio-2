import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'var(--paper)',
      color: 'var(--ink)',
      fontFamily: 'var(--sans)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        fontSize: 'clamp(60px, 12vw, 140px)',
        fontFamily: 'var(--display)',
        lineHeight: 1,
        margin: '0 0 1rem'
      }}>
        404
      </h1>
      <p style={{
        fontSize: '18px',
        color: 'var(--muted)',
        maxWidth: '420px',
        marginBottom: '2rem'
      }}>
        Die angeforderte Seite konnte nicht gefunden werden. / The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          padding: '12px 24px',
          border: '1px solid var(--ink)',
          fontSize: '14px',
          letterSpacing: '1px'
        }}
      >
        ZURÜCK ZUR STARTSEITE / RETURN HOME
      </Link>
    </div>
  );
}
