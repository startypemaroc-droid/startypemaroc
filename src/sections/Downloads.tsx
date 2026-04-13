import { useEffect, useRef } from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export default function Downloads() {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center justify-center w-16 h-16 bg-[#F5B800]/10 rounded-full mb-6">
            <FileText className="w-8 h-8 text-[#F5B800]" />
          </div>
          <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Service de téléchargement
          </h2>
          <p className="reveal text-xl text-[#F5B800] font-semibold mb-4" style={{ transitionDelay: '0.1s' }}>
            Des connaissances de première main
          </p>
          <p className="reveal text-[#666666] leading-relaxed mb-8" style={{ transitionDelay: '0.2s' }}>
            Vous avez besoin de spécifications techniques concernant nos produits, d'informations 
            complémentaires sur nos prestations ou sur notre groupe d'entreprises ? Dans la zone 
            de téléchargement, nous avons rassemblé pour vous tous les documents pertinents pour 
            un accès rapide.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <button className="btn-secondary group">
              Vers les téléchargements
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
