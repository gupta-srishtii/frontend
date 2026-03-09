"use client";

import React, { useState } from 'react';

const RegisterForm = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate register
    console.log("Register attempt:", { name, email, password });
    
    // Redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Create Account
        </button>
      </form>

      {/* Login Link */}
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-indigo-600 font-semibold hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
