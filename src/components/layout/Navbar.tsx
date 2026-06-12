'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 64,
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5vw',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--accent)', marginBottom: 2 }} />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: 'var(--text)' }}>Moodiii</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-desktop">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 14, fontWeight: 500, textDecoration: 'none',
              color: pathname.startsWith(l.href) ? 'var(--accent)' : 'var(--text2)',
            }}>{l.label}</Link>
          ))}
        </div>

        <div className="nav-desktop">
          <Link href="/download" style={{ background: 'var(--text)', color: 'var(--white)', padding: '9px 22px', borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Get the App</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'none', alignItems: 'center', justifyContent: 'center' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 99, background: 'var(--white)', padding: '24px 5vw', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV.map(l => (
            <Link key={l.href} href={l.href} style={{ padding: '14px 0', fontSize: 18, fontWeight: 500, color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border2)' }}>{l.label}</Link>
          ))}
          <Link href="/download" style={{ marginTop: 24, background: 'var(--text)', color: 'var(--white)', padding: '14px 24px', borderRadius: 100, textAlign: 'center', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>📱 Get the App — Free</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
