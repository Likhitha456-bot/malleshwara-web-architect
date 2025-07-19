import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Hammer, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.gallery'), href: '/gallery' },
  ];

  const services = [
    t('services.fencing.title'),
    t('services.materials.title'),
    t('services.labor.title'),
    t('services.catering.title'),
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Malleshwara</h3>
                <p className="text-sm text-gray-300">Constructions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('services.title')}</h4>
            <nav className="flex flex-col space-y-2">
              {services.map((service) => (
                <span key={service} className="text-gray-300 text-sm">
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href="mailto:contact@malleshwaraconstructions.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@malleshwara.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Karnataka, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-accent" />
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Malleshwara Constructions. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <span className="text-gray-400 text-sm">
              Built with ❤️ for quality construction
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;