import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersUsers, User } from '../../../../models/user.model';
import { DocenteService } from '../../../../services/docente-service/docente-service';
import { ModalLayout } from '../../../../shared/modal-layout/modal-layout';
import { AppTable } from '../../../../UI/app-table/app-table';
import { Loader } from '../../../../UI/loader/loader';
@Component({
  selector: 'app-manage-docentes',
  imports: [AppTable,ModalLayout,Loader],
  templateUrl: './manage-docentes.html',
  styleUrl: './manage-docentes.css'
})
export class ManageDocentes implements OnInit {
  constructor(private docenteService :DocenteService,private router : Router) {}
  isOpenModalCreateDocente : boolean = false
  headers = HeadersUsers
  isDataReady : boolean = false
  docentes : User[] = []
  ngOnInit(): void {
      this.docenteService.getDocentes().subscribe({
        next : (response) =>{
          console.log(response)
          this.docentes = response
          this.isDataReady = true
        },
        error : (response) =>{
          this.router.navigate(['login'])
        }
      })
  }
   
}
