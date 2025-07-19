import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building,
  Users,
  Award
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    message: '',
    projectType: '',
    budget: ''
  });

  const services = [
    'Fence Installation',
    'Construction Materials',
    'Labor Services',
    'Wedding Catering',
    'Event Catering',
    'Consultation',
    'Other'
  ];

  const projectTypes = [
    'Residential',
    'Commercial',
    'Industrial',
    'Agricultural',
    'Event/Wedding'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000 - ₹5,00,000',
    'Above ₹5,00,000'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In real app, this would submit to database via Supabase
    console.log('Quote request submitted:', formData);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      service: '',
      message: '',
      projectType: '',
      budget: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.call'),
      details: ['+91 98765 43210', '+91 87654 32109'],
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ['contact@malleshwara.com', 'info@malleshwara.com'],
      link: 'mailto:contact@malleshwara.com'
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      details: ['Malleshwara Constructions', 'Karnataka, India'],
      link: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 8:00 AM - 7:00 PM', 'Sun: 10:00 AM - 5:00 PM'],
      link: '#'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Quality Assured',
      description: '15+ years of proven excellence'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals at your service'
    },
    {
      icon: Building,
      title: 'Complete Solutions',
      description: 'End-to-end construction services'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with a detailed quote
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">{t('contact.name')} *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t('contact.phone')} *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">{t('contact.location')} *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          placeholder="City, State"
                          required
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="service">{t('contact.service')} *</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full p-2 border border-input rounded-lg"
                          required
                        >
                          <option value="">Select service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                          className="w-full p-2 border border-input rounded-lg"
                        >
                          <option value="">Select type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-full p-2 border border-input rounded-lg"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">{t('contact.message')} *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Please describe your project requirements, timeline, and any specific details..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      {t('contact.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-gradient-hero rounded-lg">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {info.link !== '#' ? (
                              <a href={info.link} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="elegant-shadow">
                <CardContent className="p-4 space-y-3">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href="tel:+919876543210">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href="mailto:contact@malleshwara.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-1 bg-gradient-accent rounded">
                        <reason.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">{reason.title}</h5>
                        <p className="text-xs text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us Here</h2>
            <p className="text-muted-foreground">
              Visit our office or we can come to your location for consultation
            </p>
          </div>
          
          {/* Google Maps Embed - Replace with actual coordinates */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden elegant-shadow">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Interactive map will be displayed here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For Supabase integration: Add your Mapbox token to display interactive maps
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-muted-foreground">
              We provide our services across Karnataka
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              'Bangalore', 'Mysore', 'Hubli', 'Mangalore', 
              'Dharwad', 'Bellary', 'Gulbarga', 'Bijapur',
              'Shimoga', 'Tumkur', 'Davangere', 'Udupi'
            ].map((city) => (
              <div key={city} className="text-center p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                <p className="font-medium text-sm">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;