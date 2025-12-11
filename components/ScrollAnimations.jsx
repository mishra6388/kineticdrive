'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Hook to detect if element is in viewport
export function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, {
            threshold: 0.1,
            ...options,
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isInView];
}

// Scroll-triggered fade-in animation
export function ScrollFadeIn({ children, className = '', delay = 0 }) {
    const [ref, isInView] = useInView();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Parallax scroll effect
export function ParallaxScroll({ children, speed = 0.5, className = '' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}

// 3D rotate on scroll
export function ScrollRotate3D({ children, className = '' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{
                rotateX,
                scale,
                opacity,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger children animation
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
    const [ref, isInView] = useInView();

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * staggerDelay }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
}
