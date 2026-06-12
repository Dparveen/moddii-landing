import Link from 'next/link';

const COL = [
  { title: 'Product', links: [{ href: '/how-it-works', label: 'How it works' }, { href: '/features', label: 'Features' }, { href: '/about', label: 'About' }, { href: '/blog', label: 'Blog' }, { href: '/download', label: 'Download' }] },
  { title: 'Legal', links: [{ href: '/policies/terms', label: 'Terms & Conditions' }, { href: '/policies/privacy', label: 'Privacy Policy' }, { href: '/policies/refund', label: 'Refund Policy' }, { href: '/policies/community', label: 'Community Guidelines' }] },
  { title: 'Support', links: [{ href: '/contact', label: 'Contact Us' }, { href: '/contact', label: 'Help Center' }, { href: '#', label: 'Instagram' }, { href: '#', label: 'Twitter/X' }] },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', padding: '56px 5vw 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 14 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: 'var(--text)' }}>Moodiii</span>
            </Link>
            <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.65, maxWidth: 230, marginBottom: 20 }}>
              Find your vibe, find your people. Mood-based social connecting for real experiences across India.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link href="/download" style={{ background: 'var(--text)', color: 'var(--white)', padding: '8px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>🍎 App Store</Link>
              <Link href="/download" style={{ background: 'var(--bg2)', color: 'var(--text)', padding: '8px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>▶ Play Store</Link>
            </div>
          </div>

          {COL.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--text3)', marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <Link key={l.label} href={l.href} style={{ fontSize: 14, color: 'var(--text2)', textDecoration: 'none' }}>{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, color: 'var(--text3)' }}>© 2025 Moodiii Technologies Pvt. Ltd. Made with ❤️ in India.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {[{href:'/policies/terms',l:'Terms'},{href:'/policies/privacy',l:'Privacy'},{href:'/policies/refund',l:'Refund'},{href:'/policies/community',l:'Community'}].map(({href,l}) => (
              <Link key={href} href={href} style={{ fontSize: 12, color: 'var(--text3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ .footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important} }
        @media(max-width:480px){ .footer-grid{grid-template-columns:1fr!important} }
      `}</style>
    </footer>
  );
}
