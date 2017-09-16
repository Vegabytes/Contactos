import { Component, OnInit } from '@angular/core';
import { AppService} from "./app.service";
import {EliminarComponent} from "./eliminar/eliminar.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Contacts';
  contactos:any[];
  ciudades = ['Todos','Quito','Guayaquil','Riobamba'];
  contacto = null;
  contactoEditar = null;
  contactoAgregar = false;

  constructor(
    private appService:AppService,
    private mdDialog: MdDialog) {

  }

  ngOnInit() {
    this.appService.getContactos()
      .subscribe(contactos => this.contactos = contactos);
  }

  onSelect(event) {
    let query = null;
    if(event.value == 'Todos') {
      query = this.appService.getContactos();
    } else {
      query = this.appService.getContactosFiltro(event.value);
    }

    query
      .subscribe(contactos => {this.contactos = contactos});

    this.contacto = null;

  }

  onClick(contacto) {
    console.log("contacto",contacto);
    this.contacto = contacto;
  }

  cerrarDetalles(){
    this.contacto = null;
  }

  onEditar(contacto) {
    this.contactoEditar = contacto;
  }

  cerrarEdicion(){
    this.contactoEditar = null;
  }

  onEliminar(contacto){
  let dialogRef = this.mdDialog.open(EliminarComponent,{
    disableClose:true
  });
  dialogRef.afterClosed().subscribe(estado => {
    if(estado) {
      this.appService.removeContacto(contacto.$key);
    }
    }
  )
}
onAgregar() {
  this.contactoAgregar = true;
}
}
