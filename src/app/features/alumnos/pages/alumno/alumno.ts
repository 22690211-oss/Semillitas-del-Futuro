import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alumno.html',
  styleUrls: ['./alumno.css']
})
export class Alumno {
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('currentUserRole');
    this.router.navigateByUrl('/');
  }
}
