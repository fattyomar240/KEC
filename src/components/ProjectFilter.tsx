import type { ProjectCategory } from '@/types';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  active: string;
  counts: Record<string, number>;
  total: number;
  onChange: (id: string) => void;
}

export default function ProjectFilter({ categories, active, counts, total, onChange }: ProjectFilterProps) {
  const options = [{ id: 'all', label: 'All Projects' }, ...categories];

  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = active === option.id;
        const count = option.id === 'all' ? total : (counts[option.id] ?? 0);
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'border-navy-900 bg-navy-900 text-white shadow-sm'
                : 'border-navy-100 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-navy-900 hover:text-navy-900'
            }`}
          >
            {option.label}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${isActive ? 'bg-amber-500 text-navy-900' : 'bg-navy-50 text-navy-700'}`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
