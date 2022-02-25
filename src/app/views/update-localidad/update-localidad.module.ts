import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLocalidadPageRoutingModule } from './update-localidad-routing.module';

import { UpdateLocalidadPage } from './update-localidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLocalidadPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateLocalidadPage]
})
export class UpdateLocalidadPageModule {}
