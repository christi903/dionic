import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MedicalSupplyPage from './pages/MedicalSupplyPage';
import ScholarshipPage from './pages/ScholarshipPage';
import ApplicationPage from './pages/ApplicationPage';
import StaffPortalPage from './pages/StaffPortalPage';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/medical-supply" element={<MedicalSupplyPage />} />
          <Route path="/scholarships" element={<ScholarshipPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/staff-portal" element={<StaffPortalPage />} />
        </Routes>
        <WhatsAppButton 
          phoneNumber="+255769558797" 
          message="" 
        />
      </div>
    </Router>
  );
}

export default App;