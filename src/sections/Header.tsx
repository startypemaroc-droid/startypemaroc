import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Produits', href: '#products' },
  { label: 'Services', href: '#expertise' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Actualités', href: '#news' },
  { label: 'Contact', href: '#contact' },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#F5B800] rounded-full flex items-center justify-center">
              <span className="text-[#1A1A1A] font-bold text-lg">V</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
              VOTRE ENTREPRISE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`nav-link text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-[#333333] hover:text-[#F5B800]'
                    : 'text-white/90 hover:text-[#F5B800]'
                }`}
              >
                {item.label}
              </a>
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
                    : isScrolled
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
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
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
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-[#333333] hover:text-[#F5B800] font-medium py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-[#E0E0E0]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={`px-3 py-1 text-sm font-medium ${
                  currentLang === lang.code
                    ? 'text-[#F5B800]'
                    : 'text-[#666666]'
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
