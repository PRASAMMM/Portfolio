import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'],
  },
  {
    icon: Terminal,
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
  },
  {
    icon: Layout,
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Responsive Design', 'Design Systems'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['React Native', 'Progressive Web Apps', 'Mobile-First Design'],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="mono text-primary text-sm">02.</span>
            <h2 className="section-heading">Skills & Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
