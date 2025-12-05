import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://apis-3afee-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/autos.json`);
  }
}
