"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

/// Definice služeb
const services = [
  {
    title: "Ukáži, jak s AI mluvit",
    description:
      "Nemám na mysli základy promptování. Mluvím o stylu celé komunikace, kterou vedeme s AI. Není to jen o jednom dobrém promptu, je to o celkovém způsobu, jakým s AI jednáme. Zná kontext? Ví, co je skutečné očekávání? Má všechna data? Jaký styl komunikace má vést? Správné otázky a flow = kýžený výsledek.",
  },
  {
    title: "Automatizace rutinních úkolů",
    description:
      "Jak vlastně tu AI zapojit, když ani nevíme kam? Na základě denní agendy ji využijeme tam, kde se nejvíce hodí – tam, kde šetří čas: odpovědi na e-maily, příprava textů, nebo třeba analýza dat.",
  },
  {
    title: "AI v HR procesech",
    description:
      "Po budování a stabilizace HR oddělení v Rascasone vím, jak nastavit firemní procesy, aby fungovali jak mají – a samozřejmě, jak k tomu využít AI. Tvorba popisů pozic, předvýběr kandidátů, personalizované pohovory nebo komunikace – to všechno jsou pro mě nejen úkoly, ale příležitosti tvořit něco, co má smysl.",
  },
  {
    title: "LinkedIn strategie s AI",
    description:
      "Ukážu vám, jak AI může tvořit příspěvky, zpracovávat data o zákaznících nebo personalizovat sales zprávy. Nejsou to jen nástroje – je to způsob, jak oslovovat lidi s větší autenticitou a budovat vztahy, které mají hloubku. AI je tu, aby nám pomohla dělat věci lépe, ne chladněji.",
  },
  {
    title: "Kreativní práce s AI nástroji",
    description:
      "Ať už jde o obsah na sociální sítě, vizuály v Canvě nebo videa – pomůžu vám najít ty správné nástroje a ukážu vám, jak s nimi pracovat. Nejsou to jen „nástroje“ – jsou to možnosti, jak vyprávět příběhy a spojovat lidi.",
  },
  {
    title: "Školení pro týmy",
    description:
      "Workshop jak na AI. Třeba jak pomocí ElevenLabs vytvořit přirozeně znějící hlas pro sociální sítě, jak pomocí Notion AI zorganizovat projekty, nebo jak pomocí nástrojů jako Whisper převádět mluvená slova do textu. Chci, aby to bylo přirozené a praktické, ne strašidelné. AI je tu, aby nám pomáhala, ne aby nás děsila.",
  },
  {
    title: "Praktická řešení na míru",
    description:
      "Nevíte, jak na AI? Ukážu vám, kde začít. Třeba automatizace e-mailů, analýza dat nebo tvorba obsahu. Projdeme, co vás trápí, a najdeme, jak vám AI ušetří čas a energii. Žádná magie, jen praktické kroky, které si hned vyzkoušíme.",
  },
  {
    title: "Žádný stres – krok za krokem",
    description:
      "AI může na první pohled vypadat složitě, ale není. Ukážu vám, jak ji používat bez zbytečného stresu. Půjdeme krok za krokem, v tempu, které vám bude vyhovovat. Žádné závody, jen klid a jasné kroky.",
  },
  {
    title: "Inspirace pro vás i váš tým",
    description:
      "Během konzultací vám ukážu konkrétní příklady, kde AI opravdu funguje. Ať už jde o zrychlení práce, nebo uvolnění rukou pro kreativitu.",
  },
  {
    title: "Osobní podpora a spolupráce",
    description:
      "Nebudu vás jen učit – budu tu s vámi. Pomůžu vám AI opravdu začlenit do každodenní práce, budu po ruce při implementaci a nastavování procesů.",
  },
];


const ServicesSection: React.FC = () => {
  // Stav pro sledování, které služby jsou otevřené
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  // Toggle otevření/sbalení služby
  const toggleService = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Track whether to enable particles (desktop only)
  const [enableParticles, setEnableParticles] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  // Decide if the user is on a desktop once (or on mount)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // For example, screens >= 768px will have the particle background
      setEnableParticles(window.innerWidth >= 768);
    }
  }, []);

  // Initialize Three.js only if enableParticles = true
  useEffect(() => {
    if (!enableParticles) return; // Skip if mobile/tablet
    if (!bgRef.current) return;

    // Inicializace scény
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      bgRef.current.clientWidth / bgRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(bgRef.current.clientWidth, bgRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    bgRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6, // Modrá barva
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animace
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!bgRef.current) return;
      camera.aspect = bgRef.current.clientWidth / bgRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(bgRef.current.clientWidth, bgRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (bgRef.current) {
        bgRef.current.innerHTML = "";
      }
    };
  }, [enableParticles]);

  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 overflow-hidden">
      {/* Conditionally render the Three.js Particle Background only for desktop */}
      {enableParticles && (
        <div
          ref={bgRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
      )}

      <div className="container mx-auto relative z-10">
        {/* Úvodní část */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
          Co všechno společně zvládneme?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
    Usiluji o to, abych dokázal lidem pomoci najít cestu k AI – jednoduše, srozumitelně a prakticky.
  </p>
  <p className="text-lg text-gray-300 leading-relaxed mt-4">
    Nejsem technik, ale ukážu, <strong>jak AI využít tak, aby usnadnila práci, ušetřila čas a přinesla výsledky.</strong>
  </p>
        </div>

        {/* Služby */}
        <div className="w-full max-w-3xl mx-auto">
          {services.map((service, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleService(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex items-center">
                    {/* Modrá kulatá ikonka s číslem */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-3">
                      {index + 1}
                    </div>
                    <span>{service.title}</span>
                  </div>
                  {/* Indikátor rozbalení */}
                  <span className="text-xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-2 px-4 py-3 text-gray-300 bg-gray-700 rounded-lg">
                    {service.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
