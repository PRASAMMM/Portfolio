import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
          className="max-w-5xl mx-auto"
        >

          {/* Heading */}
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-primary text-sm">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-center">

            {/* Text */}
            <div className="md:col-span-2 space-y-5">

              <p className="text-muted-foreground leading-relaxed">
                Hi, I’m Prasam — a student who loves exploring and creating things
                on the internet. I enjoy experimenting, learning new skills,
                and turning ideas into real products.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Recently I had the opportunity to intern at NCELL Nepal,
                one of the largest telecom companies in the country.
                My focus is on building accessible and inclusive
                digital experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you’ll probably find me playing tennis,
                football, hanging out with friends, or exploring coffee
                shops around the city.
              </p>

              {/* Tech Stack */}
              <div className="pt-4">

                <p className="text-foreground mb-4">
                  Here are a few technologies I've been working with recently:
                </p>

                <ul className="grid grid-cols-2 gap-2">

                  {[
                    "JavaScript (ES6+)",
                    "JAVA",
                    "React",
                    "Node.js",
                    "Next.js",
                    "PowerBI",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary">▹</span>
                      {tech}
                    </li>
                  ))}

                </ul>

              </div>

            </div>

            {/* Profile Image */}
            <div className="relative group">

              {/* Glow */}
              <div className="absolute -inset-1 bg-primary/30 blur-xl opacity-40 group-hover:opacity-70 transition duration-500 rounded-xl"></div>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">

                <img
                  src="profile.jpg"
                  alt="Prasam Pradhan"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};