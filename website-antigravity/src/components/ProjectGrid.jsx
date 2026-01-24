import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { id: '01', title: 'Adevoir Audit', category: 'Finance', color: 'from-emerald-900/40' },
    { id: '02', title: 'PIMS', category: 'Systems', color: 'from-blue-900/40' },
    { id: '03', title: 'Adevoir Apparel', category: 'Brand', color: 'from-purple-900/40' }
];

const AntigravityProjects = () => {
    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-5xl font-black tracking-tighter">Selected Output.</h2>
                    <span className="text-xs font-mono text-gray-600 tracking-widest uppercase mb-2">Systems of Truth</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative h-[500px] bg-matte-black border border-white/5 overflow-hidden flex flex-col justify-end p-8"
                        >
                            {/* Subtle Gradient Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold tracking-tight mb-4">{project.title}</h3>
                                <div className="w-12 h-0.5 bg-neon-emerald scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                            </div>

                            <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                                {project.id}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AntigravityProjects;
