import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[128px] animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="animate-slide-down stagger-1 mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50 glow-primary mx-auto">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full">
                Available for work
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="animate-slide-up stagger-2 flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-mono">{profile.location}</span>
          </div>

          {/* Name */}
          <h1 className="animate-slide-up stagger-3 text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">{profile.name}</span>
          </h1>

          {/* Tagline */}
          <p className="animate-slide-up stagger-4 text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up stagger-5 flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium hover-glow"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary/50 hover:bg-secondary"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up stagger-6 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
