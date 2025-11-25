import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../models/user/user.model';
import { DocenteService } from '../../../../services/docente-service/docente-service';
import { MailIcon } from '../../../../UI/icons/mail-icon/mail-icon';
import { UserIcon } from '../../../../UI/icons/user-icon/user-icon';
import { Loader } from '../../../../UI/loader/loader';

@Component({
  selector: 'docente-profile-modal',
  imports: [Loader,ReactiveFormsModule,MailIcon,UserIcon],
  templateUrl: './docente-profile-modal.html',
  styleUrl: './docente-profile-modal.css'
})
export class DocenteProfileModal implements OnInit{
  constructor(
    private docenteService : DocenteService,
    private formBuilder : FormBuilder){}
  @Input() docenteId : number | undefined
  @Output() docenteEliminado = new EventEmitter<void>()
  docente! : User // aqui almacenaremos el usuario que obtengamos con el metodo getDocente()
  isInfoDocenteReady : boolean = false
  isEditMode : boolean = false
  form! : FormGroup  
  content : string = "informacion"
  isInfoGruposDocenteReady : boolean = false
  isInfoActividadesDocenteReady : boolean = false

  

  ngOnInit() : void{
    this.form = this.formBuilder.group({
      nombre : ['',Validators.required],
      email : ['',[Validators.email,Validators.required]],
      telefono : ['',[Validators.minLength(10),Validators.maxLength(10)]],
      rol : ['',Validators.required],
      created_at : ['',Validators.required],
      updated_at : ['',Validators.required]
    })
    this.docenteService.getDocente(this.docenteId).subscribe({
      next : (response)=>{
        console.log(response)
        this.form.patchValue(response)
        this.docente = response
        this.form.disable()
        this.isInfoDocenteReady = true
      },
      error : (errorResponse) =>{
        console.log(errorResponse)
      }
    })
  }
  
  handleEditMode(){
    this.isEditMode = !this.isEditMode
    if(this.isEditMode){
      this.form.get('nombre')?.enable()
      this.form.get('email')?.enable()
      this.form.get('telefono')?.enable()
    }else{
      this.form.disable()
    }
  }
  updateDocente(){
    this.docenteService.updateDocente(this.docente.id,this.docente).subscribe({
      next : (response) => {{
        console.log("docente actualizado con exito : ",response)
        this.handleEditMode()
      }}
    })
    
  }
  changeContent(content : string){
    console.log("cambiando content a ",content)
    this.content = content
  }
}
