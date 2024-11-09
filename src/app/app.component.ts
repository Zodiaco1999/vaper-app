import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vaper-app';

  infoItems: InfoItem[] = [
    {
      icon: '../assets/images/icono1.png',
      title: '¿Qué es el vapeo?',
      description: 'Una guía rápida sobre la definición.'
    },
    {
      icon: '../assets/images/icono2.png',
      title: 'Efectos del vapeo en la salud',
      description: 'Conoce las consecuencias del vapeo.'
    },
    {
      icon: '../assets/images/icono3.png',
      title: 'El vapeo en el entorno académico',
      description: 'Impacto en las instituciones educativas.'
    },
    {
      icon: '../assets/images/icono4.png',
      title: 'Agenda tu cita',
      description: 'Los mejores especialistas que te guiarán para dejar el vapeo.'
    }
  ];
}

type InfoItem = {
  icon: string;
  title: string;
  description: string;
}
