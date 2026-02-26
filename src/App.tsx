/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollegeBanner from './components/CollegeBanner';
import Header from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutInitiative from './pages/AboutInitiative';
import StudentDiet from './pages/StudentDiet';
import Hostel from './pages/Hostel';
import HealthCenter from './pages/HealthCenter';
import Events from './pages/Events';
import Contact from './pages/Contact';
import DietPlans from './pages/DietPlans';
import AskNutritionist from './pages/AskNutritionist';
import ExamBrainFoods from './pages/ExamBrainFoods';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <CollegeBanner />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutInitiative />} />
            <Route path="/student-diet" element={<StudentDiet />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/health-center" element={<HealthCenter />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/diet-plans" element={<DietPlans />} />
            <Route path="/ask-nutritionist" element={<AskNutritionist />} />
            <Route path="/exam-brain-foods" element={<ExamBrainFoods />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
