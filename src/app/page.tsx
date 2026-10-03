import { MotionController } from '@/components/MotionController';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

// Server component: the whole page is pre-rendered HTML. Only MotionController and the
// copy-email button ship JavaScript to the browser.
export default function Home() {
  return (
    <>
      <MotionController />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-paper mix-blend-difference [transform:scaleX(0)]"
        data-motion="progress"
        aria-hidden="true"
      />
      <Navigation />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
