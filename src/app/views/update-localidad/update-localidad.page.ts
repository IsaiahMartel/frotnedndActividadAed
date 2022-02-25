import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';
import { Location } from '@angular/common';
import { Localidad } from 'src/app/models/localidad/localidad';

@Component({
  selector: 'app-update-localidad',
  templateUrl: './update-localidad.page.html',
  styleUrls: ['./update-localidad.page.scss'],
})
export class UpdateLocalidadPage implements OnInit {
  idLocalidad: any;
  updateForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private localidadService: LocalidadService,
    private activatedRoute: ActivatedRoute,) { this.idLocalidad = this.activatedRoute.snapshot.paramMap.get('idLocalidad'); }

  ngOnInit() {
    this.fetchSchedule(this.idLocalidad);
    this.updateForm = this.formBuilder.group({
      nombre: [''],
      poblacion: [''],
 
    })
  
  }

  onSubmit(): void {
    let nuevaLocalidad:Localidad=new Localidad();
    nuevaLocalidad=this.updateForm.value;
    nuevaLocalidad.idLocalidad=this.idLocalidad;
    this.localidadService.updateLocalidad(nuevaLocalidad).subscribe(() => {

      this.updateForm.reset();
      window.history.back();



    });

  }

  fetchSchedule(idLocalidad) {
    this.localidadService.getLocalidadById(idLocalidad).subscribe((data) => {
        this.updateForm.setValue({
          nombre: data["nombre"],
          poblacion: data['poblacion'],
        });
      });
  }

}

