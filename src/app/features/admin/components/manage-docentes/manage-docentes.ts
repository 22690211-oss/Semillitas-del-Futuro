import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersUsers, User } from '../../../../models/user/user.model';
import { DocenteService } from '../../../../services/docente-service/docente-service';
import { ModalLayout } from '../../../../shared/modal-layout/modal-layout';
import { AppTable } from '../../../../UI/app-table/app-table';
import { Loader } from '../../../../UI/loader/loader';
import { DocenteProfileModal } from '../../../docente/components/docente-view-info-form/docente-profile-modal';
@Component({
  selector: 'app-manage-docentes',
  imports: [AppTable,ModalLayout,Loader,DocenteProfileModal],
  templateUrl: './manage-docentes.html',
  styleUrl: './manage-docentes.css'
})
export class ManageDocentes implements OnInit {
  constructor(private docenteService :DocenteService,private router : Router) {}
  isOpenModalCreateDocente : boolean = false
  isOpenModalViewDocenteInfo : boolean = false // este modal sera el que se abrira cuando le demos click a alguna row de la tabla
  currentDocente? : User // aqui se almacenara el docente que estemos viendo cuando le demos click a alguna row de la tabla
  headers = HeadersUsers 
  isDataReady : boolean = false
  docentes : User[] = []
  updateMode : boolean = false
  

  confirmacionDeleteModal: boolean = false
  
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
  closeModalDocente(){
    this.isOpenModalViewDocenteInfo = false
  }
  
  handleDocenteClick(docente : User){
    this.isOpenModalViewDocenteInfo = true
    this.currentDocente = docente 
  }
  
  handleDocenteDelete(id : number | undefined){
    
    this.docenteService.deleteDocente(id).subscribe({
      next : (response) =>{
        console.log(response)
        console.log(this.docentes)
        console.log("filtrando docentes")
        this.docentes= this.docentes.filter((docente) =>{
          return docente.id !== id
        })
        console.log(this.docentes)
      },
      error : (responseError) =>{
        console.log(responseError)
      }
    })
  }

}
