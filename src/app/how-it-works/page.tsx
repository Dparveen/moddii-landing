import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'How It Works' };

const STEPS = [
  { n:'01', i:'🎭', t:'Pick your Mood', d:"Browse 10 mood categories — from spontaneous drinks nights to study sessions, sports meetups to chill hangs. Your mood tells people exactly what kind of energy you're bringing.", tips:['10 mood categories available','Mood sets the tone for your vibe','You can change mood before publishing'] },
  { n:'02', i:'📍', t:'Set the Scene', d:"Add all the details: where you'll be, when, how many people you want, and who's paying. Set age group and gender preferences to attract your ideal crew.", tips:['Pin exact location or area','Set max group size (2–20 people)','Choose payment type: Free, Split, Creator pays, or Fixed entry'] },
  { n:'03', i:'🔍', t:'Discover & Request', d:"Browse vibes happening near you. Filter by mood, city, distance, age group, gender, and payment type. Found something you like? Send a join request with a short note.", tips:['Real-time nearby discovery','Advanced filter system','Send a personal note with your request'] },
  { n:'04', i:'🤝', t:'Accept Your Crew', d:"As the Creator, you review every join request. See the requester's profile, rating, past vibes, and personal note. Accept who fits, decline the rest.", tips:['Full control over who joins','View requester profiles & ratings','Accept/decline with one tap'] },
  { n:'05', i:'💬', t:'Group Chat Unlocks', d:"Once accepted, everyone in the vibe gets access to a private group chat. Coordinate meeting points, share updates, build hype before the event.", tips:['Private group chat for accepted members only','Share location pins and media','Chat persists for 90 days after the vibe'] },
  { n:'06', i:'⭐', t:'Rate & Repeat', d:"After the vibe, rate each other. Good ratings build your Moodiii reputation, unlocking better vibes and faster acceptance.", tips:['Mutual rating system','Build your Moodiii reputation','Higher ratings = more acceptances'] },
];

const FAQS = [
  { q:'Is Moodiii free to use?', a:'Yes! Creating an account, browsing vibes, and joining free vibes costs nothing. Payment only applies to vibes where the Creator has set a contribution or entry fee.' },
  { q:'Can I create multiple vibes at once?', a:'Yes, you can have up to 3 active vibes at the same time.' },
  { q:'What happens if the Creator cancels?', a:'If a Creator cancels with less than 6 hours notice, their rating takes a hit. Any payment collected is automatically refunded. See our Refund Policy for details.' },
  { q:'How does the rating system work?', a:'After each vibe, participants rate each other from 1–5 stars. Your average rating is visible on your profile and helps Creators decide whether to accept you.' },
  { q:'Is my location always visible to others?', a:'No. Only the approximate area (neighbourhood/city) of your vibes is shown publicly. Your precise location is never shared without your action.' },
  { q:'Can I join vibes in other cities?', a:'Yes! You can browse and join vibes in any city on Moodiii, not just your current location.' },
];

export default function HowItWorksPage() {
  return (
    <div>
      <section style={{padding:'80px 5vw 64px',background:'var(--bg)',borderBottom:'1px solid var(--border)'}}>
        <div style={{maxWidth:720,margin:'0 auto',textAlign:'center'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--accent-bg)',border:'1px solid rgba(255,92,77,0.2)',padding:'5px 14px',borderRadius:100,fontSize:11,fontWeight:700,color:'var(--accent)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:24}}>Simple & Fast</div>
          <h1 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px, 6vw, 72px)',lineHeight:1.05,color:'var(--text)',marginBottom:20}}>How <em style={{fontStyle:'italic',color:'var(--accent)'}}>Moodiii</em> works</h1>
          <p style={{fontSize:18,color:'var(--text2)',lineHeight:1.65}}>From mood to meetup in minutes. Everything you need to know about creating and joining vibes.</p>
        </div>
      </section>

      <section style={{padding:'96px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:960,margin:'0 auto'}}>
          {STEPS.map((s,i)=>(
            <div key={s.n} style={{display:'grid',gridTemplateColumns:'72px 1fr',gap:40,paddingBottom:i<STEPS.length-1?64:0,borderBottom:i<STEPS.length-1?'1px solid var(--border2)':'none',marginBottom:i<STEPS.length-1?64:0}} className="step-row">
              <div style={{textAlign:'center'}}>
                <div style={{width:52,height:52,borderRadius:14,background:'var(--accent-bg)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,margin:'0 auto 8px'}}>{s.i}</div>
                <div style={{fontFamily:"'Instrument Serif', serif",fontSize:11,color:'var(--text3)'}}>{s.n}</div>
              </div>
              <div>
                <h3 style={{fontFamily:"'Instrument Serif', serif",fontSize:28,color:'var(--text)',marginBottom:14}}>{s.t}</h3>
                <p style={{fontSize:16,color:'var(--text2)',lineHeight:1.7,marginBottom:24}}>{s.d}</p>
                <div style={{display:'flex',flexDirection:'column',gap:10}}>
                  {s.tips.map(tip=>(
                    <div key={tip} style={{display:'flex',alignItems:'center',gap:10,fontSize:14,color:'var(--text2)'}}>
                      <div style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)',flexShrink:0}}/>
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'96px 5vw',background:'var(--bg)'}}>
        <div style={{maxWidth:720,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>Got Questions?</div>
          <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(28px, 3.5vw, 44px)',color:'var(--text)',marginBottom:48}}>Frequently asked <em style={{fontStyle:'italic',color:'var(--accent)'}}>questions</em></h2>
          {FAQS.map((f,i)=>(
            <div key={i} style={{padding:'24px 0',borderBottom:'1px solid var(--border2)'}}>
              <div style={{fontSize:16,fontWeight:600,color:'var(--text)',marginBottom:10}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--text2)',lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--white)',textAlign:'center'}}>
        <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(32px, 4vw, 52px)',color:'var(--text)',marginBottom:16}}>Ready to drop your first <em style={{fontStyle:'italic',color:'var(--accent)'}}>vibe?</em></h2>
        <p style={{fontSize:16,color:'var(--text2)',marginBottom:32}}>Download Moodiii and meet your people today.</p>
        <Link href="/download" style={{background:'var(--text)',color:'var(--white)',padding:'14px 32px',borderRadius:100,fontSize:15,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>📱 Get the App — Free</Link>
      </section>
      <style>{`@media(max-width:600px){.step-row{grid-template-columns:1fr!important;gap:16px!important}}`}</style>
    </div>
  );
}
