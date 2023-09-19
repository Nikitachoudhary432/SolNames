import { IRoute } from './interfaces';
import { HomePage } from './containers/home/loadable';
import { Dashboard } from './containers/dashboard/loadable';
import { Domain } from './containers/domain/loadable';
import { Connection } from './containers/connection/loadable';
import { Cart } from './containers/ItemCart/loadable';
import { Profile } from './containers/Profile/loadable';
import { ViewDomain } from './containers/ViewDomain/loadable';

export enum AppPages {
  Home = '/',
  Dashboard = '/dashboard',
  Connection = '/connection',
  Domain = '/domain',
  Cart = '/cart',
  Profile = '/profile',
  ViewDomain = '/viewdomain',
}
export const routes: Array<IRoute> = [
  {
    key: 'home-route',
    title: 'Home',
    path: AppPages.Home,
    enabled: true,
    component: HomePage,
  },
  {
    key: 'dashboard-route',
    title: 'Dashboard',
    path: AppPages.Dashboard,
    enabled: true,
    component: Dashboard,
  },
  {
    key: 'connection-route',
    title: 'Connection',
    path: AppPages.Connection,
    enabled: true,
    component: Connection,
  },
  {
    key: 'domain-route',
    title: 'Domain',
    path: AppPages.Domain,
    enabled: true,
    component: Domain,
  },
  {
    key: 'cart-route',
    title: 'Cart',
    path: AppPages.Cart,
    enabled: true,
    component: Cart,
  },
  {
    key: 'profile-route',
    title: 'Profile',
    path: AppPages.Profile,
    enabled: true,
    component: Profile,
  },
  {
    key: 'viewDomain-route',
    title: 'View Domain',
    path: AppPages.ViewDomain,
    enabled: true,
    component: ViewDomain,
  },
];
