import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Industrial facility"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p
            className="text-[#F5B800] text-sm md:text-base font-medium tracking-wider uppercase mb-4 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Pour une meilleure qualité de vie
          </p>

          {/* Main Title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            More Than
            <br />
            <span className="text-[#F5B800]">Pipes</span>
          </h1>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: '0.7s' }}
          >
            <button
              onClick={() => scrollToSection('#products')}
              className="btn-primary group"
            >
              Nos produits
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#sustainability')}
              className="px-8 py-4 border-2 border-white text-white font-semibold text-sm rounded transition-all duration-300 hover:bg-white hover:text-[#1A1A1A]"
            >
              Durabilité
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
