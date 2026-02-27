/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import CollegeBanner from './components/CollegeBanner';
import Header from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import BackToTop from './components/BackToTop';

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
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <CollegeBanner />
          <Header />
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route element={<MainLayout />}>
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </AuthProvider>
  );
}
