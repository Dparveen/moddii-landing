'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', subject:'general', message:'' });
  const [sent, setSent] = useState(false);
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div>
      <section style={{padding:'80px 5vw 64px',background:'var(--bg)',borderBottom:'1px solid var(--border)'}}>
        <div style={{maxWidth:620,margin:'0 auto',textAlign:'center'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--accent-bg)',border:'1px solid rgba(255,92,77,0.2)',padding:'5px 14px',borderRadius:100,fontSize:11,fontWeight:700,color:'var(--accent)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:24}}>Get In Touch</div>
          <h1 style={{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(36px, 5vw, 60px)',lineHeight:1.1,color:'var(--text)',marginBottom:16}}>We&apos;d love to <em style={{fontStyle:'italic',color:'var(--accent)'}}>hear from you</em></h1>
          <p style={{fontSize:17,color:'var(--text2)',lineHeight:1.65}}>Whether it&apos;s a question, feedback, partnership idea, or just a vibe — drop us a message.</p>
        </div>
      </section>

      <section style={{padding:'80px 5vw',background:'var(--white)'}}>
        <div style={{maxWidth:1040,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 380px',gap:64,alignItems:'start'}} className="contact-grid">

          {/* Form */}
          {!sent ? (
            <div style={{background:'var(--bg)',borderRadius:24,padding:40,border:'1px solid var(--border2)'}}>
              <h2 style={{fontFamily:"'Instrument Serif', serif",fontSize:26,color:'var(--text)',marginBottom:32}}>Send us a message</h2>
              <div style={{display:'flex',flexDirection:'column',gap:20}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}} className="name-email-grid">
                  <div>
                    <label style={{fontSize:13,fontWeight:600,color:'var(--text)',display:'block',marginBottom:8}}>Your Name</label>
                    <input value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Arjun Kumar" style={{width:'100%',padding:'12px 16px',borderRadius:12,border:'1.5px solid var(--border)',fontSize:14,color:'var(--text)',background:'var(--white)',outline:'none',fontFamily:'inherit'}} />
                  </div>
                  <div>
                    <label style={{fontSize:13,fontWeight:600,color:'var(--text)',display:'block',marginBottom:8}}>Email</label>
                    <input value={form.email} onChange={e=>set('email',e.target.value)} type="email" placeholder="arjun@email.com" style={{width:'100%',padding:'12px 16px',borderRadius:12,border:'1.5px solid var(--border)',fontSize:14,color:'var(--text)',background:'var(--white)',outline:'none',fontFamily:'inherit'}} />
                  </div>
                </div>
                <div>
                  <label style={{fontSize:13,fontWeight:600,color:'var(--text)',display:'block',marginBottom:8}}>Subject</label>
                  <select value={form.subject} onChange={e=>set('subject',e.target.value)} style={{width:'100%',padding:'12px 16px',borderRadius:12,border:'1.5px solid var(--border)',fontSize:14,color:'var(--text)',background:'var(--white)',outline:'none',fontFamily:'inherit'}}>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="safety">Safety / Report Issue</option>
                    <option value="partnership">Partnership / Business</option>
                    <option value="feedback">App Feedback</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                <div>
                  <label style={{fontSize:13,fontWeight:600,color:'var(--text)',display:'block',marginBottom:8}}>Message</label>
                  <textarea value={form.message} onChange={e=>set('message',e.target.value)} rows={5} placeholder="Tell us what's on your mind..." style={{width:'100%',padding:'12px 16px',borderRadius:12,border:'1.5px solid var(--border)',fontSize:14,color:'var(--text)',background:'var(--white)',outline:'none',fontFamily:'inherit',resize:'vertical'}} />
                </div>
                <button onClick={()=>setSent(true)} style={{background:'var(--text)',color:'var(--white)',padding:'14px 28px',borderRadius:100,fontSize:15,fontWeight:600,border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:8,justifyContent:'center'}}>
                  Send Message →
                </button>
              </div>
            </div>
          ) : (
            <div style={{background:'var(--bg)',borderRadius:24,padding:60,border:'1px solid var(--border2)',textAlign:'center'}}>
              <div style={{fontSize:48,marginBottom:20}}>🎉</div>
              <h3 style={{fontFamily:"'Instrument Serif', serif",fontSize:28,color:'var(--text)',marginBottom:12}}>Message sent!</h3>
              <p style={{fontSize:16,color:'var(--text2)',marginBottom:32}}>We&apos;ll get back to you within 1–2 business days.</p>
              <button onClick={()=>setSent(false)} style={{background:'var(--accent)',color:'var(--white)',padding:'12px 24px',borderRadius:100,fontSize:14,fontWeight:600,border:'none',cursor:'pointer'}}>Send another</button>
            </div>
          )}

          {/* Sidebar */}
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            {[
              {i:'📧',t:'Email',d:'hello@moodiii.app',sub:'General inquiries'},
              {i:'🛡️',t:'Safety & Trust',d:'safety@moodiii.app',sub:'Report issues, 24hr response'},
              {i:'💰',t:'Refunds',d:'refunds@moodiii.app',sub:'Payment issues'},
              {i:'🤝',t:'Partnerships',d:'biz@moodiii.app',sub:'Business & collaborations'},
            ].map(c=>(
              <div key={c.t} style={{background:'var(--bg)',borderRadius:16,padding:24,border:'1px solid var(--border2)'}}>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:4}}>
                  <span style={{fontSize:20}}>{c.i}</span>
                  <span style={{fontSize:14,fontWeight:600,color:'var(--text)'}}>{c.t}</span>
                </div>
                <div style={{fontSize:14,color:'var(--accent)',fontWeight:500,marginBottom:2}}>{c.d}</div>
                <div style={{fontSize:12,color:'var(--text3)'}}>{c.sub}</div>
              </div>
            ))}
            <div style={{background:'var(--bg)',borderRadius:16,padding:24,border:'1px solid var(--border2)'}}>
              <div style={{fontSize:14,fontWeight:600,color:'var(--text)',marginBottom:8}}>📍 Office</div>
              <div style={{fontSize:14,color:'var(--text2)',lineHeight:1.65}}>Moodiii Technologies Pvt. Ltd.<br/>Sector 17, Chandigarh<br/>India – 160017</div>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}.name-email-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
