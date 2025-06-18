import React from 'react';
import { TopNavbar } from './components/TopNavbar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CriteriaPortal } from './components/CriteriaPortal';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <TopNavbar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <CriteriaPortal />
      </main>
    </div>
  );
}

export default App;