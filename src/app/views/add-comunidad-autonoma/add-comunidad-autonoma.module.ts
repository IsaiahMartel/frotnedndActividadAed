import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddComunidadAutonomaPageRoutingModule } from './add-comunidad-autonoma-routing.module';

import { AddComunidadAutonomaPage } from './add-comunidad-autonoma.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddComunidadAutonomaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddComunidadAutonomaPage]
})
export class AddComunidadAutonomaPageModule {}
