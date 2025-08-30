'use client';
import * as React from 'react';

type Props = React.HTMLAttributes<HTMLElement> & { as?: keyof JSX.IntrinsicElements };

export function Section({ as: Tag = 'section', className = '', ...props }: Props) {
  return <Tag className={className} {...props} />;
}
