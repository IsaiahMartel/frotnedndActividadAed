import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'comunidad-autonoma',
    loadChildren: () => import('./views/comunidad-autonoma/comunidad-autonoma.module').then( m => m.ComunidadAutonomaPageModule)
  },
  {
    path: 'localidad',
    loadChildren: () => import('./views/localidad/localidad.module').then( m => m.LocalidadPageModule)
  },
  {
    path: 'provincia',
    loadChildren: () => import('./views/provincia/provincia.module').then( m => m.ProvinciaPageModule)
  },
  {
    path: 'localidad',
    loadChildren: () => import('./views/localidad/localidad.module').then( m => m.LocalidadPageModule)
  },
  {
    path: 'provincia',
    loadChildren: () => import('./views/provincia/provincia.module').then( m => m.ProvinciaPageModule)
  },
  {
    path: 'add-localidad',
    loadChildren: () => import('./views/add-localidad/add-localidad.module').then( m => m.AddLocalidadPageModule)
  },
  {
    path: 'add-provincia',
    loadChildren: () => import('./views/add-provincia/add-provincia.module').then( m => m.AddProvinciaPageModule)
  },
  {
    path: 'add-comunidad-autonoma',
    loadChildren: () => import('./views/add-comunidad-autonoma/add-comunidad-autonoma.module').then( m => m.AddComunidadAutonomaPageModule)
  },
  {
    path: 'update-comunidad-autonoma/:idComunidad',
    loadChildren: () => import('./views/update-comunidad-autonoma/update-comunidad-autonoma.module').then( m => m.UpdateComunidadAutonomaPageModule)
  },
  {
    path: 'update-provincia/:codPostal',
    loadChildren: () => import('./views/update-provincia/update-provincia.module').then( m => m.UpdateProvinciaPageModule)
  },
  {
    path: 'update-localidad/:idLocalidad',
    loadChildren: () => import('./views/update-localidad/update-localidad.module').then( m => m.UpdateLocalidadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
