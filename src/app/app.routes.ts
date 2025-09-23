import { Routes } from '@angular/router';
import {Register} from './register/register';
import {Login} from './login/login';
import {Dashboard} from './dashboard/dashboard';
import {SuppliersList} from './suppliers-list/suppliers-list';
import {Members} from './members/members';
import {Vendors} from './vendors/vendors';
import {SupportTickets} from './support-tickets/support-tickets';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'suppliers',
    component:SuppliersList,

  },
  {
    path:'crm',
    component: Dashboard,
  },
  {
    path:'members',
    component: Members,
  },
  {
    path:'vendors',
    component: Vendors,
  },
  {
    path:'tickets',
    component: SupportTickets,
  },
  { path: '**', redirectTo: 'login' }
];
