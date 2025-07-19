import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'kn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-white hover:bg-white/10"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {i18n.language === 'en' ? 'ಕನ್ನಡ' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;