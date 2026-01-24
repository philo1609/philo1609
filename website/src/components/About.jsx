import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Subtle Background Node */}
            <div className="absolute top-10 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="md:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            <span className='text-neon-green'>LEADER</span> <span className="text-neon-green">INVESTOR</span> & SPEAKER.
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>

                                I am an observer first. I watch, I map, I analyze the systems around me.
                                But I don't just see opportunities I build them.
                            </p>
                            <p>
                                From football clubs to media platforms, from tech ventures to community hubs,
                                my work spans across domains because change demands breadth. I don't fit into a single box.
                            </p>
                            <p>
                                This isn't a résumé. It's a signal: <span className="text-white font-medium">I am playing the long game of change.</span>
                            </p>
                        </div>

                        <div className="mt-10 flex space-x-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">2030+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Vision</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">Polymath</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Approach</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Visual/Image */}
                <div className="md:w-1/3 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-64 h-80 rounded-2xl overflow-hidden border border-gray-800 bg-gray-800/50 flex items-center justify-center group shadow-2xl"
                    >
                        <img
                            src="/profile.jpeg"
                            alt="Adevoir"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-80" />

                        {/* Status Light */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                            <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">Active</span>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "66%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-neon-green"
                                />
                            </div>
                            <p className="text-[10px] font-mono text-gray-500 mt-2 uppercase tracking-widest text-center">Biometric Signal_Stable</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
