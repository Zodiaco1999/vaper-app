import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
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

  deferredPrompt: any;
  showInstallButton = false;

  ngOnInit() {
    if (typeof window !== 'undefined') { // Verifica que 'window' esté disponible
      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        this.deferredPrompt = event;
        this.showInstallButton = true;
      });
    }
  }

  installApp() {
    // Muestra el prompt de instalación
    this.deferredPrompt.prompt();
    // Espera la respuesta del usuario
    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('El usuario aceptó la instalación');
      } else {
        console.log('El usuario rechazó la instalación');
      }
      // Oculta el botón después de mostrar el prompt
      this.deferredPrompt = null;
      this.showInstallButton = false;
    });
  }
}

type InfoItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
}