import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  authService = inject(AuthService);
  text = 'Iniciar Sesión'

  ngOnInit(): void {
    this.authService.isAutenticated.subscribe(isLoggedIn => {
      if(isLoggedIn) {
        this.text = 'Cerrar Sesión'
      } else {
        this.text = 'Iniciar Sesión'
      }
    })
  }

  login() {
    this.authService.isAutenticated.next(false);
  }
}
