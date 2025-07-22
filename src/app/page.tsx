'use client';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ExperienceTimelineSection from '@/components/experience-timeline-section';
import ProjectsSection from '@/components/projects-section';
import ResumeSection from '@/components/resume-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import Particles from '@/components/particles';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Particles 
            className="absolute inset-0 -z-10 h-full w-full"
            particleColors={['#9400D3', '#FF69B4', '#E6E6FA']}
            particleCount={500}
            particleBaseSize={30}
            particleSpread={15}
            speed={0.05}
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background/50 via-background/80 to-background"></div>

      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimelineSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
