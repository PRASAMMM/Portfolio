import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="mono text-primary mb-4 text-sm md:text-base">
            Hi, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-foreground">John Developer.</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            I build things for the web.
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin size={22} />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
