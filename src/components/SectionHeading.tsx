import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isLight = tone === 'light';

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
            isLight ? 'text-amber-300' : 'text-navy-600'
          } ${isCenter ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-amber-500" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] ${isLight ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {description && (
        <div
          className={`mt-5 text-base leading-relaxed sm:text-lg ${isLight ? 'text-navy-100' : 'text-slate-600'}`}
        >
          {description}
        </div>
      )}
    </div>
  );
}
