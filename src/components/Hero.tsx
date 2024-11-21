import React from 'react';
import { ArrowRight, Award, Users, Clock, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Expert Grant Writing & <br className="hidden sm:block" />
            Government Contract Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional grant writing and government proposal services backed by decades of experience and proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#005eff] text-white px-8 py-4 rounded-lg hover:bg-[#0046cc] transition-colors flex items-center justify-center">
              Start Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-[#005eff] text-[#005eff] px-8 py-4 rounded-lg hover:bg-[#005eff] hover:text-white transition-colors">
              View Success Stories
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              icon: Award,
              title: 'Proven Track Record',
              description: 'Consistent success in securing funding'
            },
            {
              icon: Users,
              title: 'Expert Team',
              description: 'Former grant reviewers & proposal writers'
            },
            {
              icon: Clock,
              title: '15+ Years Experience',
              description: 'Industry expertise you can trust'
            },
            {
              icon: Globe,
              title: '500+ Global Clients',
              description: 'Serving organizations worldwide'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-[#005eff] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}