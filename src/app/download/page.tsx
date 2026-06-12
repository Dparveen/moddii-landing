import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Download Moodiii' };

const PERKS = [
  {i:'🆓',t:'Completely Free',d:'No subscription, no hidden fees. Download and start vibing immediately.'},
  {i:'🔒',t:'Safe & Private',d:'Your data is encrypted. Phone number never shared with other users.'},
  {i:'📍',t:'Works Across India',d:'50+ cities and growing. Real vibes happening near you right now.'},
  {i:'⚡',t:'Drop a Vibe in 2 Min',d:'Simple setup. Pick mood, add details, publish. That\'s it.'},
];

export default function DownloadPage() {
  return (
    <div>
      <section style={{padding:'80px 5vw',background:'var(--text)',minHeight:'60vh',display:'flex',alignItems:'center'}}>
        <div style={{maxWidth:1160,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}} className="dl-grid">
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.15)',padding:'5px 14px',borderRadius:100,fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.7)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:28}}>Available Now</div>
            <h1 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px, 5vw, 68px)',lineHeight:1.05,color:'var(--white)',marginBottom:20}}>Get <em style={{fontStyle:'italic',color:'var(--accent2)'}}>Moodiii</em> on your phone</h1>
            <p style={{fontSize:17,color:'rgba(255,255,255,0.55)',lineHeight:1.7,marginBottom:40}}>Drop a vibe in 2 minutes. Available free on iOS and Android.</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <a href="#" style={{display:'inline-flex',alignItems:'center',gap:14,background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',padding:'14px 28px',borderRadius:14,color:'var(--white)',textDecoration:'none'}}>
                <span style={{fontSize:28}}>🍎</span>
                <div><div style={{fontSize:11,opacity:0.55}}>Download on the</div><div style={{fontSize:17,fontWeight:600}}>App Store</div></div>
              </a>
              <a href="#" style={{display:'inline-flex',alignItems:'center',gap:14,background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',padding:'14px 28px',borderRadius:14,color:'var(--white)',textDecoration:'none'}}>
                <span style={{fontSize:28}}>▶</span>
                <div><div style={{fontSize:11,opacity:0.55}}>Get it on</div><div style={{fontSize:17,fontWeight:600}}>Google Play</div></div>
              </a>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:260,height:480,borderRadius:40,background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'var(--accent)'}}/>
              <div style={{fontFamily:"'Instrument Serif', serif",fontSize:28,color:'var(--white)'}}>Moodiii</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.4)'}}>Your vibe awaits ✨</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(28px, 3.5vw, 44px)',color:'var(--text)',textAlign:'center',marginBottom:48}}>Why you&apos;ll <em style={{fontStyle:'italic',color:'var(--accent)'}}>love it</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}} className="perk-grid">
            {PERKS.map(p=>(
              <div key={p.t} style={{background:'var(--bg)',borderRadius:20,padding:28,border:'1px solid var(--border2)',textAlign:'center'}}>
                <div style={{fontSize:36,marginBottom:16}}>{p.i}</div>
                <div style={{fontSize:16,fontWeight:600,color:'var(--text)',marginBottom:10}}>{p.t}</div>
                <div style={{fontSize:14,color:'var(--text2)',lineHeight:1.65}}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--bg)',textAlign:'center'}}>
        <div style={{display:'flex',gap:48,justifyContent:'center',flexWrap:'wrap',marginBottom:48}}>
          {[['50K+','Vibes Created'],['12K+','Active Users'],['50+','Cities'],['4.8★','Rating']].map(([n,l])=>(
            <div key={l}><div style={{fontFamily:"'Instrument Serif', serif",fontSize:42,color:'var(--text)'}}>{n}</div><div style={{fontSize:13,color:'var(--text3)'}}>{l}</div></div>
          ))}
        </div>
        <p style={{fontSize:16,color:'var(--text2)',marginBottom:32}}>Join thousands of people already finding their people on Moodiii.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="#" style={{background:'var(--text)',color:'var(--white)',padding:'14px 28px',borderRadius:100,fontSize:15,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>🍎 App Store</a>
          <a href="#" style={{background:'var(--accent)',color:'var(--white)',padding:'14px 28px',borderRadius:100,fontSize:15,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>▶ Google Play</a>
        </div>
      </section>
      <style>{`@media(max-width:768px){.dl-grid{grid-template-columns:1fr!important}.perk-grid{grid-template-columns:1fr 1fr!important}}`}</style>
    </div>
  );
}
