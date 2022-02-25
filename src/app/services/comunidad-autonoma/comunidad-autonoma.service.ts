import { Injectable } from '@angular/core';
import { ComunidadAutonoma } from 'src/app/models/comunidad-autonoma/comunidad-autonoma';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ComunidadAutonomaService {
  endpoint: string = "http://localhost:8080/comunidad-autonoma";

  
  constructor(private httpClient : HttpClient) { }

   getComunidadAutonomas() {
    return  this.httpClient.get<ComunidadAutonoma[]>(this.endpoint);
  }

  getComunidadAutonomaById(idComunidad){
    return this.httpClient.get<ComunidadAutonoma[]>(this.endpoint + "/" + idComunidad).pipe(
      tap(_=> console.log("Comunidad autónoma entregada")),
      catchError(this.handleError<ComunidadAutonoma[]>("Get comunidad", []))
    );
  }

  addComunidadAutonoma(comunidadAutonoma: ComunidadAutonoma) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", comunidadAutonoma.nombre.toString());
    bodyEncoded.append("poblacion", comunidadAutonoma.poblacion.toString());
    bodyEncoded.append("superficie", comunidadAutonoma.superficie.toString());
    bodyEncoded.append("fkPostal", comunidadAutonoma.fkPostal.toString());
    
    const body = bodyEncoded.toString();
    return this.httpClient.post<ComunidadAutonoma>(this.endpoint, body, httpOptions);
  }

  updateComunidadAutonoma(comunidadAutonoma: ComunidadAutonoma) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", comunidadAutonoma.nombre.toString());
    bodyEncoded.append("poblacion", comunidadAutonoma.poblacion.toString());
    bodyEncoded.append("superficie", comunidadAutonoma.superficie.toString());
    bodyEncoded.append("fkPostal", comunidadAutonoma.fkPostal.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.put<ComunidadAutonoma>(this.endpoint, body);
  }

  deleteComunidadAutonoma(id: number) {
    console.log(this.httpClient.delete<ComunidadAutonoma[]>(this.endpoint + "/" + id));
    
    return this.httpClient.delete<ComunidadAutonoma[]>(this.endpoint + "/" + id).subscribe();
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
}
