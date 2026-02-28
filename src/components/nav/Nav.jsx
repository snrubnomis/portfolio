/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from '@carbon/react';

import { Link as RouterLink, useLocation } from 'react-router';

import { routesInHeader, routesInSideNav } from '../../routes/config';
import { NavHeaderItems } from './NavHeaderItems';
import { NavSideItems } from './NavSideItems';

export const Nav = () => {
  const location = useLocation();
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const toggleNav = () => {
    // Reason for this implementation of state change through an updater function:
    // https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    setIsSideNavExpanded((isExpanded) => !isExpanded);
  };

  return (
    <>
      <Header aria-label="Page header">
        <SkipToContent />
        <HeaderMenuButton
          aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
          onClick={toggleNav}
          isCollapsible={true}
          isActive={isSideNavExpanded}
          aria-expanded={isSideNavExpanded}
        />
        <HeaderName as={RouterLink} to="/" prefix="Simon Burns |">
          Portfolio
        </HeaderName>
        {routesInHeader.length > 0 && (
          <HeaderNavigation aria-label="Header navigation">
            <NavHeaderItems
              routesInHeader={routesInHeader}
              currentPath={location.pathname}
            />
          </HeaderNavigation>
        )}
      </Header>
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        isPersistent={false}
      >
        <SideNavItems>
          {routesInHeader.length > 0 && (
            <HeaderSideNavItems hasDivider>
              <NavHeaderItems
                routesInHeader={routesInHeader}
                currentPath={location.pathname}
                toggleNav={toggleNav}
              />
            </HeaderSideNavItems>
          )}

          <NavSideItems
            routesInSideNav={routesInSideNav}
            currentPath={location.pathname}
            toggleNav={toggleNav}
          />
        </SideNavItems>
      </SideNav>
    </>
  );
};
