import { ArrowUpRight } from 'lucide-react';
import { categoryLabelFor } from '@/data/projects';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${project.title}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white text-left shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-100">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900 shadow-sm">
          {categoryLabelFor(project.category)}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-amber-500 text-navy-900 opacity-0 shadow-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" aria-hidden="true">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
        {project.isDemonstration && (
          <p className="mt-auto pt-5 text-xs font-medium uppercase tracking-wider text-slate-500">
            Demonstration image
          </p>
        )}
      </div>
    </button>
  );
}
