import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-localidad',
  templateUrl: './add-localidad.page.html',
  styleUrls: ['./add-localidad.page.scss'],
})
export class AddLocalidadPage implements OnInit {
  addForm = this.formBuilder.group({
    nombre: '',
    poblacion: '',
  });

  constructor(private formBuilder : FormBuilder, 
    private localidadService: LocalidadService,) { }

  ngOnInit() {
  }


  onSubmit(): void {
    this.localidadService.addLocalidad(this.addForm.value).subscribe(() => {

      this.addForm.reset();

      window.history.back();

    });
  

}}






