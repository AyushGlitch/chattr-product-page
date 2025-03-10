import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Scale Your Chat Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A modern, scalable chat application built with React, Express, WebSocket, Redis, and Kafka.
            Experience real-time messaging at scale with enterprise-grade reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}