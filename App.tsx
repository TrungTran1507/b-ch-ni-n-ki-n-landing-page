
import React from 'react';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import ProductIntroSection from './components/ProductIntroSection';
import IngredientsSection from './components/IngredientsSection';
import ExpertOpinionSection from './components/ExpertOpinionSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaFormSection from './components/CtaFormSection';
import CertificationSection from './components/CertificationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <main>
        <PainPointsSection />
        <ProductIntroSection />
        <IngredientsSection />
        <ExpertOpinionSection />
        <TestimonialsSection />
        <CtaFormSection />
        <CertificationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
