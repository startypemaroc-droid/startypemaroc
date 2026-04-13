import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Award, Users, Globe, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Construction d\'installations',
    description: 'Conception et réalisation d\'installations industrielles clés en main.',
    image: '/cat-installations.jpg',
  },
  {
    title: 'Tubes soudés en acier inoxydable',
    description: 'Fabrication de tubes de haute qualité selon les normes internationales.',
    image: '/cat-tubes.jpg',
  },
  {
    title: 'Cryogénie',
    description: 'Solutions pour applications à très basses températures.',
    image: '/cat-cryogenie.jpg',
  },
];

const stats = [
  { value: '249', label: 'Années d\'expérience', icon: Award },
  { value: '2,500', label: 'Employés dans le monde', icon: Users },
  { value: '50+', label: 'Pays desservis', icon: Globe },
  { value: '1,000M', label: '€ de chiffre d\'affaires', icon: Factory },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ willChange: 'transform' }}>
          <img src="/hero-bg.jpg" alt="Industrial facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container-custom pt-20">
          <div className="max-w-2xl">
            <p className="text-[#F5B800] text-sm md:text-base font-medium tracking-wider uppercase mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Pour une meilleure qualité de vie
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              More Than
              <br />
              <span className="text-[#F5B800]">Pipes</span>
            </h1>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <Link to="/services" className="btn-primary group">
                Nos services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold text-sm rounded transition-all duration-300 hover:bg-white hover:text-[#1A1A1A]">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5B800]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="reveal text-center" style={{ transitionDelay: `${0.1 * index}s` }}>
                <stat.icon className="w-8 h-8 text-[#1A1A1A] mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-1">{stat.value}</div>
                <div className="text-sm text-[#1A1A1A]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              </div>
              <div className="reveal mt-8" style={{ transitionDelay: '0.3s' }}>
                <Link to="/qui-sommes-nous" className="btn-secondary group">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="relative rounded-lg overflow-hidden">
                <img src="/expertise.jpg" alt="Notre expertise" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Nos services
            </h2>
            <p className="reveal text-[#666666] max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Découvrez notre gamme complète de solutions en acier inoxydable pour tous vos projets industriels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="reveal" style={{ transitionDelay: `${0.1 * (index + 1)}s` }}>
                <div className="card-hover bg-white rounded-lg overflow-hidden">
                  <div className="img-zoom aspect-[16/10]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{service.title}</h3>
                    <p className="text-[#666666] text-sm mb-4">{service.description}</p>
                    <Link to="/services" className="flex items-center text-[#F5B800] text-sm font-medium group">
                      En savoir plus
                      <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center" style={{ transitionDelay: '0.4s' }}>
            <Link to="/services" className="btn-primary group">
              Voir tous nos services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sustainability-bg.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="reveal text-white/80 max-w-2xl mx-auto mb-8" style={{ transitionDelay: '0.1s' }}>
            Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment 
            nous pouvons vous accompagner.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact" className="btn-primary group">
              Nous contacter
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
