import { useEffect, useState } from 'react';
import { ArrowRight, Users, Heart, GraduationCap, Briefcase, MapPin, Clock, Check, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Heart,
    title: 'Santé & Bien-être',
    description: 'Assurance santé complète, programme de bien-être et sport en entreprise.',
  },
  {
    icon: GraduationCap,
    title: 'Formation continue',
    description: 'Budget formation annuel et possibilités d\'évolution interne.',
  },
  {
    icon: Briefcase,
    title: 'Équilibre vie pro/perso',
    description: 'Horaires flexibles et possibilité de télétravail selon les postes.',
  },
  {
    icon: Users,
    title: 'Culture d\'entreprise',
    description: 'Ambiance familiale, événements d\'équipe et engagement communautaire.',
  },
];

const jobs = [
  {
    id: 1,
    title: 'Ingénieur(e) en soudage',
    location: 'Allemagne',
    type: 'CDI',
    department: 'Production',
    description: 'Vous serez responsable de l\'optimisation des processus de soudage et du contrôle qualité.',
  },
  {
    id: 2,
    title: 'Technicien(ne) de maintenance',
    location: 'France',
    type: 'CDI',
    department: 'Maintenance',
    description: 'Maintenance préventive et curative de nos équipements industriels.',
  },
  {
    id: 3,
    title: 'Commercial(e) export',
    location: 'Allemagne',
    type: 'CDI',
    department: 'Ventes',
    description: 'Développement du portefeuille clients à l\'international.',
  },
  {
    id: 4,
    title: 'Apprenti(e) métallurgie',
    location: 'Chine',
    type: 'Apprentissage',
    department: 'Formation',
    description: 'Formation en alternance dans le domaine de la métallurgie et de l\'acier inoxydable.',
  },
];

const civilities = [
  { value: '', label: 'Civilité' },
  { value: 'madame', label: 'Madame' },
  { value: 'monsieur', label: 'Monsieur' },
  { value: 'other', label: 'Pas de spécification' },
];

export default function Recrutement() {
  const [, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    civility: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobId: '',
    message: '',
    cv: null as File | null,
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('Votre candidature a bien été envoyée ! Nous vous contacterons bientôt.');
    setIsSubmitting(false);
    setFormData({
      civility: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobId: '',
      message: '',
      cv: null,
      privacy: false,
    });
    setSelectedJob(null);
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleJobSelect = (jobId: number) => {
    setSelectedJob(jobId);
    setFormData(prev => ({ ...prev, jobId: jobId.toString() }));
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-[#1A1A1A]">
        <div className="absolute inset-0">
          <img src="/news-lean.jpg" alt="Recrutement" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rejoignez <span className="text-[#F5B800]">nous</span>
            </h1>
            <p className="reveal text-xl text-white/80" style={{ transitionDelay: '0.1s' }}>
              Faites partie d'une entreprise familiale avec plus de 240 ans d'histoire 
              et contribuez à façonner l'avenir de l'industrie.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="reveal text-[#666666] max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Découvrez les avantages de faire partie de notre équipe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="reveal text-center p-6 bg-[#F5F5F5] rounded-lg"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-16 h-16 bg-[#F5B800]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#F5B800]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                <p className="text-[#666666] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offers */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Nos offres d'emploi
            </h2>
            <p className="reveal text-[#666666] max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Retrouvez nos postes ouverts et postulez directement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="reveal bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#F5B800]/10 text-[#F5B800] text-xs font-semibold rounded-full mb-2">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-semibold text-[#1A1A1A]">{job.title}</h3>
                  </div>
                </div>
                <p className="text-[#666666] mb-4">{job.description}</p>
                <div className="flex items-center gap-4 text-sm text-[#999999] mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleJobSelect(job.id)}
                  className="w-full py-3 border-2 border-[#F5B800] text-[#F5B800] font-semibold rounded-lg hover:bg-[#F5B800] hover:text-[#1A1A1A] transition-colors"
                >
                  Postuler
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Candidature spontanée
              </h2>
              <p className="reveal text-[#666666]" style={{ transitionDelay: '0.1s' }}>
                Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous votre candidature spontanée.
              </p>
            </div>

            <div className="reveal bg-[#F5F5F5] p-8 rounded-lg" style={{ transitionDelay: '0.2s' }}>
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <select
                      name="civility"
                      value={formData.civility}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all bg-white"
                    >
                      {civilities.map((civ) => (
                        <option key={civ.value} value={civ.value}>{civ.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Nom *"
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Prénom *"
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Téléphone"
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message / Lettre de motivation *"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all resize-none bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      CV (PDF, max 5Mo)
                    </label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => setFormData(prev => ({ ...prev, cv: e.target.files?.[0] || null }))}
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#F5B800] file:text-[#1A1A1A] file:font-semibold"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-[#F5B800] border-[#E0E0E0] rounded focus:ring-[#F5B800]"
                      />
                      <span className="text-sm text-[#666666]">
                        J'accepte que mes données personnelles soient traitées dans le cadre de ma candidature. 
                        Voir la <a href="#" className="text-[#F5B800] hover:underline">politique de confidentialité</a>.
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : <><Send className="mr-2 w-4 h-4" /> Envoyer ma candidature</>}
                </button>
                {submitMessage && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-center flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F5B800]">
        <div className="container-custom text-center">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Des questions ?
          </h2>
          <p className="reveal text-[#1A1A1A]/80 max-w-2xl mx-auto mb-8" style={{ transitionDelay: '0.1s' }}>
            Notre équipe RH est à votre disposition pour répondre à vos questions.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-semibold text-sm rounded transition-all duration-300 hover:bg-black group">
              Nous contacter
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
