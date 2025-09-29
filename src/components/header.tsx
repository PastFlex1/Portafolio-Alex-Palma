'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { LanguageToggle } from './language-toggle';
import { ThemeToggle } from './theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

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
    { href: '#about', label: t('header.about') },
    { href: '#skills', label: t('header.skills') },
    { href: '#experience', label: t('header.experience') },
    { href: '#projects', label: t('header.projects') },
  ];

  const handleMobileMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-shadow duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={t('header.backToHome')}>
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
        <div className="hidden items-center gap-2 md:flex">
            <a href="#contact">
              <Button size="sm">
                {t('header.contact')}
              </Button>
            </a>
            <LanguageToggle />
            <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                   <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <SheetTitle><span className="sr-only">Mobile Menu</span></SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" onClick={handleMobileMenuLinkClick} className="flex items-center gap-2" aria-label="Volver al inicio">
                      <Code2 className="h-7 w-7 text-primary" />
                      <span className="font-bold text-lg font-headline">Alex Palma</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleMobileMenuLinkClick}
                        className={cn(
                          'rounded-md px-3 py-2 text-base font-medium transition-colors',
                           activeSection === link.href.substring(1)
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent hover:text-accent-foreground'
                        )}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t space-y-4">
                    <a href="#contact" className="w-full" onClick={handleMobileMenuLinkClick}>
                      <Button className="w-full" size="lg">
                        {t('header.contact')}
                      </Button>
                    </a>
                    <div className="flex justify-center">
                       <LanguageToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
