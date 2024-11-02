// src/pages/index.tsx
//import Header from '../components/Header';
//import HeroSection from '../components/HeroSection';
//import AboutSection from '../components/AboutSection';
//import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Image from 'next/image';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer /> 
    </>
  );
};

export default HomePage;
