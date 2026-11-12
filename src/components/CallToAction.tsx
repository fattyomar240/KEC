import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface CallToActionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  image?: string;
}

export default function CallToAction({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  image,
}: CallToActionProps) {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy-900 shadow-lift">
        {image && (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
        )}
        <div className="relative grid items-center gap-10 px-8 py-14 sm:px-14 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <SectionHeading tone="light" title={title} description={description} />
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch">
            <Button to={primaryTo} variant="accent" size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button to={secondaryTo} variant="outline-light" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
