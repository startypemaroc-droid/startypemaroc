import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sectors = [
  {
    name: 'Chimie',
    description: 'Pour l\'industrie chimique, nous sommes un partenaire solide et innovant. C\'est pourquoi ce secteur mise sur notre expérience dans le traitement de l\'acier inoxydable.',
  },
  {
    name: 'Énergie',
    description: 'La fabrication pour le secteur de l\'énergie exige un maximum de travail de qualité reproductible. Ce secteur mise depuis longtemps sur nos solutions.',
  },
  {
    name: 'Construction de véhicules',
    description: 'Pour répondre aux exigences particulières de l\'industrie dans le domaine de la construction automobile, nous travaillons une large gamme de matériaux haute performance.',
  },
  {
    name: 'Alimentation',
    description: 'Nous fabriquons des tubes en acier inoxydable soudés longitudinalement selon la norme DIN EN 10357 pour une transformation alimentaire hygiénique et sûre.',
  },
  {
    name: 'Pharma',
    description: 'Nos tubes en acier inoxydable soudés longitudinalement selon les normes DIN 11866 et ASME BPE garantissent une manipulation sûre des fluides sensibles et très purs.',
  },
  {
    name: 'Aéronautique et aérospatiale',
    description: 'Nous fournissons des composants de haute précision pour l\'industrie aéronautique et spatiale, répondant aux normes les plus strictes de qualité et de sécurité.',
  },
  {
    name: 'Économie maritime',
    description: 'Nos produits en acier inoxydable résistent aux conditions maritimes les plus extrêmes et sont utilisés dans la construction navale et les plateformes offshore.',
  },
  {
    name: 'Construction de machines et d\'installations',
    description: 'Nous fournissons des composants et des systèmes complets pour la construction de machines et d\'installations industrielles dans tous les secteurs.',
  },
  {
    name: 'Papier et pâte à papier',
    description: 'Notre expertise dans les environnements corrosifs fait de nous un partenaire privilégié pour l\'industrie du papier et de la pâte à papier.',
  },
];

export default function IndustrySectors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Des solutions de produits sur mesure
          </h2>
          <p className="reveal text-xl text-[#F5B800] font-semibold mb-4" style={{ transitionDelay: '0.1s' }}>
            Des solutions pour de nombreux secteurs
          </p>
          <p className="reveal text-[#666666] leading-relaxed" style={{ transitionDelay: '0.2s' }}>
            Chez VOTRE ENTREPRISE, nous fabriquons selon les spécifications particulières de votre secteur, 
            dans toutes les formes techniquement possibles et conformément à toutes les réglementations en vigueur. 
            Chez nous, vous trouverez la bonne solution pour chacun de vos projets.
          </p>
        </div>

        {/* Accordion */}
        <div className="grid md:grid-cols-2 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={sector.name}
              className="reveal"
              style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className="border border-[#E0E0E0] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F5F5F5] transition-colors"
                >
                  <span className="font-semibold text-[#1A1A1A]">{sector.name}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F5B800] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-[#666666] text-sm leading-relaxed">
                    {sector.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
