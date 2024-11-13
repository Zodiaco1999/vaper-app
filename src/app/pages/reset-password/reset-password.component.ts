import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  email = new FormControl('');

  constructor(private router: Router) {}

  reset() {
    if (this.email.value && this.validarCorreo(this.email.value)) {
      alert('Revisa tu correo electrónico para continuar el proceso de restablecimiento')
      this.router.navigateByUrl('login');
    }
    else {
      alert('Correo requerido')
    }
  }

  validarCorreo(correo: string): boolean {
    const regexCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexCorreo.test(correo);
  }
}
