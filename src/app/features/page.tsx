import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Features' };

const SECS = [
  { label:'Discovery', title:"Find exactly what you're looking for", bg:'var(--white)', cardBg:'var(--bg)',
    feats:[{i:'📍',t:'Nearby Vibe Discovery',d:"See all active vibes around you sorted by distance, mood, or popularity. Real-time updates as new vibes are created."},{i:'🔍',t:'Advanced Filters',d:"Filter by mood, city, max distance, age range, gender preference, payment type, and time. Every combination possible."},{i:'🔥',t:'Trending Vibes',d:"Discover the most popular vibes in your city right now. See what's buzzing and jump in before spots fill up."},{i:'👑',t:'Top Creators',d:"Follow high-rated vibe creators in your city. Get notified when they drop new vibes."}]},
  { label:'Vibes', title:'Create vibes that attract the right people', bg:'var(--bg)', cardBg:'var(--white)',
    feats:[{i:'🎭',t:'10 Mood Categories',d:"Drinks, Food, Party, Chill, Sports, Travel, Study, Movie, Shopping, Music. Every plan covered."},{i:'⚙️',t:'Full Customization',d:"Set title, description, tags, location, date/time, group size, gender preference, age range, and payment type."},{i:'✅',t:'Creator Control',d:"You decide who joins. Review every request with profile, rating, past vibes, and personal message."},{i:'🕐',t:'Scheduled & Spontaneous',d:"Plan a week ahead or post a \"who's free tonight?\" vibe. Both modes work beautifully."}]},
  { label:'Payments', title:'Transparent, flexible money handling', bg:'var(--white)', cardBg:'var(--bg)',
    feats:[{i:'🆓',t:'Free Vibes',d:"No payment required. Just show up and enjoy — perfect for casual meetups, study sessions, or neighbourhood hangouts."},{i:'➗',t:'Split Equally',d:"Costs divided evenly among all participants. Calculated automatically based on confirmed headcount."},{i:'🎁',t:'Creator Pays',d:"Creator foots the bill. Great for hosting birthday outings, team events, or being a generous organiser."},{i:'🎟️',t:'Fixed Entry Fee',d:"Set a fixed contribution per person. Collected upfront, released after the vibe happens."}]},
  { label:'Safety & Trust', title:'A platform built on trust', bg:'var(--bg)', cardBg:'var(--white)',
    feats:[{i:'⭐',t:'Two-Way Ratings',d:"After every vibe, participants rate each other. Builds accountability and helps creators make better decisions."},{i:'🛡️',t:'Profile Verification',d:"Phone number verification required. Optional ID verification for a verified badge that boosts acceptance rates."},{i:'🚩',t:'Report & Block',d:"Instant report and block. Our Trust & Safety team reviews all reports within 24 hours."},{i:'🔒',t:'Private by Default',d:"Your precise location, phone number, and personal details are never shared without your action."}]},
  { label:'Communication', title:'Stay connected with your crew', bg:'var(--white)', cardBg:'var(--bg)',
    feats:[{i:'💬',t:'Group Chat',d:"Private group chat unlocks for all accepted vibe members. Text, emoji, and location sharing built in."},{i:'🔔',t:'Smart Notifications',d:"Get notified of join requests, acceptances, chat messages, and vibe reminders — never miss a beat."},{i:'📲',t:'Direct Messaging',d:"Message a vibe creator directly with questions before requesting to join."},{i:'📅',t:'Calendar Integration',d:"Add accepted vibes to your phone calendar automatically. Never double-book again."}]},
];

export default function FeaturesPage() {
  return (
    <div>
      <section style={{padding:'80px 5vw 64px',background:'var(--bg)',borderBottom:'1px solid var(--border)',textAlign:'center'}}>
        <div style={{maxWidth:640,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--accent-bg)',border:'1px solid rgba(255,92,77,0.2)',padding:'5px 14px',borderRadius:100,fontSize:11,fontWeight:700,color:'var(--accent)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:24}}>Everything you need</div>
          <h1 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px, 6vw, 72px)',lineHeight:1.05,color:'var(--text)',marginBottom:20}}>All the features,<br/><em style={{fontStyle:'italic',color:'var(--accent)'}}>none of the noise</em></h1>
          <p style={{fontSize:18,color:'var(--text2)',lineHeight:1.65}}>Every feature in Moodiii is built to make real-world connections easier, safer, and more enjoyable.</p>
        </div>
      </section>

      {SECS.map(sec=>(
        <section key={sec.label} style={{padding:'80px 5vw',background:sec.bg}}>
          <div style={{maxWidth:1160,margin:'0 auto'}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'var(--accent)',marginBottom:14}}>{sec.label}</div>
            <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(28px, 3vw, 42px)',color:'var(--text)',maxWidth:540,lineHeight:1.1,marginBottom:48}}>{sec.title}</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}} className="feat-grid">
              {sec.feats.map(f=>(
                <div key={f.t} style={{background:sec.cardBg,borderRadius:20,padding:28,border:'1px solid var(--border2)'}}>
                  <div style={{fontSize:28,marginBottom:16}}>{f.i}</div>
                  <div style={{fontSize:16,fontWeight:600,color:'var(--text)',marginBottom:10}}>{f.t}</div>
                  <div style={{fontSize:14,color:'var(--text2)',lineHeight:1.65}}>{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section style={{padding:'80px 5vw',background:'var(--text)',textAlign:'center'}}>
        <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(32px, 4vw, 56px)',color:'var(--white)',marginBottom:16,lineHeight:1.1}}>Every feature, <em style={{fontStyle:'italic',color:'var(--accent2)'}}>free to use</em></h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.55)',marginBottom:32}}>No subscriptions. No premium tiers. Just download and start vibing.</p>
        <Link href="/download" style={{background:'var(--accent)',color:'var(--white)',padding:'14px 32px',borderRadius:100,fontSize:15,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>📱 Download for Free</Link>
      </section>
      <style>{`@media(max-width:900px){.feat-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:500px){.feat-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
