import { Shield, Award, Truck, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Authorized Distributor',
      description: 'Official partner of Shell India Market Pvt Ltd',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only genuine, certified products',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Timely delivery across Central India',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Technical guidance for product selection',
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient-gold">Indian Traders Corporation</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Indian Traders Corporation is a leading industrial materials vendor serving the whole 
              of Central India region. With expertise in industrial engineering supplies, we have 
              established ourselves as a trusted name in the lubricant distribution sector.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              As an authorized distributor and supplier, we deal exclusively with Shell India Market 
              Pvt Ltd lubricants, ensuring that our clients receive only genuine, high-quality products. 
              We proudly serve industrial, automotive, and commercial sectors with our comprehensive 
              range of lubricant solutions.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="card-industrial p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy-dark">ITC</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Indian Traders Corporation</h3>
                    <p className="text-sm text-primary">Authorized Shell Lubricants Supplier</p>
                  </div>
                </div>
                
                <div className="h-px bg-border" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Established</span>
                    <span className="font-semibold text-foreground">Since 2009</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold text-foreground">Dongri Toll Naka</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="font-semibold text-foreground">Industrial Lubricants</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Partner</span>
                    <span className="font-semibold text-primary">Shell India Market Pvt Ltd</span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <p className="text-sm text-muted-foreground italic">
                  "Committed to delivering premium quality lubricant solutions for all your industrial needs."
                </p>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
