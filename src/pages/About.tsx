import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Award, 
  Clock, 
  Target, 
  CheckCircle, 
  Users,
  Building,
  Hammer
} from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started with a vision to provide quality construction services'
    },
    {
      year: '2015',
      title: 'Expanded Services',
      description: 'Added catering and event management to our portfolio'
    },
    {
      year: '2020',
      title: '500+ Projects',
      description: 'Completed over 500 successful construction projects'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading construction company in Karnataka'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on the quality of materials and workmanship'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Every project is completed within the promised timeframe'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Our clients satisfaction is our top priority'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience'
    }
  ];

  const teamStats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '300+' },
    { label: 'Team Members', value: '25+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <div className="w-32 h-32 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Jagadeesh HS</h3>
                <p className="text-center text-muted-foreground mb-4">Founder & Director</p>
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                    <Building className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.subtitle')}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in the construction industry, Jagadeesh HS founded Malleshwara Constructions with a vision to provide quality, reliable, and professional construction services across Karnataka.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Under his leadership, our company has grown from a small local business to a trusted name in construction, fencing, and catering services, completing over 500 successful projects.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift elegant-shadow text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-lg mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped our company's growth and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 hover-lift">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Malleshwara?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              What sets us apart in the construction industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="opacity-90">Every project comes with our quality assurance guarantee</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Craftsmanship</h3>
              <p className="opacity-90">Skilled professionals with attention to detail</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Time Delivery</h3>
              <p className="opacity-90">Projects completed within agreed timelines</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;