import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.page.html',
  styleUrls: ['./add-provincia.page.scss'],
})
export class AddProvinciaPage implements OnInit {
  addForm = this.formBuilder.group({
    codPostal: '',
    nombre: '',
    poblacion: '',
    superficie: ''
  });

  constructor(private formBuilder: FormBuilder, private provinciaService: ProvinciaService) { }

  ngOnInit() {
  }


  onSubmit(): void {
    this.provinciaService.addProvincia(this.addForm.value).subscribe(() => {

      this.addForm.reset();



    });
  }
}
