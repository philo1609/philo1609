import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Check if user has visited before
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (hasVisited) {
            // Skip preloader for returning visitors in same session
            setProgress(100);
            setIsComplete(true);
            setTimeout(onComplete, 300);
            return;
        }

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        sessionStorage.setItem("hasVisited", "true");
                        setTimeout(onComplete, 800);
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-[#0f172a] flex items-center justify-center"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Animated background grid */}
                    <div className="absolute inset-0 opacity-5">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-px h-full bg-emerald-500"
                                style={{ left: `${(i / 20) * 100}%` }}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 text-center px-4">
                        {/* Logo/Brand name reveal */}
                        <motion.div
                            className="mb-12 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-6xl md:text-8xl font-black tracking-tighter"
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                    Adevoir
                                </span>
                            </motion.h1>
                        </motion.div>

                        {/* Progress counter */}
                        <motion.div
                            className="font-mono text-3xl font-bold text-emerald-400 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {Math.floor(progress)}%
                        </motion.div>

                        {/* Progress bar */}
                        <div className="w-64 md:w-96 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
                            <motion.div
                                className="h-full bg-gradient-to-r from-emerald-400 to-teal-400"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </div>

                        {/* Subtext */}
                        <motion.p
                            className="mt-8 text-gray-500 text-sm font-mono tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Mind in Motion
                        </motion.p>
                    </div>

                    {/* Corner decoration */}
                    <motion.div
                        className="absolute bottom-8 right-8 text-xs font-mono text-gray-700 hidden md:block"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        2026
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
