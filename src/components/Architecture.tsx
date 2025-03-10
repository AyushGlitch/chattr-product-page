import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Architecture() {
  const { scrollYProgress } = useScroll();
  const architectureY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          style={{ y: architectureY }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12">System Architecture</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/architecture.png"
              alt="Chattr Architecture"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}