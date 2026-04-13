import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Calendar, Building2, Filter } from 'lucide-react';

const categories = ['Tous', 'Industrie', 'Énergie', 'Chimie', 'Alimentaire', 'Pharma'];

const realisations = [
  {
    id: 1,
    title: 'Installation cryogénique pour LNG',
    client: 'Major Energy Corp',
    location: 'Qatar',
    date: '2024',
    category: 'Énergie',
    description: 'Conception et installation d\'un système complet de tuyauterie cryogénique pour une usine de liquéfaction de gaz naturel.',
    image: '/cat-cryogenie.jpg',
  },
  {
    id: 2,
    title: 'Usine de production pharmaceutique',
    client: 'PharmaGlobal',
    location: 'Allemagne',
    date: '2023',
    category: 'Pharma',
    description: 'Construction d\'une installation complète respectant les normes GMP avec systèmes de tuyauterie hygiénique.',
    image: '/cat-installations.jpg',
  },
  {
    id: 3,
    title: 'Raffinerie - Modernisation',
    client: 'Refinery SA',
    location: 'France',
    date: '2023',
    category: 'Industrie',
    description: 'Remplacement complet des systèmes de tuyauterie en acier inoxydable résistant à la corrosion.',
    image: '/cat-tubes.jpg',
  },
  {
    id: 4,
    title: 'Ligne de production alimentaire',
    client: 'FoodTech Industries',
    location: 'Pays-Bas',
    date: '2024',
    category: 'Alimentaire',
    description: 'Installation de tubes hygiéniques conformes aux normes DIN EN 10357 pour la production laitière.',
    image: '/cat-modules.jpg',
  },
  {
    id: 5,
    title: 'Complexe pétrochimique',
    client: 'ChemPlant Ltd',
    location: 'Singapour',
    date: '2022',
    category: 'Chimie',
    description: 'Fourniture et installation de 50km de tuyauterie pour un nouveau complexe pétrochimique.',
    image: '/cat-clad.jpg',
  },
  {
    id: 6,
    title: 'Centrale solaire thermique',
    client: 'SolarPower Inc',
    location: 'Espagne',
    date: '2024',
    category: 'Énergie',
    description: 'Systèmes de transfert de chaleur en acier inoxydable pour une centrale solaire de 100MW.',
    image: '/cat-engineering.jpg',
  },
];

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredRealisations = activeCategory === 'Tous'
    ? realisations
    : realisations.filter(r => r.category === activeCategory);

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
          <img src="/sites-world.jpg" alt="Nos réalisations" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos <span className="text-[#F5B800]">réalisations</span>
            </h1>
            <p className="reveal text-xl text-white/80" style={{ transitionDelay: '0.1s' }}>
              Découvrez nos projets les plus marquants à travers le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-[#E0E0E0]">
        <div className="container-custom">
          <div className="reveal flex items-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-[#666666]" />
            <span className="text-[#666666]">Filtrer par secteur :</span>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[#F5B800] text-[#1A1A1A]'
                      : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E0E0E0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((project, index) => (
              <div
                key={project.id}
                className="reveal group"
                style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className="card-hover bg-white rounded-lg overflow-hidden h-full">
                  <div className="img-zoom aspect-[16/10] relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#F5B800] text-[#1A1A1A] text-xs font-semibold rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#F5B800] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#666666] text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm text-[#999999]">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#999999] mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Un partenaire de confiance qui a su répondre à nos exigences les plus strictes en termes de qualité et de délais.',
                author: 'Jean Dupont',
                role: 'Directeur Technique, PharmaGlobal',
              },
              {
                quote: 'L\'expertise de VOTRE ENTREPRISE dans la cryogénie est incomparable. Un vrai savoir-faire.',
                author: 'Hans Müller',
                role: 'Chef de projet, Major Energy Corp',
              },
              {
                quote: 'Professionnalisme, réactivité et qualité de fabrication exemplaire. Hautement recommandé.',
                author: 'Maria Garcia',
                role: 'Responsable achats, FoodTech Industries',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="reveal bg-[#F5F5F5] p-8 rounded-lg"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <p className="text-[#333333] italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{testimonial.author}</p>
                  <p className="text-sm text-[#666666]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F5B800]">
        <div className="container-custom text-center">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Vous avez un projet ?
          </h2>
          <p className="reveal text-[#1A1A1A]/80 max-w-2xl mx-auto mb-8" style={{ transitionDelay: '0.1s' }}>
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-semibold text-sm rounded transition-all duration-300 hover:bg-black group"
            >
              Nous contacter
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
