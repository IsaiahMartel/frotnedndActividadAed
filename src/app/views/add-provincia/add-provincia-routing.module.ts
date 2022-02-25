import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProvinciaPage } from './add-provincia.page';

const routes: Routes = [
  {
    path: '',
    component: AddProvinciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProvinciaPageRoutingModule {}
