import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';

function App() {
    // Simple Lenis-like smooth scroll logic or just CSS
    useEffect(() => {
        document.title = "Laurent Banzi | Antigravity";
    }, []);

    return (
        <div className="min-h-screen bg-dark-bg selection:bg-neon-emerald selection:text-dark-bg scroll-smooth">
            <Navbar />
            <main>
                <Hero />
                <About />
                <ProjectGrid />

                {/* Contact Spacer */}
                <section id="contact" className="py-64 flex flex-col items-center justify-center text-center">
                    <h2 className="text-sm font-mono tracking-[0.5em] uppercase text-gray-500 mb-8">Ready to Build?</h2>
                    <a
                        href="mailto:contact@adevoir.com"
                        className="text-4xl md:text-6xl font-black tracking-tighter hover:text-neon-emerald transition-colors duration-500"
                    >
                        hello@adevoir.com
                    </a>
                </section>
            </main>

            <footer className="py-12 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">
                    © 2026 THE ADEVOIR GROUP. ALL RIGHTS RESERVED.
                </span>
                <div className="flex gap-8 text-xs font-mono text-gray-400 uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
