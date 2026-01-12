"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollingProjects = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".project-slide");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        // Što je veći ovaj broj, to će skrol duže trajati (sporije i tečnije)
        end: "+=5000", 
        scrub: 1, // '1' dodaje mali "smooth" efekat da ne secka
        pin: true,
        anticipatePin: 1,
      },
    });

    // 1. ANIMACIJA: Zumiranje prve slike dok ne postane skroz prozirna
    tl.to(imgRef.current, {
      scale: 5,
      opacity: 0,
      ease: "power2.inOut",
    })
    
    // 2. ANIMACIJA: Horizontalni skrol kroz ostale slike
    // Pomeramo wrapper ulevo za onoliko ekrana koliko imamo dodatnih slika
    // pošto prva slika "nestaje", idemo na (broj slika - 1) * 100vw
    .to(wrapperRef.current, {
      yPercent: -100 * (images.length - 1),
      ease: "none",
    },); // mala pauza nakon zooma radi boljeg osećaja

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-black overflow-hidden relative">
      
      {/* PRVA SLIKA: Fixirana preko svega, ona koja se zumira */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <img 
          ref={imgRef}
          src="/testscroll.png" 
          alt="Main Project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* HORIZONTALNI WRAPPER: Ovde su poređane ostale slike jedna pored druge */}
      <div 
        ref={wrapperRef} 
        className="flex h-screen w-fit relative z-10"
      >
        {/* Prvi 'Slide' je prazan jer se iznad njega zumira glavna slika */}
        <div className="project-slide w-screen h-full flex-shrink-0 bg-black" />

        {/* Ostale slike koje se vide 'full screen' jedna po jedna */}
        <div className="project-slide w-screen h-full flex-shrink-0 relative border-l border-white/10">
          <img 
            src="/testscroll.png" 
            alt="Project 2"
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-10 left-10 text-white text-4xl font-bold uppercase">Project Two</div>
        </div>

        <div className="project-slide w-screen h-full flex-shrink-0 relative border-l border-white/10">
          <img 
            src="/testscroll.png" 
            alt="Project 3"
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-10 left-10 text-white text-4xl font-bold uppercase">Project Three</div>
        </div>

        <div className="project-slide w-screen h-full flex-shrink-0 relative border-l border-white/10">
          <img 
            src="/testscroll.png" 
            alt="Project 4"
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-10 left-10 text-white text-4xl font-bold uppercase">Project Four</div>
        </div>
      </div>

    </section>
  );
};

export default ScrollingProjects;