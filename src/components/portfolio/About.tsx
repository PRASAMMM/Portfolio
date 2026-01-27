import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-primary text-sm">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm John, a passionate developer who loves creating things that live on the internet. 
                My interest in web development started back in 2015 when I decided to try editing custom 
                Tumblr themes — turns out hacking together a custom reblog button taught me a lot about 
                HTML & CSS!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at a start-up, a large 
                corporation, and a student-led design studio. My main focus these days is building 
                accessible, inclusive products and digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not at the computer, I'm usually rock climbing, hanging out with my dog, 
                or exploring new coffee shops in the city.
              </p>

              <div className="pt-4">
                <p className="text-foreground mb-4">Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'PostgreSQL'].map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">▹</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="aspect-square bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">JD</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
