import { Cable, Gauge, Home, Lightbulb, Plug, TowerControl, Wrench, Zap } from 'lucide-react';
import { companyImages } from '@/data/companyImages';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'pole-installation',
    title: 'Electrical Pole Installation',
    summary: 'Planned and safe installation of electrical poles for distribution and street networks.',
    description:
      'We handle site survey, excavation, pole setting, alignment and reinstatement, delivered to the standards required for dependable long-term service.',
    icon: TowerControl,
    image: companyImages.distributionPole,
    imageAlt: 'Electrical distribution pole and overhead conductors photographed by the company',
  },
  {
    id: 'pole-climbing',
    title: 'Pole Climbing and Maintenance',
    summary: 'Routine inspection and maintenance of electrical poles by dedicated field crews.',
    description:
      'Our crews carry out inspections, hardware checks, insulator replacement and preventive maintenance to extend the life of existing pole assets.',
    icon: Wrench,
    image: companyImages.elevatedLineWork,
    imageAlt: 'Company field worker carrying out elevated work on electrical line equipment',
  },
  {
    id: 'pole-repairs',
    title: 'Electrical Pole Repairs',
    summary: 'Rapid assessment and repair of damaged, leaning or faulty poles and fittings.',
    description:
      'From storm damage to ageing hardware, we assess the fault, make the repair safely and document the work so you know the network is back in service.',
    icon: Zap,
    image: companyImages.distributionStructureCrew,
    imageAlt: 'Company crew working on an elevated electrical distribution structure',
  },
  {
    id: 'overhead-cables',
    title: 'Overhead Electrical Cable Work',
    summary: 'Installation, stringing and maintenance of overhead conductors and service drops.',
    description:
      'We install, tension and maintain overhead cables for residential, commercial and public networks, with clearances and safety checks built into every step.',
    icon: Cable,
    image: companyImages.cableReelTeam,
    imageAlt: 'Company field crew beside a cable reel at an electrical work site',
  },
  {
    id: 'house-wiring',
    title: 'Residential House Wiring',
    summary: 'Complete wiring for new homes, extensions and upgrades to existing properties.',
    description:
      'Circuit design, cable routing, sockets, lighting points and distribution boards installed neatly, tested and handed over with clear documentation.',
    icon: Home,
    image: companyImages.panelCableWork,
    imageAlt: 'Company technician working on cables inside an electrical panel',
  },
  {
    id: 'street-lighting',
    title: 'Street Lighting Installation',
    summary: 'Design, installation and upkeep of street and public area lighting networks.',
    description:
      'We install lamp posts, cabling and control equipment, and provide maintenance programmes that keep roads and public spaces safely illuminated.',
    icon: Lightbulb,
    image: companyImages.roadPoleNetwork,
    imageAlt: 'Company photo of overhead distribution lines following a roadside route',
  },
  {
    id: 'transformers',
    title: 'Transformer-Related Work',
    summary: 'Installation support, connection and maintenance for distribution transformers.',
    description:
      'Our teams support transformer mounting, cable termination, earthing and routine checks, coordinated with the wider network to minimise disruption.',
    icon: Gauge,
    image: companyImages.insulatorMaintenance,
    imageAlt: 'Company technician working with insulator hardware on a distribution line',
  },
  {
    id: 'infrastructure',
    title: 'Electrical Infrastructure Services',
    summary: 'Broader electrical infrastructure support for networks, sites and utilities.',
    description:
      'Beyond the core services, we provide site-level electrical infrastructure work, including planning support, inspections and coordinated project delivery.',
    icon: Plug,
    image: companyImages.networkEquipment,
    imageAlt: 'Electrical equipment mounted on a distribution pole at a company work site',
  },
];
