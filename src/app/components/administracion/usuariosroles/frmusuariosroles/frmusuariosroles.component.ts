import { Component, OnInit } from '@angular/core';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsuarioRol } from 'src/app/models/administracion/usuariorol';
import { UsuariorolService } from 'src/app/services/administracion/usuariorol.service';

@Component({
  selector: 'app-frmusuariosroles',
  templateUrl: './frmusuariosroles.component.html'
})
export class FrmusuariosrolesComponent extends FrmBase<UsuarioRol> implements OnInit, IFrmBase {
  FrmItem: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef,
              private fb: FormBuilder, private WsUsuariorol: UsuariorolService,
              private confirmationService: ConfirmationService) {
      super();
      this.displayDialog = true;
      this.Ws = WsUsuariorol;
   }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]]
   });
   
   if (this.config.data._id !== undefined) {
    this.WsUsuariorol.get(this.config.data._id).subscribe(data => {
        this._id = data._id;
        let item = new UsuarioRol(data);
        this.FrmItem.patchValue(item);
       console.log('Respuesta del servidor', data);
    });
  }

}

save () {
  this.confirmationService.confirm({
    message: '¿Esta seguro de guardar la información?',
    header: 'Erp',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.item = new UsuarioRol(this.FrmItem.value);
      super.save();
    },
    reject: () => {
      console.log('cancelar');
    }
  });
  }

}
