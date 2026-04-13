import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const sites = [
  {
    name: 'VOTRE ENTREPRISE dans le monde',
    location: 'International',
    description: 'Outre les entreprises du groupe actives au niveau international, notre structure de distribution repose sur les activités de nos partenaires dans différentes régions du monde.',
    image: '/sites-world.jpg',
  },
  {
    name: 'Burgkirchen (GER)',
    location: 'Allemagne',
    description: 'Notre site à Burgkirchen fait partie des PME leaders mondiales dans le domaine de la technologie du vide. Son activité principale se situe dans le domaine des systèmes de transfert isolés.',
    image: '/sites-germany.jpg',
  },
  {
    name: 'Chine',
    location: 'Asie',
    description: 'Notre site de Tieling, dans le nord de la Chine, offre des possibilités de fabrication pour la construction de réservoirs ainsi que pour la fabrication de systèmes de tuyauterie.',
    image: '/sites-china.jpg',
  },
];

export default function Sites() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sites.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sites.length) % sites.length);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Nos sites
            </h2>
            <p className="reveal text-xl text-[#F5B800] font-semibold mb-2" style={{ transitionDelay: '0.1s' }}>
              Actif pour vous dans le monde entier !
            </p>
            <p className="reveal text-[#666666]" style={{ transitionDelay: '0.2s' }}>
              Le groupe, qui emploie environ 2.500 personnes, est présent sur les marchés en 
              croissance du monde entier au sein d'un réseau mondial performant.
            </p>
          </div>
          <div className="reveal flex gap-2 mt-6 md:mt-0" style={{ transitionDelay: '0.3s' }}>
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sites.map((site, index) => (
              <div key={site.name} className="w-full flex-shrink-0">
                <div className="reveal grid lg:grid-cols-2 gap-8 items-center" style={{ transitionDelay: `${0.1 * index}s` }}>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#F5B800] mb-3">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">{site.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                      {site.name}
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {site.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {sites.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#F5B800]' : 'bg-[#E0E0E0]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
