import { lazy } from 'react';
import { projects } from './projects';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LegalPage = lazy(() => import('../pages/LegalPage'));

const brand = 'M.A.D. Collaboratives';

export const routes = [
  { path: '/', title: `${brand} — Interior Architecture & Design by Naitik Parekh`, description: 'M.A.D. Collaboratives (Make A Difference) is a boutique design studio led by Principal Architect Naitik Parekh, creating refined, deeply personal residential interiors.', Component: HomePage },
  { path: '/projects', title: `Projects — ${brand}`, description: 'Residential interiors by M.A.D. Collaboratives: living rooms, bedrooms, dining and washrooms composed with a restrained palette and elevated materiality.', Component: ProjectsPage },
  { path: '/about', title: `About the Studio & Naitik Parekh — ${brand}`, description: 'M.A.D. Collaboratives is a boutique design studio led by Naitik Parekh, city planner, architect and interior designer.', Component: AboutPage },
  { path: '/contact', title: `Contact — ${brand}`, description: 'Start a conversation with M.A.D. Collaboratives about your home or space.', Component: ContactPage },
  ...projects.map(project => ({ path: `/projects/${project.slug}`, title: `${project.title} — ${brand}`, description: project.summary, image: project.coverImage, Component: () => <ProjectPage project={project} /> })),
  { path: '/privacy', title: `Privacy — ${brand}`, Component: () => <LegalPage type="privacy" /> },
  { path: '/terms', title: `Terms of Use — ${brand}`, Component: () => <LegalPage type="terms" /> },
];
