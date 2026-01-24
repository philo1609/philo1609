import React from 'react';
import { motion } from 'framer-motion';

const AntigravityNavbar = () => {
    const links = ['About', 'Projects', 'Thoughts', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <div className="glass px-8 py-3 rounded-full flex gap-10 items-center pointer-events-auto">
                {links.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default AntigravityNavbar;
