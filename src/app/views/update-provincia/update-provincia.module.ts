import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProvinciaPageRoutingModule } from './update-provincia-routing.module';

import { UpdateProvinciaPage } from './update-provincia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateProvinciaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateProvinciaPage]
})
export class UpdateProvinciaPageModule {}
