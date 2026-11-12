import { Clock, MessageSquare, ShieldCheck, Gauge } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import HeroSection from '@/components/HeroSection';
import ProjectGallery from '@/components/ProjectGallery';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { company } from '@/data/company';
import { companyImages } from '@/data/companyImages';
import { projectCategories, projects } from '@/data/projects';
import { services } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: ShieldCheck,
    title: 'Safety-first fieldwork',
    description: 'Every job begins with a site assessment and clear safety controls before any work starts.',
  },
  {
    icon: Gauge,
    title: 'Technical precision',
    description: 'Installations are planned, executed and tested to the technical requirements of the work.',
  },
  {
    icon: Clock,
    title: 'Dependable scheduling',
    description: 'Realistic timelines and regular progress updates so you always know what happens next.',
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    description: 'One point of contact from the first enquiry through to final handover and aftercare.',
  },
];

const introHighlights = [
  'Pole installation, climbing and repair',
  'Overhead cable and transformer-related work',
  'Residential wiring and street lighting',
];

export default function HomePage() {
  useDocumentMeta({
    title: `${company.name} | Electrical Installation & Infrastructure`,
    description: `${company.name} provides electrical pole installation, overhead cable work, residential wiring, street lighting and transformer services.`,
  });

  const featuredServices = services.slice(0, 4);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <HeroSection
        eyebrow="Electrical Installation & Infrastructure"
        title="Powering Infrastructure. Connecting Communities."
        description={`${company.name} delivers electrical installation, pole works, overhead cable services and street lighting for communities, businesses and public infrastructure.`}
        image={companyImages.roadPoleNetwork}
        imageAlt="Company photo of an overhead distribution network following a roadside route"
        primaryAction={{ label: 'Explore Our Services', to: '/services' }}
        secondaryAction={{ label: 'Contact Us', to: '/contact' }}
      />

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={companyImages.brandedPanelWork}
                alt="Company team member working at an electrical panel"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift sm:aspect-[5/4]"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-lift sm:block">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Our focus</p>
                <p className="mt-1 text-lg font-bold">Safe, reliable power networks</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow={`Introducing ${company.name}`}
              title="A dependable partner for electrical installation and infrastructure."
              description={company.description}
            />
            <ul className="mt-8 space-y-4">
              {introHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-navy-900">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button to="/about" variant="outline-dark" size="lg">
                About {company.name}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/60 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Featured Services"
                title="Electrical services built for safe, lasting networks."
              />
            </Reveal>
            <Reveal delay={120}>
              <Button to="/services" variant="outline-dark" size="md">
                View all services
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={`Why Choose ${company.name}`}
              title="Quality, safety and clear communication on every job."
              description="Electrical infrastructure supports daily life. We bring a disciplined, safety-first approach to every site, large or small."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 90}>
                  <div className="group h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lift">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-400 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-navy-900">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading eyebrow="Company Fieldwork" title="A look at our electrical fieldwork." />
            </Reveal>
            <Reveal delay={120}>
              <Button to="/projects" variant="outline-dark" size="md">
                Explore all projects
              </Button>
            </Reveal>
          </div>
          <div className="mt-14">
            <ProjectGallery projects={featuredProjects} categories={projectCategories} showFilter={false} />
          </div>
        </div>
      </section>

      <CallToAction
        title="Planning a project? Let's discuss what your site needs."
        description="Share your requirements and our team will respond with the next steps, whether it is a single pole repair or a full network installation."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="View Our Projects"
        secondaryTo="/projects"
        image={companyImages.poleNetworkRoadside02}
      />
    </>
  );
}
