import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user.model';
import { TokenJwt } from '../token';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  constructor(private http : HttpClient){}
  token = new TokenJwt()
  private apiUrl = environment.API_URL
  getDocentes(){
    return this.http.get<User[]>(`${this.apiUrl}/docentes`,{headers : this.token.getAuthHeaders()})
  }
}
