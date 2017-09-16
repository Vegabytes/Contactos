import { Component, OnInit } from '@angular/core';
import { MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private mdDialogRef: MdDialogRef<EliminarComponent>) { }

  ngOnInit() {
  }

  onEliminar() {
    this.mdDialogRef.close(true);
  }

  onCancelar(){
    this.mdDialogRef.close(false);
  }

}
