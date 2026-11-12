import { MessageCircle } from 'lucide-react';
import { company } from '@/data/company';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline';
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ variant = 'floating', message, className = '' }: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message);

  if (variant === 'inline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lift ${className}`}
      >
        <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        Chat on WhatsApp
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${company.name} on WhatsApp`}
      className={`group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-emerald-600 p-0 text-white shadow-lift transition-all duration-300 hover:gap-2 hover:pr-5 focus-visible:ring-emerald-400 sm:bottom-6 sm:right-6 sm:h-14 sm:w-auto sm:justify-start sm:pl-4 sm:pr-4 ${className}`}
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="hidden max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-40 group-hover:opacity-100 sm:block">
        WhatsApp us
      </span>
    </a>
  );
}
