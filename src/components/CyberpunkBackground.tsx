import React from 'react';

export const CyberpunkBackground: React.FC = () => {
  // Simplified background - just static gradient for performance
  return (
    <div 
      className="fixed inset-0 z-0"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(70, 54, 86, 0.1) 0%, rgba(33, 37, 41, 0.95) 40%, rgba(15, 15, 15, 1) 100%)',
      }}
    >
      {/* Minimal horror overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blood-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blood-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
    </div>
  );
};

export default CyberpunkBackground;
