import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import { company } from '@/data/company';
import { companyImages } from '@/data/companyImages';
import { services } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ServicesPage() {
  useDocumentMeta({
    title: `Electrical Services | ${company.name}`,
    description: `Explore ${company.name} electrical services: pole installation, pole climbing and repairs, overhead cable work, house wiring, street lighting and transformer work.`,
  });

  return (
    <>
      <HeroSection
        size="page"
        eyebrow="Our Services"
        title="Electrical services for poles, networks, homes and public lighting."
        description="From pole installation and overhead cable work to residential wiring and street lighting, we deliver the full range of electrical infrastructure services."
        image={companyImages.poleNetworkRoadside01}
        imageAlt="Company photo of electrical network structures beside a paved road"
      />

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 2) * 100}>
              <ServiceCard service={service} detailed showAction />
            </Reveal>
          ))}
        </div>
      </section>

      <CallToAction
        title="Need a service that is not listed?"
        description="We handle a wide range of electrical infrastructure work. Describe what you need and our team will confirm whether we can help."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="View Projects"
        secondaryTo="/projects"
      />
    </>
  );
}
