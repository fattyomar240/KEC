import type { Service } from '@/types';
import Button from '@/components/Button';

interface ServiceCardProps {
  service: Service;
  detailed?: boolean;
  showAction?: boolean;
}

export default function ServiceCard({ service, detailed = false, showAction = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy-950/10 transition-colors duration-500 group-hover:bg-navy-950/0" aria-hidden="true" />
      </div>

      <div className="relative flex flex-1 flex-col p-7">
        <span className="-mt-14 mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-navy-900 shadow-md transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
          <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold text-navy-900">{service.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {detailed ? service.description : service.summary}
        </p>
        {showAction && (
          <div className="mt-6">
            <Button to="/contact" variant="outline-dark" size="md">
              Request this service
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}
