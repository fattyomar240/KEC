import { ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';
import { company } from '@/data/company';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta({
    title: `Page Not Found | ${company.name}`,
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="flex min-h-[70svh] items-center px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-navy-600">Error 404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-navy-900 sm:text-5xl">This page could not be found.</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          The link may be outdated or the page may have moved. Return to the homepage to continue browsing.
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/" variant="navy" size="lg">
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
