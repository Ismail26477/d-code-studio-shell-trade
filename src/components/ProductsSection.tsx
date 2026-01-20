'use client';

import { useState } from 'react';
import { Droplets, Gauge, Settings, Zap, Wrench } from 'lucide-react';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: Settings },
    { id: 'valves', name: 'Check Valves', icon: Droplets },
    { id: 'safety', name: 'Safety Equipment', icon: Gauge },
    { id: 'pneumatic', name: 'Pneumatic Fittings', icon: Zap },
    { id: 'hydraulic', name: 'Control Valves', icon: Wrench },
  ];

  const products = [
    {
      id: 1,
      name: 'Kartar ISI Marked CI Dual Plate NRV',
      category: 'valves',
      price: '₹1,205.00',
      description: 'Cast Iron Body DI / SS Disc PN 1.0 / 1.6 Wafer Type Dual Plate NRV. GST 18% Extra',
      image: '/src/assets/product-check-valve.jpg',
    },
    {
      id: 2,
      name: 'SS Hydrant Single Landing Valve',
      category: 'safety',
      price: '₹2,600.00',
      description: 'All Stainless Steel body Single Landing Valve 63 mm as per IS:5290. GST 18% Extra',
      image: '/src/assets/product-hydrant-valve.jpg',
    },
    {
      id: 3,
      name: 'Hose Reel Drum (Without Hose)',
      category: 'safety',
      price: '₹2,800.00',
      description: 'Heavy Duty duly ISI marked Hose Reel Drum (Only Drum) for fire safety applications',
      image: '/src/assets/product-hose-reel.jpg',
    },
    {
      id: 4,
      name: 'Pneumatic Connector, Elbow, Tee, Union',
      category: 'pneumatic',
      price: '₹16.00',
      description: 'All types and sizes of Pneumatic fittings are available. Brass and Steel connectors in various configurations',
      image: '/src/assets/product-pneumatic.jpg',
    },
    {
      id: 5,
      name: 'Kartar ISI Marked CI Wafer NRV',
      category: 'valves',
      price: '₹510.00',
      description: 'Cast Iron Body DI / SS Disc PN 1.0 / 1.6 Wafer Type NRV with CF8 casting. Compact design',
      image: '/src/assets/product-wafer-nrv.jpg',
    },
    {
      id: 6,
      name: 'Yuken Direction Control Valves',
      category: 'hydraulic',
      price: 'On Request',
      description: 'DSG-01-3C60, DSG-03-3C60, 2B2, 3C2, 2B3B, 3C3, 3C4 models. 35% discount on all Yuken valves',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
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
            Premium industrial valves, hydraulic components, and pneumatic fittings. 
            Leading supplier of engineering materials in Central India.
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
                  src={product.image || "/placeholder.svg"}
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                    {product.name}
                  </h3>
                </div>
                <p className="text-lg font-bold text-primary mb-2">
                  {product.price}
                </p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
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
            Need bulk quantities or custom solutions? Contact Indian Traders Corporation for wholesale pricing and special orders.
          </p>
          <a href="#quote" className="btn-gold">
            Get Bulk Quote Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
