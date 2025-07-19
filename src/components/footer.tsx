import { Github, Linkedin, Code2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Volver al inicio">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">DevFolio</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tu Nombre Aquí. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon"><Github className="h-5 w-5" /></Button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon"><Linkedin className="h-5 w-5" /></Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
