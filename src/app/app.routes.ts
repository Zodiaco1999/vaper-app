import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcademicoComponent } from './pages/academico/academico.component';
import { EfectosComponent } from './pages/efectos/efectos.component';
import { EspecialistasComponent } from './pages/especialistas/especialistas.component';
import { VapeoComponent } from './pages/vapeo/vapeo.component';
import { EspecialistaViewComponent } from './pages/especialista-view/especialista-view.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent, title: 'Inicio' },
      { path: 'vapeo', component: VapeoComponent, title: '¿Que es el vapeo?' },
      { path: 'academico', component: AcademicoComponent, title: 'Vapeo Entorno Academico' },
      { path: 'efectos', component: EfectosComponent, title: 'Efectos vapeo' },
      { path: 'academico', component: AcademicoComponent, title: 'Vapeo Entorno Academico' },
      { path: 'especialistas', component: EspecialistasComponent, title: 'Especialistas' },
      { path: 'especialista/:id', component: EspecialistaViewComponent, title: 'Especialista' },
      { path: 'mapa', component: MapaComponent, title: 'Especialista' }
    ]
  },
  { path: 'login', component: LoginComponent, title: 'Inicia Sesión' },
  { path: 'registro', component: RegisterComponent, title: 'Registrate' },
  { path: 'restablecer', component: ResetPasswordComponent, title: 'Vapeo Entorno Academico' },
];
