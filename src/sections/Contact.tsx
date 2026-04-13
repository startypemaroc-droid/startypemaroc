import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';

const civilities = [
  { value: '', label: 'Civilité' },
  { value: 'madame', label: 'Madame' },
  { value: 'monsieur', label: 'Monsieur' },
  { value: 'other', label: 'Pas de spécification' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    civility: '',
    name: '',
    email: '',
    phone: '',
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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('Merci pour votre message ! Nous vous contacterons bientôt.');
    setIsSubmitting(false);
    setFormData({
      civility: '',
      name: '',
      email: '',
      phone: '',
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
    <section ref={sectionRef} id="contact" className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Nous sommes là pour vous
            </h2>
            <p className="reveal text-xl text-[#F5B800] font-semibold mb-8" style={{ transitionDelay: '0.1s' }}>
              Votre contact avec nous!
            </p>

            <div className="reveal space-y-6" style={{ transitionDelay: '0.2s' }}>
              <a
                href="tel:+495834500"
                className="flex items-center gap-4 text-[#333333] hover:text-[#F5B800] transition-colors"
              >
                <div className="w-12 h-12 bg-[#F5B800]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#F5B800]" />
                </div>
                <span className="font-medium">+49 5834 50-0</span>
              </a>

              <a
                href="mailto:info@entreprise.de"
                className="flex items-center gap-4 text-[#333333] hover:text-[#F5B800] transition-colors"
              >
                <div className="w-12 h-12 bg-[#F5B800]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#F5B800]" />
                </div>
                <span className="font-medium">info@entreprise.de</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#333333] hover:text-[#F5B800] transition-colors"
              >
                <div className="w-12 h-12 bg-[#F5B800]/10 rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-[#F5B800]" />
                </div>
                <span className="font-medium">Vers le profil LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Civility */}
                <div className="sm:col-span-2">
                  <select
                    name="civility"
                    value={formData.civility}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
                  >
                    {civilities.map((civ) => (
                      <option key={civ.value} value={civ.value}>
                        {civ.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom *"
                    required
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#F5B800] focus:ring-2 focus:ring-[#F5B800]/20 transition-all"
                  />
                </div>

                {/* Email */}
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

                {/* Phone */}
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

                {/* Message */}
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

                {/* Privacy Checkbox */}
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
                      <a href="#" className="text-[#F5B800] hover:underline">
                        Données personnelles
                      </a>
                      .
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        Envoyer
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {submitMessage && (
                  <div className="sm:col-span-2 p-4 bg-green-50 text-green-700 rounded-lg text-center">
                    {submitMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
