import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: 'Six nouveaux terrains de football pour la région',
    excerpt: 'Boulonner, se défouler, vivre en communauté - c\'est sous cette devise que nous soutenons de nombreuses localités dans la construction ou la rénovation de terrains de football.',
    image: '/news-football.jpg',
    date: '15 Jan 2026',
  },
  {
    title: 'PrePipe : Nouvelle machine à cintrer mobile',
    excerpt: 'La cintreuse mobile de tubes renforce vos projets de tuyauterie avec une précision et une efficacité accrues.',
    image: '/news-machine.jpg',
    date: '10 Jan 2026',
  },
  {
    title: 'Nouveau ponton pour le club d\'aviron',
    excerpt: 'Notre entreprise soutient le club d\'aviron pour l\'achat d\'un nouveau ponton, renforçant notre engagement communautaire.',
    image: '/news-rowing.jpg',
    date: '5 Jan 2026',
  },
  {
    title: 'Augmentation de l\'efficacité grâce au lean management',
    excerpt: 'En forme pour l\'avenir grâce au lean management - nous optimisons continuellement nos processus de production.',
    image: '/news-lean.jpg',
    date: '28 Déc 2025',
  },
];

export default function News() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(newsItems.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(newsItems.length / 2)) % Math.ceil(newsItems.length / 2));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <section ref={sectionRef} id="news" className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Actualités et communiqués de presse
            </h2>
            <p className="reveal text-xl text-[#F5B800] font-semibold mb-2" style={{ transitionDelay: '0.1s' }}>
              Nouvelles de VOTRE ENTREPRISE
            </p>
            <p className="reveal text-[#666666]" style={{ transitionDelay: '0.2s' }}>
              Découvrez ce qui fait bouger le groupe. Dans notre espace actualités et presse, 
              nous vous informons sur les innovations technologiques, les projets passionnants 
              et les développements actuels de l'entreprise.
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
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(newsItems.length / 2) }).map((_, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-6">
                {newsItems.slice(groupIndex * 2, groupIndex * 2 + 2).map((item, index) => (
                  <div
                    key={item.title}
                    className="reveal group cursor-pointer"
                    style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="card-hover bg-white rounded-lg overflow-hidden">
                      <div className="img-zoom aspect-[16/9]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-[#666666] mb-2">{item.date}</div>
                        <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#F5B800] transition-colors mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[#666666] text-sm line-clamp-2 mb-4">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center text-[#F5B800] text-sm font-medium">
                          Lire la suite
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(newsItems.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#F5B800]' : 'bg-[#E0E0E0]'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center" style={{ transitionDelay: '0.4s' }}>
          <button className="btn-secondary group">
            Toutes les actualités
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
