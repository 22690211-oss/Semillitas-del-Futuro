import { Component, OnInit } from '@angular/core';
import { HeadersUsers, User } from '../../../../models/user.model';
import { AlumnoService } from '../../../../services/alumno-service/alumno-service';
import { AppTable } from '../../../../UI/app-table/app-table';
import { Loader } from '../../../../UI/loader/loader';

@Component({
  selector: 'app-manage-alumnos',
  imports: [AppTable,Loader],
  templateUrl: './manage-alumnos.html',
  styleUrl: './manage-alumnos.css'
})
export class ManageAlumnos implements OnInit{
  constructor(private alumno_service : AlumnoService){}
  alumnos : User[] = []
  headers = HeadersUsers
  isDataReady : boolean = false
  ngOnInit(): void {
    this.alumno_service.getAlumnos().subscribe({
      next : (response) =>{
        this.alumnos = response
        this.isDataReady = true
      }
    })
  }
}
