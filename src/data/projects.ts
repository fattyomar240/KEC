import { companyImages } from '@/data/companyImages';
import type { Project, ProjectCategory } from '@/types';

export const projectCategories: ProjectCategory[] = [
  { id: 'pole-installation', label: 'Pole Installation' },
  { id: 'pole-maintenance', label: 'Pole Maintenance' },
  { id: 'overhead-cables', label: 'Overhead Cables' },
  { id: 'infrastructure', label: 'Infrastructure' },
];

export const projects: Project[] = [
  {
    id: 'distribution-pole-fieldwork',
    title: 'Distribution Pole Fieldwork',
    description: 'Company photo showing a distribution pole carrying overhead conductors.',
    category: 'pole-installation',
    image: companyImages.distributionPole,
    imageAlt: 'Distribution pole carrying overhead conductors beneath a cloudy sky',
    isDemonstration: false,
  },
  {
    id: 'roadside-pole-network',
    title: 'Roadside Pole Network',
    description: 'Company photo showing electrical network structures beside a paved road.',
    category: 'pole-installation',
    image: companyImages.poleNetworkRoadside01,
    imageAlt: 'Electrical network structures beside a paved road',
    isDemonstration: false,
  },
  {
    id: 'elevated-line-work',
    title: 'Elevated Line Work',
    description: 'Company fieldwork photo of a worker carrying out elevated work on line equipment.',
    category: 'pole-maintenance',
    image: companyImages.elevatedLineWork,
    imageAlt: 'Field worker carrying out elevated work on electrical line equipment',
    isDemonstration: false,
  },
  {
    id: 'pole-structure-crew',
    title: 'Distribution Structure Crew',
    description: 'Company fieldwork photo of a crew working on an elevated electrical structure.',
    category: 'pole-maintenance',
    image: companyImages.distributionStructureCrew,
    imageAlt: 'Crew working on an elevated electrical distribution structure',
    isDemonstration: false,
  },
  {
    id: 'cable-reel-fieldwork',
    title: 'Cable Reel Fieldwork',
    description: 'Company photo of a field crew beside a cable reel at a work site.',
    category: 'overhead-cables',
    image: companyImages.cableReelTeam,
    imageAlt: 'Two field crew members beside a cable reel at a work site',
    isDemonstration: false,
  },
  {
    id: 'overhead-line-crew',
    title: 'Overhead Line Crew',
    description: 'Company photo showing workers carrying out elevated work on overhead conductors.',
    category: 'overhead-cables',
    image: companyImages.overheadLineTeam01,
    imageAlt: 'Workers carrying out elevated work on overhead conductors',
    isDemonstration: false,
  },
  {
    id: 'electrical-panel-work',
    title: 'Electrical Panel Work',
    description: 'Company fieldwork photo of a technician working on cables inside an electrical panel.',
    category: 'infrastructure',
    image: companyImages.panelCableWork,
    imageAlt: 'Technician working on cables inside an electrical panel',
    isDemonstration: false,
  },
  {
    id: 'distribution-line-insulator',
    title: 'Distribution Line Insulator',
    description: 'Company fieldwork photo showing a technician working with distribution-line insulator hardware.',
    category: 'infrastructure',
    image: companyImages.insulatorMaintenance,
    imageAlt: 'Technician working with insulator hardware on a distribution line',
    isDemonstration: false,
  },
];

export const categoryLabelFor = (id: Project['category']): string =>
  projectCategories.find((category) => category.id === id)?.label ?? id;
