import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from "angularfire2";
import { AppComponent } from './app.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppService} from "./app.service";
import {MaterialModule} from "@angular/material";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';
import { ReactiveFormsModule} from "@angular/forms";
import { EliminarComponent } from './eliminar/eliminar.component';
import { AgregarComponent } from './agregar/agregar.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCGHwPR-V_dC1IWdPG8KWw96ZLSeGfkQa0",
      authDomain: "contactos-ba5cb.firebaseapp.com",
      databaseURL: "https://contactos-ba5cb.firebaseio.com",
      projectId: "contactos-ba5cb",
      storageBucket: "contactos-ba5cb.appspot.com",
      messagingSenderId: "1008171214295"
}

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    EditarComponent,
    EliminarComponent,
    AgregarComponent
  ],
  entryComponents: [
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFireDatabase, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
