import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos services', href: '/services' },
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'Nos Réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' },
  { label: 'Recrutement', href: '/recrutement' },
];

const legalLinks = [
  { label: 'Conditions générales d\'utilisation', href: '#' },
  { label: 'Mentions légales', href: '#' },
  { label: 'Données personnelles', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F5B800] rounded-full flex items-center justify-center">
                <span className="text-[#1A1A1A] font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl">VOTRE ENTREPRISE</span>
            </Link>
            <div className="space-y-3 text-[#999999]">
              <p>
                <span className="text-[#F5B800]">T</span>{' '}
                <a href="tel:+495834500" className="hover:text-white transition-colors">
                  +49 5834 50-0
                </a>
              </p>
              <p>
                <span className="text-[#F5B800]">E</span>{' '}
                <a href="mailto:info@entreprise.de" className="hover:text-white transition-colors">
                  info@entreprise.de
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[#999999] hover:text-[#F5B800] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Réseaux sociaux</h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5B800] hover:text-[#1A1A1A] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#666666] text-sm">
              © {new Date().getFullYear()} VOTRE ENTREPRISE. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#666666] hover:text-[#F5B800] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
