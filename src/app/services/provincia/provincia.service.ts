import { Injectable } from '@angular/core';
import { Provincia } from 'src/app/models/provincia/provincia';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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


export class ProvinciaService {
  endpoint: string = "http://localhost:8080/provincia";

  
  constructor(private httpClient : HttpClient) { }

   getProvincias() {
    return  this.httpClient.get<Provincia[]>(this.endpoint);
  }

  getProvinciaById(idProvincia){
    return this.httpClient.get<Provincia[]>(this.endpoint + "/" + idProvincia).pipe(
      tap(_=> console.log("Provincia entregada")),
      catchError(this.handleError<Provincia[]>("Get provincia", []))
    );
  }

  addProvincia(provincia: Provincia) {
    console.log(provincia);
    
    return this.httpClient.post<Provincia>(this.endpoint, JSON.stringify(provincia), httpOptions);
  }

  updateProvincia(provincia: Provincia) {
    return this.httpClient.put<Provincia>(this.endpoint, JSON.stringify(provincia), httpOptions);
  }

  deleteProvincia(id: number) {
    return this.httpClient.delete<Provincia[]>(this.endpoint + "/" + id);
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
}
