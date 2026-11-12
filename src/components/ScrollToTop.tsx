import { ArrowUp } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';

export default function ScrollToTop() {
  const visible = useScrolled(480);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500 hover:bg-amber-500 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
