import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLocalidadPageRoutingModule } from './add-localidad-routing.module';

import { AddLocalidadPage } from './add-localidad.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLocalidadPageRoutingModule,
    ReactiveFormsModule, 
  ],
  declarations: [AddLocalidadPage]
})
export class AddLocalidadPageModule {}
