import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/administracion/usuario';
import { UsuariorolService } from 'src/app/services/administracion/usuariorol.service';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmusuariosComponent } from '../frmusuarios/frmusuarios.component';
import { UsuarioService } from 'src/app/services/administracion/usuario.service';

@Component({
  selector: 'app-gridusuarios',
  templateUrl: './gridusuarios.component.html'
})
export class GridusuariosComponent implements OnInit {
  Usuario: Usuario[] = [];
  cols: any[];
  selectedUsuario: Usuario; 

  constructor(private WsUsuario: UsuarioService,
              public dialog: DialogService) {
   }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre Completo' },
      { field: 'NombreUsuario', header: 'Nombre Usuario' },
      { field: 'Contraseña', header: 'Contraseña' },
      { field: 'UsuarioRol.Nombre', header: 'Rol de Usuario' },
      { field: 'EstatusUsuario', header: 'Estatus' }
    ];

  }


  refresh() {
    this.WsUsuario.getAll().subscribe(data => {
      this.Usuario = data;
     });
  }

  open(item: Usuario) {
    const ref = this.dialog.open(FrmusuariosComponent, { 
      data: {_id: item._id} });
  }

  add() {
    const ref = this.dialog.open(FrmusuariosComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
  }

}
