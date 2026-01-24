import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("cursor-magnetic")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Hide cursor on touch devices to avoid double-tap issues
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 500,
                    mass: 0.5,
                }}
            />

            {/* Outer cursor ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-emerald-400/50 rounded-full pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    mass: 0.8,
                }}
            />

            {/* Glow effect */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 64,
                    y: mousePosition.y - 64,
                    opacity: isHovering ? 0.3 : 0.15,
                }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 150,
                }}
            />
        </>
    );
}
