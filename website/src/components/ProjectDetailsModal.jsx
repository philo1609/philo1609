import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Terminal, Shield, Zap, Globe, Briefcase, Trees, PlayCircle } from 'lucide-react';

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    const isTerminal = project.theme === 'terminal';
    const isStrategic = project.theme === 'strategic';
    const isNature = project.theme === 'nature';
    const isMedia = project.theme === 'media';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-24">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark-bg/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`relative w-full max-w-4xl max-h-full overflow-y-auto rounded-2xl border ${isTerminal ? 'border-cyan-500/30' :
                                isStrategic ? 'border-amber-400/30' :
                                    isNature ? 'border-emerald-500/30' :
                                        isMedia ? 'border-yellow-400/30' : 'border-gray-800'
                            } bg-[#0b1120] shadow-2xl custom-scrollbar`}
                    >
                        {/* Header Image/Pattern */}
                        <div className={`h-32 w-full relative overflow-hidden ${isTerminal ? 'bg-cyan-950/20' :
                                isNature ? 'bg-emerald-950/20' :
                                    isMedia ? 'bg-yellow-950/20' : 'bg-slate-900'
                            }`}>
                            {isTerminal && (
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                />
                            )}
                            {isStrategic && (
                                <div className="absolute inset-0 opacity-10"
                                    style={{ background: 'radial-gradient(circle at 20% 50%, #fbbf24 0%, transparent 50%)' }}
                                />
                            )}
                            {isNature && (
                                <div className="absolute inset-0 opacity-10"
                                    style={{ background: 'radial-gradient(circle at 80% 50%, #10b981 0%, transparent 50%)' }}
                                />
                            )}
                            <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0b1120] to-transparent`} />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-gray-400" />
                        </button>

                        <div className="px-8 pb-12 -mt-12 relative z-10">
                            {/* Project Icon/Identity */}
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl mb-6 ${isTerminal ? 'bg-cyan-500 text-black' :
                                    isStrategic ? 'bg-amber-400 text-black' :
                                        isNature ? 'bg-emerald-500 text-black' :
                                            isMedia ? 'bg-yellow-400 text-black' : 'bg-neon-green text-black'
                                }`}>
                                {isTerminal ? <Terminal className="w-10 h-10" /> :
                                    isNature ? <Trees className="w-10 h-10" /> :
                                        isMedia ? <PlayCircle className="w-10 h-10" /> : <Briefcase className="w-10 h-10" />}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                                <div>
                                    <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isTerminal ? 'text-cyan-400' :
                                            isStrategic ? 'text-amber-400' :
                                                isNature ? 'text-emerald-400' :
                                                    isMedia ? 'text-yellow-400' : 'text-white'
                                        }`}>
                                        {project.title}
                                    </h2>
                                    <div className="flex items-center gap-2 mt-2 font-mono text-sm text-gray-400">
                                        <Globe className="w-4 h-4 text-neon-green" />
                                        <span>{project.domain}</span>
                                    </div>
                                </div>
                                <a
                                    href={project.link}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${isTerminal ? 'bg-cyan-500 hover:bg-cyan-400 text-black' :
                                            isStrategic ? 'bg-amber-400 hover:bg-amber-300 text-black' :
                                                isNature ? 'bg-emerald-500 hover:bg-emerald-400 text-black' :
                                                    isMedia ? 'bg-yellow-400 hover:bg-yellow-300 text-black' : 'bg-neon-green hover:bg-emerald-400 text-black'
                                        }`}
                                >
                                    Launch Project <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left: Main Description */}
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="space-y-4">
                                        <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Executive Summary</h4>
                                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                                            {project.description || project.oneLiner}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Key Innovations</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.features?.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                                    <Zap className={`w-4 h-4 ${isTerminal ? 'text-cyan-400' :
                                                            isNature ? 'text-emerald-400' :
                                                                isMedia ? 'text-yellow-400' : 'text-amber-400'
                                                        }`} />
                                                    <span className="text-sm text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Stats & Metadata */}
                                <div className="space-y-6">
                                    <div className={`p-6 rounded-xl border ${isTerminal ? 'bg-cyan-500/5 border-cyan-500/20' :
                                            isStrategic ? 'bg-amber-400/5 border-amber-400/20' :
                                                isNature ? 'bg-emerald-500/5 border-emerald-500/20' :
                                                    isMedia ? 'bg-yellow-400/5 border-yellow-400/20' : 'bg-white/5 border-white/10'
                                        }`}>
                                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6 italic">Project Metrix</h4>
                                        <div className="space-y-6">
                                            {project.stats && Object.entries(project.stats).map(([label, value]) => (
                                                <div key={label}>
                                                    <p className="text-xs text-gray-500 uppercase">{label}</p>
                                                    <p className={`text-lg font-bold ${isTerminal ? 'text-cyan-300 font-mono' :
                                                            isNature ? 'text-emerald-300' :
                                                                isMedia ? 'text-yellow-300' : 'text-white'
                                                        }`}>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sub-Brand visual hint */}
                                    {isTerminal && (
                                        <div className="p-4 rounded-xl bg-black border border-cyan-900/50 font-mono text-[10px] text-cyan-500/50 leading-none">
                                            <p className="mb-1 text-cyan-400">OMNI_CORE_v1.0.4</p>
                                            <p>SYSTEM: READY</p>
                                            <p>FABRIC: OPTIMIZED</p>
                                            <p>NODES: 11_STRATEGIC</p>
                                            <p className="mt-2 text-cyan-500/30">----------------</p>
                                            <div className="mt-2 h-1 w-full bg-cyan-950 rounded-full overflow-hidden">
                                                <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-cyan-500" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;
