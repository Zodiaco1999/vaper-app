import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-especialistas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './especialistas.component.html',
  styleUrl: './especialistas.component.scss'
})
export class EspecialistasComponent {
  especialistas: Especialista[] = [
    {
      foto: 'assets/images/doc1.png',
      nombre: 'Dr. Smith Anderson',
      descripcion: '5 estrellas • 500+ pacientes',
      link: '/especialista/1'
    },
    {
      foto: 'assets/images/doc2.png',
      nombre: 'Dra. Jessica Riley',
      descripcion: '5 estrellas • 300+ pacientes',
      link: '/especialista/2'
    },
    {
      foto: 'assets/images/doc3.png',
      nombre: 'Dra. Samantha Jung',
      descripcion: '5 estrellas • 450+ pacientes',
      link: '/especialista/3'
    },
    {
      foto: 'assets/images/doc4.png',
      nombre: 'Dr. Jhonathan Otero',
      descripcion: '5 estrellas • 330+ pacientes',
      link: '/especialista/4'
    },
  ]
}

type Especialista = {
  foto: string;
  nombre: string;
  descripcion: string;
  link: string;
}
