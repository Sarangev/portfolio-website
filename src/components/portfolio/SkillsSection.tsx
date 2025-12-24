import { skills } from '@/data/portfolio';

const SkillsSection = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages, color: 'primary' },
    { title: 'Frameworks', items: skills.frameworks, color: 'accent' },
    { title: 'Tools', items: skills.tools, color: 'primary' },
    { title: 'Domains', items: skills.domains, color: 'accent' },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">// Tech Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`animate-slide-up stagger-${catIndex + 1}`}
              >
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all cursor-default"
                      style={{ animationDelay: `${(catIndex * 4 + skillIndex) * 0.05}s` }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          category.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        } group-hover:scale-150 transition-transform`}
                      />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Code snippet decoration */}
          <div className="mt-20 max-w-2xl mx-auto">
            <div className="rounded-xl bg-[hsl(var(--code-bg))] border border-border p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
              </div>
              <pre className="text-muted-foreground overflow-x-auto">
                <code>
{`const developer = {
  name: "E V Sarang",
  location: "Kerala, India",
  skills: ["Python", "TypeScript", "AI/ML"],
  passion: "Building intelligent solutions",
  status: "Open to opportunities"
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
