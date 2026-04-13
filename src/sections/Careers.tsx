import { useEffect, useRef } from 'react';
import { ArrowRight, Users } from 'lucide-react';

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="section-padding bg-[#F5B800]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center justify-center w-16 h-16 bg-black/10 rounded-full mb-6">
            <Users className="w-8 h-8 text-[#1A1A1A]" />
          </div>
          <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Carrières
          </h2>
          <p className="reveal text-xl text-[#1A1A1A]/80 font-semibold mb-4" style={{ transitionDelay: '0.1s' }}>
            Postulez dès maintenant!
          </p>
          <p className="reveal text-[#1A1A1A]/70 leading-relaxed mb-8" style={{ transitionDelay: '0.2s' }}>
            VOTRE ENTREPRISE est une entreprise familiale dirigée par la septième génération, 
            qui n'a cessé de croître depuis plus de 245 ans. Nous vous invitons à faire partie 
            de notre communauté et nous nous réjouissons si vous souhaitez apporter vos compétences 
            à notre entreprise.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-semibold text-sm rounded transition-all duration-300 hover:bg-black group">
              Découvrir les carrières
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
