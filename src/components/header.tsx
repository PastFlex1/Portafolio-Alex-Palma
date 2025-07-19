'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#experience', label: 'Trayectoria' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Volver al inicio">
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline">DevFolio</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
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
