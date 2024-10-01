// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust this import path as necessary

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Your login route
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login
];
