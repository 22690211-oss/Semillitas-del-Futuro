import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { TokenJwt } from '../token';

export interface Actividad {
  id?: number;
  titulo: string;
  descripcion: string;
  docente_id?: number;
  created_at?: string;
  updated_at?: string;
}

export interface ActividadResponse {
  message: string;
  data: Actividad[];
}

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private apiUrl = `${environment.API_URL}/actividades`;
  private token = new TokenJwt();

  constructor(private http: HttpClient) {}

  // Obtener todas las actividades
  getAll(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(this.apiUrl, {
      headers: this.token.getAuthHeaders()
    });
  }

  // Obtener una actividad por ID
  getById(id: number): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.apiUrl}/${id}`, {
      headers: this.token.getAuthHeaders()
    });
  }

  // Crear una nueva actividad
  create(actividad: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(this.apiUrl, actividad, {
      headers: this.token.getAuthHeaders()
    });
  }

  // Actualizar una actividad existente
  update(id: number, actividad: Actividad): Observable<Actividad> {
    return this.http.put<Actividad>(`${this.apiUrl}/${id}`, actividad, {
      headers: this.token.getAuthHeaders()
    });
  }

  // Eliminar una actividad
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.token.getAuthHeaders()
    });
  }

  // Obtener actividades por docente
  getByDocente(idDocente: number): Observable<ActividadResponse> {
    return this.http.get<ActividadResponse>(`${this.apiUrl}/docente/${idDocente}`, {
      headers: this.token.getAuthHeaders()
    });
  }
}
