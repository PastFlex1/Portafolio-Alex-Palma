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
import ScrollVelocity from '@/components/scroll-velocity';

export default function Home() {
  return (
    <div className="bg-background">
      <Particles 
            className="fixed inset-0 -z-10 h-full w-full"
            particleColors={['#9400D3', '#FF69B4', '#E6E6FA']}
            particleCount={500}
            particleBaseSize={30}
            particleSpread={15}
            speed={0.05}
      />
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-background/50 via-background/80 to-background"></div>

      <Header />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-y-auto overflow-x-hidden">
        <div className="snap-start"><HeroSection /></div>
        <div className="snap-start"><AboutSection /></div>
        <div className="snap-start"><SkillsSection /></div>
        <div className="snap-start">
            <ScrollVelocity 
                texts={["- Frontend Developer -", "- UI/UX Designer -"]}
                velocity={50}
                className="font-headline text-primary"
                scrollerClassName="md:text-[7rem] md:leading-[7rem]"
            />
        </div>
        <div className="snap-start"><ExperienceTimelineSection /></div>
        <div className="snap-start"><ProjectsSection /></div>
        <div className="snap-start"><ResumeSection /></div>
        <div className="snap-start"><ContactSection /></div>
        <div className="snap-start"><Footer /></div>
      </div>
    </div>
  );
}
