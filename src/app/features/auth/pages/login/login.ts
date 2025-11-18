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
  // Estado de la vista: 'login' o 'registro'
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
  registrarUsuario(){
  }
  login(){
    const credenciales : Credentials = this.login_form.getRawValue()
    this.auth_service.login(credenciales).subscribe({
      next: (response) => {
        console.log(response)
        localStorage.setItem('token',response.body.auth.token)
        this.router.navigate(['admin'])
      },
      error(response){
        console.log(response)
      }
    })
  }
}