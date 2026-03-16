import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profile from "../../assets/profile.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    "JavaScript (ES6+)",
    "Java",
    "React",
    "Node.js",
    "Next.js",
    "Power BI",
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >

          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-primary text-sm">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-center">

            {/* Text Content */}
            <div className="md:col-span-2 space-y-6">

              <p className="text-muted-foreground leading-relaxed">
                Hi, I’m <span className="text-foreground font-medium">Prasam</span>,
                a student passionate about exploring technology and building things on the internet.
                I enjoy experimenting with new tools, learning modern development skills,
                and turning ideas into real products.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Recently, I had the opportunity to intern at
                <span className="text-foreground font-medium"> NCELL Nepal</span>,
                one of the largest telecom companies in the country.
                My focus is on building accessible, inclusive digital products
                and improving user experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I enjoy playing tennis and football,
                spending time with friends, and discovering new coffee shops.
              </p>

              {/* Tech Stack */}
              <div className="pt-4">
                <p className="text-foreground mb-4">
                  Technologies I’ve been working with recently:
                </p>

                <ul className="grid grid-cols-2 gap-3">

                  {techStack.map((tech) => (
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

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-primary/30 blur-xl opacity-40 group-hover:opacity-70 transition duration-500 rounded-xl"></div>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">

                <img
                  src={profile}
                  alt="Prasam Pradhan"
                  className="w-full max-w-sm mx-auto rounded-xl object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};