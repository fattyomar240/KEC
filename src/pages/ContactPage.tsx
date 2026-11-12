import { useSearchParams } from 'react-router-dom';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';
import Reveal from '@/components/Reveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { company } from '@/data/company';
import { companyImages } from '@/data/companyImages';
import { services } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export default function ContactPage() {
  useDocumentMeta({
    title: `Contact | ${company.name}`,
    description:
      `Contact ${company.name} for electrical installation, pole works, overhead cable work, house wiring and street lighting. Send an enquiry or chat on WhatsApp.`,
  });

  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service');
  const initialService = services.find((service) => service.id === requestedService)?.title ?? '';

  const details: ContactDetail[] = [
    {
      icon: Phone,
      label: 'Phone',
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      label: 'Office address',
      value: company.address,
    },
    {
      icon: Building2,
      label: 'Business location',
      value: company.location,
    },
  ];

  return (
    <>
      <HeroSection
        size="page"
        eyebrow="Contact"
        title="Let's discuss your electrical project."
        description="Send us your requirements and our team will respond with next steps. For urgent matters, call or message us on WhatsApp."
        image={companyImages.panelTeamWork}
        imageAlt="Company team member carrying out electrical panel work"
      />

      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12">
          <Reveal className="min-w-0">
            <div className="min-w-0 rounded-3xl border border-navy-100 bg-white p-4 shadow-card sm:p-7 lg:p-10">
              <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Send an enquiry</h2>
              <p className="mt-3 text-[15px] text-slate-600">
                Send the form to contact us by email, or choose WhatsApp if you prefer. You can also reach us directly
                using the details below.
              </p>
              <div className="mt-8">
                <ContactForm initialService={initialService} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <aside className="flex h-full min-w-0 flex-col gap-8 rounded-3xl bg-navy-900 p-6 text-white shadow-lift sm:p-10">
              <div>
                <h2 className="text-2xl font-extrabold">Contact details</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-100">
                  Prefer to talk directly? Reach {company.name} using any of the options below.
                </p>
              </div>

              <ul className="space-y-6">
                {details.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <li key={detail.label} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-200">{detail.label}</p>
                        {detail.href ? (
                          <a href={detail.href} className="mt-1 block break-words font-semibold text-white transition-colors hover:text-amber-300">
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-semibold text-white">{detail.value}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-3 border-t border-white/10 pt-8">
                <p className="text-sm text-navy-100">Prefer a quick message?</p>
                <WhatsAppButton variant="inline" className="w-full" />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
