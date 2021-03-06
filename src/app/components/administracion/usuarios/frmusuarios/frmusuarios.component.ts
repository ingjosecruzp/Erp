import { Component, OnInit } from '@angular/core';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';
import { Usuario } from 'src/app/models/administracion/usuario';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { UsuariorolService } from 'src/app/services/administracion/usuariorol.service';
import { UsuarioRol } from 'src/app/models/administracion/usuariorol';
import { SelectItem } from 'primeng/api';
import { UsuarioService } from 'src/app/services/administracion/usuario.service';

@Component({
  selector: 'app-frmusuarios',
  templateUrl: './frmusuarios.component.html'
})
export class FrmusuariosComponent extends FrmBase<Usuario> implements OnInit, IFrmBase {
  FrmGrupoComponente: FormGroup;
  displayDialog: boolean;
  UsuarioRol: UsuarioRol[]; // se guarda en la base de datos al arrelgo


  constructor(public config: DialogConfig,
              public dialog: DialogRef,
              private fb: FormBuilder,
              private confirmationService: ConfirmationService,
              private WsUsuario: UsuarioService,
              private WsUsuarioRol: UsuariorolService) { 
  super();
  this.displayDialog = true;
  this.Ws = WsUsuario;
  }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
      NombreUsuario: [null, [Validators.required]],
      Contraseña: [null, [Validators.required]],
      UsuarioRol: [null, [Validators.required]],
      EstatusUsuario: [null, [Validators.required]],
      Contraseña2: [null, [Validators.required]]
   });

   if (this.config.data._id !== undefined) {
     this.WsUsuario.get(this.config.data._id).subscribe(data => {
        this._id = data._id;
        let item = new Usuario(data);
        this.FrmItem.patchValue(item);
        console.log('Respuesta del servidor DC', data);
     });
   }

   this.FrmItem.controls['Contraseña2'].setValidators([
     Validators.required,
     this.ConfirmarContraseña.bind( this.FrmItem )
   ]);


  }

  ConfirmarContraseña( control: FormGroup ): { [s: string]: boolean } {
    let forma: any = this;
    if ( control.value !== forma.controls['Contraseña'].value ) {
      return {
        ConfirmarContraseña: true
      };
    }
    return null;
  }



  save () {
    this.confirmationService.confirm({
      message: '¿Esta seguro de guardar la información?',
      header: 'Erp',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.item = new Usuario(this.FrmItem.value);
        super.save();
      },
      reject: () => {
        console.log('cancelar');
      }
  });
}


}
