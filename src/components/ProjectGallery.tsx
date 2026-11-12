import { useState } from 'react';
import { Images } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import ProjectLightbox from '@/components/ProjectLightbox';
import type { Project, ProjectCategory } from '@/types';

interface ProjectGalleryProps {
  projects: Project[];
  categories: ProjectCategory[];
  showFilter?: boolean;
}

export default function ProjectGallery({ projects, categories, showFilter = true }: ProjectGalleryProps) {
  const [active, setActive] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleProjects = active === 'all' ? projects : projects.filter((project) => project.category === active);
  const counts = projects.reduce<Record<string, number>>((acc, project) => {
    acc[project.category] = (acc[project.category] ?? 0) + 1;
    return acc;
  }, {});

  const handleFilterChange = (id: string) => {
    setActive(id);
    setLightboxIndex(null);
  };

  return (
    <div className="space-y-10">
      {showFilter && (
        <ProjectFilter
          categories={categories}
          active={active}
          counts={counts}
          total={projects.length}
          onChange={handleFilterChange}
        />
      )}

      {visibleProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setLightboxIndex(index)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-navy-200 bg-navy-50/50 px-6 py-16 text-center">
          <Images className="h-8 w-8 text-navy-400" aria-hidden="true" />
          <p className="font-semibold text-navy-900">No projects in this category yet.</p>
          <p className="text-sm text-slate-600">Choose another category to view our work.</p>
        </div>
      )}

      <ProjectLightbox
        projects={visibleProjects}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
