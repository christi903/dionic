import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, DollarSign, BookOpen } from 'lucide-react';
import Header from '../components/layout/Header';
import ScholarshipCard from '../components/ui/ScholarshipCard';
import { scholarships, programTypes } from '../data/scholarships';

const ScholarshipPage = () => {
  const [selectedProgram, setSelectedProgram] = useState('undergraduate');

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: '500+', label: 'Students Placed' },
    { icon: <Globe className="h-8 w-8" />, number: '25+', label: 'Countries' },
    { icon: <Award className="h-8 w-8" />, number: '100+', label: 'Partner Universities' },
    { icon: <DollarSign className="h-8 w-8" />, number: '$5M+', label: 'Scholarships Secured' }
  ];

  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Application Guidance',
      description: 'Expert assistance with application forms, essays, and documentation requirements.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Scholarship Matching',
      description: 'Personalized matching based on your academic profile and career goals.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Visa & Travel Support',
      description: 'Comprehensive support for visa applications and travel arrangements.'
    }
  ];

  const filteredScholarships = selectedProgram === 'all' 
    ? scholarships 
    : scholarships.filter(scholarship => scholarship.type === selectedProgram);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header showBackButton={true} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Go Learn Global
            </motion.h1>
            <motion.p 
              className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your future with international scholarship opportunities. 
              We connect Tanzanian students with world-class universities globally.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-green-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedProgram('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedProgram === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Programs
            </button>
            {programTypes.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedProgram === program.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {program.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support throughout your scholarship journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipPage;