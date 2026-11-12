import { NavLink } from 'react-router-dom';
import { navItems } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-x-0 bottom-0 top-20 z-30 overflow-y-auto bg-navy-900 transition-all duration-300 ease-out lg:hidden ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <nav aria-label="Mobile navigation" className="flex flex-col gap-2 px-6 pb-10 pt-6">
        {navItems.map((item, index) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
            style={{ transitionDelay: isOpen ? `${index * 60}ms` : '0ms' }}
            className={({ isActive }) =>
              `flex items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold transition-all duration-300 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              } ${
                isActive ? 'bg-white/10 text-amber-300' : 'text-white hover:bg-white/5 hover:text-amber-300'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-amber-400"
        >
          Get in Touch
        </NavLink>
      </nav>
    </div>
  );
}
