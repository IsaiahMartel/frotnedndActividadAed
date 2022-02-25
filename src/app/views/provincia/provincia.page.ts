import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia/provincia';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.page.html',
  styleUrls: ['./provincia.page.scss'],
})
export class ProvinciaPage implements OnInit {

  public provinciaArray: Array<Provincia> = [];
  public provincia: Provincia;

  constructor(private provinciaService : ProvinciaService) { }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo(){
    this.provinciaService.getProvincias().subscribe((provinciaes:Array<Provincia>)=>{
      this.provinciaArray = provinciaes;
    });
  }

  deleteProvincia(id){
    this.provinciaService.deleteProvincia(id);
    console.log("¡Provincia ", id, " borrada!");
    
  }

}
