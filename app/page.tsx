import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Events from '@/components/events';
import Team from '@/components/team';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'IEEE CASS Kerala Chapter',
  description:
    'IEEE Circuits and Systems Society Kerala Chapter - Advancing circuits and systems technology through innovation and collaboration.',
  keywords: 'IEEE, CASS, Circuits, Systems, Engineering, Kerala',
  openGraph: {
    title: 'IEEE CASS Kerala Chapter',
    description:
      'Join the IEEE Circuits and Systems Society Kerala Chapter for technical events, workshops, and networking.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary/5">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
