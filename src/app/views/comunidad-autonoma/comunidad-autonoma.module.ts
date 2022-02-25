import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunidadAutonomaPageRoutingModule } from './comunidad-autonoma-routing.module';

import { ComunidadAutonomaPage } from './comunidad-autonoma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunidadAutonomaPageRoutingModule
  ],
  declarations: [ComunidadAutonomaPage]
})
export class ComunidadAutonomaPageModule {}
