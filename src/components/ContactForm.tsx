import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { ChevronDown, CircleCheck, MessageCircle, Send } from 'lucide-react';
import Button from '@/components/Button';
import { company } from '@/data/company';
import { emptyContactForm, validateContactForm } from '@/lib/contactValidation';
import { buildContactWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp';
import { services } from '@/data/services';
import type { ContactFormErrors, ContactFormStatus, ContactFormValues } from '@/types';

interface ContactFormProps {
  initialService?: string;
}

type FieldName = keyof ContactFormValues;

const fieldOrder: FieldName[] = ['fullName', 'phone', 'email', 'service', 'message'];
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwlopoyw';

const inputBase =
  'mt-2 w-full min-w-0 rounded-xl border bg-white px-4 py-3 text-base text-navy-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-navy-900 focus:outline-none focus:ring-4 focus:ring-amber-400/30';

const inputClass = (hasError: boolean) =>
  `${inputBase} ${hasError ? 'border-red-500 focus:border-red-600 focus:ring-red-200' : 'border-navy-200'}`;

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: ReactNode;
  children: ReactNode;
}

function Field({ id, label, error, required, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="ml-1 text-red-600" aria-hidden="true">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="mt-2 text-xs text-slate-500">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

export default function ContactForm({ initialService = '' }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({ ...emptyContactForm, service: initialService });
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [status, setStatus] = useState<ContactFormStatus>('idle');
  const [submissionError, setSubmissionError] = useState('');

  const errors: ContactFormErrors = validateContactForm(values);
  const visibleError = (field: FieldName) =>
    (attemptedSubmit || touched[field]) && errors[field] ? errors[field] : undefined;

  const updateField = (field: FieldName) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const markTouched = (field: FieldName) => () => setTouched((current) => ({ ...current, [field]: true }));

  const resetForm = () => {
    setValues({ ...emptyContactForm });
    setTouched({});
    setAttemptedSubmit(false);
    setSubmissionError('');
    setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setAttemptedSubmit(true);
    const firstInvalid = fieldOrder.find((field) => errors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('submitting');
    setSubmissionError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.fullName.trim(),
          email: values.email.trim(),
          _replyto: values.email.trim(),
          _subject: `Website enquiry from ${values.fullName.trim()}`,
          phone: values.phone.trim(),
          service: values.service || 'Not specified',
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        setSubmissionError('We could not send your enquiry. Please try again or send it through WhatsApp.');
        setStatus('error');
        return;
      }

      setStatus('submitted');
    } catch {
      setSubmissionError('We could not connect to the form service. Please try again or send it through WhatsApp.');
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return (
      <div role="status" className="animate-fade-up flex flex-col items-start gap-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CircleCheck className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-navy-900">Your enquiry has been sent.</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
            Thank you for contacting {company.name}. We have received your enquiry and will respond using the contact details
            you provided. You can also send it through WhatsApp if you prefer.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={buildWhatsAppUrl(buildContactWhatsAppMessage(values))} variant="navy" size="md">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Also message on WhatsApp
          </Button>
          <Button type="button" variant="outline-dark" size="md" onClick={resetForm}>
            Start a new enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-busy={status === 'submitting'}>
      {submissionError && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {submissionError}
        </p>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="contact-fullName" label="Full name" required error={visibleError('fullName')}>
          <input
            id="contact-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={updateField('fullName')}
            onBlur={markTouched('fullName')}
            placeholder="Jane Doe"
            aria-invalid={Boolean(visibleError('fullName'))}
            aria-describedby={visibleError('fullName') ? 'contact-fullName-error' : undefined}
            className={inputClass(Boolean(visibleError('fullName')))}
          />
        </Field>

        <Field id="contact-phone" label="Phone number" required error={visibleError('phone')} hint="Include your country code.">
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={updateField('phone')}
            onBlur={markTouched('phone')}
            placeholder="+1 555 000 1234"
            aria-invalid={Boolean(visibleError('phone'))}
            aria-describedby={visibleError('phone') ? 'contact-phone-error' : 'contact-phone-hint'}
            className={inputClass(Boolean(visibleError('phone')))}
          />
        </Field>

        <Field id="contact-email" label="Email address" required error={visibleError('email')}>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField('email')}
            onBlur={markTouched('email')}
            placeholder="you@company.com"
            aria-invalid={Boolean(visibleError('email'))}
            aria-describedby={visibleError('email') ? 'contact-email-error' : undefined}
            className={inputClass(Boolean(visibleError('email')))}
          />
        </Field>

        <Field id="contact-service" label="Service interested in" error={visibleError('service')}>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              value={values.service}
              onChange={updateField('service')}
              className={`${inputClass(false)} appearance-none pr-12`}
            >
              <option value="">Select a service (optional)</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other or not sure">Other or not sure</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-700"
              aria-hidden="true"
            />
          </div>
        </Field>
      </div>

      <Field
        id="contact-message"
        label="Project details"
        required
        error={visibleError('message')}
        hint={`${values.message.length} / 3000 characters`}
      >
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={updateField('message')}
          onBlur={markTouched('message')}
          placeholder="Tell us about the site, the work required and your preferred timeline."
          aria-invalid={Boolean(visibleError('message'))}
          aria-describedby={visibleError('message') ? 'contact-message-error' : 'contact-message-hint'}
          className={`${inputClass(Boolean(visibleError('message')))} resize-y`}
        />
      </Field>

      <div className="flex min-w-0 flex-col gap-4 border-t border-navy-100 pt-6">
        <div className="space-y-1">
          <p className="text-xs text-slate-500">
            Fields marked <span className="text-red-600">*</span> are required. Enquiries are sent through Formspree
            to {company.name}.
          </p>
          <p className="text-xs text-slate-500">Prefer WhatsApp? You can send your enquiry that way instead.</p>
        </div>
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
          <Button
            type="submit"
            variant="navy"
            size="lg"
            className="w-full sm:flex-1"
            disabled={status === 'submitting'}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
          </Button>
          <Button
            href={buildWhatsAppUrl(buildContactWhatsAppMessage(values))}
            variant="outline-dark"
            size="lg"
            className="w-full sm:flex-1"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Use WhatsApp
          </Button>
        </div>
      </div>
    </form>
  );
}
