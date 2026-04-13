import { useEffect, useRef, useState } from 'react';
import { Award, Users, Globe, Factory, TrendingUp, Target, Heart, Shield } from 'lucide-react';

const stats = [
  { value: 249, suffix: '', label: 'Années d\'expérience', icon: Award },
  { value: 2500, suffix: '', label: 'Employés dans le monde', icon: Users },
  { value: 50, suffix: '+', label: 'Pays desservis', icon: Globe },
  { value: 1000, suffix: 'M', label: '€ de chiffre d\'affaires', icon: Factory },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque aspect de notre travail, de la conception à la livraison.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Nous investissons continuellement dans la recherche et le développement pour rester à la pointe.',
  },
  {
    icon: Heart,
    title: 'Engagement',
    description: 'Nous nous engageons pleinement auprès de nos clients et de nos collaborateurs.',
  },
  {
    icon: Shield,
    title: 'Intégrité',
    description: 'Nous agissons avec honnêteté, transparence et respect de nos engagements.',
  },
];

const history = [
  { year: '1777', event: 'Fondation de l\'entreprise comme petite forge familiale' },
  { year: '1850', event: 'Expansion dans la fabrication de tubes en acier' },
  { year: '1920', event: 'Introduction de l\'acier inoxydable dans nos produits' },
  { year: '1960', event: 'Premières exportations internationales' },
  { year: '1990', event: 'Création de filiales à l\'étranger' },
  { year: '2000', event: 'Leader européen dans le domaine de la cryogénie' },
  { year: '2010', event: 'Expansion en Asie avec l\'ouverture de sites en Chine' },
  { year: '2024', event: 'Présence dans plus de 50 pays avec 2 500 employés' },
];

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div className="text-center">
      <stat.icon className="w-8 h-8 text-[#F5B800] mx-auto mb-3" />
      <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm text-[#666666]">{stat.label}</div>
    </div>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-[#1A1A1A]">
        <div className="absolute inset-0">
          <img src="/expertise.jpg" alt="Qui sommes-nous" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Qui <span className="text-[#F5B800]">sommes-nous</span> ?
            </h1>
            <p className="reveal text-xl text-white/80" style={{ transitionDelay: '0.1s' }}>
              Une entreprise familiale avec plus de 240 ans d'histoire, 
              devenue leader international dans la transformation de l'acier inoxydable.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Le progrès par <span className="text-[#F5B800]">tradition</span>
              </h2>
              <div className="reveal space-y-4 text-[#333333] leading-relaxed" style={{ transitionDelay: '0.1s' }}>
                <p>
                  VOTRE ENTREPRISE compte parmi les principaux transformateurs d'aciers inoxydables au monde. 
                  Nos compétences clés se situent dans le domaine du formage, du soudage et de la technologie 
                  des matériaux.
                </p>
                <p>
                  Grâce à des produits techniquement sophistiqués, nous répondons aux normes de qualité 
                  les plus élevées, ce qui nous a permis de passer du statut d'entreprise artisanale 
                  allemande à celui d'entreprise active au niveau international.
                </p>
                <p>
                  Dirigée par la septième génération de la famille fondatrice, notre entreprise 
                  allie tradition et innovation pour créer des solutions qui façonnent l'avenir 
                  de l'industrie.
                </p>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/cat-installations.jpg" alt="Installation" className="rounded-lg w-full aspect-square object-cover" />
                <img src="/cat-tubes.jpg" alt="Tubes" className="rounded-lg w-full aspect-square object-cover mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="section-padding bg-[#F5B800]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Nos valeurs
            </h2>
            <p className="reveal text-[#666666] max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Les principes qui guident nos actions au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="reveal text-center p-6"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-16 h-16 bg-[#F5B800]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#F5B800]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-[#666666]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Notre histoire
            </h2>
            <p className="reveal text-[#666666] max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Plus de 240 ans d'innovation et d'excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#F5B800]/30" />
              {history.map((item, index) => (
                <div
                  key={item.year}
                  className={`reveal relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <span className="text-[#F5B800] font-bold text-xl">{item.year}</span>
                      <p className="text-[#333333] mt-2">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#F5B800] rounded-full -translate-x-1/2" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sustainability-bg.jpg" alt="Durabilité" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-white mb-4">
              Notre responsabilité
            </h2>
            <p className="reveal text-xl text-[#F5B800] font-semibold mb-6" style={{ transitionDelay: '0.1s' }}>
              Nous vivons la durabilité
            </p>
            <p className="reveal text-white/90 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              La durabilité est un élément central de notre philosophie d'entreprise. 
              Nous sommes conscients de notre responsabilité envers l'environnement et 
              les générations futures et misons systématiquement sur des procédés et 
              des solutions durables dans tous les domaines d'activité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
