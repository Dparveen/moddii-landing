import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'About Us' };

const TEAM = [
  { e:'👨‍💻', n:'Aryan Mehta', r:'Co-founder & CEO', d:'Passionate about building community products. Ex-Swiggy. IIT Delhi.' },
  { e:'👩‍🎨', n:'Sneha Kapoor', r:'Co-founder & Design', d:'Obsessed with human-centered design. Ex-Zomato Design. NID Ahmedabad.' },
  { e:'🧑‍💼', n:'Rohan Sharma', r:'CTO', d:'Full-stack builder. Loves distributed systems and weekend cricket. IIT Bombay.' },
  { e:'👩‍📱', n:'Priya Nair', r:'Head of Product', d:'Product thinker with a growth mindset. Ex-CRED. ISB Hyderabad.' },
];

const VALUES = [
  { i:'🤝', t:'Authentic Connections', d:'We believe the best experiences happen when real people come together over genuine shared interests — not curated profiles.' },
  { i:'🌍', t:'India-First', d:'We build for the energy, chaos, and beauty of Indian cities. Moodiii is designed for how people here actually socialise.' },
  { i:'🛡️', t:'Safety Above All', d:'Every feature decision starts with one question: does this keep our users safe? Safety is not a checkbox — it\'s our foundation.' },
  { i:'✨', t:'Moments Over Metrics', d:'We measure success by the quality of experiences our users have, not just by downloads and DAUs.' },
];

export default function AboutPage() {
  return (
    <div>
      <section style={{padding:'80px 5vw 64px',background:'var(--bg)',borderBottom:'1px solid var(--border)'}}>
        <div style={{maxWidth:760,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--accent-bg)',border:'1px solid rgba(255,92,77,0.2)',padding:'5px 14px',borderRadius:100,fontSize:11,fontWeight:700,color:'var(--accent)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:24}}>Our Story</div>
          <h1 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px, 6vw, 68px)',lineHeight:1.05,color:'var(--text)',marginBottom:24}}>We built the app<br/>we <em style={{fontStyle:'italic',color:'var(--accent)'}}>wished existed</em></h1>
          <p style={{fontSize:18,color:'var(--text2)',lineHeight:1.75,maxWidth:600}}>It started with a simple problem: we had moved to a new city, had weekends free, and no one to spend them with. Existing apps felt wrong for this — too romantic, too professional, too passive.</p>
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:760,margin:'0 auto'}}>
          <p style={{fontSize:17,color:'var(--text2)',lineHeight:1.8,marginBottom:24}}>We wanted something simple: &quot;I&apos;m going to watch the IPL tonight — who&apos;s in?&quot; or &quot;Anyone want to try that new cafe in Bandra this Sunday?&quot;. Real plans, real people, real experiences.</p>
          <p style={{fontSize:17,color:'var(--text2)',lineHeight:1.8,marginBottom:24}}>So in early 2024, a small team of 4 friends started building Moodiii out of a tiny apartment in Chandigarh. No VC money, no fancy office — just a laptop, strong chai, and a belief that loneliness in cities is a solvable problem.</p>
          <p style={{fontSize:17,color:'var(--text2)',lineHeight:1.8,marginBottom:48}}>Today, Moodiii has 12,000+ active users across 50+ Indian cities creating and joining thousands of vibes every week. And we&apos;re just getting started.</p>

          <div style={{background:'var(--accent-bg)',border:'1px solid rgba(255,92,77,0.2)',borderRadius:20,padding:32,marginBottom:48}}>
            <div style={{fontFamily:"'Instrument Serif', serif",fontSize:24,color:'var(--text)',lineHeight:1.4,fontStyle:'italic',marginBottom:16}}>&quot;Loneliness in cities is a product problem. We&apos;re fixing it.&quot;</div>
            <div style={{fontSize:14,color:'var(--text2)',fontWeight:500}}>— Aryan Mehta, Co-founder</div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--bg)'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>What We Stand For</div>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(28px, 3.5vw, 44px)',color:'var(--text)',lineHeight:1.1,marginBottom:48}}>Our <em style={{fontStyle:'italic',color:'var(--accent)'}}>values</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}} className="val-grid">
            {VALUES.map(v=>(
              <div key={v.t} style={{background:'var(--white)',borderRadius:20,padding:28,border:'1px solid var(--border2)'}}>
                <div style={{fontSize:32,marginBottom:16}}>{v.i}</div>
                <div style={{fontSize:16,fontWeight:600,color:'var(--text)',marginBottom:10}}>{v.t}</div>
                <div style={{fontSize:14,color:'var(--text2)',lineHeight:1.65}}>{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>The Team</div>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(28px, 3.5vw, 44px)',color:'var(--text)',lineHeight:1.1,marginBottom:48}}>The people <em style={{fontStyle:'italic',color:'var(--accent)'}}>behind Moodiii</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}} className="team-grid">
            {TEAM.map(m=>(
              <div key={m.n} style={{background:'var(--bg)',borderRadius:20,padding:28,border:'1px solid var(--border2)',textAlign:'center'}}>
                <div style={{fontSize:48,marginBottom:12}}>{m.e}</div>
                <div style={{fontSize:16,fontWeight:600,color:'var(--text)',marginBottom:4}}>{m.n}</div>
                <div style={{fontSize:12,color:'var(--accent)',fontWeight:600,marginBottom:12}}>{m.r}</div>
                <div style={{fontSize:13,color:'var(--text2)',lineHeight:1.6}}>{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--bg)',textAlign:'center'}}>
        <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(28px, 3.5vw, 48px)',color:'var(--text)',marginBottom:16}}>Want to join our <em style={{fontStyle:'italic',color:'var(--accent)'}}>team?</em></h2>
        <p style={{fontSize:16,color:'var(--text2)',marginBottom:32}}>We&apos;re always looking for passionate people who care about genuine human connection.</p>
        <Link href="/contact" style={{background:'var(--text)',color:'var(--white)',padding:'14px 32px',borderRadius:100,fontSize:15,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>Say hello →</Link>
      </section>
      <style>{`@media(max-width:768px){.val-grid{grid-template-columns:1fr 1fr!important}.team-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.val-grid{grid-template-columns:1fr!important}.team-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
