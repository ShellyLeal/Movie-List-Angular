import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { MoviesComponent }      from './movies/movies.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { page: 'dashboard'} },
  { path: 'detail/:id', component: MovieDetailComponent, data: { page: 'detail/:id'} },
  { path: 'movies', component: MoviesComponent, data: { page: 'movies'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
