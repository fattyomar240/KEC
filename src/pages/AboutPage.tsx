import { Home as HomeIcon, Lightbulb, Check, ShieldCheck, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import HeroSection from '@/components/HeroSection';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { company } from '@/data/company';
import { companyFieldworkPhotos, companyImages } from '@/data/companyImages';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: TowerControl,
    title: 'Poles and Networks',
    description: 'Pole installation, climbing inspections, repairs and overhead cable work for distribution networks.',
  },
  {
    icon: HomeIcon,
    title: 'Homes and Buildings',
    description: 'Residential house wiring for new builds, extensions and upgrades, finished neatly and tested before handover.',
  },
  {
    icon: Lightbulb,
    title: 'Public Lighting',
    description: 'Street lighting installation and maintenance that keeps roads, paths and public spaces safely lit.',
  },
];

const qualityPoints = [
  'Site surveys and clear scopes before work begins',
  'Work planned to the applicable technical requirements',
  'Tested, documented and clearly handed over',
  'Aftercare and maintenance support when you need it',
];

const safetySteps = [
  { number: '01', title: 'Assess the site', description: 'Survey the location, identify hazards and agree the method of work.' },
  { number: '02', title: 'Plan and secure', description: 'Prepare the work plan, equipment and controls so the crew can work safely.' },
  { number: '03', title: 'Deliver the work', description: 'Carry out the installation or repair to the agreed scope, with checks along the way.' },
  { number: '04', title: 'Test and handover', description: 'Verify the completed work and hand over clear records to the client.' },
];

export default function AboutPage() {
  useDocumentMeta({
    title: `About Us | ${company.name}`,
    description: `Learn about ${company.name}, our electrical installation and infrastructure services, our commitment to quality and our approach to safe fieldwork.`,
  });

  return (
    <>
      <HeroSection
        size="page"
        eyebrow="About Us"
        title="Reliable electrical work, delivered with a serious approach to safety."
        description={`${company.name} is an electrical installation and infrastructure company serving communities, businesses and public networks.`}
        image={companyImages.elevatedLineWork}
        imageAlt="Company field worker carrying out elevated work on electrical line equipment"
      />

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow={`About ${company.name}`}
              title="Infrastructure that people rely on every day."
              description={company.description}
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 100}>
                  <div className="group h-full rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-navy-900 transition-transform duration-500 group-hover:rotate-3">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-navy-900">{pillar.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{pillar.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={companyImages.panelTechnician}
              alt="Company field technician working at an electrical distribution panel"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Our Commitment to Quality"
              title="Every installation is planned, checked and documented."
              description="Quality is built into the process, from the first site visit to the final test. We would rather take the time to get the detail right than rush the work."
            />
            <ul className="mt-8 space-y-4">
              {qualityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-navy-900">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-amber-400">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-900 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-4 text-amber-400">
              <ShieldCheck className="h-8 w-8" aria-hidden="true" />
            </div>
            <SectionHeading
              tone="light"
              eyebrow="Our Approach to Safety"
              title="Safety is the starting point for every job, not an afterthought."
              description="Electrical work carries real risk. Our fieldwork follows a structured process so that people, property and the network are protected at every stage."
              className="mt-6"
            />
          </Reveal>

          <ol className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {safetySteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <li className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors duration-500 hover:border-amber-400/60 hover:bg-white/10">
                  <span className="text-sm font-bold tracking-[0.2em] text-amber-400">{step.number}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-100">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Fieldwork"
              title={`Life on site with the ${company.name} team.`}
              description="Company-provided photographs of electrical network, line crew and panel fieldwork."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {companyFieldworkPhotos.map((photo, index) => (
              <Reveal key={photo.src} delay={index * 90}>
                <figure className="group overflow-hidden rounded-2xl bg-navy-100 shadow-card">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Want to work with a team that takes safety and quality seriously?"
        description="Tell us about your site or network and we will advise on the right approach and next steps."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </>
  );
}
