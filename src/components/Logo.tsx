import { Link } from 'react-router-dom';
import { company } from '@/data/company';

interface LogoProps {
  tone?: 'light' | 'dark';
}

export default function Logo({ tone = 'dark' }: LogoProps) {
  const isLight = tone === 'light';
  return (
    <Link
      to="/"
      className="group inline-flex min-w-0 items-center gap-2 rounded-lg sm:gap-3"
      aria-label={`${company.name} home`}
    >
      <img
        src="/images/brand/company-logo.png"
        alt=""
        className="h-10 w-10 shrink-0 rounded-lg bg-white object-contain p-0.5 shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-12 sm:w-12"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`max-w-[190px] text-[10px] font-extrabold leading-tight tracking-[0.06em] sm:hidden ${isLight ? 'text-white' : 'text-navy-900'}`}
        >
          {company.name}
        </span>
        <span
          className={`hidden text-xl font-extrabold tracking-[0.18em] sm:block ${isLight ? 'text-white' : 'text-navy-900'}`}
        >
          {company.name}
        </span>
        <span
          className={`mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.28em] sm:block ${isLight ? 'text-navy-100' : 'text-navy-500'}`}
        >
          Electrical Infrastructure
        </span>
      </span>
    </Link>
  );
}
