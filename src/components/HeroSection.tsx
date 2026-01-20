const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-industrial.jpg"
          alt="Industrial Lubricant Manufacturing Facility"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Authorized Shell Lubricants Supplier
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Industrial Grade{' '}
            <span className="text-gradient-gold">Lubricants</span>
            <br />
            for Maximum Performance
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up delay-200">
            Premium quality lubricants from Shell India Market Pvt Ltd. Serving
            industrial, automotive, and commercial sectors with excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <a href="#quote" className="btn-gold">
              Get a Quote
            </a>
            <a href="#products" className="btn-outline-gold">
              View Products
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up delay-400">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold">
                15+
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold">
                500+
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold">
                100%
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Genuine Products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
