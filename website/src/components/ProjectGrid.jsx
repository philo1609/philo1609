import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ProjectDetailsModal from './ProjectDetailsModal';

const projects = [
    {
        id: 1,
        title: "OMNI",
        domain: "Tech",
        oneLiner: "Multi-functional app connecting merchants, service providers, buyers & creators.",
        description: "A next-generation conversational commerce platform combining terminal-style UI aesthetics with AI-powered chat commerce. OMNI enables seamless buying/selling through WhatsApp, Telegram, and a sleek Warp-inspired desktop interface.",
        features: ["Warp-Style Terminal (TUI)", "Conversational Commerce", "Fabric AI Integration", "Omni Coin Digital Currency", "Google Sheets Sync"],
        stats: { "Vision": "Warp-Style Commerce", "Status": "Active Development" },
        theme: "terminal",
        link: "#",
        color: "from-blue-600 to-cyan-400"
    },
    {
        id: 2,
        title: "Adevoir FC",
        domain: "Sports",
        oneLiner: "Football club focused on talent development & community impact.",
        link: "#",
        color: "from-emerald-300 to-green-400"
    },
    {
        id: 3,
        title: "NEPTUNEz Records",
        domain: "Media",
        oneLiner: "Music and talent platform elevating local voices.",
        link: "#",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        title: "STUDENT.IO",
        domain: "EDUCATION",
        oneLiner: "A one stop shop for students,covering relevant study materials,links,repos,books etc,.",
        link: "#",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        title: "Shafrenah Sports",
        domain: "Sports",
        oneLiner: "New Sports Spirit,Where talent meets Standards.",
        link: "#",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 6,
        title: "ADEVOIR LOGISTICS",
        domain: "LOGISTICS",
        oneLiner: "Logistics & tech solutions streamlining supply chains.",
        link: "#",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 7,
        title: "Adevoir Academy",
        domain: "Lifestyle",
        oneLiner: "The Powerhouse🔥.",
        link: "#",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 8,
        title: "OCTAGON GROUP",
        domain: ".ORG",
        oneLiner: "Integrated company structure driving regional development.",
        description: "Octagon Group serves as a multi-divisional engine for development in Tanzania. Operating under Shafrenah LLC and Adevoir Group, it leverages eight independent strategic pillars to drive regional impact and innovation.",
        features: ["CyberTech Solutions", "FinEdge Finance", "AgroLife Sustainability", "EcoEnergy Holdings", "InfraMove Logistics", "VitalHealth Inc.", "EduQuest Knowledge", "LifeStyle Media"],
        stats: { "Pillars": "8 Strategic Divisions", "HQ": "Tanzania" },
        theme: "strategic",
        link: "#",
        color: "from-slate-800 to-slate-700"
    },
    {
        id: 9,
        title: "CHOMA FALLS",
        domain: "NATURE,TOURISM&HOSPITALITY",
        oneLiner: "Home to hospitality, where Nature Meets Beauty.",
        description: "A breathtaking multi-tiered natural wonder located on the slopes of the Uluguru Mountains in Morogoro, Tanzania. Choma Falls is a centerpiece of local eco-tourism, offering visitors a unique blend of mountain hiking and cultural immersion.",
        features: ["Mountain Hiking Trails", "Eco-Tourism Hub", "Cultural Village Tours", "Lush Rainforest Scenic Views", "Natural Swimming Pools"],
        stats: { "Altitude": "Uluguru Slopes", "Location": "Morogoro, TZ" },
        theme: "nature",
        link: "#",
        color: "from-emerald-900 to-green-600"
    },
    {
        id: 10,
        title: "JinoMoja Media",
        domain: "Media",
        oneLiner: "Cultural & media storytelling platform.",
        description: "A dynamic Tanzanian media powerhouse specializing in digital storytelling and cultural entertainment. JinoMoja Media produces high-impact content that resonates with Swahili-speaking audiences across East Africa.",
        features: ["Digital Storytelling", "Social Media Campaigns", "Full-Scale Content Production", "Cultural Narratives", "Creative Brand Strategy"],
        stats: { "Market": "East Africa", "Style": "Punchy Swahili Content" },
        theme: "media",
        link: "#",
        color: "from-yellow-500 to-orange-600"
    },
    {
        id: 11,
        title: "Talent High Court",
        domain: "Community",
        oneLiner: "Hub for discovering & mentoring youth talent.",
        link: "#",
        color: "from-indigo-500 to-purple-500"
    }
];

const ProjectCard = ({ project, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(project)}
            className="relative group overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 hover:border-neon-green transition-all duration-300 cursor-pointer h-64 md:h-80"
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">

                {/* Top: Domain Tag */}
                <div className="flex justify-between items-start">
                    <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-gray-400 border border-gray-700 rounded-full bg-dark-bg/50 backdrop-blur-sm">
                        {project.domain}
                    </span>
                    <motion.div
                        animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ExternalLink className="w-5 h-5 text-gray-300" />
                    </motion.div>
                </div>

                {/* Center/Bottom: Content */}
                <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                        {project.title}
                    </h3>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-gray-300 text-sm md:text-base mt-2 font-light">
                                    {project.oneLiner}
                                </p>
                                <div className="flex items-center space-x-2 text-neon-green text-sm mt-4 font-medium">
                                    <span>Explore</span> <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Default State: Minimal One Liner hint (optional, hidden on hover to avoid duplication) */}
                    {!isHovered && (
                        <p className="text-gray-500 text-sm truncate opacity-60">
                            {project.oneLiner}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectGrid = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="py-24 bg-dark-bg relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Things I'm Building.</h2>
                    <div className="w-24 h-1 bg-neon-green/50 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} onClick={handleProjectClick} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectDetailsModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default ProjectGrid;
