import { Component } from '@angular/core';
import { ActividadCard } from '../actividad-card/actividad-card';
import { OnInit } from '@angular/core';
import { ActividadService } from '../../../../services/actividad-service/actividad-service';
import { Actividad } from '../../../../services/actividad-service/actividad-service';
import { Loader } from '../../../../UI/loader/loader';

@Component({
  selector: 'app-manage-mis-actividades',
  imports: [ActividadCard,Loader],
  templateUrl: './manage-mis-actividades.html',
  styleUrl: './manage-mis-actividades.css'
})
export class ManageMisActividades implements OnInit {
  constructor(private actividadService: ActividadService) {}
  actividades: Actividad[] = [];
  isInformacionlista: boolean = false;
  ngOnInit(): void {
    // Aquí puedes cargar las actividades del docente si es necesario
    this.actividadService.getByDocente(35).subscribe({
      next: (respuesta) => {
        this.actividades = respuesta.data;
        this.isInformacionlista = true;
        console.log(respuesta);
      }
    });
  }
  

}
