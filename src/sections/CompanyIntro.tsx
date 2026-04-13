import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CompanyIntro() {
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Construire l'avenir
              <br />
              <span className="text-[#F5B800]">ensemble</span>
            </h2>
            <p className="reveal text-xl text-[#666666] mb-6" style={{ transitionDelay: '0.1s' }}>
              Le progrès par tradition
            </p>
            <div className="reveal space-y-4 text-[#333333] leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              <p>
                VOTRE ENTREPRISE compte parmi les principaux transformateurs d'aciers inoxydables. 
                Nos compétences clés se situent dans le domaine du formage, du soudage et de la 
                technologie des matériaux.
              </p>
              <p>
                Grâce à des produits techniquement sophistiqués, nous répondons aux normes de qualité 
                les plus élevées, ce qui nous a permis de passer du statut d'entreprise artisanale 
                à celui d'entreprise active au niveau international.
              </p>
              <p className="font-medium">
                Nous sommes là pour vous - dans le monde entier !
              </p>
            </div>
            <div className="reveal mt-8" style={{ transitionDelay: '0.3s' }}>
              <button onClick={scrollToContact} className="btn-primary group">
                Contact
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="reveal grid grid-cols-2 gap-6" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#F5B800] mb-2">249</div>
              <div className="text-sm text-[#666666]">années d'expérience</div>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#F5B800] mb-2">1.000</div>
              <div className="text-sm text-[#666666]">Millions € de CA</div>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg col-span-2">
              <div className="text-4xl md:text-5xl font-bold text-[#F5B800] mb-2">2.500</div>
              <div className="text-sm text-[#666666]">Employés dans le monde</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
