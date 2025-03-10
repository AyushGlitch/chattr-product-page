import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Database, Network } from 'lucide-react';

export function Architecture() {
  const { scrollYProgress } = useScroll();
  const architectureY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const techStack = [
    {
      category: 'Frontend',
      items: ['React', 'TanStack Query', 'Zustand', 'TypeScript'],
    },
    {
      category: 'Backend',
      items: ['Express.js', 'WebSocket', 'Node.js', 'NGINX'],
    },
    {
      category: 'Data Layer',
      items: ['Redis', 'Kafka', 'PostgreSQL', 'PubSub'],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          style={{ y: architectureY }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">System Architecture</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              Built for scale with a distributed architecture that handles millions of concurrent connections
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl mb-16">
              <img
                src="/architecture.png"
                alt="Chattr Architecture"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-center">{stack.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {stack.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}