import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaCancionesComponent } from './components/tabla-canciones/tabla-canciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaPlaylistComponent } from './components/tabla-playlist/tabla-playlist.component';
import { CancionesService } from './services/canciones.service';
import { HttpClientModule } from '@angular/common/http';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioCancionesComponent } from './components/formulario-canciones/formulario-canciones.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaCancionesComponent,
    NotFoundComponent,
    TablaPlaylistComponent,
    CancionesComponent,
    ErrorComponent,
    FormularioCancionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
