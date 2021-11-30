import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioCancionesComponent } from './components/formulario-canciones/formulario-canciones.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { TablaPlaylistComponent } from './components/tabla-playlist/tabla-playlist.component';

const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'canciones', component: CancionesComponent },
  { path: 'playlist', component: TablaPlaylistComponent },
  { path: 'canciones/:id', component: CancionesComponent },
  { path: 'agregar-canciones', component: FormularioCancionesComponent },
  { path: 'error', component: ErrorComponent},
  { path: '', component: RegisterComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
