import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import MedicalSupplyPage from './pages/MedicalSupplyPage';
import ScholarshipPage from './pages/ScholarshipPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/medical-supply" element={<MedicalSupplyPage />} />
          <Route path="/scholarships" element={<ScholarshipPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;