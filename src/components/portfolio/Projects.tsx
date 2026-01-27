import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce application with user authentication, shopping cart, payment processing with Stripe, and order management. Built with a focus on performance and accessibility.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'bg-gradient-to-br from-primary/20 to-primary/5',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, team workspaces, and comprehensive project analytics.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'bg-gradient-to-br from-primary/15 to-primary/5',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps writers create blog posts, social media content, and marketing copy using advanced language models.',
    tech: ['Python', 'FastAPI', 'React', 'OpenAI', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'bg-gradient-to-br from-primary/25 to-primary/5',
  },
];

const otherProjects = [
  { title: 'Weather Dashboard', description: 'A weather app with location-based forecasts and interactive maps.', tech: ['React', 'API', 'Charts'] },
  { title: 'Portfolio Generator', description: 'CLI tool to generate developer portfolios from a config file.', tech: ['Node.js', 'CLI', 'Templates'] },
  { title: 'Markdown Editor', description: 'Real-time markdown editor with live preview and export options.', tech: ['React', 'Marked', 'CodeMirror'] },
  { title: 'Budget Tracker', description: 'Personal finance app with expense tracking and visualizations.', tech: ['React', 'D3.js', 'LocalStorage'] },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="mono text-primary text-sm">03.</span>
            <h2 className="section-heading">Things I've Built</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'md:text-right' : ''}`}
              >
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`${project.image} aspect-video rounded-lg glow-box flex items-center justify-center`}>
                    <Folder className="w-16 h-16 text-primary/30" />
                  </div>
                </div>

                {/* Project Info */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <div className="glass-card p-6 rounded-lg mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 mb-4 mono text-xs text-muted-foreground ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-center text-xl font-semibold mb-8 text-foreground">Other Noteworthy Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6 rounded-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Folder className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mono text-xs text-muted-foreground">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
