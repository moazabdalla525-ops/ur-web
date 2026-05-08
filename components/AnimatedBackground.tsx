'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  moveY: number;
  moveX: number;
  color: string;
}

const COLORS = ['#B4B8AB', '#284B63', '#EEF0EB', '#B4B8AB', '#284B63'];

export default function AnimatedBackground({ count = 18 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.8,
        duration: Math.random() * 14 + 8,
        delay: Math.random() * 7,
        opacity: Math.random() * 0.28 + 0.05,
        moveY: (Math.random() - 0.5) * 120,
        moveX: (Math.random() - 0.5) * 70,
        color: COLORS[i % COLORS.length],
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, p.moveY, 0],
            x: [0, p.moveX, 0],
            opacity: [p.opacity, Math.min(p.opacity * 3, 0.55), p.opacity],
            scale: [1, 1.9, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Sweeping diagonal light beam */}
      <motion.div
        className="absolute top-0 bottom-0 w-[55%]"
        style={{
          left: '-55%',
          background:
            'linear-gradient(105deg, transparent 20%, rgba(180,184,171,0.03) 50%, transparent 80%)',
          transform: 'skewX(-8deg)',
        }}
        animate={{ x: ['0%', '300%'] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut',
        }}
      />

      {/* Second slower beam, offset */}
      <motion.div
        className="absolute top-0 bottom-0 w-[35%]"
        style={{
          left: '-35%',
          background:
            'linear-gradient(105deg, transparent 20%, rgba(40,75,99,0.04) 50%, transparent 80%)',
          transform: 'skewX(-8deg)',
        }}
        animate={{ x: ['0%', '400%'] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 4,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
