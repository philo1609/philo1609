import React from 'react';
import { motion } from 'framer-motion';

const AntigravityAbout = () => {
    const steps = [
        { title: "The Observer", description: "Absorbing complexity. Identifying patterns where others see noise. The silent analyst of system efficiency." },
        { title: "The Builder", description: "Converting observation into architecture. Writing the logic that drives the machine. Turning 'What if' into 'What is'." },
        { title: "The Visionary", description: "Stepping above the architecture. Seeing the second-order effects. Designing the future of transparent leadership." }
    ];

    return (
        <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-neon-emerald mb-8">
                        The Narrative Arc
                    </h2>
                    <p className="text-3xl md:text-4xl font-light leading-snug text-gray-200">
                        Laurent Banzi is not a set of skills. He is a <span className="text-white font-medium italic">process of refinement</span>.
                        A continuous loop of intake, synthesis, and execution.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="group"
                        >
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-4">
                                <span className="text-xs font-mono text-gray-600 font-normal">0{i + 1}</span>
                                {step.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AntigravityAbout;
