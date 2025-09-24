import { Routes } from '@angular/router';
import {Register} from './register/register';
import {Login} from './login/login';
import {Dashboard} from './dashboard/dashboard';
import {Members} from './members/members';
import {Vendors} from './vendors/vendors';
import {SupportTickets} from './support-tickets/support-tickets';
import {Publication} from './publication/publication';
import {Promotion} from './promotion/promotion';
import {Annancements} from './annancements/annancements';
import {QuestFuel} from './quest-fuel/quest-fuel';
import {MembershipApplications} from './membership-applications/membership-applications';
import {Finance} from './finance/finance';

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
    path: 'publications',
    component: Publication,
  },
  {
    path: 'promotion',
    component: Promotion,
  },
  {
    path: 'announcement',
    component: Annancements,
  },
  {
    path: 'quest-fuel',
    component: QuestFuel,
  },
  {
    path: 'membershipApplication',
    component: MembershipApplications,
  },
  {
    path: 'finance',
    component: Finance,
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
