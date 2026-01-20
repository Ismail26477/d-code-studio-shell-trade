import { useState } from 'react';
import { Droplets, Car, Settings, Gauge, Cog } from 'lucide-react';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: Settings },
    { id: 'industrial', name: 'Industrial Lubricants', icon: Droplets },
    { id: 'automotive', name: 'Automotive Oils', icon: Car },
    { id: 'greases', name: 'Greases', icon: Cog },
    { id: 'hydraulic', name: 'Hydraulic Oils', icon: Gauge },
  ];

  const products = [
    {
      id: 1,
      name: 'Shell Rimula R4 X',
      category: 'industrial',
      description: 'Heavy-duty diesel engine oil for commercial vehicles',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Shell Tellus S2 V',
      category: 'hydraulic',
      description: 'Premium hydraulic fluid for industrial applications',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Shell Helix Ultra',
      category: 'automotive',
      description: 'Fully synthetic motor oil for passenger cars',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Shell Gadus S3 V220C',
      category: 'greases',
      description: 'Premium multipurpose grease for industrial use',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Shell Omala S4 GX',
      category: 'industrial',
      description: 'Advanced synthetic industrial gear oil',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'Shell Spirax S6 AXME',
      category: 'automotive',
      description: 'Synthetic axle & manual transmission lubricant',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    },
    {
      id: 7,
      name: 'Shell Corena S4 R',
      category: 'industrial',
      description: 'Synthetic air compressor oil',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
    },
    {
      id: 8,
      name: 'Shell Albida EP',
      category: 'greases',
      description: 'Extreme pressure grease for heavy-duty applications',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=400&h=300&fit=crop',
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of Shell lubricants designed for industrial, 
            automotive, and commercial applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card-industrial group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {categories.find(c => c.id === product.category)?.name || 'Product'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold-light transition-colors"
                >
                  Request Quotation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Contact us for custom requirements.
          </p>
          <a href="#quote" className="btn-gold">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
