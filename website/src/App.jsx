import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Preloader - Shows first */}
      <Preloader onComplete={() => setShowContent(true)} />

      {/* Main Content - Shows after preloader */}
      {showContent && (
        <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-green selection:text-black font-sans cursor-none">
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <ProjectGrid />

            {/* Thoughts Placeholder */}
            <section id="thoughts" className="py-24 bg-gray-900 flex items-center justify-center text-center px-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-light italic text-gray-400 mb-6">
                  "Action is louder than words; change is louder than applause."
                </h2>
                <div className="w-12 h-1 bg-neon-green mx-auto rounded-full" />
              </div>
            </section>

          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
