import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Hammer, 
  Users, 
  ChefHat,
  ArrowRight,
  Check,
  Clock,
  Award,
  Phone
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const mainServices = [
    {
      icon: Shield,
      title: t('services.fencing.title'),
      description: t('services.fencing.description'),
      features: [
        'Chain Link Fencing',
        'Barbed Wire Installation',
        'Security Fencing',
        'Agricultural Fencing',
        'Residential Boundary Fencing',
        'Industrial Perimeter Fencing'
      ],
      price: 'Starting from ₹150/ft',
      image: 'bg-gradient-hero'
    },
    {
      icon: Hammer,
      title: t('services.materials.title'),
      description: t('services.materials.description'),
      features: [
        'High-Quality Stones',
        'Steel Poles & Posts',
        'Galvanized Wire',
        'Concrete Materials',
        'Hardware Supplies',
        'Tool Rental'
      ],
      price: 'Competitive Rates',
      image: 'bg-gradient-accent'
    },
    {
      icon: Users,
      title: t('services.labor.title'),
      description: t('services.labor.description'),
      features: [
        'Skilled Construction Workers',
        'Site Supervisors',
        'Equipment Operators',
        'Project Managers',
        'Quality Inspectors',
        'Safety Personnel'
      ],
      price: 'Flexible Hiring',
      image: 'bg-gradient-hero'
    },
    {
      icon: ChefHat,
      title: t('services.catering.title'),
      description: t('services.catering.description'),
      features: [
        'Wedding Catering',
        'Corporate Events',
        'Traditional Meals',
        'Custom Menus',
        'Equipment Rental',
        'Full Service Setup'
      ],
      price: 'Custom Packages',
      image: 'bg-gradient-accent'
    }
  ];

  const additionalServices = [
    'Site Survey & Planning',
    'Material Quality Testing',
    'Project Consultation',
    'Maintenance Services',
    'Emergency Repairs',
    'Custom Solutions'
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All materials and work guaranteed for quality'
    },
    {
      icon: Clock,
      title: 'Timely Completion',
      description: 'Projects delivered on schedule every time'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with proven track record'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover-lift elegant-shadow overflow-hidden">
                <div className={`h-24 ${service.image} flex items-center justify-center`}>
                  <service.icon className="h-12 w-12 text-white" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Pricing</p>
                        <p className="font-semibold text-primary">{service.price}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete support for all your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-lg mb-4">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes us the preferred choice for construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-lg mb-4">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              How we ensure quality delivery from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free site visit and consultation' },
              { step: '02', title: 'Planning', desc: 'Detailed project planning and estimation' },
              { step: '03', title: 'Execution', desc: 'Professional implementation with quality materials' },
              { step: '04', title: 'Delivery', desc: 'Final inspection and project handover' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="opacity-90 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your construction needs. Our team is ready to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;