import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLocalidadPage } from './update-localidad.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLocalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLocalidadPageRoutingModule {}
