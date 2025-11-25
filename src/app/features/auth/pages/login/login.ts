import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Necesitas importar Router para navegar
import { AuthService, Credentials } from '../../../../services/auth-service/auth-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  login_form = new FormGroup({
    email : new FormControl<string>('',{
      nonNullable : true,
      validators : [
        Validators.required,
        Validators.email,
      ]
    }),
    password : new FormControl('',{
      nonNullable : true,
      validators : [
        Validators.required,
        Validators.minLength(6)
      ]
    })
  })
  register_form = new FormGroup({
    nombre : new FormControl<string>('',{
      nonNullable : true,
      validators : [
        Validators.required
      ]
    }),
    email : new FormControl<string>('',{
      nonNullable : true,
      validators : [
        Validators.required,
        Validators.email
      ]
    }),
    telefono : new FormControl<string>('',{
      nonNullable : true,
      validators : [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]
    }),
    password : new FormControl<string>('',{
      nonNullable : true,
      validators : [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]
    }),
    rol : new FormControl<string>('docente',{
      nonNullable : false
    })
  })
  public esVistaRegistro = false;
  constructor(private router: Router ,private auth_service : AuthService) {}
 
  toggleVista() {
    this.esVistaRegistro = !this.esVistaRegistro;
  }
  handleAccion() {
    if (this.esVistaRegistro) {
      this.registrarUsuario();
    } else {
      this.login();
    }
  }
  registrarUsuario() : void{
    const datos = this.register_form.getRawValue()
    if(!this.register_form.valid){
      console.log("form register valido : ",this.register_form.valid)
      console.log(this.register_form.controls)
      Object.keys(this.register_form.controls).forEach(key =>{
        const control = this.register_form.get(key)
        console.log(key,control?.errors)
      })
      return
    }      
    this.auth_service.register(datos).subscribe({
      next : (response)=>{
        console.log(response)
        localStorage.setItem('token',response.token)
        if(response.user.rol == "docente"){
          this.router.navigate(['docente'])
        }
        if(response.user.rol == "admin"){
          this.router.navigate(['admin'])
        }
        if(response.user.rol== "alumno"){
          this.router.navigate(['alumno'])
        }
      },
      error : (response) =>{
        console.log("error")
        console.log(response)
      }
    })
  }
  login(){
    const credenciales : Credentials = this.login_form.getRawValue()
    this.auth_service.login(credenciales).subscribe({
      next: (response) => {
        console.log(response) 
        localStorage.setItem('token',response.body.auth.token)
        if(response.user.rol == "docente"){
          this.router.navigate(['docente'])
        }
        if(response.user.rol == "admin"){
          this.router.navigate(['admin'])
        }
        if(response.user.rol== "alumno"){
          this.router.navigate(['alumno'])
        }
      },
      error(response){
        console.log(response)
      }
    })
  }
}