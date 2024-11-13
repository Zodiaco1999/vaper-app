import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  genre = new FormControl(false)

  constructor(private router: Router) {}

  register() {
    if (this.username.value && this.email.value && this.password.value && this.genre.value ) {
      localStorage.setItem('username', this.username.value as string)
      localStorage.setItem('password', this.password.value as string)
      this.router.navigateByUrl('login');
    }
    else {
      alert('Datos requeridos')
    }

    this.username.valueChanges.subscribe(console.log)
    console.log(this.username.value)
  }

}
