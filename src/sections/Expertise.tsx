import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Expertise() {
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
    <section ref={sectionRef} id="expertise" className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/expertise.jpg"
                alt="Notre expertise"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Une compétence qui convainc
            </h2>
            <p className="reveal text-xl text-[#F5B800] font-semibold mb-6" style={{ transitionDelay: '0.1s' }}>
              Découvrez notre expertise
            </p>
            <div className="reveal space-y-4 text-[#333333] leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              <p>
                VOTRE ENTREPRISE offre un vaste savoir-faire en matière de technologies de fabrication 
                précises et de multiples possibilités de traitement ultérieur.
              </p>
              <p>
                À cela s'ajoutent des prestations de service sur mesure, comme l'ingénierie, 
                le montage et la supervision. Avec notre expérience, notre qualité et notre 
                force d'innovation, nous créons des solutions qui convainquent.
              </p>
            </div>
            <div className="reveal mt-8" style={{ transitionDelay: '0.3s' }}>
              <button className="btn-primary group">
                Notre expertise
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
