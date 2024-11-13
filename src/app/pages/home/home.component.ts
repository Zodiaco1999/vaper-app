import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

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

  private readonly document = inject(DOCUMENT);
  private readonly window = this.document?.defaultView

  deferredPrompt: any;
  showInstallButton = false;

  ngOnInit() {
    this.window!.window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event;
      this.showInstallButton = true;
    });
  }

  installApp() {
    if (this.deferredPrompt !== undefined) {
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
        this.showInstallButton = false;
      });
      this.deferredPrompt = null;
    }
  }
}

type InfoItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
}
