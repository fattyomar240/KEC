import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { company } from '@/data/company';
import { navItems } from '@/data/navigation';
import { services } from '@/data/services';

const socialIcons: Record<string, typeof Linkedin> = {
  LinkedIn: Linkedin,
  Facebook,
  Instagram,
};

export default function Footer() {
  const activeSocials = company.social.filter((link) => link.url);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-navy-200">{company.description}</p>
          {activeSocials.length > 0 && (
            <ul className="flex items-center gap-3">
              {activeSocials.map((link) => {
                const Icon = socialIcons[link.label];
                return (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-300"
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</h3>
          <ul className="space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-amber-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h3>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to="/services" className="transition-colors hover:text-amber-300">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-amber-300">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-amber-300">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>
                {company.address}
                <br />
                {company.location}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p>Electrical installation, maintenance and infrastructure.</p>
        </div>
      </div>
    </footer>
  );
}
