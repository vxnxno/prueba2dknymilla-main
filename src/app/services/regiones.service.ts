import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {
  private apiUrl = 'https://dev.matiivilla.cl/duoc/location/region';

  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
