import { HttpHeaders } from "@angular/common/http"

export class TokenJwt{
  public getToken() : string | null{
    return localStorage.getItem('token')
  }
  public setToken(token : string){
    localStorage.setItem('token',token)
  }
  public getAuthHeaders() : HttpHeaders{
    const token = this.getToken()
    return new HttpHeaders({
      'Authorization' : `Bearer ${token}`,
      'Content-Type' : 'application/json'
      
    })
  }
}