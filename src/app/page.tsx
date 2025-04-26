'use client';

import { useState } from "react";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleClick = () => {
    setShowOverlay(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Conteúdo principal */}
      <div className={`h-full w-full bg-gray-100 p-8 transition-all duration-1000 ${showOverlay ? 'translate-y-full' : 'translate-y-0'}`}>
        <h1 className="text-4xl font-bold text-center mb-6">Bem-vindo à Home</h1>
        <p className="text-lg text-center">Este é o conteúdo principal da sua aplicação.</p>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000">
          <img 
            src="Logo2.png" 
            alt="Logo" 
            className="max-w-[80vw] max-h-[50vh] w-auto h-auto object-contain" 
          />
          <button
            onClick={handleClick}
            className="mt-8 px-8 py-4 bg-white rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            Seja Bem-vindo!
          </button>
        </div>
      )}
    </div>
  );
}