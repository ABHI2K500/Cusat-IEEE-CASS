'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function Events() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const upcomingEvents = [
    {
      title: 'Advanced Circuit Design Workshop',
      date: 'March 20, 2024',
      location: 'Kochi, Kerala',
      attendees: 150,
      category: 'Workshop',
      description: 'Learn advanced techniques in circuit design with industry experts.',
    },
    {
      title: 'IEEE CASS Annual Conference 2024',
      date: 'April 15-17, 2024',
      location: 'Thiruvananthapuram',
      attendees: 500,
      category: 'Conference',
      description: 'Join leading researchers and professionals for three days of technical talks.',
    },
    {
      title: 'Embedded Systems Seminar',
      date: 'May 5, 2024',
      location: 'Virtual',
      attendees: 200,
      category: 'Seminar',
      description: 'Explore the latest trends in embedded systems and IoT applications.',
    },
    {
      title: 'Networking & Career Fair',
      date: 'May 25, 2024',
      location: 'Cochin University',
      attendees: 300,
      category: 'Networking',
      description: 'Connect with industry professionals and explore career opportunities.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="events" className="py-20 md:py-32 bg-blue-50 dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest technical events, workshops, and networking opportunities.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-secondary rounded-xl border border-border overflow-hidden hover:border-primary dark:hover:border-accent transition-all duration-300 hover:shadow-xl h-[300px]"
            >
              {/* Category Badge Top Border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent z-10" />

              {/* Default State (Visible initially, fades/slides out on hover) */}
              <div className="p-6 flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:-translate-y-8">
                <div className="flex items-start justify-between mt-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <div className="mt-auto flex items-center gap-3 text-muted-foreground font-medium text-sm">
                  <Calendar size={18} className="text-primary dark:text-accent" />
                  {event.date}
                </div>
              </div>

              {/* Hover Details Overlay (Slides up from bottom) */}
              <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-transparent group-hover:border-primary dark:group-hover:border-accent rounded-xl p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col z-20">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent" />
                
                <h3 className="text-lg font-bold mb-2 text-primary dark:text-accent mt-2 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Event Exact Details */}
                <div className="space-y-3 mb-6 text-sm mt-auto">
                  <div className="flex items-center gap-3 text-foreground dark:text-gray-300">
                    <Calendar size={16} className="text-primary dark:text-accent" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-foreground dark:text-gray-300">
                    <MapPin size={16} className="text-primary dark:text-accent" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-3 text-foreground dark:text-gray-300">
                    <Users size={16} className="text-primary dark:text-accent" />
                    {event.attendees} Attendees
                  </div>
                </div>

                {/* Register Button */}
                <button className="w-full mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white transition-colors rounded-lg font-semibold group/btn">
                  Register Now
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button className="px-8 py-3 border-2 border-primary text-primary dark:border-accent dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white dark:hover:text-secondary rounded-lg font-semibold transition-colors">
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  );
}
