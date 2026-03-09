import React from 'react';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Side: Gradient Background & Info */}
      <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-12 text-white">
        <div className="max-w-md space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Join Oasis Today
          </h1>
          <p className="text-xl text-indigo-100 leading-relaxed">
            Start your journey with the most powerful AI content creation platform. Create an account and unlock your creativity.
          </p>
          <div className="pt-8 hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-lg font-medium">Fast & Efficient Workflow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Register Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
