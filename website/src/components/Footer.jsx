import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-dark-bg py-12 border-t border-gray-800 relative">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">ADEVOIR.</h3>
                    <p className="text-gray-500 text-sm">Be the change. Be the difference.</p>
                </div>

                <div className="flex space-x-8">
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="adevoir09@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-gray-600 text-xs">
                    © {new Date().getFullYear()} Adevoir Group.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
