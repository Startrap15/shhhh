import React from 'react';
import { FileText, FileCheck, LineChart, BookOpen, Users, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Grant Writing',
      description: 'Professional grant proposal writing with high success rates'
    },
    {
      icon: FileCheck,
      title: 'Proposal Review',
      description: 'Expert review and optimization of existing proposals'
    },
    {
      icon: LineChart,
      title: 'Strategic Planning',
      description: 'Comprehensive funding strategy development'
    },
    {
      icon: BookOpen,
      title: 'Grant Research',
      description: 'Identifying the best funding opportunities'
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Grant writing workshops and professional development'
    },
    {
      icon: MessageSquare,
      title: 'Ongoing Support',
      description: '24/7 consultation and proposal management'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive grant writing solutions tailored to your specific needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <service.icon className="h-12 w-12 text-[#005eff] mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}