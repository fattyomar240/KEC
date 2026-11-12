import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';
import { navItems } from '@/data/navigation';
import { useScrolled } from '@/hooks/useScrolled';

export default function Navbar() {
  const { pathname } = useLocation();
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled && !menuOpen;
  const isLightText = isTransparent || menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        menuOpen
          ? 'bg-navy-900'
          : isTransparent
            ? 'bg-transparent'
            : 'border-b border-navy-100 bg-white/95 shadow-sm backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:gap-6 sm:px-6 lg:px-8">
        <Logo tone={isLightText ? 'light' : 'dark'} />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `group relative block px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                      isLightText
                        ? isActive
                          ? 'text-white'
                          : 'text-navy-100 hover:text-white'
                        : isActive
                          ? 'text-navy-900'
                          : 'text-slate-600 hover:text-navy-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-amber-500 transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/contact" variant="accent" size="md" className="hidden lg:inline-flex">
            Get in Touch
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              isLightText ? 'text-white hover:bg-white/10' : 'text-navy-900 hover:bg-navy-50'
            }`}
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
