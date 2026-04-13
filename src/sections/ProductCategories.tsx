import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Construction d\'installations',
    image: '/cat-installations.jpg',
    href: '#products',
  },
  {
    title: 'Modules & composants',
    image: '/cat-modules.jpg',
    href: '#products',
  },
  {
    title: 'Tubes soudés en acier inoxydable',
    image: '/cat-tubes.jpg',
    href: '#products',
  },
  {
    title: 'Cryogénie',
    image: '/cat-cryogenie.jpg',
    href: '#products',
  },
  {
    title: 'Tubes plaqués',
    image: '/cat-clad.jpg',
    href: '#products',
  },
  {
    title: 'Ingénierie',
    image: '/cat-engineering.jpg',
    href: '#products',
  },
];

export default function ProductCategories() {
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Nos solutions produits
          </h2>
          <p className="reveal text-[#666666] max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Découvrez notre gamme complète de solutions en acier inoxydable pour tous vos projets industriels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => scrollToSection(category.href)}
            >
              <div className="card-hover bg-white rounded-lg overflow-hidden">
                <div className="img-zoom aspect-[4/3]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#F5B800] transition-colors">
                    {category.title}
                  </h3>
                  <div className="mt-4 flex items-center text-[#F5B800] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
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
