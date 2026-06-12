import Link from 'next/link';

const POLICIES = [
  { href: '/policies/terms', label: 'Terms & Conditions' },
  { href: '/policies/privacy', label: 'Privacy Policy' },
  { href: '/policies/refund', label: 'Refund Policy' },
  { href: '/policies/community', label: 'Community Guidelines' },
];

export default function PolicyLayout({ children, title, updated }: { children: React.ReactNode; title: string; updated: string }) {
  return (
    <div>
      <section style={{ padding: '72px 5vw 52px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', padding: '4px 12px', borderRadius: 100, background: 'var(--accent-bg)', color: 'var(--accent)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Legal</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', marginBottom: 10 }}>{title}</h1>
          <p style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 20 }}>Last updated: {updated}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {POLICIES.map(p => (
              <Link key={p.href} href={p.href} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 100, border: '1px solid var(--border)', color: 'var(--text2)', textDecoration: 'none', background: 'var(--white)' }}>{p.label}</Link>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '52px 5vw 80px', background: 'var(--white)' }}>
        <div className="policy-content" style={{ maxWidth: 760, margin: '0 auto' }}>{children}</div>
      </section>
      <section style={{ padding: '40px 5vw', background: 'var(--bg)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <Link href="/" style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>← Back to Moodiii</Link>
      </section>
    </div>
  );
}
