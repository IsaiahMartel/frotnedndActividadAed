import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateComunidadAutonomaPageRoutingModule } from './update-comunidad-autonoma-routing.module';

import { UpdateComunidadAutonomaPage } from './update-comunidad-autonoma.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateComunidadAutonomaPageRoutingModule, 
    ReactiveFormsModule,
  ],
  declarations: [UpdateComunidadAutonomaPage]
})
export class UpdateComunidadAutonomaPageModule {}
