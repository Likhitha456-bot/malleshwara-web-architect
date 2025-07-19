import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        gallery: "Gallery",
        testimonials: "Testimonials",
        contact: "Contact",
        login: "Admin Login"
      },
      
      // Hero Section
      hero: {
        title: "Professional Construction & Fencing Services",
        subtitle: "Quality materials, expert installation, and reliable service for all your construction needs",
        cta: "Get Quote Now",
        experience: "Years of Excellence"
      },
      
      // About Section
      about: {
        title: "About Malleshwara Constructions",
        subtitle: "Led by Jagadeesh HS",
        description: "We are a trusted construction company specializing in professional fencing, quality materials supply, and comprehensive construction services across Karnataka.",
        owner: "Jagadeesh HS - Founder & Director",
        team: "Experienced Team",
        quality: "Quality Assured"
      },
      
      // Services
      services: {
        title: "Our Services",
        subtitle: "Complete construction solutions for your needs",
        fencing: {
          title: "Fence Installation",
          description: "Professional installation of all types of fencing with quality materials"
        },
        materials: {
          title: "Construction Materials",
          description: "High-quality stones, poles, wires, and construction materials supply"
        },
        labor: {
          title: "On-Demand Labor",
          description: "Skilled construction workers available for your projects"
        },
        catering: {
          title: "Event Catering",
          description: "Catering services for weddings, functions, and special events"
        }
      },
      
      // Contact
      contact: {
        title: "Contact Us",
        subtitle: "Get in touch for your construction needs",
        name: "Full Name",
        phone: "Phone Number",
        location: "Location",
        service: "Service Needed",
        message: "Message",
        submit: "Send Message",
        address: "Our Address",
        call: "Call Us",
        email: "Email Us"
      },
      
      // Testimonials
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Trusted by hundreds of satisfied customers",
        addReview: "Add Your Review",
        name: "Your Name",
        service: "Service Used",
        rating: "Rating",
        comment: "Your Experience",
        submit: "Submit Review"
      },
      
      // Gallery
      gallery: {
        title: "Our Work",
        subtitle: "Showcasing our quality construction projects"
      },
      
      // Common
      common: {
        loading: "Loading...",
        submit: "Submit",
        cancel: "Cancel",
        save: "Save",
        edit: "Edit",
        delete: "Delete",
        view: "View More",
        close: "Close"
      }
    }
  },
  kn: {
    translation: {
      // Navigation
      nav: {
        home: "ಮುಖ್ಯ ಪುಟ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        services: "ಸೇವೆಗಳು",
        gallery: "ಗ್ಯಾಲರಿ",
        testimonials: "ಪ್ರಶಂಸೆಗಳು",
        contact: "ಸಂಪರ್ಕ",
        login: "ಅಡ್ಮಿನ್ ಲಾಗಿನ್"
      },
      
      // Hero Section
      hero: {
        title: "ವೃತ್ತಿಪರ ನಿರ್ಮಾಣ ಮತ್ತು ಬೇಲಿ ಸೇವೆಗಳು",
        subtitle: "ಗುಣಮಟ್ಟದ ವಸ್ತುಗಳು, ಪರಿಣಿತ ಸ್ಥಾಪನೆ ಮತ್ತು ನಿಮ್ಮ ಎಲ್ಲಾ ನಿರ್ಮಾಣ ಅಗತ್ಯಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆ",
        cta: "ಈಗ ಅಂದಾಜು ಪಡೆಯಿರಿ",
        experience: "ವರ್ಷಗಳ ಅನುಭವ"
      },
      
      // About Section
      about: {
        title: "ಮಲ್ಲೇಶ್ವರ ಕನ್‌ಸ್ಟ್ರಕ್ಷನ್ಸ್ ಬಗ್ಗೆ",
        subtitle: "ಜಗದೀಶ್ ಎಚ್.ಎಸ್ ನೇತೃತ್ವದಲ್ಲಿ",
        description: "ನಾವು ಕರ್ನಾಟಕದಾದ್ಯಂತ ವೃತ್ತಿಪರ ಬೇಲಿ, ಗುಣಮಟ್ಟದ ವಸ್ತು ಪೂರೈಕೆ ಮತ್ತು ಸಮಗ್ರ ನಿರ್ಮಾಣ ಸೇವೆಗಳಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿರುವ ವಿಶ್ವಾಸಾರ್ಹ ನಿರ್ಮಾಣ ಕಂಪನಿಯಾಗಿದ್ದೇವೆ.",
        owner: "ಜಗದೀಶ್ ಎಚ್.ಎಸ್ - ಸಂಸ್ಥಾಪಕ ಮತ್ತು ನಿರ್ದೇಶಕ",
        team: "ಅನುಭವಿ ತಂಡ",
        quality: "ಗುಣಮಟ್ಟ ಖಾತರಿ"
      },
      
      // Services
      services: {
        title: "ನಮ್ಮ ಸೇವೆಗಳು",
        subtitle: "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಸಂಪೂರ್ಣ ನಿರ್ಮಾಣ ಪರಿಹಾರಗಳು",
        fencing: {
          title: "ಬೇಲಿ ಸ್ಥಾಪನೆ",
          description: "ಗುಣಮಟ್ಟದ ವಸ್ತುಗಳೊಂದಿಗೆ ಎಲ್ಲಾ ವಿಧದ ಬೇಲಿಗಳ ವೃತ್ತಿಪರ ಸ್ಥಾಪನೆ"
        },
        materials: {
          title: "ನಿರ್ಮಾಣ ವಸ್ತುಗಳು",
          description: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಕಲ್ಲುಗಳು, ಕಂಬಗಳು, ತಂತಿಗಳು ಮತ್ತು ನಿರ್ಮಾಣ ವಸ್ತುಗಳ ಪೂರೈಕೆ"
        },
        labor: {
          title: "ಅಗತ್ಯ ಆಧಾರಿತ ಕಾರ್ಮಿಕರು",
          description: "ನಿಮ್ಮ ಯೋಜನೆಗಳಿಗೆ ಲಭ್ಯವಿರುವ ನುರಿತ ನಿರ್ಮಾಣ ಕಾರ್ಮಿಕರು"
        },
        catering: {
          title: "ಕಾರ್ಯಕ್ರಮ ಪೂರೈಕೆ",
          description: "ಮದುವೆಗಳು, ಕಾರ್ಯಗಳು ಮತ್ತು ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಪೂರೈಕೆ ಸೇವೆಗಳು"
        }
      },
      
      // Contact
      contact: {
        title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
        subtitle: "ನಿಮ್ಮ ನಿರ್ಮಾಣ ಅಗತ್ಯಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ",
        name: "ಪೂರ್ಣ ಹೆಸರು",
        phone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
        location: "ಸ್ಥಳ",
        service: "ಅಗತ್ಯವಿರುವ ಸೇವೆ",
        message: "ಸಂದೇಶ",
        submit: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
        address: "ನಮ್ಮ ವಿಳಾಸ",
        call: "ನಮಗೆ ಕರೆ ಮಾಡಿ",
        email: "ಇಮೇಲ್ ಮಾಡಿ"
      },
      
      // Testimonials
      testimonials: {
        title: "ನಮ್ಮ ಗ್ರಾಹಕರು ಹೇಳುವುದು",
        subtitle: "ನೂರಾರು ತೃಪ್ತ ಗ್ರಾಹಕರಿಂದ ವಿಶ್ವಾಸಾರ್ಹ",
        addReview: "ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ ಸೇರಿಸಿ",
        name: "ನಿಮ್ಮ ಹೆಸರು",
        service: "ಬಳಸಿದ ಸೇವೆ",
        rating: "ರೇಟಿಂಗ್",
        comment: "ನಿಮ್ಮ ಅನುಭವ",
        submit: "ಅಭಿಪ್ರಾಯ ಸಲ್ಲಿಸಿ"
      },
      
      // Gallery
      gallery: {
        title: "ನಮ್ಮ ಕೆಲಸ",
        subtitle: "ನಮ್ಮ ಗುಣಮಟ್ಟದ ನಿರ್ಮಾಣ ಯೋಜನೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತಿದೆ"
      },
      
      // Common
      common: {
        loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        submit: "ಸಲ್ಲಿಸಿ",
        cancel: "ರದ್ದುಮಾಡಿ",
        save: "ಉಳಿಸಿ",
        edit: "ಸಂಪಾದಿಸಿ",
        delete: "ಅಳಿಸಿ",
        view: "ಇನ್ನಷ್ಟು ನೋಡಿ",
        close: "ಮುಚ್ಚಿ"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false, // react already does escaping
    },
  });

export default i18n;