import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  infoItems: InfoItem[] = [
    {
      icon: 'assets/images/icono1.png',
      title: '¿Qué es el vapeo?',
      description: 'Una guía rápida sobre la definición.',
      link: 'vapeo'
    },
    {
      icon: 'assets/images/icono2.png',
      title: 'Efectos del vapeo en la salud',
      description: 'Conoce las consecuencias del vapeo.',
      link: 'efectos'
    },
    {
      icon: 'assets/images/icono3.png',
      title: 'El vapeo en el entorno académico',
      description: 'Impacto en las instituciones educativas.',
      link: 'academico'
    },
    {
      icon: 'assets/images/icono4.png',
      title: 'Agenda tu cita',
      description: 'Los mejores especialistas que te guiarán para dejar el vapeo.',
      link: 'especialistas'
    }
  ];
}

type InfoItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
}
