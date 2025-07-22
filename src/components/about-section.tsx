
'use client';
import Image from 'next/image';
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiFigma, SiGithub, SiTailwindcss, SiHtml5
} from '@icons-pack/react-simple-icons';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import SplitText from './split-text';

const skills = [
  // Outer orbit
  { name: 'React', icon: <SiReact size={24} />, className: 'bg-blue-500/10 text-blue-400', orbit: 1 },
  { name: 'TypeScript', icon: <SiTypescript size={24} />, className: 'bg-sky-500/10 text-sky-400', orbit: 1 },
  { name: 'Next.js', icon: <SiNextdotjs size={24} />, className: 'bg-neutral-500/10 text-neutral-400', orbit: 1 },
  
  // Middle orbit
  { name: 'JavaScript', icon: <SiJavascript size={24} />, className: 'bg-yellow-500/10 text-yellow-400', orbit: 2 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, className: 'bg-cyan-500/10 text-cyan-400', orbit: 2 },
  { name: 'Figma', icon: <SiFigma size={24} />, className: 'bg-pink-500/10 text-pink-400', orbit: 2 },
  
  // Inner orbit
  { name: 'GitHub', icon: <SiGithub size={24} />, className: 'bg-green-500/10 text-green-400', orbit: 3 },
  { name: 'HTML5', icon: <SiHtml5 size={24} />, className: 'bg-orange-500/10 text-orange-400', orbit: 3 },
];

const OrbitingSkills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  const orbits = [
    { class: 'animate-spin-slow-1', size: 100, duration: 15, items: skills.filter(s => s.orbit === 1) },
    { class: 'animate-spin-slow-2', size: 75, duration: 20, items: skills.filter(s => s.orbit === 2) },
    { class: 'animate-spin-slow-3', size: 50, duration: 25, items: skills.filter(s => s.orbit === 3) },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
        {orbits.map((orbit, orbitIndex) => (
            <div 
              key={orbitIndex} 
              className={cn("absolute", orbit.class)}
              style={{
                width: `${orbit.size}%`,
                height: `${orbit.size}%`,
                border: '2px dashed hsl(var(--primary) / 0.1)',
                borderRadius: '50%',
                animationDuration: `${orbit.duration}s`,
              }}
            >
              {orbit.items.map((skill, skillIndex) => {
                const angle = (skillIndex / orbit.items.length) * 2 * Math.PI;
                const top = `calc(50% - 20px + ${-Math.cos(angle) * 50}%)`;
                const left = `calc(50% - 20px + ${Math.sin(angle) * 50}%)`;
                return (
                  <div
                    key={skill.name}
                    className={cn(
                      "absolute w-10 h-10 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm border border-primary/10",
                      skill.className,
                    )}
                    style={{ top, left }}
                  >
                    <div className={cn("animate-spin-reverse", orbit.class)} style={{ animationDuration: `${orbit.duration}s` }}>
                        {skill.icon}
                    </div>
                  </div>
                );
              })}
            </div>
        ))}
    </div>
  )
}

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex items-center justify-center min-h-[350px] lg:min-h-[450px]">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="https://placehold.co/400x400.png"
                      alt="Retrato profesional de Alex Palma"
                      width={400}
                      height={400}
                      className="object-cover rounded-full w-40 h-40 md:w-48 md:h-48 border-4 border-background shadow-lg"
                      data-ai-hint="professional portrait ecuadorian"
                    />
                </div>
                <OrbitingSkills />
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{t('about.badge')}</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <SplitText
                    text={t('about.title')}
                    from={{ y: 120, scaleY: 2.3, scaleX: 0.7, opacity: 0 }}
                    to={{ y: 0, scaleY: 1, scaleX: 1, opacity: 1 }}
                    duration={1}
                    ease="back.inOut(2)"
                    delay={30}
                 />
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                {t('about.paragraph1')}
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              {t('about.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
