import React from 'react';
import { Github, MessageSquare } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-opacity-80 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold">Chattr</span>
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <a
            href="https://github.com/AyushGlitch/scalable-chat-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}