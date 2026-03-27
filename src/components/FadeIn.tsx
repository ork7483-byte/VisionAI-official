import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

export default function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
