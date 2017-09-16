import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AppService {
  contactos: FirebaseListObservable<any[]>;

  constructor(private db:AngularFireDatabase) {
    // this.contactos = db.list('/contacts');
  }

  getContactos() {
    this.contactos = this.db.list('/contactos') as FirebaseListObservable<any[]>;
    return this.contactos;
  }

  //Estamos haciendo un filtro dentro de firebase
  getContactosFiltro(filtro:string) {
    this.contactos = this.db.list('/contactos',{
      query: {
        orderByChild: 'direccion',
        equalTo:filtro
      }
    }) as FirebaseListObservable<any[]>;
    return this.contactos;
  }

  updateContacto(key,contacto) {
    this.contactos.update(key,contacto);
  }

  removeContacto(key) {
    this.contactos.remove(key);
  }

  addContacto(contacto) {
    this.contactos.push(contacto);
  }

}
