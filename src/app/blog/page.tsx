import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Blog' };

const POSTS = [
  { slug:'how-to-make-friends-new-city', emoji:'🏙️', cat:'Community', date:'Dec 15, 2024', title:'How to Make Real Friends When You Move to a New City', excerpt:"Moving to a new city is exciting — and isolating. Here's how thousands of Moodiii users turned weekends alone into new friendships.", time:'5 min read' },
  { slug:'perfect-vibe-guide', emoji:'✨', cat:'Tips & Tricks', date:'Dec 8, 2024', title:'The Complete Guide to Creating a Vibe That Fills Up Fast', excerpt:"Some vibes fill in minutes. Others sit empty for days. We analyzed 10,000+ vibes and found out exactly what makes the difference.", time:'7 min read' },
  { slug:'moodiii-top-cities-2024', emoji:'📍', cat:'Insights', date:'Nov 28, 2024', title:'The 10 Most Active Moodiii Cities of 2024', excerpt:"From chai runs in Chandigarh to beach vibes in Mumbai — here are the cities that vibed hardest on Moodiii this year.", time:'4 min read' },
  { slug:'safety-tips-meeting-online', emoji:'🛡️', cat:'Safety', date:'Nov 20, 2024', title:'5 Safety Tips for Meeting People You Found Online', excerpt:"Meeting strangers is normal now. But a few smart habits can make every new connection feel confident and safe. Our Trust & Safety team shares their best advice.", time:'6 min read' },
  { slug:'mood-based-socializing', emoji:'🎭', cat:'Community', date:'Nov 12, 2024', title:'Why Mood-Based Socializing is the Future of Making Plans', excerpt:"Traditional apps match you on interests. We match you on energy. Here's the psychology behind why vibes work.", time:'8 min read' },
  { slug:'moodiii-story', emoji:'🚀', cat:'Company', date:'Oct 30, 2024', title:'How Moodiii Started: From a Lonely Weekend to 12,000 Users', excerpt:"The honest story behind building Moodiii — the failures, the breakthroughs, and the moment we knew we were onto something real.", time:'10 min read' },
];

const CATS = ['All', 'Community', 'Tips & Tricks', 'Safety', 'Insights', 'Company'];

export default function BlogPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  return (
    <div>
      <section style={{padding:'80px 5vw 64px',background:'var(--bg)',borderBottom:'1px solid var(--border)'}}>
        <div style={{maxWidth:760,margin:'0 auto',textAlign:'center'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--accent-bg)',border:'1px solid rgba(255,92,77,0.2)',padding:'5px 14px',borderRadius:100,fontSize:11,fontWeight:700,color:'var(--accent)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:24}}>Moodiii Blog</div>
          <h1 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.05,color:'var(--text)',marginBottom:16}}>Stories, tips &<br/><em style={{fontStyle:'italic',color:'var(--accent)'}}>vibe guides</em></h1>
          <p style={{fontSize:17,color:'var(--text2)',lineHeight:1.65}}>Insights on social connection, city life, and how to make the most of Moodiii.</p>
        </div>
      </section>

      <section style={{padding:'64px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}>
          {/* Featured */}
          <div style={{background:'var(--bg)',borderRadius:24,padding:48,border:'1px solid var(--border2)',marginBottom:48,display:'grid',gridTemplateColumns:'1fr 200px',gap:40,alignItems:'center'}} className="feat-post">
            <div>
              <div style={{display:'flex',gap:10,marginBottom:20,alignItems:'center'}}>
                <span style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.08em'}}>{featured.cat}</span>
                <span style={{fontSize:11,color:'var(--text3)'}}>·</span>
                <span style={{fontSize:12,color:'var(--text3)'}}>{featured.date}</span>
                <span style={{fontSize:11,color:'var(--text3)'}}>·</span>
                <span style={{fontSize:12,color:'var(--text3)'}}>{featured.time}</span>
              </div>
              <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(22px, 2.5vw, 32px)',color:'var(--text)',lineHeight:1.2,marginBottom:16}}>{featured.title}</h2>
              <p style={{fontSize:15,color:'var(--text2)',lineHeight:1.7,marginBottom:24}}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} style={{fontSize:14,color:'var(--accent)',fontWeight:600,textDecoration:'none'}}>Read article →</Link>
            </div>
            <div style={{fontSize:80,textAlign:'center'}}>{featured.emoji}</div>
          </div>

          {/* Grid */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}} className="blog-grid">
            {rest.map(p=>(
              <div key={p.slug} style={{background:'var(--bg)',borderRadius:20,padding:28,border:'1px solid var(--border2)'}}>
                <div style={{fontSize:40,marginBottom:20}}>{p.emoji}</div>
                <div style={{display:'flex',gap:8,marginBottom:14,alignItems:'center',flexWrap:'wrap'}}>
                  <span style={{fontSize:10,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.08em'}}>{p.cat}</span>
                  <span style={{fontSize:11,color:'var(--text3)'}}>· {p.date}</span>
                </div>
                <h3 style={{fontFamily:"'Instrument Serif', serif",fontSize:19,color:'var(--text)',lineHeight:1.3,marginBottom:12}}>{p.title}</h3>
                <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.65,marginBottom:20}}>{p.excerpt}</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:12,color:'var(--text3)'}}>{p.time}</span>
                  <Link href={`/blog/${p.slug}`} style={{fontSize:13,color:'var(--accent)',fontWeight:600,textDecoration:'none'}}>Read →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:900px){.blog-grid{grid-template-columns:1fr 1fr!important}.feat-post{grid-template-columns:1fr!important}}@media(max-width:500px){.blog-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
