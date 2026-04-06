import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBarCopy from './components/NavBarCopy';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import VisionHome from './pages/VisionHome';
import ServiceStartCopy from './pages/ServiceStartCopy';
import DetailAiAds from './pages/DetailAiAds';
import DetailAiModel from './pages/DetailAiModel';
import DetailWebAgency from './pages/DetailWebAgency';
import DetailMatchmaking from './pages/DetailMatchmaking';
import DetailMarketing from './pages/DetailMarketing';
import DetailAiEducation from './pages/DetailAiEducation';
import Brand from './pages/Brand';
import DetailOpsDashboard from './pages/DetailOpsDashboard';
import Tech from './pages/Tech';
import About from './pages/About';
import Contact from './pages/Contact';

import DetailAiAdsPortfolio from './pages/DetailAiAdsPortfolio';
import DetailAiModelPortfolio from './pages/DetailAiModelPortfolio';
import DetailWebAgencyPortfolio from './pages/DetailWebAgencyPortfolio';
import DetailInfluencerPortfolio from './pages/DetailInfluencerPortfolio';
import DetailFittingPortfolio from './pages/DetailFittingPortfolio';
import DetailFoodPortfolio from './pages/DetailFoodPortfolio';
import DetailHairPortfolio from './pages/DetailHairPortfolio';
import DetailPagePortfolio from './pages/DetailPagePortfolio';
import DetailFashionPortfolio from './pages/DetailFashionPortfolio';
import DetailSnsAgencyPortfolio from './pages/DetailSnsAgencyPortfolio';
import DetailBeautyBrandPortfolio from './pages/DetailBeautyBrandPortfolio';
import DetailVisionAIPortfolio from './pages/DetailVisionAIPortfolio';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/vision/marketing" element={<DetailMarketing />} />
            <Route path="/vision/ai-education" element={<DetailAiEducation />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/brand/ops-dashboard" element={<DetailOpsDashboard />} />
            <Route path="/brand/ai-ads" element={<DetailAiAdsPortfolio />} />
            <Route path="/brand/ai-model" element={<DetailAiModelPortfolio />} />
            <Route path="/brand/web-agency" element={<DetailWebAgencyPortfolio />} />
            <Route path="/brand/influencer" element={<DetailInfluencerPortfolio />} />
            <Route path="/brand/fitting" element={<DetailFittingPortfolio />} />
            <Route path="/brand/food" element={<DetailFoodPortfolio />} />
            <Route path="/brand/hair" element={<DetailHairPortfolio />} />
            <Route path="/brand/detail-page" element={<DetailPagePortfolio />} />
            <Route path="/brand/fashion" element={<DetailFashionPortfolio />} />
            <Route path="/brand/sns-agency" element={<DetailSnsAgencyPortfolio />} />
            <Route path="/brand/beauty-brand" element={<DetailBeautyBrandPortfolio />} />
            <Route path="/brand/visionai-site" element={<DetailVisionAIPortfolio />} />
            <Route path="/tech" element={<Tech />} />

            {/* Placeholders for un-implemented routes */}
            <Route path="/gallery" element={<div className="pt-32 text-center h-screen">Gallery Page (Coming Soon)</div>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
