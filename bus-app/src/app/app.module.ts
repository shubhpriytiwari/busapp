import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { BookingComponent } from './booking/booking';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent, // ✅ imported (not declared)
    LoginComponent,
    DashboardComponent,
    BookingComponent,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'booking', component: BookingComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
