import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NoteFormComponent } from './components/note-form.component';
import { LoginComponent } from './components/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: NoteFormComponent },
  { path: 'edit/:id', component: NoteFormComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard]
  }
];
