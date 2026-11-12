import CallToAction from '@/components/CallToAction';
import HeroSection from '@/components/HeroSection';
import ProjectGallery from '@/components/ProjectGallery';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { company } from '@/data/company';
import { companyImages } from '@/data/companyImages';
import { projectCategories, projects } from '@/data/projects';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ProjectsPage() {
  useDocumentMeta({
    title: `Projects | ${company.name}`,
    description: `View company-provided photographs of ${company.name} fieldwork on distribution poles, overhead lines and electrical panels.`,
  });

  return (
    <>
      <HeroSection
        size="page"
        eyebrow="Our Projects"
        title="Fieldwork across electrical networks and infrastructure."
        description="Browse company-provided photographs of our fieldwork. Contact us for details about a specific scope of work."
        image={companyImages.poleInstallationArea}
        imageAlt="Company field photo of a pole work area and overhead conductors"
      />

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Company Fieldwork"
              title="Photos from our electrical work sites."
              description="These photographs show company fieldwork; they are not detailed project case studies."
            />
          </Reveal>
          <div className="mt-12">
            <ProjectGallery projects={projects} categories={projectCategories} />
          </div>
        </div>
      </section>

      <CallToAction
        title="Have a project in mind?"
        description="Send us the details of your site and we will come back with practical next steps and a clear scope."
        primaryLabel="Start a Project Enquiry"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </>
  );
}
