import React from 'react';
import { PenLine } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <PenLine className="h-8 w-8 text-[#005eff]" />
            <span className="ml-2 text-xl font-bold text-gray-900">GrantCraft Pro</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#005eff] transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-[#005eff] transition-colors">About</a>
            <a href="#resources" className="text-gray-700 hover:text-[#005eff] transition-colors">Resources</a>
            <a href="#blog" className="text-gray-700 hover:text-[#005eff] transition-colors">Blog</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#005eff] transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-[#005eff] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-[#005eff] font-medium">
              Login
            </button>
            <button className="bg-[#005eff] text-white px-4 py-2 rounded-lg hover:bg-[#0046cc] transition-colors">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}