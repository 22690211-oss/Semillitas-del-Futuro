import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user.model';
import { TokenJwt } from '../token';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor(private http : HttpClient){}
  private apiUrl = environment.API_URL
  token = new TokenJwt()
  getAlumnos(){
    return this.http.get<User[]>(`${this.apiUrl}/alumnos`,{headers : this.token.getAuthHeaders()})
  }
  
}
