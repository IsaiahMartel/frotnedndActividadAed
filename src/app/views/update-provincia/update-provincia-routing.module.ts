import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProvinciaPage } from './update-provincia.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateProvinciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProvinciaPageRoutingModule {}
