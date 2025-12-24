import { Code2, Brain, Globe, Zap } from 'lucide-react';
import { profile } from '@/data/portfolio';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems with CrewAI, FastAPI, and modern AI frameworks',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating responsive web applications with React, TypeScript, and Python',
    },
    {
      icon: Globe,
      title: 'Open Source',
      description: 'Contributing to the developer community through open source projects',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamlining workflows with intelligent automation and data pipelines',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turning ideas into <span className="gradient-text">reality</span>
            </h2>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-xl bg-card border border-border card-hover animate-slide-up stagger-${index + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
