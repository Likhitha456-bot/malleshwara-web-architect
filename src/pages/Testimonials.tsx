import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Star,
  Quote,
  Plus,
  User,
  Calendar,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import apiService from '@/services/api';

const Testimonials = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: '',
    email: ''
  });
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      const response = await apiService.getTestimonials({ limit: 20 });
      setTestimonials(response.data.testimonials);
    } catch (error) {
      console.error('Failed to load testimonials:', error);
    } finally {
      setLoading(false);
    }
  };


  const services = [
    'Fence Installation',
    'Construction Materials',
    'Labor Services',
    'Wedding Catering',
    'Event Catering',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit to backend API
    apiService.createTestimonial(formData)
      .then(() => {
        toast({
          title: "Thank you for your feedback!",
          description: "Your testimonial has been submitted and will be reviewed before publication.",
        });
        
        // Reset form
        setFormData({
          name: '',
          service: '',
          rating: 5,
          comment: '',
          email: ''
        });
        setShowForm(false);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to submit testimonial. Please try again.",
          variant: "destructive"
        });
        console.error('Testimonial submission error:', error);
      });
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  const stats = [
    { label: 'Total Reviews', value: '150+' },
    { label: 'Average Rating', value: '4.8' },
    { label: 'Satisfied Clients', value: '98%' },
    { label: 'Repeat Customers', value: '85%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('testimonials.subtitle')}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Review Button */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <p className="text-muted-foreground">Real feedback from our valued clients</p>
            </div>
            <Button 
              variant="hero" 
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              {t('testimonials.addReview')}
            </Button>
          </div>
        </div>
      </section>

      {/* Add Review Form */}
      {showForm && (
        <section className="py-8 bg-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <h3 className="text-xl font-semibold">Share Your Experience</h3>
                <p className="text-muted-foreground">Help others by sharing your experience with our services</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t('testimonials.name')} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="service">{t('testimonials.service')} *</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full p-2 border border-input rounded-lg"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>{t('testimonials.rating')} *</Label>
                    <div className="mt-2">
                      {renderStars(formData.rating, true, (rating) => 
                        setFormData({...formData, rating})
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comment">{t('testimonials.comment')} *</Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      placeholder="Share your experience with our services..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" variant="hero">
                      {t('testimonials.submit')}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Loading testimonials...</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial._id} className="hover-lift elegant-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        {new Date(testimonial.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    {testimonial.isVerified && (
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-accent/20 mb-2" />
                    <p className="text-muted-foreground italic">{testimonial.comment}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {testimonial.service}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(testimonial.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Customers
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the quality and professionalism that our customers love. Get started with your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="minimal" size="xl">
              Get Free Quote
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white hover:text-accent">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;