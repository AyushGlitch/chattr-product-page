import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Server, Database, Shield, Zap, Globe, Clock } from 'lucide-react';

const features = [
  {
    icon: Users,
    color: 'text-blue-500',
    title: 'User Management',
    description: 'Comprehensive user system with friend requests, profile management, and real-time status updates'
  },
  {
    icon: MessageSquare,
    color: 'text-green-500',
    title: 'Real-time Chat',
    description: 'Lightning-fast messaging with typing indicators, read receipts, and message history'
  },
  {
    icon: Server,
    color: 'text-purple-500',
    title: 'Load Balancing',
    description: 'Advanced NGINX load balancing for optimal performance and zero downtime'
  },
  {
    icon: Database,
    color: 'text-red-500',
    title: 'Data Persistence',
    description: 'Reliable PostgreSQL storage with Kafka queue for message persistence'
  },
  {
    icon: Shield,
    color: 'text-yellow-500',
    title: 'Security',
    description: 'End-to-end encryption and secure authentication protocols'
  },
  {
    icon: Zap,
    color: 'text-orange-500',
    title: 'High Performance',
    description: 'Optimized for speed with sub-50ms message delivery'
  },
  {
    icon: Globe,
    color: 'text-indigo-500',
    title: 'Global Scale',
    description: 'Distributed architecture supporting worldwide deployment'
  },
  {
    icon: Clock,
    color: 'text-teal-500',
    title: 'Message History',
    description: 'Complete message history with powerful search capabilities'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Key Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Built with scalability and performance in mind, Chattr provides everything you need for a modern chat experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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