import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProvinciaPageRoutingModule } from './add-provincia-routing.module';

import { AddProvinciaPage } from './add-provincia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProvinciaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddProvinciaPage]
})
export class AddProvinciaPageModule {}
