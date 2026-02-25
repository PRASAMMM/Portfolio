import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnjblkzn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    } else {
      toast({
        title: "Error!",
        description: "Something went wrong. Try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="mono text-primary text-sm">05. What's Next?</span>
            <h2 className="section-heading mt-4 mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm currently open to new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-foreground">mailprasam7@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-foreground">Lalitpur, Nepal</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-foreground">+977 9845766662</p>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="md:col-span-3 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                required
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};