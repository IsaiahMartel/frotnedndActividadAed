import { Injectable } from '@angular/core';
import { Localidad } from 'src/app/models/localidad/localidad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class LocalidadService {
  endpoint: string = "http://localhost:8080/localidad";


  constructor(private httpClient: HttpClient) { }

  getLocalidades() {
    return this.httpClient.get<Localidad[]>(this.endpoint);
  }

  getLocalidadById(idLocalidad){
    return this.httpClient.get<Localidad[]>(this.endpoint + "/" + idLocalidad).pipe(
      tap(_=> console.log("Localidad entregada")),
      catchError(this.handleError<Localidad[]>("Get localidad", []))
    );
  }

  addLocalidad(localidad: Localidad) {
    //let bodyEncoded = new URLSearchParams();
    // bodyEncoded.append("nombre", localidad.nombre.toString());
    // bodyEncoded.append("poblacion", localidad.poblacion.toString());



    //const body = bodyEncoded.toString();
    return this.httpClient.post<Localidad>(this.endpoint, JSON.stringify(localidad), httpOptions);
  }

  updateLocalidad(localidad: Localidad) {
    // let bodyEncoded = new URLSearchParams();

    // bodyEncoded.append("nombre", localidad.nombre.toString());
    // bodyEncoded.append("poblacion", localidad.poblacion.toString());

    // const body = bodyEncoded.toString();
    console.log(localidad);
    return this.httpClient.put<Localidad>(this.endpoint, JSON.stringify(localidad), httpOptions);
  }

  deleteLocalidad(id: number) {
    console.log(this.httpClient.delete<Localidad[]>(this.endpoint + "/" + id));
    
    return this.httpClient.delete<Localidad[]>(this.endpoint + "/" + id).subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
