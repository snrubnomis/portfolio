/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LogoGithub } from '@carbon/icons-react';
import PageWrapper from '../pages/wrapper/PageWrapper';
import NotFound from '../pages/not-found/NotFound';
import Welcome from '../pages/welcome/Welcome';
import { CloudDataServices } from '../components/projects/CloudDataServices';
import { WatsonAI } from '../components/projects/WatsonAI';
import { ApiConnect } from '../components/projects/ApiConnect';
import { Websphere } from '../components/projects/Websphere';
import { Other } from '../components/projects/Other';
import { Experience } from '../components/experience/Experience';
import { AboutMe } from '../components/aboutMe/AboutMe';

export const routes = [
  {
    index: true,
    path: '/',
    element: Welcome,
  },
  {
    path: '/aboutme',
    element: PageWrapper,
    component: AboutMe,
    carbon: {
      label: 'About Me',
      inHeader: true,
    },
  },
  {
    path: '/experience',
    element: PageWrapper,
    component: Experience,
    carbon: {
      label: 'Experience',
      inHeader: true,
    },
  },
  {
    path: '/projects',
    carbon: {
      label: 'Projects',
      inHeader: true,
    },
  },
  {
    path: '/projects/watson',
    element: PageWrapper,
    component: WatsonAI,
    carbon: {
      label: 'Watson AI',
    },
  },
  {
    path: '/projects/cds',
    element: PageWrapper,
    component: CloudDataServices,
    carbon: {
      label: 'IBM Cloud Data Services',
    },
  },
  {
    path: '/projects/apiconnect',
    element: PageWrapper,
    component: ApiConnect,
    carbon: {
      label: 'API Connect',
    },
  },
  {
    path: '/projects/wsrr',
    element: PageWrapper,
    component: Websphere,
    carbon: {
      label: 'WebSphere',
    },
  },
  {
    path: '/projects/other',
    element: PageWrapper,
    component: Other,
    carbon: {
      label: 'Other',
    },
  },
  {
    carbon: {
      virtualPath: '/linkedin',
      inSideNav: true,
      label: 'LinkedIn',
      icon: LogoGithub,
      href: `https://www.linkedin.com/in/simonburns`,
      target: "_blank",
    },
  },
  {
    carbon: {
      virtualPath: '/github',
      inSideNav: true,
      label: 'GitHub',
      icon: LogoGithub,
      href: `https://github.com/snrubnomis`,
      target: "_blank",
    },
  },

  {
    path: '*',
    element: NotFound,
    status: 404,
  },
];

// The routes config is a flat structure defined for use with react-router.
// Here we organize the routes into a hierarchy for use by the Carbon header and sidenav
// NOTE: The routes are processed outside of a component as they are not dynamic.
const routesProcessed = routes.map((route) => {
  if (!route.carbon) {
    return route;
  }

  const path = route.path || route.carbon.virtualPath;

  const subMenu = routes.filter((subRoute) => {
    // Only include routes with carbon config in navigation menus
    if (!subRoute.carbon) return false;

    const subPath = subRoute.path || subRoute.carbon.virtualPath;
    const childPath = new RegExp(`^${path}/[^/]+$`); // match direct parent only

    return !route.index && subPath && childPath.test(subPath);
  });

  if (subMenu && subMenu.length > 0) {
    // add sub menu to parent
    route.carbon.subMenu = subMenu;

    // mark child as in sub menu
    subMenu.forEach((menu) => {
      const subPath = menu.path || menu.carbon.virtualPath;
      // Carbon should never be blank
      menu.carbon = menu.carbon || { label: subPath };
      menu.carbon.inSubMenu = true;
    });
  }

  return route;
});

export const routesInHeader = routesProcessed.filter(
  (route) => route.carbon && route.carbon.inHeader && !route.carbon.inSubMenu,
);

export const routesInSideNav = routesProcessed.filter(
  (route) => route.carbon && route.carbon.inSideNav && !route.carbon.inSubMenu,
);
