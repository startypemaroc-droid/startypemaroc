import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  { title: 'Construction d\'installations', image: '/cat-installations.jpg' },
  { title: 'Modules & composants', image: '/cat-modules.jpg' },
  { title: 'Réservoirs, cuves & appareils', image: '/cat-tubes.jpg' },
  { title: 'Tubes soudés en acier inoxydable', image: '/cat-tubes.jpg' },
  { title: 'Services industriels et maintenance', image: '/cat-installations.jpg' },
  { title: 'Composants cryogéniques', image: '/cat-cryogenie.jpg' },
  { title: 'Couplages cryogéniques', image: '/cat-cryogenie.jpg' },
  { title: 'Vannes cryogéniques', image: '/cat-cryogenie.jpg' },
  { title: 'Tubes plaqués', image: '/cat-clad.jpg' },
  { title: 'Tuyauteries & constructions soudées', image: '/cat-installations.jpg' },
  { title: 'Skids & solutions modulaires', image: '/cat-modules.jpg' },
  { title: 'Tuyauterie isolée sous vide', image: '/cat-cryogenie.jpg' },
];

export default function ProductsGrid() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Nos produits
          </h2>
          <p className="reveal text-xl text-[#F5B800] font-semibold mb-4" style={{ transitionDelay: '0.1s' }}>
            Des solutions innovantes en acier inoxydable
          </p>
          <p className="reveal text-[#666666] leading-relaxed" style={{ transitionDelay: '0.2s' }}>
            Le groupe VOTRE ENTREPRISE vous propose un large portefeuille de solutions de produits 
            en acier inoxydable, en matériaux plaqués et en matériaux spéciaux pour répondre à vos 
            exigences spécifiques. Pour vous, nos métallurgistes, nos ingénieurs en soudage et nos 
            collaborateurs de production relèvent sans cesse de nouveaux défis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className="card-hover bg-white rounded-lg overflow-hidden border border-[#E0E0E0]">
                <div className="img-zoom aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#F5B800] transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center" style={{ transitionDelay: '0.5s' }}>
          <button className="btn-secondary group">
            Voir tous les produits
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
