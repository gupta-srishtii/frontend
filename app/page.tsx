import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-4">
      {/* Hero Section */}
      <div className="max-w-4xl text-center space-y-8">
        {/* Title */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight animate-fade-in">
          Oasis
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-medium text-indigo-100">
          AI Content Creation Platform
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-indigo-50 max-w-2xl mx-auto leading-relaxed">
          Generate blogs, marketing copy, and social media posts instantly using AI. 
          The all-in-one solution for modern content creators.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a 
            href="/register"
            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Get Started
          </a>
          <a 
            href="/login"
            className="px-8 py-4 bg-transparent border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto text-center"
          >
            Login
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
    </div>
  );
};

export default HomePage;
