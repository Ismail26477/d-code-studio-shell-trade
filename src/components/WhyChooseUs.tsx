import { CheckCircle, Shield, Clock, Award, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Genuine Shell Products',
      description: 'All products sourced directly from Shell India Market Pvt Ltd with authenticity guarantee.',
    },
    {
      icon: Award,
      title: 'Competitive Pricing',
      description: 'Best market prices with flexible payment options for bulk orders.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times with reliable logistics across Central India.',
    },
    {
      icon: Star,
      title: 'Trusted Industrial Supplier',
      description: 'Over 15 years of experience serving industrial clients with excellence.',
    },
    {
      icon: CheckCircle,
      title: 'Premium Quality Assurance',
      description: 'Every product undergoes quality checks to ensure peak performance.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why <span className="text-gradient-gold">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partner with Indian Traders Corporation for reliable, quality-assured lubricant solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-industrial p-8 text-center group ${
                index === features.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 card-industrial p-8 md:p-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold">500+</p>
              <p className="text-sm text-muted-foreground mt-2">Industrial Clients</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold">15+</p>
              <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold">1000+</p>
              <p className="text-sm text-muted-foreground mt-2">Orders Delivered</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold">100%</p>
              <p className="text-sm text-muted-foreground mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
