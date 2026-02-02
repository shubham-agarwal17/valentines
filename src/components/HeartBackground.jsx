import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartBackground = () => {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '110vh', 
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0 
          }}
          animate={{ 
            y: '-10vh',
            opacity: [0, 0.5, 0.5, 0],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute"
          style={{ color: '#fda4af' }}
        >
          <Heart size={Math.random() * 40 + 20} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default HeartBackground;
