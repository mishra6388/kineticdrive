'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const MouseContext = createContext({ x: 0, y: 0 });

export function MouseTracker({ children }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <MouseContext.Provider value={mousePosition}>
            {children}
        </MouseContext.Provider>
    );
}

export function useMousePosition() {
    return useContext(MouseContext);
}

// Parallax component that responds to mouse movement
export function ParallaxElement({ children, intensity = 20, className = '' }) {
    const mouse = useMousePosition();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <div className={className}>{children}</div>;

    return (
        <div
            className={className}
            style={{
                transform: `translate(${mouse.x * intensity}px, ${mouse.y * intensity}px)`,
                transition: 'transform 0.3s ease-out',
            }}
        >
            {children}
        </div>
    );
}
