import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Linkedin, Check } from 'lucide-react';

const civilities = [
  { value: '', label: 'Civilité' },
  { value: 'madame', label: 'Madame' },
  { value: 'monsieur', label: 'Monsieur' },
  { value: 'other', label: 'Pas de spécification' },
];

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+49 5834 50-0',
    href: 'tel:+495834500',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@entreprise.de',
    href: 'mailto:info@entreprise.de',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: '123 Rue de l\'Industrie, 12345 Ville, Allemagne',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lun - Ven: 8h00 - 18h00',
    href: '#',
  },
];

const offices = [
  {
    city: 'Siège social - Allemagne',
    address: '123 Rue de l\'Industrie, 12345 Ville',
    phone: '+49 5834 50-0',
  },
  {
    city: 'Bureau France',
    address: '45 Avenue des Champs-Élysées, 75008 Paris',
    phone: '+33 1 23 45 67 89',
  },
  {
    city: 'Bureau Chine',
    address: '88 Century Avenue, Pudong, Shanghai',
    phone: '+86 21 1234 5678',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    civility: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
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
    
    setSubmitMessage('Merci pour votre message ! Nous vous contacterons bientôt.');
    setIsSubmitting(false);
    setFormData({
      civility: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      privacy: false,
    });
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-[#1A1A1A]">
        <div className="absolute inset-0">
          <img src="/sites-germany.jpg" alt="Contact" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nous <span className="text-[#F5B800]">contacter</span>
            </h1>
            <p className="reveal text-xl text-white/80" style={{ transitionDelay: '0.1s' }}>
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                className="reveal bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 bg-[#F5B800]/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#F5B800]" />
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">{info.title}</h3>
                <p className="text-[#666666] text-sm">{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <select
                      name="civility"
                      value={formData.civility}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
                    >
                      {civilities.map((civ) => (
                        <option key={civ.value} value={civ.value}>{civ.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Société"
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
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
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Nom *"
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
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
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Téléphone"
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet *"
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message *"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all resize-none"
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
                        J'accepte que la société traite et utilise les données personnelles 
                        que j'ai fournies pour le traitement de ma demande. Vous trouverez 
                        plus de détails dans la rubrique{' '}
                        <a href="#" className="text-[#F5B800] hover:underline">Données personnelles</a>.
                      </span>
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Envoi en cours...' : <><Send className="mr-2 w-4 h-4" /> Envoyer</>}
                    </button>
                  </div>
                  {submitMessage && (
                    <div className="sm:col-span-2 p-4 bg-green-50 text-green-700 rounded-lg text-center flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" />
                      {submitMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Offices */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                Nos bureaux
              </h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-[#1A1A1A] mb-2">{office.city}</h3>
                    <div className="space-y-1 text-[#666666]">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#F5B800]" />
                        {office.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#F5B800]" />
                        {office.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-[#1A1A1A] mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#F5B800] rounded-lg flex items-center justify-center hover:bg-[#E5A800] transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-[#1A1A1A]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
