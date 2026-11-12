import type { ReactNode } from 'react';
import Button from '@/components/Button';

interface HeroAction {
  label: string;
  to: string;
}

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  size?: 'full' | 'page';
  children?: ReactNode;
}

export default function HeroSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
  size = 'full',
  children,
}: HeroSectionProps) {
  const isFull = size === 'full';

  return (
    <section
      className={`relative isolate flex w-full items-end overflow-hidden bg-navy-950 ${
        isFull ? 'min-h-[100svh]' : 'min-h-[52svh] sm:min-h-[60svh]'
      }`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        ref={(element) => element?.setAttribute('fetchpriority', 'high')}
      />
      <div className="absolute inset-0 -z-10 bg-navy-950/75" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"
        aria-hidden="true"
      />

      <div
        className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${
          isFull ? 'pb-20 pt-40 sm:pb-28' : 'pb-16 pt-36 sm:pb-20'
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="animate-fade-up mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
              <span className="h-px w-10 bg-amber-400" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1
            style={{ animationDelay: '120ms' }}
            className={`animate-fade-up font-extrabold tracking-tight text-white ${
              isFull ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-4xl sm:text-5xl lg:text-6xl'
            }`}
          >
            {title}
          </h1>
          <p
            style={{ animationDelay: '240ms' }}
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl"
          >
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div
              style={{ animationDelay: '360ms' }}
              className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            >
              {primaryAction && (
                <Button to={primaryAction.to} variant="accent" size="lg">
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button to={secondaryAction.to} variant="outline-light" size="lg">
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
