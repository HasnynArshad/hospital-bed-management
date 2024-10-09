import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bed-status', pathMatch: 'full' },
  { path: 'bed-status', component: DashboardComponent },
  // Add more routes as needed
];
