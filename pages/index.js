import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import BrandsSection from '../components/BrandsSection';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <VideoSection />
      <BrandsSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
} 