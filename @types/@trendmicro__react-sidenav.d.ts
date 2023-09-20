// typings/@trendmicro__react-sidenav.d.ts

declare module '@trendmicro/react-sidenav' {
  import * as React from 'react';

  interface NavItemProps {
    onClick?: () => void;
    children?: React.ReactNode;
  }

  interface NavTextProps {
    children: React.ReactNode;
  }

  interface SideNavProps {
    style?: React.CSSProperties;
  }

  export const Nav: React.FC;
  export const SideNav: React.FC<SideNavProps>;
  export const NavItem: React.FC<NavItemProps>;
  export const NavText: React.FC<NavTextProps>;
}
