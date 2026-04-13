import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Sustainability() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect) {
          const scrollProgress = -rect.top / (rect.height + window.innerHeight);
          bgRef.current.style.transform = `translateY(${scrollProgress * 50}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sustainability"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/sustainability-bg.jpg"
          alt="Sustainability"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Notre responsabilité
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#F5B800] font-semibold mb-6" style={{ transitionDelay: '0.1s' }}>
            Nous vivons la durabilité
          </p>
          <p className="reveal text-white/90 leading-relaxed mb-8" style={{ transitionDelay: '0.2s' }}>
            La durabilité est un élément central de notre philosophie d'entreprise. 
            Nous sommes conscients de notre responsabilité envers l'environnement et 
            les générations futures et misons systématiquement sur des procédés et 
            des solutions durables dans tous les domaines d'activité.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <button className="btn-primary group">
              En savoir plus !
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
