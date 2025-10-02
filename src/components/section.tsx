'use client';
import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'main' | 'article' | 'aside' | 'header' | 'footer' | 'nav';
  children?: React.ReactNode;
}

export function Section({ as = 'section', className = '', children, ...props }: SectionProps) {
  const Component = as;
  return <Component className={className} {...props}>{children}</Component>;
}
