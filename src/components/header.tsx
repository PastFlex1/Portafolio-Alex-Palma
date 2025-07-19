'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollY >= sectionTop - 150) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#experience', label: 'Trayectoria' },
    { href: '#projects', label: 'Proyectos' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-shadow duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Volver al inicio">
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline">Alex Palma</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full bg-secondary/50 p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeSection === link.href.substring(1)
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'hover:bg-accent/50 hover:text-accent-foreground'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact">
          <Button className="hidden md:inline-flex" size="sm">
            Contáctame
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
