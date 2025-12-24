import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: profile.github,
      username: `@${profile.username}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: profile.linkedin,
      username: 'E V Sarang',
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-mono text-sm mb-4 block">// Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium hover-glow group"
              asChild
            >
              <a href={`mailto:sarang@example.com`}>
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Say Hello
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">{link.label}</div>
                  <div className="font-medium">{link.username}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
