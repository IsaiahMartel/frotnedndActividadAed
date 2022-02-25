import { Component, OnInit } from '@angular/core';
import { ComunidadAutonoma } from 'src/app/models/comunidad-autonoma/comunidad-autonoma';
import { ComunidadAutonomaService } from 'src/app/services/comunidad-autonoma/comunidad-autonoma.service';

@Component({
  selector: 'app-comunidad-autonoma',
  templateUrl: './comunidad-autonoma.page.html',
  styleUrls: ['./comunidad-autonoma.page.scss'],
})
export class ComunidadAutonomaPage implements OnInit {


  public comunidadAutonomaArray: Array<ComunidadAutonoma> = [];
  public comunidadAutonoma: ComunidadAutonoma;

  constructor(private comunidadAutonomaService : ComunidadAutonomaService) { }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo(){
    this.comunidadAutonomaService.getComunidadAutonomas().subscribe((comunidadAutonomaes:Array<ComunidadAutonoma>)=>{
      this.comunidadAutonomaArray = comunidadAutonomaes;
    });
  }

  deleteComunidadAutonoma(id){
    this.comunidadAutonomaService.deleteComunidadAutonoma(id);
    console.log("¡ComunidadAutonoma ", id, " borrada!");
    
  }

}
