import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-especialista-view',
  standalone: true,
  imports: [],
  templateUrl: './especialista-view.component.html',
  styleUrl: './especialista-view.component.scss'
})
export class EspecialistaViewComponent implements OnInit {
  especialistas: EspecialistaDetail[] = [
    {
      id: '1',
      foto: 'assets/images/doc1.svg',
      nombre: 'Dr. Smith Anderson',
      especialidad: 'Psicólogo',
      descripcion: 'Psicólogo especializado en el tratamiento de adicciones, con más de 5 años de experiencia en programas de prevención y rehabilitación.',
      years: 5
    },
    {
      id: '2',
      foto: 'assets/images/doc2.svg',
      nombre: 'Dra. Jessica Riley',
      especialidad: 'Psicóloga',
      descripcion: 'Psicóloga clínica enfocada en la prevención de consumo de sustancias en jóvenes, ayudando a familias y escuelas a desarrollar estrategias efectivas.',
      years: 8
    },
    {
      id: '3',
      foto: 'assets/images/doc3.svg',
      nombre: 'Dra. Samantha Jung',
      especialidad: 'Psicoterapeuta',
      descripcion: 'Psicoterapeuta especializada en trastornos de adicción, con un enfoque en terapias de grupo e intervenciones individuales para la recuperación a largo plazo.',
      years: 10
    },
    {
      id: '4',
      foto: 'assets/images/doc4.svg',
      especialidad: 'Psicólogo',
      nombre: 'Dr. Jhonathan Otero',
      descripcion: 'Psicólogo comunitario con experiencia en programas de prevención de adicciones y desarrollo de campañas educativas para reducir el consumo de sustancias.',
      years: 7
    }
  ];

  especialista: EspecialistaDetail = {
    id: '',
    nombre: '',
    descripcion: '',
    especialidad: '',
    foto: '',
    years: 0
  };

  route = inject(ActivatedRoute)

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    const newEspecialista = this.especialistas.find(e => e.id === id);
    if (newEspecialista)
      this.especialista = newEspecialista;
    console.log(newEspecialista);
  }
}

type EspecialistaDetail = {
  id: string;
  nombre: string;
  especialidad: string;
  descripcion: string;
  foto: string;
  years: number;
}
