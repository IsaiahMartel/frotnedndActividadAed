import { Component, OnInit } from '@angular/core';
import { Localidad } from 'src/app/models/localidad/localidad';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.page.html',
  styleUrls: ['./localidad.page.scss'],
})

export class LocalidadPage implements OnInit {
  public localidadArray: Array<Localidad> = [];
  public localidad: Localidad;

  constructor(private localidadService : LocalidadService) { }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo(){
    this.localidadService.getLocalidades().subscribe((localidades:Array<Localidad>)=>{
      this.localidadArray = localidades;
    });
  }

  deleteLocalidad(id){
    this.localidadService.deleteLocalidad(id);
    console.log("¡Localidad ", id, " borrada!");
    
  }

}
