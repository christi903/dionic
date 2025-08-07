import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Globe, Award, BookOpen, Users, CheckCircle, Star, MapPin, Calendar, DollarSign } from 'lucide-react';

const ScholarshipPage = () => {
  const [selectedProgram, setSelectedProgram] = useState('undergraduate');

  const scholarships = [
    {
      id: 1,
      title: 'Engineering Excellence Program',
      university: 'Technical University of Munich',
      country: 'Germany',
      type: 'undergraduate',
      value: 'Full Tuition + Living Allowance',
      duration: '4 Years',
      deadline: 'March 31, 2024',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Comprehensive scholarship for Tanzanian students pursuing engineering degrees.',
      requirements: ['Minimum GPA 3.5', 'IELTS 6.5+', 'Mathematics & Physics background']
    },
    {
      id: 2,
      title: 'Global Health Initiative',
      university: 'University of Edinburgh',
      country: 'United Kingdom',
      type: 'graduate',
      value: '£25,000 per year',
      duration: '2 Years',
      deadline: 'April 15, 2024',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Master\'s program focused on global health challenges and solutions.',
      requirements: ['Bachelor\'s degree', 'IELTS 7.0+', 'Health sciences background']
    },
    {
      id: 3,
      title: 'Business Leadership Program',
      university: 'INSEAD Business School',
      country: 'France',
      type: 'graduate',
      value: '€35,000 scholarship',
      duration: '1 Year',
      deadline: 'May 1, 2024',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'MBA program designed for emerging African business leaders.',
      requirements: ['3+ years work experience', 'GMAT 650+', 'Leadership experience']
    },
    {
      id: 4,
      title: 'Agricultural Innovation Grant',
      university: 'Wageningen University',
      country: 'Netherlands',
      type: 'undergraduate',
      value: 'Full Scholarship',
      duration: '3 Years',
      deadline: 'February 28, 2024',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Focus on sustainable agriculture and food security for African students.',
      requirements: ['Science background', 'IELTS 6.0+', 'Agriculture interest']
    },
    {
      id: 5,
      title: 'Technology & Innovation PhD',
      university: 'MIT',
      country: 'United States',
      type: 'phd',
      value: '$50,000 stipend',
      duration: '5 Years',
      deadline: 'December 15, 2023',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Doctoral research program in cutting-edge technology fields.',
      requirements: ['Master\'s degree', 'GRE scores', 'Research experience']
    },
    {
      id: 6,
      title: 'Arts & Culture Exchange',
      university: 'University of Sydney',
      country: 'Australia',
      type: 'undergraduate',
      value: 'AUD 30,000 per year',
      duration: '3 Years',
      deadline: 'March 1, 2024',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Creative arts program celebrating African culture and global perspectives.',
      requirements: ['Portfolio submission', 'IELTS 6.5+', 'Creative background']
    }
  ];

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
      description: 'Complete support throughout the application process, from document preparation to interview coaching.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'University Matching',
      description: 'Personalized university recommendations based on your academic profile and career goals.'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Visa Assistance',
      description: 'Expert guidance on visa applications and immigration requirements for your destination country.'
    }
  ];

  const filteredScholarships = scholarships.filter(scholarship => 
    selectedProgram === 'all' || scholarship.type === selectedProgram
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Go Learn Global</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
              <span>📞 +255 123 456 789</span>
              <span>✉️ scholarships@dioniccompany.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Gateway to Global Education
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Transform your future with international scholarship opportunities. 
              We connect talented Tanzanian students with world-class universities across the globe.
            </p>
            <motion.button 
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-green-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From application guidance to visa assistance, we support you every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-green-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Available Scholarship Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our current scholarship offerings across different academic levels and fields of study.
            </p>

            {/* Program Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'undergraduate', 'graduate', 'phd'].map((program) => (
                <button
                  key={program}
                  onClick={() => setSelectedProgram(program)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedProgram === program
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {program === 'all' ? 'All Programs' : program.charAt(0).toUpperCase() + program.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={scholarship.image}
                    alt={scholarship.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      scholarship.type === 'undergraduate' ? 'bg-blue-100 text-blue-700' :
                      scholarship.type === 'graduate' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {scholarship.type.toUpperCase()}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">Featured</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{scholarship.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{scholarship.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{scholarship.university}, {scholarship.country}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{scholarship.value}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Deadline: {scholarship.deadline}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Requirements:</h4>
                    <div className="space-y-1">
                      {scholarship.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet some of our successful scholarship recipients who are making a difference worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amina Hassan',
                program: 'Engineering at ETH Zurich',
                quote: 'Go Learn Global made my dream of studying in Switzerland a reality. Their support was invaluable throughout the entire process.',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
              },
              {
                name: 'John Mwanga',
                program: 'Medicine at University of Toronto',
                quote: 'The guidance I received helped me secure a full scholarship to one of the world\'s top medical schools.',
                image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
              },
              {
                name: 'Grace Kimaro',
                program: 'MBA at London Business School',
                quote: 'From application to visa, the team supported me every step of the way. I\'m now pursuing my MBA in London.',
                image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-sm text-green-600 mb-4">{story.program}</p>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Ready to Start Your Global Education Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of Tanzanian students who have successfully secured scholarships through our program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
                Download Scholarship Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-2xl font-bold">Go Learn Global</span>
            </div>
            <p className="text-gray-400 mb-4">
              Part of Dionic Company - Opening doors to global education opportunities
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Dionic Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScholarshipPage;