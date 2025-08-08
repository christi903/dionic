import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, DollarSign, BookOpen, CheckCircle, Plane, FileText, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import ScholarshipCard from '../components/ui/ScholarshipCard';
import DiplomaCourseCard from '../components/ui/DiplomaCourseCard';
import GoLearnLogo from '../components/ui/GoLearnLogo';
import { scholarships, programTypes, diplomaCourses } from '../data/scholarships';

const ScholarshipPage = () => {
  const [selectedProgram, setSelectedProgram] = useState('diploma');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images of students and universities in Asia and India
  const backgroundImages = [
    {
      url: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Students in Asian University'
    },
    {
      url: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Indian University Campus'
    },
    {
      url: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'International Students'
    },
    {
      url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'University Library'
    },
    {
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Students Studying'
    }
  ];

  // Auto-advance slideshow every 4 seconds
  useState(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  });

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: '500+', label: 'Students Placed' },
    { icon: <Globe className="h-8 w-8" />, number: '25+', label: 'Countries' },
    { icon: <Award className="h-8 w-8" />, number: '100+', label: 'Partner Universities' },
    { icon: <DollarSign className="h-8 w-8" />, number: '$5M+', label: 'Scholarships Secured' }
  ];

  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Personalized Study Abroad Counseling',
      description: 'Matching your goals, strengths, and interests with countries, universities, and programs. Popular destinations: India, China, Malaysia, Turkey.'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'University Admissions Assistance',
      description: 'Shortlisting universities, preparing documents, tracking deadlines, SOP/LOR writing & editing, application form filling, document verification, timely submission follow-up.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Visa Guidance & Processing',
      description: 'Expertise in visa processes, complete support for visa success rate, visa interview preparation, financial documentation support, statement of purpose review, real-time updates and application monitoring.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Scholarships & Financial Aid (Up to 100%)',
      description: 'We help you apply for partial (50%) to full (100%) scholarships, based on merit, need, or country-specific criteria.'
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Pre-Departure & Post-Arrival Support',
      description: 'Help with settling in and succeeding, cultural orientation & student life briefing, packing, travel, and insurance advice, accommodation booking, airport pickup assistance, local emergency contact support.'
    }
  ];

  const scholarshipTypes = [
    'Merit-based scholarships',
    'Government-funded scholarships',
    'University-specific grants',
    'Need-based financial aid',
    'Early-bird tuition discounts',
    'Assistantships & on-campus work opportunities'
  ];

  const filteredScholarships = selectedProgram === 'all' 
    ? scholarships 
    : scholarships.filter(scholarship => scholarship.type === selectedProgram);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section with Dynamic Background */}
      <section className="relative py-16 overflow-hidden">
        {/* Dynamic Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `url('${backgroundImages[currentImageIndex].url}')`
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/85 to-emerald-700/90" />
        </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center relative z-10">
             {/* GoLearn Global Logo */}
             <motion.div
               className="flex justify-center mb-8"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
               <GoLearnLogo size="lg" className="text-white" />
             </motion.div>
             
             <motion.h1 
               className="text-4xl sm:text-5xl font-bold mb-6"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.3 }}
             >
               Your Gateway to Global Education & Opportunities
             </motion.h1>
             <motion.p 
               className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.5 }}
             >
               Are you dreaming of studying abroad but unsure where to begin? GoLearn Global is your trusted partner in turning that dream into success. 
               We believe education should be accessible to everyone, regardless of their background.
             </motion.p>
           </div>
         </div>
       </section>

      {/* What is GoLearn Global Section */}
       <section className="py-12 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             className="bg-white rounded-lg shadow-lg p-8 mb-12"
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
           >
             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What is GoLearn Global?</h2>
             <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
               GoLearn Global is a premier international education consultancy that helps students explore academic opportunities worldwide. 
               We guide you through every step of your study abroad journey—from choosing the right course to securing scholarships, visas, and more.
             </p>
           </motion.div>
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
                                 <div className="text-emerald-600 mb-2 flex justify-center">
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

      {/* Programs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedProgram === 'diploma' ? (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Diploma Programs</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explore our comprehensive diploma programs offered by prestigious universities worldwide. 
                  Each program is designed to provide practical skills and industry-relevant knowledge.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diplomaCourses.map((course) => (
                  <DiplomaCourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredScholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
            </div>
          )}
        </div>
      </section>

             {/* Scholarship Types Section */}
       <section className="py-16 bg-emerald-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Scholarships We Assist With</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8">
               Studying abroad doesn't have to break the bank. We help you apply for partial (50%) to full (100%) scholarships, 
               based on merit, need, or country-specific criteria.
             </p>
             <div className="bg-white rounded-lg shadow-lg p-8">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {scholarshipTypes.map((type, index) => (
                   <motion.div
                     key={index}
                     className="flex items-center space-x-3"
                     initial={{ x: -20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                   >
                     <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                     <span className="text-gray-700 font-medium">{type}</span>
                   </motion.div>
                 ))}
               </div>
               <div className="mt-8 p-4 bg-emerald-100 rounded-lg">
                 <p className="text-emerald-800 font-semibold text-center">
                   "Several of our students have secured scholarships covering up to 100% of tuition, 
                   saving thousands of dollars while gaining a world-class education."
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Services Section */}
       <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer: End-to-End Support</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">
               For your global academic journey
             </p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.map((service, index) => (
               <motion.div
                 key={index}
                 className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                 <div className="text-emerald-600 mb-4 flex justify-center">
                   {service.icon}
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* Contact Section */}
       <section className="py-16 bg-emerald-600 text-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
             <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
               Contact us today to begin your path to global education success.
             </p>
           </div>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <motion.div
               className="text-center p-6 rounded-lg bg-emerald-700"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6 }}
             >
               <Phone className="h-8 w-8 mx-auto mb-4" />
               <h3 className="text-xl font-semibold mb-2">Call Us</h3>
               <p className="text-emerald-100">+255693641585</p>
             </motion.div>
             <motion.div
               className="text-center p-6 rounded-lg bg-emerald-700"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
               <Mail className="h-8 w-8 mx-auto mb-4" />
               <h3 className="text-xl font-semibold mb-2">Email Us</h3>
               <p className="text-emerald-100">Musadionis58@gmail.com</p>
             </motion.div>
           </div>
           
           {/* Start Application Button */}
           <div className="text-center mt-12">
             <Link to="/application">
               <motion.button
                 className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3 mx-auto"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <FileText className="h-6 w-6" />
                 <span>Start Application</span>
                 <ArrowRight className="h-6 w-6" />
               </motion.button>
             </Link>
           </div>
         </div>
       </section>
    </div>
  );
};

export default ScholarshipPage;