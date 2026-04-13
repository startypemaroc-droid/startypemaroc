import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos services', href: '/services' },
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'Nos Réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' },
  { label: 'Recrutement', href: '/recrutement' },
];

const languages = [
  { code: 'FR', label: 'Français' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F5B800] rounded-full flex items-center justify-center">
              <span className="text-[#1A1A1A] font-bold text-lg">V</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-[#1A1A1A]' : 'text-white'
            }`}>
              VOTRE ENTREPRISE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#F5B800]'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-[#333333] hover:text-[#F5B800]'
                    : 'text-white/90 hover:text-[#F5B800]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  currentLang === lang.code
                    ? 'text-[#F5B800]'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-[#666666] hover:text-[#1A1A1A]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-[#333333] hover:text-[#F5B800] font-medium py-2 transition-colors ${
                isActive(item.href) ? 'text-[#F5B800]' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-[#E0E0E0]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={`px-3 py-1 text-sm font-medium ${
                  currentLang === lang.code ? 'text-[#F5B800]' : 'text-[#666666]'
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
