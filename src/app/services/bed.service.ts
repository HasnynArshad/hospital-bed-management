import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../interfaces/department.interface';

@Injectable({
  providedIn: 'root'
})
export class BedService {
  private apiUrl = 'http://localhost:3000/departments'; 

  constructor(private http:HttpClient) { }

  getBedStatus(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }
}

