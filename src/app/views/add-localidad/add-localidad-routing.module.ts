import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLocalidadPage } from './add-localidad.page';

const routes: Routes = [
  {
    path: '',
    component: AddLocalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLocalidadPageRoutingModule {}
