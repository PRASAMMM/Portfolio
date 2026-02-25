import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Technical Business Analyst Intern ',
    company: 'NCELL Axiata PVT.LTD',
    period: 'APR 2024 — JUL 2024',
    description: 'Carried out data analysis and completed a company OPEX decreasing project supporting sustainable development by digitalizing a GOODS DELIVERY NOTICE in short time . ',
  },

];

const education = [
  {
    degree: 'SEE EXAMINATION',
    school: 'GEMS School , Lalitpur , NEPAL',
    period: '2009 — 2019',
    description: 'Focused on basic fundamentals on all subjects .',
  },
  {
    degree: 'NEB +2 (Science)',
    school: 'Kathmandu World School, Bhaktapur , NEPAL',
    period: '2019 — 2021',
    description: 'Completed with flying colors with Computer Science as a major subject .',
  },
  {
    degree: 'B.Tech Computer Science Engineering',
    school: 'Vellore Institute of Technology , Vellore , INDIA',
    period: '2022 — 2026',
    description: 'Focused on core computer science subjects with many other electives like AI , ML , Predictive analysis and more  .',
  }
];

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="mono text-primary text-sm">04.</span>
            <h2 className="section-heading">Resume</h2>
          </div>

          <div className="flex justify-center mb-16">
          <a
  href="/CV PRASAM.pdf"
  download
  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6 py-3 rounded-md flex items-center w-fit"
>
  <Download size={18} className="mr-2" />
  Download Resume
</a>


          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Experience</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                    <p className="mono text-primary text-xs mb-1">{exp.period}</p>
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-primary/70 mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                    <p className="mono text-primary text-xs mb-1">{edu.period}</p>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-primary/70 mb-2">{edu.school}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
