import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) {}

  login() {
    if (this.username.value && this.password.value) {
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');
      if (user && pass && user === this.username.value && pass === this.password.value) {
        this.router.navigateByUrl('');
      } else {
        alert('Credenciales invalidas')
      }
    } else {
      alert('Datos requeridos', )
    }

    this.username.valueChanges.subscribe(console.log)
    console.log(this.username.value)
  }


}
