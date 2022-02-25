import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComunidadAutonomaPage } from './add-comunidad-autonoma.page';

const routes: Routes = [
  {
    path: '',
    component: AddComunidadAutonomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddComunidadAutonomaPageRoutingModule {}
