import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarCopy from './components/NavBarCopy';
import Footer from './components/Footer';
import VisionHome from './pages/VisionHome';
import ServiceStartCopy from './pages/ServiceStartCopy';
import DetailAiAds from './pages/DetailAiAds';
import DetailAiModel from './pages/DetailAiModel';
import DetailWebAgency from './pages/DetailWebAgency';
import DetailMatchmaking from './pages/DetailMatchmaking';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBarCopy />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<VisionHome />} />
            <Route path="/vision-home" element={<VisionHome />} />
            <Route path="/service-copy" element={<ServiceStartCopy />} />
            <Route path="/vision/ai-ads" element={<DetailAiAds />} />
            <Route path="/vision/ai-model" element={<DetailAiModel />} />
            <Route path="/vision/web-agency" element={<DetailWebAgency />} />
            <Route path="/vision/matchmaking" element={<DetailMatchmaking />} />
            
            {/* Placeholders for un-implemented routes */}
            <Route path="/gallery" element={<div className="pt-32 text-center h-screen">Gallery Page (Coming Soon)</div>} />
            <Route path="/contact" element={<div className="pt-32 text-center h-screen">Contact Page (Coming Soon)</div>} />
            <Route path="/about" element={<div className="pt-32 text-center h-screen">About Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
