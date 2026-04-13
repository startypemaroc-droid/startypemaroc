import { useEffect } from 'react';
import { ArrowRight, Check, Wrench, Factory, Snowflake, Layers, Cog, Settings, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    icon: Factory,
    title: 'Construction d\'installations',
    description: 'Conception et réalisation d\'installations industrielles clés en main. Nous accompagnons vos projets de A à Z, de l\'étude à la mise en service.',
    features: ['Étude de faisabilité', 'Conception sur mesure', 'Fabrication', 'Installation', 'Maintenance'],
    image: '/cat-installations.jpg',
  },
  {
    icon: Settings,
    title: 'Modules & composants',
    description: 'Fabrication de modules et composants industriels précis selon vos spécifications techniques les plus exigeantes.',
    features: ['Précision micrométrique', 'Matériaux spéciaux', 'Contrôle qualité', 'Traçabilité complète'],
    image: '/cat-modules.jpg',
  },
  {
    icon: Wrench,
    title: 'Tubes soudés en acier inoxydable',
    description: 'Production de tubes soudés longitudinalement selon les normes internationales les plus strictes.',
    features: ['Normes DIN EN 10357', 'ASME BPE', 'DIN 11866', 'Contrôle non destructif'],
    image: '/cat-tubes.jpg',
  },
  {
    icon: Snowflake,
    title: 'Cryogénie',
    description: 'Solutions complètes pour applications à très basses températures, du transfert au stockage.',
    features: ['Vannes cryogéniques', 'Couplages spéciaux', 'Tuyauterie isolée', 'Systèmes complets'],
    image: '/cat-cryogenie.jpg',
  },
  {
    icon: Layers,
    title: 'Tubes plaqués',
    description: 'Fabrication de tubes bi-métalliques combinant les meilleures propriétés de différents matériaux.',
    features: ['Résistance à la corrosion', 'Économie de matériaux', 'Performance optimale', 'Durabilité accrue'],
    image: '/cat-clad.jpg',
  },
  {
    icon: Cog,
    title: 'Ingénierie',
    description: 'Services d\'ingénierie et de conseil pour optimiser vos projets industriels.',
    features: ['Conception CAO', 'Simulation', 'Optimisation', 'Support technique'],
    image: '/cat-engineering.jpg',
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: 'Documentation technique',
    description: 'Manuels, certificats et documentation complète pour tous nos produits.',
  },
  {
    icon: Settings,
    title: 'Service après-vente',
    description: 'Support technique et maintenance pour garantir la longévité de vos installations.',
  },
  {
    icon: Check,
    title: 'Formation',
    description: 'Programmes de formation pour vos équipes sur nos produits et technologies.',
  },
];

export default function Services() {
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
      {/* Hero */}
      <section className="relative py-32 bg-[#1A1A1A]">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="Services" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos <span className="text-[#F5B800]">services</span>
            </h1>
            <p className="reveal text-xl text-white/80" style={{ transitionDelay: '0.1s' }}>
              Une gamme complète de solutions en acier inoxydable pour répondre à tous vos besoins industriels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`reveal grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-lg overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F5B800]/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#F5B800]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">{service.title}</h2>
                  </div>
                  <p className="text-[#666666] leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#F5B800] flex-shrink-0" />
                        <span className="text-[#333333]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Services complémentaires
            </h2>
            <p className="reveal text-[#666666] max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Nous accompagnons vos projets bien au-delà de la simple fabrication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className="reveal bg-white p-8 rounded-lg"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 bg-[#F5B800]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#F5B800]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{service.title}</h3>
                <p className="text-[#666666]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F5B800]">
        <div className="container-custom text-center">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="reveal text-[#1A1A1A]/80 max-w-2xl mx-auto mb-8" style={{ transitionDelay: '0.1s' }}>
            Nos équipes sont à votre disposition pour étudier vos besoins et vous proposer la solution adaptée.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-semibold text-sm rounded transition-all duration-300 hover:bg-black group">
              Demander un devis
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
