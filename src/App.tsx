import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Screenshots } from './components/Screenshots';
import { Architecture } from './components/Architecture';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <Hero />
      <Screenshots />
      <Architecture />
      <Features />
      <Footer />
    </div>
  );
}

export default App;