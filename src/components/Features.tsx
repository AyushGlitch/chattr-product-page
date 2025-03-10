import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Server, Database } from 'lucide-react';

const features = [
  {
    icon: Users,
    color: 'text-blue-500',
    title: 'User Management',
    description: 'Friend requests, user search, and profile management'
  },
  {
    icon: MessageSquare,
    color: 'text-green-500',
    title: 'Real-time Chat',
    description: 'Instant messaging with WebSocket support'
  },
  {
    icon: Server,
    color: 'text-purple-500',
    title: 'Load Balancing',
    description: 'NGINX load balancer for distributed scaling'
  },
  {
    icon: Database,
    color: 'text-red-500',
    title: 'Data Persistence',
    description: 'PostgreSQL storage with Kafka queue'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <Icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}