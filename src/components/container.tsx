'use client';
import * as React from 'react';

export function Container({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={"mx-auto max-w-7xl px-4 " + className} {...props} />;
}
