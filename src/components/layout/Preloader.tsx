"use client";
import { useEffect, useRef } from "react";

// npm install gsap

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let tl: any;

    import("gsap").then(({ gsap }) => {
      const canvas = document.getElementById("ss-canvas") as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext("2d")!;
      const setSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
      setSize();
      window.addEventListener("resize", setSize);

      const pts = Array.from({ length: 55 }, () => {
        const max = Math.random() * 180 + 80;
        return { x: Math.random() * canvas.width, y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.2, vx: (Math.random() - 0.5) * 0.25,
          vy: -Math.random() * 0.4 - 0.1, a: Math.random() * 0.5 + 0.05, life: Math.random() * max, max };
      });

      const tick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pts.forEach((p) => {
          p.x += p.vx; p.y += p.vy; p.life--;
          if (p.life <= 0 || p.y < -5) { p.x = Math.random() * canvas.width; p.y = canvas.height + 5; p.max = Math.random() * 180 + 80; p.life = p.max; }
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212,175,55,${(p.life / p.max) * p.a})`; ctx.fill();
        });
        raf = requestAnimationFrame(tick);
      };
      tick();

      tl = gsap.timeline({
        onComplete: () => {
          gsap.to(ref.current, { opacity: 0, duration: 0.9, delay: 0.6, ease: "power3.inOut",
            onComplete: () => { if (ref.current) ref.current.style.display = "none"; onComplete?.(); } });
        },
      });

      tl
        .to(["#ss-tl","#ss-tr","#ss-bl","#ss-br"], { opacity:1, duration:1.1, stagger:0.1, ease:"power3.out" }, 0)
        .to("#ss-welcome", { opacity:1, y:0, duration:0.8, ease:"power3.out" }, 0.4)
        .to("#ss-ring", { opacity:1, scale:1, rotation:0, duration:1.1, ease:"back.out(1.5)", transformOrigin:"50% 50%" }, 0.7)
        .to("#ss-b1", { attr:{x2:52,y2:38}, duration:0.32, ease:"power2.inOut", yoyo:true, repeat:5 }, 1.1)
        .to("#ss-b2", { attr:{x2:52,y2:52}, duration:0.32, ease:"power2.inOut", yoyo:true, repeat:5 }, 1.1)
        .to("#ss-dot", { opacity:1, scale:1, duration:0.4, ease:"back.out(3)" }, 1.8)
        .to("#ss-ll",  { opacity:1, width:80, duration:0.7, ease:"power3.inOut" }, 1.8)
        .to("#ss-lr",  { opacity:1, width:80, duration:0.7, ease:"power3.inOut" }, 1.8)
        .fromTo("#ss-brand",
          { opacity:0, clipPath:"inset(0 100% 0 0)", letterSpacing:"0.08em" },
          { opacity:1, clipPath:"inset(0 0% 0 0)", letterSpacing:"0.22em", duration:1.2, ease:"power4.inOut" }, 2.2)
        .to("#ss-brand", { backgroundPosition:"200% 0%", duration:1.4, ease:"power2.inOut" }, 3.1)
        .to("#ss-tag",  { opacity:1, y:0, duration:0.9, ease:"power3.out" }, 2.9)
        .to("#ss-decoLine", { opacity:1, duration:0.5 }, 3.4)
        .to("#ss-shine", { left:"120%", duration:1.1, ease:"power2.inOut" }, 3.5)
        .to("#ss-strip", { opacity:1, y:0, duration:0.7, ease:"power3.out" }, 3.7)
        .fromTo("#ss-strip", { y:10 }, { y:0, duration:0.7, ease:"power3.out" }, 3.7)
        .to("#ss-prog", { opacity:1, duration:0.5 }, 3.9)
        .to("#ss-pct",  { opacity:1, duration:0.5 }, 3.9)
        .to("#ss-fill", { width:"100%", duration:2.3, ease:"power1.inOut",
          onUpdate() {
            const w = Math.round(gsap.getProperty("#ss-fill","width","%") as number);
            const el = document.getElementById("ss-pct"), gl = document.getElementById("ss-glow");
            if (el) el.textContent = w + "%";
            if (gl) gl.style.left = w + "%";
          }}, 4.0)
        .add(() => {
          gsap.to("#ss-ring", { scale:1.04, duration:2, yoyo:true, repeat:-1, ease:"power1.inOut", transformOrigin:"50% 50%" });
          gsap.to("#ss-brand", { filter:"brightness(1.18)", duration:2.5, yoyo:true, repeat:-1, ease:"power1.inOut" });
        }, 4.5);

      return () => { window.removeEventListener("resize", setSize); cancelAnimationFrame(raf); tl?.kill(); };
    });
  }, []);

  const C = "#c9a227";
  const corner = (
    <svg viewBox="0 0 60 60" fill="none" style={{ width:"100%",height:"100%" }}>
      <path d="M2 58 L2 2 L58 2" stroke={C} strokeWidth="0.8" opacity="0.5"/>
      <path d="M2 20 L20 2" stroke={C} strokeWidth="0.5" opacity="0.3"/>
      <circle cx="2" cy="2" r="2" fill={C} opacity="0.6"/>
    </svg>
  );

  return (
    <div ref={ref} aria-hidden style={{
      position:"fixed",inset:0,zIndex:10000,background:"#0c0a06",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden"
    }}>
      <style>{`
        @keyframes progShimmer{0%{background-position:0%}100%{background-position:300%}}
        #ss-enter:hover{color:#d4af37!important;letter-spacing:0.6em!important}
      `}</style>

      <canvas id="ss-canvas" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,
        background:"radial-gradient(ellipse 70% 70% at 50% 50%,transparent 30%,#0c0a06 100%)"}}/>

      {[
        {id:"ss-tl", top:24,left:24},
        {id:"ss-tr", top:24,right:24,transform:"scaleX(-1)"},
        {id:"ss-bl", bottom:24,left:24,transform:"scaleY(-1)"},
        {id:"ss-br", bottom:24,right:24,transform:"scale(-1,-1)"},
      ].map(({id,...s})=>(
        <div key={id} id={id} style={{position:"absolute",width:60,height:60,opacity:0,zIndex:10,...s}}>{corner}</div>
      ))}

      <div style={{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center"}}>

        <p id="ss-welcome" style={{fontSize:10,letterSpacing:"0.55em",color:"#6b5520",
          textTransform:"uppercase",opacity:0,marginBottom:28,transform:"translateY(6px)"}}>
          Welcome to
        </p>

        <div id="ss-ring" style={{width:90,height:90,opacity:0,transform:"scale(0.7) rotate(-45deg)",marginBottom:28}}>
          <svg viewBox="0 0 90 90" fill="none" style={{width:"100%",height:"100%"}}>
            <circle cx="45" cy="45" r="40" stroke={C} strokeWidth="0.6" opacity="0.25"/>
            <circle cx="45" cy="45" r="36" stroke={C} strokeWidth="0.3" opacity="0.15"/>
            <circle cx="30" cy="34" r="6" stroke={C} strokeWidth="1" fill="none"/>
            <circle cx="30" cy="34" r="2.5" fill={C} opacity="0.5"/>
            <circle cx="30" cy="56" r="6" stroke={C} strokeWidth="1" fill="none"/>
            <circle cx="30" cy="56" r="2.5" fill={C} opacity="0.5"/>
            <line id="ss-b1" x1="34" y1="38" x2="68" y2="26" stroke={C} strokeWidth="1.2" strokeLinecap="round"/>
            <line id="ss-b2" x1="34" y1="52" x2="68" y2="64" stroke={C} strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="36" cy="45" r="2" fill={C} opacity="0.7"/>
            <g stroke={C} strokeWidth="0.5" opacity="0.3">
              <line x1="45" y1="5" x2="45" y2="10"/><line x1="45" y1="80" x2="45" y2="85"/>
              <line x1="5" y1="45" x2="10" y2="45"/><line x1="80" y1="45" x2="85" y2="45"/>
            </g>
            <g opacity="0.4">
              <line x1="70" y1="24" x2="70" y2="20" stroke="#f7e47a" strokeWidth="0.8"/>
              <line x1="68" y1="26" x2="64" y2="26" stroke="#f7e47a" strokeWidth="0.8"/>
            </g>
          </svg>
        </div>

        <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
          <div id="ss-ll" style={{width:0,height:"0.5px",background:"linear-gradient(90deg,transparent,#c9a227)",opacity:0}}/>
          <div id="ss-dot" style={{width:3,height:3,background:C,borderRadius:"50%",opacity:0,transform:"scale(0)"}}/>
          <div id="ss-lr" style={{width:0,height:"0.5px",background:"linear-gradient(90deg,#c9a227,transparent)",opacity:0}}/>
        </div>

        <h1 id="ss-brand" style={{
          fontSize:"clamp(30px,5vw,52px)",fontWeight:400,color:"transparent",
          letterSpacing:"0.22em",lineHeight:1,opacity:0,clipPath:"inset(0 100% 0 0)",
          background:"linear-gradient(135deg,#7a5c1a 0%,#d4af37 35%,#f7e47a 55%,#d4af37 70%,#7a5c1a 100%)",
          WebkitBackgroundClip:"text",backgroundClip:"text",backgroundSize:"200% 100%",
        }}>SS LUXE SALON</h1>

        <p id="ss-tag" style={{fontStyle:"italic",fontWeight:300,fontSize:"clamp(11px,1.6vw,14px)",
          color:"#5a4718",letterSpacing:"0.15em",marginTop:16,opacity:0,transform:"translateY(8px)"}}>
          Beauty Begins Here, Confidence Stays Forever
        </p>

        <div id="ss-decoLine" style={{marginTop:28,width:280,height:1,opacity:0,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,
            background:"linear-gradient(90deg,transparent 0%,#3a2e10 20%,#c9a227 50%,#3a2e10 80%,transparent 100%)"}}/>
          <div id="ss-shine" style={{position:"absolute",top:0,left:"-60%",width:"40%",height:"100%",
            background:"linear-gradient(90deg,transparent,rgba(247,228,122,0.9),transparent)"}}/>
        </div>

        <div id="ss-strip" style={{marginTop:26,display:"flex",alignItems:"center",gap:20,opacity:0}}>
          <svg viewBox="0 0 24 24" fill="none" style={{width:20,height:20,filter:"drop-shadow(0 0 4px rgba(212,175,55,0.3))"}}>
            <line x1="3" y1="2" x2="22" y2="20" stroke={C} strokeWidth="1"/>
            <circle cx="4" cy="5" r="3" stroke={C} strokeWidth="1"/>
            <line x1="3" y1="22" x2="22" y2="4" stroke={C} strokeWidth="1"/>
            <circle cx="4" cy="19" r="3" stroke={C} strokeWidth="1"/>
          </svg>
          <div style={{width:55,height:"0.5px",background:"linear-gradient(90deg,rgba(201,162,39,0.4),transparent)"}}/>
          <span style={{fontSize:9,letterSpacing:"0.45em",color:"#5a4718"}}>LUXURY</span>
          <div style={{width:55,height:"0.5px",background:"linear-gradient(90deg,transparent,rgba(201,162,39,0.4))"}}/>
          <svg viewBox="0 0 24 24" fill="none" style={{width:20,height:20,transform:"scaleX(-1)",filter:"drop-shadow(0 0 4px rgba(212,175,55,0.3))"}}>
            <line x1="3" y1="2" x2="22" y2="20" stroke={C} strokeWidth="1"/>
            <circle cx="4" cy="5" r="3" stroke={C} strokeWidth="1"/>
            <line x1="3" y1="22" x2="22" y2="4" stroke={C} strokeWidth="1"/>
            <circle cx="4" cy="19" r="3" stroke={C} strokeWidth="1"/>
          </svg>
        </div>

        <div id="ss-prog" style={{marginTop:34,width:200,height:1,background:"rgba(201,162,39,0.08)",position:"relative",opacity:0}}>
          <div id="ss-fill" style={{height:"100%",width:"0%",
            background:"linear-gradient(90deg,#5a3e0a,#d4af37,#f7e47a,#d4af37,#5a3e0a)",
            backgroundSize:"300% 100%",animation:"progShimmer 2s linear infinite"}}/>
          <div id="ss-glow" style={{position:"absolute",top:-2,left:"0%",width:6,height:5,
            background:"#f7e47a",borderRadius:"50%",
            boxShadow:"0 0 8px 3px rgba(247,228,122,0.7)",transform:"translateX(-50%)"}}/>
        </div>
        <p id="ss-pct" style={{marginTop:12,fontSize:9,letterSpacing:"0.4em",color:"#5a4718",opacity:0}}>0%</p>
      </div>

      <button id="ss-enter" onClick={() => {
        import("gsap").then(({gsap}) => {
          gsap.to(ref.current,{opacity:0,duration:0.9,ease:"power3.inOut",
            onComplete:()=>{if(ref.current)ref.current.style.display="none";onComplete?.()}});
        });
      }} style={{position:"absolute",bottom:28,fontSize:9,letterSpacing:"0.5em",
        color:"#5a4718",background:"none",border:"none",cursor:"pointer",
        opacity:0,zIndex:20,padding:"8px 20px",transition:"color 0.4s,letter-spacing 0.4s"}}>
        ENTER SALON ↗
      </button>
    </div>
  );
}
