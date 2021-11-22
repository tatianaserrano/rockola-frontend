import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioCancionesComponent } from './components/formulario-canciones/formulario-canciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'canciones', component: CancionesComponent },
  { path: 'agregar-canciones', component: FormularioCancionesComponent },
  { path: 'error', component: ErrorComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
