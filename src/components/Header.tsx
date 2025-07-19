import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X, Hammer } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.testimonials'), href: '/testimonials' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border elegant-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">
                Malleshwara
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Constructions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher - Desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            {/* Get Quote Button - Desktop */}
            <div className="hidden md:block">
              <Button variant="hero" size="sm" asChild>
                <Link to="/contact">{t('hero.cta')}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/5 border-l-4 border-primary'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile actions */}
              <div className="px-4 pt-4 border-t border-border space-y-3">
                <LanguageSwitcher />
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    {t('hero.cta')}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;