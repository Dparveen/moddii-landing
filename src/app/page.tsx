import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Moodiii — Find Your Vibe, Find Your People' };
const MOODS=[{e:'🍻',l:'Drinks',bg:'#fff8f5'},{e:'🍕',l:'Food',bg:'#fffbf0'},{e:'🎉',l:'Party',bg:'#fdf5ff'},{e:'😎',l:'Chill',bg:'#f0f7ff'},{e:'⚽',l:'Sports',bg:'#f0fff7'},{e:'✈️',l:'Travel',bg:'#f0fbff'},{e:'📚',l:'Study',bg:'#fff0f7'},{e:'🎬',l:'Movie',bg:'#fff0f0'},{e:'🛍️',l:'Shopping',bg:'#f5f0ff'},{e:'🎵',l:'Music',bg:'#f0fffc'}];
const STEPS=[{n:'01',i:'🎭',t:'Pick your Mood',d:'Choose from 10 moods — drinks, food, party, chill, sports, travel and more.'},{n:'02',i:'📍',t:'Set the Scene',d:'Add location, date & time, group size, payment type and preferences.'},{n:'03',i:'🤝',t:'Accept Your Crew',d:'Review requests, accept who fits, decline the rest — total control.'},{n:'04',i:'💬',t:'Chat & Go',d:'Group chat unlocks after acceptance. Coordinate and show up.'}];
const FEATS=[{i:'🔍',t:'Smart Filters',d:'Filter by mood, city, age group, gender, payment type and distance.',tags:['Age filter','City search','Distance','Gender']},{i:'💳',t:'Flexible Payments',d:'Free, split, creator-pays or fixed entry — full transparency before you join.',tags:['Free','Split equally','Creator pays','Fixed entry']},{i:'🛡️',t:'Safe & Verified',d:'Creator controls who joins. Review profiles and ratings before accepting anyone.',tags:['Profile ratings','Creator control','Report system']},{i:'💬',t:'Group Chat',d:'Private group chat unlocks only after acceptance. Coordinate in style.',tags:['Private chat','Media sharing','Location pins']}];
const REVIEWS=[{s:5,t:"Made 6 new friends in a week. Dropped a chill vibe at a cafe in Delhi and now we have a whole squad.",n:'Arjun K.',c:'New Delhi',e:'🧔'},{s:5,t:"Finally an app that gets it. I don't want to scroll profiles — I want people down for the same thing right now.",n:'Priya M.',c:'Mumbai',e:'👩'},{s:5,t:"Used to spend weekends at home. Now I've hiked 3 trails with people I met on Moodiii.",n:'Rahul S.',c:'Chandigarh',e:'🧑'}];
export default function Home() {
  return (
    <div>
      <section style={{minHeight:'calc(100vh - 64px)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'60px 5vw 80px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(255,92,77,0.08) 0%, transparent 65%)',pointerEvents:'none'}}/>
        <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--accent-bg)',border:'1px solid rgba(255,92,77,0.2)',padding:'5px 14px',borderRadius:100,fontSize:11,fontWeight:700,color:'var(--accent)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:28}}>🎉 Now live in 50+ cities across India</div>
        <h1 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(52px, 9vw, 104px)',lineHeight:1.02,color:'var(--text)',maxWidth:860,marginBottom:22,letterSpacing:'-0.02em'}}>Find your <em style={{fontStyle:'italic',color:'var(--accent)'}}>vibe,</em><br/>find your people</h1>
        <p style={{fontSize:'clamp(16px, 2.2vw, 19px)',color:'var(--text2)',maxWidth:520,marginBottom:40,lineHeight:1.7}}>Create mood-based activities, connect with like-minded people nearby, and make every moment count — together.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginBottom:48}}>
          <Link href="/download" style={{background:'var(--text)',color:'var(--white)',padding:'14px 32px',borderRadius:100,fontSize:15,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>📱 Download Free</Link>
          <Link href="/how-it-works" style={{background:'transparent',color:'var(--text)',padding:'14px 32px',borderRadius:100,fontSize:15,fontWeight:500,textDecoration:'none',border:'1.5px solid var(--border)',display:'inline-flex',alignItems:'center',gap:8}}>See how it works →</Link>
        </div>
        <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap',maxWidth:580,marginBottom:48}}>
          {MOODS.slice(0,8).map(m=><div key={m.l} style={{display:'inline-flex',alignItems:'center',gap:6,padding:'8px 16px',borderRadius:100,background:'var(--bg)',border:'1.5px solid var(--border)',fontSize:13,fontWeight:500,color:'var(--text2)'}}>{m.e} {m.l}</div>)}
        </div>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{display:'flex'}}>{['🧔','👩','🧑','👨','👩‍🦱'].map((e,i)=><div key={i} style={{width:34,height:34,borderRadius:'50%',background:'var(--bg2)',border:'2px solid var(--white)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,marginLeft:i===0?0:-10}}>{e}</div>)}</div>
          <span style={{fontSize:13,color:'var(--text2)'}}><strong style={{color:'var(--text)'}}>12,400+</strong> people already vibing</span>
        </div>
      </section>

      <div style={{display:'flex',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',background:'var(--bg)',flexWrap:'wrap'}}>
        {[['50K+','Vibes Created'],['12K+','Active Users'],['50+','Cities'],['4.8★','App Rating']].map(([num,label],i)=>(
          <div key={label} style={{flex:1,minWidth:120,padding:'28px 20px',textAlign:'center',borderRight:i<3?'1px solid var(--border)':'none'}}>
            <div style={{fontFamily:"'Instrument Serif', serif",fontSize:38,color:'var(--text)'}}>{num}</div>
            <div style={{fontSize:13,color:'var(--text3)',marginTop:4}}>{label}</div>
          </div>
        ))}
      </div>

      <section style={{padding:'96px 5vw',background:'var(--bg)'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>Simple & Fast</div>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(32px, 4vw, 52px)',color:'var(--text)',lineHeight:1.1,maxWidth:520,marginBottom:12}}>Four steps to your next <em style={{fontStyle:'italic',color:'var(--accent)'}}>adventure</em></h2>
          <p style={{fontSize:16,color:'var(--text2)',maxWidth:420,marginBottom:52}}>No complicated setup. Drop a vibe, find your crew, and go.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,border:'1px solid var(--border)',borderRadius:20,overflow:'hidden'}} className="steps-grid">
            {STEPS.map((s,i)=>(
              <div key={s.n} style={{background:'var(--white)',padding:'36px 28px',borderRight:i<3?'1px solid var(--border2)':'none'}}>
                <div style={{fontFamily:"'Instrument Serif', serif",fontSize:12,color:'var(--text3)',marginBottom:20}}>{s.n}</div>
                <div style={{fontSize:32,marginBottom:16}}>{s.i}</div>
                <div style={{fontSize:16,fontWeight:600,color:'var(--text)',marginBottom:10}}>{s.t}</div>
                <div style={{fontSize:14,color:'var(--text2)',lineHeight:1.65}}>{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:32,textAlign:'center'}}><Link href="/how-it-works" style={{fontSize:14,color:'var(--accent)',fontWeight:600,textDecoration:'none'}}>Full guide →</Link></div>
        </div>
      </section>

      <section style={{padding:'96px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>Everything you need</div>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(32px, 4vw, 52px)',color:'var(--text)',lineHeight:1.1,maxWidth:520,marginBottom:52}}>Built for <em style={{fontStyle:'italic',color:'var(--accent)'}}>real connections</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}} className="feat-grid">
            {FEATS.map(f=>(
              <div key={f.t} style={{background:'var(--bg)',borderRadius:20,padding:36,border:'1px solid var(--border2)'}}>
                <div style={{width:44,height:44,borderRadius:12,background:'var(--accent-bg)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,marginBottom:20}}>{f.i}</div>
                <div style={{fontSize:18,fontWeight:600,color:'var(--text)',marginBottom:10}}>{f.t}</div>
                <div style={{fontSize:14,color:'var(--text2)',lineHeight:1.65,marginBottom:20}}>{f.d}</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:8}}>{f.tags.map(t=><span key={t} style={{padding:'4px 12px',borderRadius:100,background:'var(--white)',border:'1px solid var(--border)',fontSize:12,color:'var(--text2)'}}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:32,textAlign:'center'}}><Link href="/features" style={{fontSize:14,color:'var(--accent)',fontWeight:600,textDecoration:'none'}}>Explore all features →</Link></div>
        </div>
      </section>

      <section style={{padding:'96px 5vw',background:'var(--bg)'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>10 Moods</div>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(32px, 4vw, 52px)',color:'var(--text)',lineHeight:1.1,marginBottom:48}}>What&apos;s your <em style={{fontStyle:'italic',color:'var(--accent)'}}>mood today?</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:12}} className="moods-grid">
            {MOODS.map(m=>(
              <div key={m.l} style={{aspectRatio:'1',borderRadius:20,background:m.bg,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8,border:'1.5px solid var(--border2)'}}>
                <span style={{fontSize:32}}>{m.e}</span>
                <span style={{fontSize:12,fontWeight:600,color:'var(--text2)'}}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'96px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:1160,margin:'0 auto',textAlign:'center'}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>Real Stories</div>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(32px, 4vw, 52px)',color:'var(--text)',lineHeight:1.1,marginBottom:52}}>Real stories from <em style={{fontStyle:'italic',color:'var(--accent)'}}>real vibers</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="review-grid">
            {REVIEWS.map(r=>(
              <div key={r.n} style={{background:'var(--bg)',borderRadius:20,padding:28,border:'1px solid var(--border2)',textAlign:'left'}}>
                <div style={{color:'#f59e0b',fontSize:13,marginBottom:14}}>{'★'.repeat(r.s)}</div>
                <p style={{fontSize:15,color:'var(--text)',lineHeight:1.7,marginBottom:20,fontStyle:'italic'}}>&quot;{r.t}&quot;</p>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <span style={{fontSize:26}}>{r.e}</span>
                  <div><div style={{fontSize:14,fontWeight:600,color:'var(--text)'}}>{r.n}</div><div style={{fontSize:12,color:'var(--text3)'}}>{r.c}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'100px 5vw',background:'var(--text)',textAlign:'center'}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'rgba(255,255,255,0.35)',marginBottom:20}}>Available Now</div>
        <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px, 6vw, 72px)',color:'var(--white)',lineHeight:1.05,marginBottom:16}}>Your next <em style={{fontStyle:'italic',color:'var(--accent2)'}}>vibe</em><br/>is waiting</h2>
        <p style={{fontSize:17,color:'rgba(255,255,255,0.5)',marginBottom:44}}>Download free. Drop a vibe in under 2 minutes.</p>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          {[{icon:'🍎',small:'Download on the',big:'App Store'},{icon:'▶',small:'Get it on',big:'Google Play'}].map(b=>(
            <Link key={b.big} href="/download" style={{display:'inline-flex',alignItems:'center',gap:14,background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.15)',padding:'14px 28px',borderRadius:14,color:'var(--white)',textDecoration:'none'}}>
              <span style={{fontSize:28}}>{b.icon}</span>
              <div style={{textAlign:'left'}}><div style={{fontSize:11,opacity:0.55}}>{b.small}</div><div style={{fontSize:17,fontWeight:600}}>{b.big}</div></div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        @media(max-width:768px){.steps-grid{grid-template-columns:1fr 1fr!important}.feat-grid{grid-template-columns:1fr!important}.review-grid{grid-template-columns:1fr!important}.moods-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:480px){.steps-grid{grid-template-columns:1fr!important}.moods-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </div>
  );
}
