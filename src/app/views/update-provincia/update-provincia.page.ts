import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';

@Component({
  selector: 'app-update-provincia',
  templateUrl: './update-provincia.page.html',
  styleUrls: ['./update-provincia.page.scss'],
})
export class UpdateProvinciaPage implements OnInit {
  codPostal: any;
  updateForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private provinciaService: ProvinciaService,
    private activatedRoute: ActivatedRoute,) { this.codPostal = this.activatedRoute.snapshot.paramMap.get('codPostal'); }

  ngOnInit() {
    this.fetchSchedule(this.codPostal);
    this.updateForm = this.formBuilder.group({
      codPostal: [''],
      nombre: [''],
      poblacion: [''],
      superficie: [''],

    })

  }

  onSubmit(): void {

    this.provinciaService.addProvincia(this.updateForm.value).subscribe(() => {

      this.updateForm.reset();



    });

  }

  fetchSchedule(codPostal) {
    this.provinciaService.getProvinciaById(codPostal).subscribe((data) => {
      this.updateForm.setValue({
        codPostal: data["codPostal"],
        nombre: data["nombre"],
        poblacion: data['poblacion'],
        superficie: data['superficie'],
      });
    });
  }
}
