import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-lg bg-white px-4 py-2 font-semibold text-navy-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <div key={pathname} className="animate-fade-in">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
