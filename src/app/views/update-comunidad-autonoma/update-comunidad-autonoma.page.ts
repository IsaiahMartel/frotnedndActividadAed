import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComunidadAutonomaService } from 'src/app/services/comunidad-autonoma/comunidad-autonoma.service';

@Component({
  selector: 'app-update-comunidad-autonoma',
  templateUrl: './update-comunidad-autonoma.page.html',
  styleUrls: ['./update-comunidad-autonoma.page.scss'],
})
export class UpdateComunidadAutonomaPage implements OnInit {
  idComunidad: any;
  updateForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private comunidadAutonomaService: ComunidadAutonomaService,
    private activatedRoute: ActivatedRoute,) { 
      this.idComunidad = this.activatedRoute.snapshot.paramMap.get('idComunidad'); }

  ngOnInit() {
    this.fetchSchedule(this.idComunidad);
    this.updateForm = this.formBuilder.group({
      nombre: [''],
      poblacion: [''],
      superficie: [''],
      fkPostal: ['']

    })

  }

  onSubmit(): void {
    this.comunidadAutonomaService.addComunidadAutonoma(this.updateForm.value).subscribe(() => {
      this.updateForm.reset();
    });

  }

  fetchSchedule(idComunidadAutonoma) {
    this.comunidadAutonomaService.getComunidadAutonomaById(idComunidadAutonoma).subscribe((data) => {
      this.updateForm.setValue({
        nombre: data["nombre"],
        poblacion: data['poblacion'],
        superficie: data['superficie'],
        fkPostal: data['fkPostal'],
      });
    });
  }
}
