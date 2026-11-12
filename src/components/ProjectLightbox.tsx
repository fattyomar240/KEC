import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { categoryLabelFor } from '@/data/projects';
import type { Project } from '@/types';

interface ProjectLightboxProps {
  projects: Project[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export default function ProjectLightbox({ projects, index, onIndexChange, onClose }: ProjectLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null && projects[index] !== undefined;
  const count = projects.length;

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && index !== null) onIndexChange((index + 1) % count);
      if (event.key === 'ArrowLeft' && index !== null) onIndexChange((index - 1 + count) % count);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, index, count, onClose, onIndexChange]);


  if (!isOpen || index === null) return null;

  const project = projects[index];
  const goTo = (step: number) => onIndexChange((index + step + count) % count);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="animate-fade-up relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-lift"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-navy-950">
          <img
            key={project.id}
            src={project.image}
            alt={project.imageAlt}
            className="max-h-[70vh] w-full object-contain"
          />

          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Previous project"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy-900 shadow-md transition-transform duration-300 hover:scale-105"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Next project"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy-900 shadow-md transition-transform duration-300 hover:scale-105"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-600">
              {categoryLabelFor(project.category)} · {index + 1} of {count}
            </p>
            <h3 id="lightbox-title" className="mt-2 text-2xl font-extrabold text-navy-900">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
            {project.isDemonstration && (
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                Demonstration image
              </p>
            )}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
