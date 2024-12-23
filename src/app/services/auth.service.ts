import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAutenticated = new BehaviorSubject<boolean>(false);

  constructor() { }
}
