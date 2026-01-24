import React from 'react';
import { motion } from 'framer-motion';

const AntigravityHero = () => {
    const tagline = "Observer • Builder • Visionary";

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-bg">
            {/* Subtle Background Signal */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-25">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <motion.path
                            d="M 10,50 Q 25,25 50,50 T 90,50"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="0.1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                        />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none mb-4">
                        Creating{" "}
                        <span className="relative">
                            <motion.span
                                className="text-gradient inline-block"
                                animate={{
                                    fontWeight: [900, 100, 900],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Change
                            </motion.span>
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex items-center justify-center gap-4 text-sm md:text-base font-mono tracking-[0.3em] uppercase text-gray-500"
                >
                    {tagline.split(" • ").map((word, i) => (
                        <React.Fragment key={word}>
                            <motion.span
                                whileHover={{ color: "#10B981", scale: 1.1 }}
                                className="cursor-default transition-colors duration-500"
                            >
                                {word}
                            </motion.span>
                            {i < 2 && <span className="opacity-20">•</span>}
                        </React.Fragment>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 text-gray-400 font-light max-w-md mx-auto text-lg leading-relaxed"
                >
                    A signal of a mind in motion. Laurent Banzi is an architect of systems
                    and a radiator of polymathic capacity.
                </motion.p>
            </div>

            {/* Down Arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-neon-emerald to-transparent" />
            </motion.div>
        </section>
    );
};

export default AntigravityHero;
