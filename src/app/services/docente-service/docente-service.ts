import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user/user.model';
import { TokenJwt } from '../token';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  constructor(private http : HttpClient){}
  token = new TokenJwt()
  private apiUrl = environment.API_URL
  getDocentes(){
    return this.http.get<User[]>(`${this.apiUrl}/users?rol=docente`,{headers : this.token.getAuthHeaders()})
  }
  getDocente(id : number | undefined){
    return this.http.get<User>(`${this.apiUrl}/users/${id}`,{headers : this.token.getAuthHeaders()})
  }
  updateDocente(id : number | undefined,docente : User){
    return this.http.put<User>(`${this.apiUrl}/users/${id}`,{headers : this.token.getAuthHeaders()})
  }
  deleteDocente(id:number | undefined){
    return this.http.delete(`${this.apiUrl}/users/${id}`,{headers: this.token.getAuthHeaders()})
  }
}
