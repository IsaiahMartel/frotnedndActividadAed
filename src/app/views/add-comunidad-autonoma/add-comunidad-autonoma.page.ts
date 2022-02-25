import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComunidadAutonomaService } from 'src/app/services/comunidad-autonoma/comunidad-autonoma.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-comunidad-autonoma',
  templateUrl: './add-comunidad-autonoma.page.html',
  styleUrls: ['./add-comunidad-autonoma.page.scss'],
})
export class AddComunidadAutonomaPage implements OnInit {
  idComunidad = this.activatedRoute.snapshot.paramMap.get('id');
  addForm = this.formBuilder.group({
    nombre: '',
    poblacion: '',
    superficie: '',
  });

  constructor(private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder, 
    private comunidadAutonomaService: ComunidadAutonomaService, private _location: Location) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.comunidadAutonomaService.addComunidadAutonoma(this.addForm.value).subscribe(() => {

      this.addForm.reset();

      this._location.back();

    });
  

}}

