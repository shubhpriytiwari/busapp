import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { BookingComponent } from './booking/booking';
import { HistoryComponent } from './history/history';

export const routes: Routes = [
  { path: '', component: LoginComponent },  // 👈 default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'history', component: HistoryComponent }
];
