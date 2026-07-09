import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Chat } from '@/components/Chat';
import { Contact } from '@/components/Contact';

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Chat />
      <Contact />
    </main>
  );
}
