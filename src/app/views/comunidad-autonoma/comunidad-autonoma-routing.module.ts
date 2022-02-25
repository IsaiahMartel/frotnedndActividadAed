import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunidadAutonomaPage } from './comunidad-autonoma.page';

const routes: Routes = [
  {
    path: '',
    component: ComunidadAutonomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunidadAutonomaPageRoutingModule {}
