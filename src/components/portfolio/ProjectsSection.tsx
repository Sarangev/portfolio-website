import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects, Project } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Category = 'all' | 'ai' | 'web' | 'data' | 'other';

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Category>('all');

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'web', label: 'Web Dev' },
    { value: 'data', label: 'Data' },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  const getTagClass = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('python')) return 'tag-python';
    if (lower.includes('typescript') || lower.includes('react')) return 'tag-typescript';
    if (lower.includes('ai') || lower.includes('crewai')) return 'tag-ai';
    if (lower.includes('css')) return 'tag-css';
    if (lower.includes('html')) return 'tag-html';
    return 'bg-secondary text-secondary-foreground';
  };

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">// Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in AI, web development, and automation
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={filter === cat.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(cat.value)}
                className={filter === cat.value ? 'bg-primary text-primary-foreground' : ''}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} getTagClass={getTagClass} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  getTagClass,
}: {
  project: Project;
  index: number;
  getTagClass: (tech: string) => string;
}) => {
  return (
    <div
      className={`group relative p-6 rounded-xl bg-card border border-border card-hover animate-slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`text-xs font-medium px-2 py-1 rounded-md ${getTagClass(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>Source Code</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
