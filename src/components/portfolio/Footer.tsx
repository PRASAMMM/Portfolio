import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> using React & Tailwind
          </p>

          <p className="mono text-xs text-muted-foreground">
            © 2024 John Developer
          </p>
        </div>
      </div>
    </footer>
  );
};
