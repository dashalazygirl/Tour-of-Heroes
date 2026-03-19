import { Routes } from '@angular/router';
import { Heroes } from './heroes/heroes';
import { Dashboard } from './dashboard/dashboard';
import { HeroDetail } from './hero-detail/hero-detail'; // Импорт твоего класса

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'heroes', component: Heroes },

  { path: 'detail/:id', component: HeroDetail }, 
];
