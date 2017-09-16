import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() mostrar:boolean = false;
  @Output() cerrar= new EventEmitter();

  form:FormGroup;

  validationMessagges = {
    'nombre': {'required': 'El nombre es requerido.'},
    'apellidos': {'required': 'Los apellidos son requerido.'},
    'direccion': {'required': 'La diección es requerido.'}
  }

  constructor(
    private appService:AppService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      email: '',
      empresa: ''
    })
  }

  onGuardar() {
    this.appService.addContacto(this.form.value);
    this.onCancelar();
  }

  onCancelar() {
    this.cerrar.emit();
  }

}
