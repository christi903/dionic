import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, DollarSign, BookOpen, CheckCircle, Plane, FileText, Phone, Mail, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import ScholarshipCard from '../components/ui/ScholarshipCard';
import DiplomaCourseCard from '../components/ui/DiplomaCourseCard';
import UndergraduateCourseCard from '../components/ui/UndergraduateCourseCard';
import MastersCourseCard from '../components/ui/MastersCourseCard';
import PhDCourseCard from '../components/ui/PhDCourseCard';
import GoLearnLogo from '../components/ui/GoLearnLogo';
import TeamModal from '../components/ui/TeamModal';
import { programTypes, diplomaCourses, undergraduateCourses, mastersCourses, phdCourses, MastersCourse, PhDCourse, UndergraduateCourse } from '../data/scholarships';

const ScholarshipPage = () => {
  const [selectedProgram, setSelectedProgram] = useState('diploma');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-500" />, number: '50+', label: 'Students Placed' },
    { icon: <Globe className="h-8 w-8 text-emerald-500" />, number: '10+', label: 'Countries' },
    { icon: <Award className="h-8 w-8 text-amber-500" />, number: '25+', label: 'Partner Universities' },
    { icon: <DollarSign className="h-8 w-8 text-green-600" />, number: '$1M+', label: 'Scholarships Secured' }
  ];

  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Personalized Study Abroad Counseling',
      description: 'Matching your goals, strengths, and interests with countries, universities, and programs. Popular destinations: India, China, Malaysia, Turkey.'
    },
    {
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      title: 'University Admissions Assistance',
      description: 'Shortlisting universities, preparing documents, tracking deadlines, SOP/LOR writing & editing, application form filling, document verification, timely submission follow-up.'
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      title: 'Visa Guidance & Processing',
      description: 'Expertise in visa processes, complete support for visa success rate, visa interview preparation, financial documentation support, statement of purpose review, real-time updates and application monitoring.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Scholarships & Financial Aid (Up to 100%)',
      description: 'We help you apply for partial (50%) to full (100%) scholarships, based on merit, need, or country-specific criteria.'
    },
    {
      icon: <Plane className="h-8 w-8 text-indigo-600" />,
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

  // Map the course arrays to the scholarship format for the default view
  const allCourses = [
    ...diplomaCourses.map(course => ({
      id: course.id,
      title: course.name,
      university: course.university,
      country: course.country,
      type: 'diploma',
      duration: course.duration,
      deadline: 'Rolling Admission',
      image: course.image,
      description: course.description,
      requirements: []
    })),
    ...undergraduateCourses.map(course => ({
      id: course.id,
      title: course.name,
      university: course.university,
      country: course.country,
      type: 'undergraduate',
      duration: course.duration,
      deadline: 'Rolling Admission',
      image: course.image,
      description: course.description,
      requirements: []
    })),
    ...mastersCourses.map(course => ({
      id: course.id,
      title: course.name,
      university: course.university,
      country: course.country,
      type: 'masters',
      duration: course.duration,
      deadline: 'Rolling Admission',
      image: course.image,
      description: course.description,
      requirements: []
    })),
    ...phdCourses.map(course => ({
      id: course.id,
      title: course.name,
      university: course.university,
      country: course.country,
      type: 'phd',
      duration: course.duration,
      deadline: 'Rolling Admission',
      image: course.image,
      description: course.description,
      requirements: []
    }))
  ];

  const filteredScholarships = selectedProgram === 'all' 
    ? allCourses 
    : allCourses.filter(scholarship => scholarship.type === selectedProgram);

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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-amber-800/70 to-emerald-900/80" />
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
               className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-300 to-emerald-400"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.3 }}
             >
               Your Gateway to Global Education & Opportunities
             </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.5 }}
             >
               Are you dreaming of <span className="text-amber-300 font-semibold">studying abroad</span> but unsure where to begin? <span className="text-emerald-300 font-semibold">GoLearn Global</span> is your trusted partner in turning that dream into success. 
               We believe <span className="text-blue-300 font-semibold">education should be accessible to everyone</span>, regardless of their background.
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
              <h2 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">What is GoLearn Global?</h2>
             <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
               <span className="text-blue-700 font-semibold">GoLearn Global</span> is a premier <span className="text-emerald-700 font-semibold">international education consultancy</span> that helps students explore <span className="text-amber-700 font-semibold">academic opportunities worldwide</span>. 
               We guide you through every step of your <span className="text-blue-700 font-semibold">study abroad journey</span>—from choosing the right course to securing <span className="text-green-700 font-semibold">scholarships, visas, and more</span>.
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
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg">
                    <span className="[&_svg]:h-6 [&_svg]:w-6">{stat.icon}</span>
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 mb-1">{stat.number}</div>
                <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
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
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedProgram === program.id
                      ? 'bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border'
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
          {/* Dynamic Section Title */}
          {selectedProgram === 'diploma' && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">Available Diploma Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive diploma programs offered by prestigious universities worldwide. 
                Each program is designed to provide practical skills and industry-relevant knowledge.
              </p>
            </div>
          )}
          
          {selectedProgram === 'undergraduate' && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">Available Undergraduate Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore accredited undergraduate degrees designed to build strong foundations and practical skills across disciplines.
              </p>
            </div>
          )}

          {selectedProgram === 'masters' && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">Available Masters Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our advanced masters programs designed to deepen your expertise and prepare you for 
                leadership roles in your chosen field. These programs combine rigorous academics with practical experience.
              </p>
            </div>
          )}
          
          {selectedProgram === 'phd' && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">Available PhD Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pursue groundbreaking research with our PhD programs. Work alongside distinguished faculty and 
                contribute to the advancement of knowledge in your field at world-renowned institutions.
              </p>
            </div>
          )}

          {selectedProgram === 'diploma' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diplomaCourses.map((course) => (
                <DiplomaCourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : selectedProgram === 'undergraduate' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {undergraduateCourses.map((course: UndergraduateCourse) => (
                <UndergraduateCourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : selectedProgram === 'masters' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mastersCourses.map((course: MastersCourse) => (
                <MastersCourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : selectedProgram === 'phd' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {phdCourses.map((course: PhDCourse) => (
                <PhDCourseCard key={course.id} course={course} />
              ))}
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
             <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">Types of Scholarships We Assist With</h2>
             <p className="text-gray-700 max-w-2xl mx-auto mb-8">
               <span className="text-blue-700 font-semibold">Studying abroad</span> doesn't have to break the bank. We help you apply for <span className="text-emerald-700 font-semibold">partial (50%) to full (100%) scholarships</span>, 
               based on <span className="text-amber-700 font-semibold">merit, need, or country-specific criteria</span>.
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
                     <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                     <span className="text-gray-800 font-medium">{type}</span>
                   </motion.div>
                 ))}
               </div>
               <div className="mt-8 p-4 bg-emerald-100 rounded-lg">
                 <p className="text-emerald-900 font-semibold text-center">
                   "Several of our students have secured <span className="text-amber-800">scholarships covering up to 100% of tuition</span>, 
                   saving <span className="text-blue-800">thousands of dollars</span> while gaining a <span className="text-green-800">world-class education</span>."
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
             <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">What We Offer: End-to-End Support</h2>
             <p className="text-gray-700 max-w-2xl mx-auto text-lg">
               For your <span className="text-blue-700 font-semibold">global academic journey</span>
             </p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.map((service, index) => (
                <motion.div
                 key={index}
                  className="text-center p-6 rounded-lg bg-white border hover:shadow-lg transition-all duration-300"
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow">
                      <span className="[&_svg]:h-6 [&_svg]:w-6">{service.icon}</span>
                    </div>
                  </div>
                 <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-amber-600 to-emerald-700 mb-2">{service.title}</h3>
                 <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* Meet Our Team Section */}
       <section className="py-12 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
           >
             <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">
               Meet Our Expert Team
             </h2>
             <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
               Our experienced counselors and specialists are here to guide you every step of the way on your 
               <span className="text-blue-700 font-semibold"> global education journey</span>.
             </p>
             <motion.button
               onClick={() => setIsTeamModalOpen(true)}
               className="bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:via-amber-600 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-3 mx-auto shadow-lg"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <UserCheck className="h-6 w-6" />
               <span>Meet Our Team</span>
               <ArrowRight className="h-6 w-6" />
             </motion.button>
           </motion.div>
         </div>
       </section>

       {/* Contact Section */}
       <section className="py-16 text-white relative bg-gradient-to-r from-blue-700 via-amber-600 to-emerald-700">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-amber-100 to-emerald-200">Ready to Start Your Journey?</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
               Contact us today to begin your path to <span className="text-amber-200 font-semibold">global education success</span>.
             </p>
           </div>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
               className="text-center p-6 rounded-lg bg-white/10 backdrop-blur"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6 }}
             >
               <Phone className="h-8 w-8 mx-auto mb-4 text-blue-300" />
               <h3 className="text-xl font-semibold mb-2 text-blue-200">Call Us</h3>
                <p className="text-white font-medium">+255752006879</p>
             </motion.div>
              <motion.div
               className="text-center p-6 rounded-lg bg-white/10 backdrop-blur"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
               <Mail className="h-8 w-8 mx-auto mb-4 text-emerald-300" />
               <h3 className="text-xl font-semibold mb-2 text-emerald-200">Email Us</h3>
                <p className="text-white font-medium">musadionis58@gmail.com</p>
             </motion.div>
           </div>
           
           {/* Start Application Button */}
           <div className="text-center mt-12">
             <Link to="/application">
                <motion.button
                  className="px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 flex items-center space-x-3 mx-auto text-white bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 hover:from-blue-700 hover:via-amber-600 hover:to-emerald-700 shadow-lg"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <FileText className="h-6 w-6 text-white" />
                 <span>Start Application</span>
                 <ArrowRight className="h-6 w-6 text-white" />
               </motion.button>
             </Link>
           </div>
         </div>
       </section>

      {/* Team Modal */}
      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </div>
  );
};

export default ScholarshipPage;