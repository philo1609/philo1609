import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [typedText, setTypedText] = useState("");
    const fullText = "Building Ideas. Inspiring Action.";

    useEffect(() => {
        // Initialize dimensions on mount
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Typing effect
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, []);

    // Parallax factor
    const parallaxOffset = scrollY * 0.5;

    // Stable background positions to prevent hydration mismatch and flickering
    const stars = useMemo(() => {
        const count = 30; // Max count
        return [...Array(count)].map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 20 + Math.random() * 20,
            isGold: i % 7 === 0
        }));
    }, []);

    const lines = useMemo(() => {
        return [...Array(15)].map((_, i) => ({
            id: i,
            x1: Math.random() * 100,
            y1: Math.random() * 100,
            x2: Math.random() * 100,
            y2: Math.random() * 100,
            duration: 2 + Math.random() * 3
        }));
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Animated Background Nodes with Parallax */}
            <div
                className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
            >
                {/* Only render nodes if dimensions are set to avoid layout shifts */}
                {dimensions.width > 0 && stars.slice(0, dimensions.width < 768 ? 15 : 30).map((star) => (
                    <motion.div
                        key={`node-${star.id}`}
                        className={`absolute w-1 h-1 rounded-full ${star.isGold ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}
                        initial={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                        }}
                        animate={{
                            left: [`${star.x}%`, `${(star.x + 5) % 100}%`, `${star.x}%`],
                            top: [`${star.y}%`, `${(star.y + 5) % 100}%`, `${star.y}%`],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
                {/* Constellation Lines */}
                <svg className="absolute inset-0 w-full h-full">
                    {lines.map((line) => (
                        <motion.line
                            key={`line-${line.id}`}
                            x1={`${line.x1}%`}
                            y1={`${line.y1}%`}
                            x2={`${line.x2}%`}
                            y2={`${line.y2}%`}
                            stroke="#22d3ee"
                            strokeWidth="0.8"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: line.duration,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-white">
                        Creating{" "}
                        <span className="relative inline-block">
                            <motion.span
                                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ["0%", "100%", "0%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    backgroundSize: "200% 100%",
                                }}
                            >
                                Change
                            </motion.span>
                            <motion.span
                                className="absolute -inset-1 bg-emerald-500 blur-xl opacity-20"
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </span>
                        .
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-400 mb-8 tracking-wide h-8">
                        {typedText}
                    </p>

                    <motion.div
                        className="flex items-center justify-center gap-4 text-sm font-mono text-gray-500 tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="relative">
                            Observer
                            <span className="absolute -right-2 top-0 w-1 h-1 bg-emerald-500 rounded-full" />
                        </span>
                        <span className="text-emerald-500">•</span>
                        <span className="relative">
                            Builder
                            <span className="absolute -right-2 top-0 w-1 h-1 bg-emerald-500 rounded-full" />
                        </span>
                        <span className="text-emerald-500">•</span>
                        <span className="relative">
                            Visionary
                            <span className="absolute -right-2 top-0 w-1 h-1 bg-emerald-500 rounded-full" />
                        </span>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-[-100px] left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronDown className="w-6 h-6 text-emerald-500" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
