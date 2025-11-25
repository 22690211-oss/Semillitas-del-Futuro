import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user/user.model';
import { TokenJwt } from '../token';

export interface Credentials{
  email : string
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.API_URL
  constructor(private http : HttpClient){}
  token = new TokenJwt()
  
  register(user : User) : Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,user)
  }
  login(credentials : Credentials) : Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,credentials,{
      observe : 'response'
    })
  }
  me() : Observable<any>{
    return this.http.get(`${this.apiUrl}/me`,{headers : this.token.getAuthHeaders()})
  }
  logout() : Observable<any>{
    return this.http.get(`${this.apiUrl}/logout`,{headers: this.token.getAuthHeaders()})
  }
}
