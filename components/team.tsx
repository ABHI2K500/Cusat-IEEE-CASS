'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const professionalExecom = [
    {
      name: 'Mr Libin T.T',
      role: 'Chair',
      institution: "Associate Director and Scientist 'F' at C-DAC",
      contact: 'libin@cdac.in',
    },
    {
      name: 'Dr Jagdeesh Kumar P',
      role: 'Vice Chair',
      institution: 'Assistant Professor at Model Engineering College, Thrikkakara',
      contact: 'jagadeeshkumarp@mec.ac.in',
    },
    {
      name: 'Dr Elizabeth George',
      role: 'Secretary',
      institution: 'CHIEF RF Solution Achitect,XARK Technologies Pvt Ltd',
      contact: 'elizabeth.george@ieee.org',
    }
  ];

  const studentLeadership = [
    {
      name: 'Mohammed Shan',
      role: 'Student Representative',
      institution: 'Final Year student Pursuing Btech in Electronics and Communication at Cochin University of Science and Technology',
      contact: '+917736273307',
    },
    {
      name: 'Lakshmi Dineshkumar',
      role: 'EC Coordinator',
      institution: 'Pursuing Btech in Electronics and Communication at Mar Athanasius College of Engineering',
      contact: '+918590444031',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="team" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Professional Execom */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-accent">Professional Execom</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Meet the passionate professionals leading IEEE CAS Kerala Section<br className="hidden sm:block"/> towards excellence and innovation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {professionalExecom.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden h-[320px]"
              >
                {/* Default Visible Content */}
                <div className="flex flex-col items-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-8 w-full z-10">
                  {/* Avatar Placeholder */}
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-5 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-white text-3xl font-bold shadow-inner transition-transform duration-500 group-hover:scale-95">
                    {member.name.split(' ').slice(0, 2).map((n) => n[0].replace(/[^a-zA-Z]/g, '')).join('')}
                  </div>
                  <h3 className="text-gray-900 dark:text-gray-100 font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary dark:text-accent font-semibold text-sm">{member.role}</p>
                </div>

                {/* Hover Details overlay sliding up from the bottom */}
                <div className="absolute bottom-0 left-0 w-full p-6 pt-16 bg-gradient-to-t from-white via-white to-white/90 dark:from-black dark:via-black dark:to-black/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center z-20">
                  <p className="text-gray-600 dark:text-gray-400 text-sm px-2 mb-4 leading-relaxed line-clamp-3">{member.institution}</p>
                  <div className="w-12 h-[2px] bg-primary/20 dark:bg-accent/20 mb-4 rounded-full"></div>
                  <p className="text-gray-900 dark:text-gray-100 text-xs font-bold tracking-wide">
                    Contact: <br/><a href={member.contact.includes('@') ? `mailto:${member.contact}` : `tel:${member.contact}`} className="text-primary dark:text-accent font-medium hover:underline text-sm inline-block mt-1">{member.contact}</a>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Student Leadership Team */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-accent">Student Leadership Team</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Meet the passionate individuals leading IEEE CAS Kerala Section<br className="hidden sm:block"/> towards excellence and innovation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {studentLeadership.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden h-[320px]"
              >
                {/* Default Visible Content */}
                <div className="flex flex-col items-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-8 w-full z-10">
                  {/* Avatar Placeholder */}
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-5 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-white text-3xl font-bold shadow-inner transition-transform duration-500 group-hover:scale-95">
                    {member.name.split(' ').slice(0, 2).map((n) => n[0].replace(/[^a-zA-Z]/g, '')).join('')}
                  </div>
                  <h3 className="text-gray-900 dark:text-gray-100 font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary dark:text-accent font-semibold text-sm">{member.role}</p>
                </div>

                {/* Hover Details overlay sliding up from the bottom */}
                <div className="absolute bottom-0 left-0 w-full p-6 pt-16 bg-gradient-to-t from-white via-white to-white/90 dark:from-black dark:via-black dark:to-black/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center z-20">
                  <p className="text-gray-600 dark:text-gray-400 text-sm px-2 mb-4 leading-relaxed line-clamp-3">{member.institution}</p>
                  <div className="w-12 h-[2px] bg-primary/20 dark:bg-accent/20 mb-4 rounded-full"></div>
                  <p className="text-gray-900 dark:text-gray-100 text-xs font-bold tracking-wide">
                    Contact: <br/><a href={member.contact.includes('@') ? `mailto:${member.contact}` : `tel:${member.contact}`} className="text-primary dark:text-accent font-medium hover:underline text-sm inline-block mt-1">{member.contact}</a>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
