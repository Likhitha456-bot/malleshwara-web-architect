import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import { 
  Shield, 
  Hammer, 
  Users, 
  ChefHat, 
  ArrowRight, 
  Quote,
  Star,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Shield,
      title: t('services.fencing.title'),
      description: t('services.fencing.description'),
      color: 'bg-gradient-hero'
    },
    {
      icon: Hammer,
      title: t('services.materials.title'),
      description: t('services.materials.description'),
      color: 'bg-gradient-accent'
    },
    {
      icon: Users,
      title: t('services.labor.title'),
      description: t('services.labor.description'),
      color: 'bg-gradient-hero'
    },
    {
      icon: ChefHat,
      title: t('services.catering.title'),
      description: t('services.catering.description'),
      color: 'bg-gradient-accent'
    }
  ];

  const features = [
    'Professional Installation',
    'Quality Materials',
    'Experienced Team',
    'Timely Delivery',
    'Competitive Pricing',
    'Customer Support'
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift elegant-shadow group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose {' '}
                <span className="text-gradient-primary">Malleshwara</span>
                <span className="text-gradient-accent">?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="professional" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    <Quote className="mr-2 h-5 w-5" />
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="construction-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="warm-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Testimonial Preview */}
              <Card className="elegant-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    "Excellent work quality and professional service. Highly recommended for any construction needs."
                  </p>
                  <div className="text-sm font-medium">- Satisfied Customer</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote for your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="minimal" size="xl" asChild>
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
