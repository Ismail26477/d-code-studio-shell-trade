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
      description:
        'Cast Iron Body DI / SS Disc PN 1.0 / 1.6 Wafer Type Dual Plate NRV. GST 18% Extra',
      image: '/product-check-valve.jpg',
    },
    {
      id: 2,
      name: 'SS Hydrant Single Landing Valve',
      category: 'safety',
      price: '₹2,600.00',
      description:
        'All Stainless Steel body Single Landing Valve 63 mm as per IS:5290. GST 18% Extra',
      image: '/product-hydrant-valve.jpg', // ✅ image not available
    },
    {
      id: 3,
      name: 'Hose Reel Drum (Without Hose)',
      category: 'safety',
      price: '₹2,800.00',
      description:
        'Heavy Duty duly ISI marked Hose Reel Drum (Only Drum) for fire safety applications',
      image: '/product-hose-reel.png', // ✅ image not available
    },
    {
      id: 4,
      name: 'Pneumatic Connector, Elbow, Tee, Union',
      category: 'pneumatic',
      price: '₹16.00',
      description:
        'All types and sizes of Pneumatic fittings are available. Brass and Steel connectors in various configurations',
      image: '/product-pneumatic.jpg',
    },
    {
      id: 5,
      name: 'Kartar ISI Marked CI Wafer NRV',
      category: 'valves',
      price: '₹510.00',
      description:
        'Cast Iron Body DI / SS Disc PN 1.0 / 1.6 Wafer Type NRV with CF8 casting. Compact design',
      image: '/product-wafer-nrv.jpg',
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium industrial valves, hydraulic components, and pneumatic fittings.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card-industrial">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-primary font-bold mb-2">{product.price}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <a
                  href="#quote"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Request Quotation →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
