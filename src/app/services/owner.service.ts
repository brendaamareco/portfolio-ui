import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }
  
  get(): Observable<Owner[]>
  {
    return this.http.get<Owner[]>("http://localhost:8080/api/owner")
  }

  update(owner: Owner): Observable<Owner>
  {
    return this.http.put<Owner>("http://localhost:8080/api/owner", owner);
  }
}
