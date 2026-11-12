import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'accent' | 'navy' | 'outline-light' | 'outline-dark';
type ButtonSize = 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60';

const sizes: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const variants: Record<ButtonVariant, string> = {
  accent: 'bg-amber-500 text-navy-900 shadow-sm hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lift',
  navy: 'bg-navy-900 text-white shadow-sm hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift',
  'outline-light':
    'border border-white/70 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy-900',
  'outline-dark':
    'border border-navy-900 text-navy-900 hover:-translate-y-0.5 hover:bg-navy-900 hover:text-white',
};

const buttonClasses = (variant: ButtonVariant = 'accent', size: ButtonSize = 'md', extra = '') =>
  `${base} ${sizes[size]} ${variants[variant]} ${extra}`.trim();

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; href?: undefined };

type ExternalButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };

type Props = ButtonProps | LinkButtonProps | ExternalButtonProps;

export default function Button({ variant, size, className, children, ...rest }: Props) {
  const classes = buttonClasses(variant, size, className);

  if ('to' in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href !== undefined) {
    const external = rest.href.startsWith('http');
    const { href, ...anchorRest } = rest;
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
