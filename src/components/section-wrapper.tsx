'use client';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const SectionWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative p-0.5 group", className)}>
      <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 rounded-xl blur-lg group-hover:opacity-70 group-hover:duration-200 animate-tilt"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
