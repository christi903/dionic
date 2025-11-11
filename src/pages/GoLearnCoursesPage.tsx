import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import GoLearnLogo from '../components/ui/GoLearnLogo';
import DiplomaCourseCard from '../components/ui/DiplomaCourseCard';
import UndergraduateCourseCard from '../components/ui/UndergraduateCourseCard';
import MastersCourseCard from '../components/ui/MastersCourseCard';
import PhDCourseCard from '../components/ui/PhDCourseCard';
import {
  programTypes,
  diplomaCourses,
  undergraduateCourses,
  mastersCourses,
  phdCourses,
  UndergraduateCourse,
  MastersCourse,
  PhDCourse,
} from '../data/scholarships';

/**
 * GoLearnCoursesPage
 *
 * This page displays only the GoLearn Global courses (Diploma, Undergraduate, Masters, PhD)
 * separated from the rest of the GoLearn Global content.
 *
 * The ScholarshipPage keeps the overview, hero, services and other sections while this page
 * focuses purely on the course listings. The Navigation component should include a link
 * (in the app routing) to this page so users can navigate here directly from the nav bar.
 */

const GoLearnCoursesPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('diploma');

  const renderProgramHeader = () => {
    switch (selectedProgram) {
      case 'diploma':
        return {
          title: 'Diploma Programs',
          description:
            'Explore practical diploma programs designed to build industry-ready skills and fast-track your career.',
        };
      case 'undergraduate':
        return {
          title: 'Undergraduate Programs',
          description:
            'Accredited undergraduate degrees to help you build a strong academic foundation across disciplines.',
        };
      case 'masters':
        return {
          title: 'Masters Programs',
          description:
            'Advanced masters degrees to deepen your expertise and prepare you for leadership roles.',
        };
      case 'phd':
        return {
          title: 'PhD Programs',
          description:
            'Research-focused PhD programs where you collaborate with world-class faculty and contribute to your field.',
        };
      default:
        return { title: '', description: '' };
    }
  };

  const header = renderProgramHeader();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <header className="py-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <GoLearnLogo size="lg" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">
                  GoLearn Global — Courses
                </h1>
                <p className="text-sm text-gray-600">
                  Browse diploma, undergraduate, masters and PhD programs we assist with.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Link to="/scholarships" className="text-sm text-gray-700 hover:text-emerald-600 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Overview
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Program Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {programTypes.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedProgram === program.id
                    ? 'bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {program.name}
              </button>
            ))}
          </div>

          {/* Program Header */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600"
            >
              {header.title}
            </motion.h2>
            <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-gray-600 max-w-2xl mx-auto">
              {header.description}
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div>
            {selectedProgram === 'diploma' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diplomaCourses.map((course) => (
                  <DiplomaCourseCard key={course.id} course={course} />
                ))}
              </div>
            )}

            {selectedProgram === 'undergraduate' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {undergraduateCourses.map((course: UndergraduateCourse) => (
                  <UndergraduateCourseCard key={course.id} course={course} />
                ))}
              </div>
            )}

            {selectedProgram === 'masters' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mastersCourses.map((course: MastersCourse) => (
                  <MastersCourseCard key={course.id} course={course} />
                ))}
              </div>
            )}

            {selectedProgram === 'phd' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {phdCourses.map((course: PhDCourse) => (
                  <PhDCourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>

          {/* Pagination / CTA */}
          <div className="mt-12 flex items-center justify-between">
            <div />
            <div className="flex items-center space-x-4">
              <Link to="/application" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 text-white font-semibold shadow-lg hover:opacity-95">
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoLearnCoursesPage;
