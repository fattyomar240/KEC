# KAMBAI Electrical Consultancy Website

This is the public website for KAMBAI Electrical Consultancy. It introduces the
company, describes its services, shows company fieldwork photographs, and helps
visitors contact the business.

## What the website does

- **Home (`/`)** — introduces the company, highlights services and fieldwork,
  and links visitors to contact information.
- **About (`/about`)** — describes the company and its approach to work.
- **Services (`/services`)** — lists electrical services and links to enquiries.
- **Projects (`/projects`)** — displays fieldwork photographs by category.
- **Contact (`/contact`)** — shows contact details, sends enquiries through
  Formspree, and provides WhatsApp as an alternative.

The site does not have a custom backend, database, or admin area. The contact
form sends enquiries through [Formspree](https://formspree.io/) to the business
email configured for that Formspree form. WhatsApp is also available as an
alternative; visitors must press **Send** in WhatsApp to deliver that message.
Enquiries submitted through the form are handled by Formspree, not stored by
this website.

## Contact details and company content

The shared business details are in [`src/data/company.ts`](./src/data/company.ts).
Update them there so that the header/footer/contact page and WhatsApp links stay
consistent.

Current contact details:

- Phone and WhatsApp: **+220 877013162**
- Email: **ansukambai663@gmail.com**
- Address: **Barajally, Gambia**
- Form handler: Formspree endpoint `xwlopoyw`

Confirm that the address is the preferred public location before launch, or
remove it from the site if the business does not want to publish it.

Service descriptions and images are in
[`src/data/services.ts`](./src/data/services.ts). Portfolio entries and their
categories are in [`src/data/projects.ts`](./src/data/projects.ts). Company
photos are listed in [`src/data/companyImages.ts`](./src/data/companyImages.ts).
Only publish photographs the company is allowed to use, and check captions and
project descriptions for accuracy.

## Images

Public image files are served directly from the `public` folder:

- Company logo: `public/images/brand/company-logo.png`
- Company photographs: `public/images/company/`

For example, `public/images/company/distribution-pole.jpg` is referenced in the
website as `/images/company/distribution-pole.jpg`. Add new images to the
appropriate folder, then reference their public URL in `src/data/companyImages.ts`.
Keep filenames descriptive and use lowercase letters, numbers, and hyphens where
possible.

## Recent project changes

- Added the company logo at `public/images/brand/company-logo.png`.
- Organized the supplied company photographs in `public/images/company/` and
  connected them to the homepage, About page, service cards, and fieldwork
  gallery. The project gallery describes these as fieldwork photos, not detailed
  case studies.
- Updated the business name, phone/WhatsApp number, email, and location in
  `src/data/company.ts`.
- Connected the contact form to Formspree. It shows a confirmation after a
  successful response, an error if sending fails, and keeps WhatsApp available
  as another way to send the enquiry. The site does not keep its own submission
  database.
- Improved the mobile navigation, contact form, and floating WhatsApp button.
  The contact layout was checked at small phone widths as well as tablet and
  desktop widths.
- Updated the browser and social-preview metadata to use the company name.
- Corrected the hero image's priority hint for React and enabled React Router
  future flags to avoid development-console warnings.
- Removed the unused local Supabase contact-submission migration. There is no
  Supabase backend connection in the current website.

## TypeScript configuration

The app's TypeScript settings are in
[`tsconfig.app.json`](./tsconfig.app.json). It is currently working: the
`npm run typecheck` command runs `tsc --noEmit -p tsconfig.app.json` and passes
with the installed TypeScript 5.6.3.

Important settings:

- `include: ["src"]` checks the frontend source files.
- `strict: true` enables stricter type checking.
- `jsx: "react-jsx"` uses React's automatic JSX runtime.
- `moduleResolution: "bundler"` matches the Vite bundler environment.
- `noEmit: true` checks types without writing generated JavaScript.
- `paths: { "@/*": ["src/*"] }` lets app code import files using paths such as
  `@/components/Button`. This matches the `@` alias in `vite.config.ts`.
- `baseUrl: "."` anchors that alias at the project root for the current
  TypeScript version.

The root `tsconfig.json` contains no source files of its own; it references the
app config and `tsconfig.node.json`, which checks `vite.config.ts`. If an editor
shows a configuration error, use **TypeScript: Select TypeScript Version** in
VS Code to select the workspace version, then run `npm run typecheck` to see the
actual compiler result. Do not remove the alias settings unless the matching
Vite alias is also changed.

## Run the website on your computer

Install [Node.js](https://nodejs.org/) first. Then open a terminal in the
project folder and run:

```sh
npm install
npm run dev
```

Open the local address printed by Vite in your browser. The development server
updates the page as you edit files.

## Check and build for deployment

Run these commands before publishing:

```sh
npm run typecheck
npm run lint
npm run build
```

The installed TypeScript version can be checked with `npx tsc --version`.

The production website is generated in the `dist/` folder. Deploy the contents
of `dist/` to a static web host. The site has no custom backend or environment
secrets; Formspree handles contact-form submissions as an external service.

Before going live, check the Formspree dashboard to make sure the form delivers
to the correct business email, complete any email verification it requests, and
send a test enquiry from the deployed site. The Formspree form ID is used by the
public website and is not a private API key.

The site uses hash-based routes, so page URLs look like `/#/about`,
`/#/services`, `/#/projects`, and `/#/contact`. The browser keeps the route
after the `#` on the client, so refreshing these pages works on static hosting
without configuring an SPA rewrite or fallback.

To preview a production build on your computer, run:

```sh
npm run preview
```

## Project structure

```text
public/
  images/
    brand/             Company logo
    company/           Company fieldwork photos
src/
  components/          Reusable page parts, including navigation and forms
  data/                Company details, services, projects, and image paths
  hooks/                Reusable React behavior
  layouts/              Shared site layout
  lib/                  Contact validation and WhatsApp link helpers
  pages/                Home, About, Services, Projects, Contact, and 404 pages
  types/                Shared TypeScript types
index.html               Browser title and social/search metadata
package.json             Commands and project dependencies
vite.config.ts           Vite configuration and source import alias
```

## Main commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run typecheck` | Check TypeScript types |
| `npm run lint` | Check code style and common issues |
| `npm run build` | Create the deployable production site in `dist/` |
| `npm run preview` | Preview the production build locally |
