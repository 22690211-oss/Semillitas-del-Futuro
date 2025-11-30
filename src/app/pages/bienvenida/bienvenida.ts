import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Tema {
  titulo: string;
  videoUrl: string;
  thumbnail: string;
}

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.css']
})
export class Bienvenida {
  public mensaje = '¡Bienvenido a Semillitas del Futuro!';
  
  public temas: Tema[] = [
    {
  titulo: 'Cuidemos el Agua',
  videoUrl: 'https://www.youtube.com/watch?v=yOGqpFOO2Dk',
  thumbnail: 'https://img.youtube.com/vi/yOGqpFOO2Dk/maxresdefault.jpg'
},
{
  titulo: 'Cómo cuidar el medio ambiente',
  videoUrl: 'https://www.youtube.com/watch?v=Gpc1s9qSeVM',
  thumbnail: 'https://img.youtube.com/vi/Gpc1s9qSeVM/maxresdefault.jpg'
},
{
  titulo: 'Cuidado y conservación del medio ambiente',
  videoUrl: 'https://www.youtube.com/watch?v=SOzzEWStP00',
  thumbnail: 'https://img.youtube.com/vi/SOzzEWStP00/maxresdefault.jpg'
},
{
  titulo: 'La deforestación — maneras de cuidar al planeta',
  videoUrl: 'https://www.youtube.com/watch?v=IcBs3P6BKOY',
  thumbnail: 'https://img.youtube.com/vi/IcBs3P6BKOY/maxresdefault.jpg'
}

  ];
  
  abrirVideo(url: string): void {
    window.open(url, '_blank');
  }
}
