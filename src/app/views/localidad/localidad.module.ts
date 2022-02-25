import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalidadPageRoutingModule } from './localidad-routing.module';

import { LocalidadPage } from './localidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalidadPageRoutingModule
  ],
  declarations: [LocalidadPage]
})
export class LocalidadPageModule {}
