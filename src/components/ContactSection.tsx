import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99999 99999',
      href: 'tel:+919999999999',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@indiantradersco.com',
      href: 'mailto:info@indiantradersco.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dongri Toll Naka',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Sat: 9AM - 7PM',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for inquiries, quotations, or any assistance you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="card-industrial p-6 group hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="card-industrial p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Office Address</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Indian Traders Corporation<br />
                Dongri Toll Naka<br />
                Central India
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Note:</span> Visit us during business hours 
                for product consultation and direct quotations.
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="card-industrial overflow-hidden h-[400px] lg:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.941!2d72.835!3d19.007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzI1LjIiTiA3MsKwNTAnMDYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.7)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
