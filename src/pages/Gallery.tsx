import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play,
  Image as ImageIcon,
  ZoomIn,
  Calendar,
  MapPin,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'fencing', name: 'Fencing Work', count: 8 },
    { id: 'construction', name: 'Construction', count: 6 },
    { id: 'catering', name: 'Catering Events', count: 5 },
    { id: 'materials', name: 'Materials', count: 5 }
  ];

  // Sample gallery data - in real app this would come from database
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'fencing',
      title: 'Residential Boundary Fencing',
      description: 'Complete boundary fencing for residential property in Bangalore',
      location: 'Bangalore, Karnataka',
      date: '2024-01-15',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      type: 'image',
      category: 'construction',
      title: 'Commercial Building Construction',
      description: 'Modern commercial building construction project',
      location: 'Mysore, Karnataka',
      date: '2024-02-10',
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      type: 'video',
      category: 'fencing',
      title: 'Chain Link Fencing Installation',
      description: 'Time-lapse video of chain link fencing installation process',
      location: 'Hubli, Karnataka',
      date: '2024-02-20',
      thumbnail: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&h=300&fit=crop',
      videoUrl: 'https://example.com/video1.mp4'
    },
    {
      id: 4,
      type: 'image',
      category: 'catering',
      title: 'Wedding Catering Setup',
      description: 'Traditional wedding catering arrangement for 500 guests',
      location: 'Mangalore, Karnataka',
      date: '2024-03-05',
      thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      type: 'image',
      category: 'materials',
      title: 'Quality Construction Materials',
      description: 'Premium quality stones and construction materials supply',
      location: 'Dharwad, Karnataka',
      date: '2024-03-12',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      type: 'image',
      category: 'fencing',
      title: 'Industrial Security Fencing',
      description: 'High-security fencing for industrial complex',
      location: 'Bellary, Karnataka',
      date: '2024-03-18',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('gallery.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group hover-lift cursor-pointer overflow-hidden elegant-shadow">
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="minimal"
                        size="lg"
                        onClick={() => setSelectedImage(item)}
                      >
                        {item.type === 'video' ? (
                          <Play className="mr-2 h-5 w-5" />
                        ) : (
                          <ZoomIn className="mr-2 h-5 w-5" />
                        )}
                        {item.type === 'video' ? 'Play Video' : 'View Image'}
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {item.type === 'video' ? (
                          <Play className="mr-1 h-3 w-3" />
                        ) : (
                          <ImageIcon className="mr-1 h-3 w-3" />
                        )}
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="hover-lift cursor-pointer">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                        </div>
                        <Badge variant="outline">
                          {item.type === 'video' ? (
                            <Play className="mr-1 h-3 w-3" />
                          ) : (
                            <ImageIcon className="mr-1 h-3 w-3" />
                          )}
                          {item.type}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedImage(item)}
                        >
                          {item.type === 'video' ? (
                            <Play className="mr-2 h-4 w-4" />
                          ) : (
                            <ZoomIn className="mr-2 h-4 w-4" />
                          )}
                          {item.type === 'video' ? 'Play' : 'View'}
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      <section className="pb-20">
        <div className="container mx-auto px-4 text-center">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </section>

      {/* Image/Video Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </Button>
            {selectedImage.type === 'video' ? (
              <video
                src={selectedImage.videoUrl}
                controls
                className="w-full max-h-[80vh] object-contain"
              />
            ) : (
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
            )}
            <div className="bg-white p-4 mt-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{selectedImage.title}</h3>
              <p className="text-muted-foreground mb-3">{selectedImage.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedImage.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedImage.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;