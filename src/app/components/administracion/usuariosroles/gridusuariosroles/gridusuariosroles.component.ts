import { Component, OnInit } from '@angular/core';
import { UsuarioRol } from '../../../../models/administracion/usuariorol';
import { UsuariorolService } from 'src/app/services/administracion/usuariorol.service';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmusuariosrolesComponent } from '../frmusuariosroles/frmusuariosroles.component';

@Component({
  selector: 'app-gridusuariosroles',
  templateUrl: './gridusuariosroles.component.html'
})

export class GridusuariosrolesComponent implements OnInit {
  UsuarioRol: UsuarioRol [] = [];
  cols: any[];
  selectedConcepto: UsuarioRol;

  constructor(private WsUsuarioRol: UsuariorolService,
              public dialog: DialogService) {

   }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' }
    ];

  }

  refresh() {
    this.WsUsuarioRol.getAll().subscribe(data => {
      this.UsuarioRol = data;
     });
  }


  open(item: UsuarioRol) {
    const ref = this.dialog.open(FrmusuariosrolesComponent, { 
      data: { _id: item._id} });
  }

  add() {
    const ref = this.dialog.open(FrmusuariosrolesComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
  }

}
