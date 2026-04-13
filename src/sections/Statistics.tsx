import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 249,
    suffix: '',
    label: 'années d\'expérience',
    description: 'Notre savoir-faire est la somme de notre expérience et de notre travail et engagement. Nous faisons ainsi avancer l\'optimisation de nos processus de manière continue et durable.',
  },
  {
    value: 1000,
    suffix: '',
    label: 'Millions d\'euros de chiffre d\'affaires',
    description: 'Fidèles à la tradition, nous relevons tous les défis et assurons notre avenir avec des solutions de produits innovantes et sur mesure.',
  },
  {
    value: 2500,
    suffix: '',
    label: 'Employés dans le monde',
    description: 'Nos collaborateurs engagés et hautement qualifiés garantissent toujours la meilleure qualité de produit et de livraison ainsi qu\'un suivi optimal de vos projets.',
  },
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
      
      // Ease out cubic
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

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="reveal text-center lg:text-left"
      style={{ transitionDelay: `${0.2 * index}s` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-[#F5B800] mb-2">
        {count.toLocaleString()}
      </div>
      <div className="text-lg font-semibold text-[#1A1A1A] mb-4">
        {stat.label}
      </div>
      <p className="text-[#666666] leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
}

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
