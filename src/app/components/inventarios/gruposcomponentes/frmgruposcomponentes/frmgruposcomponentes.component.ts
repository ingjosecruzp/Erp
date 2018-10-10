import { Component, OnInit } from '@angular/core';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TipocomponenteService } from '../../../../services/inventarios/tipocomponente.service';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { EventEmitter } from 'events';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';



@Component({
  selector: 'app-frmgruposcomponentes',
  templateUrl: './frmgruposcomponentes.component.html',
  styles: []
})
export class FrmgruposcomponentesComponent extends FrmBase<GrupoComponente> implements OnInit, IFrmBase {
  FrmGrupoComponente: FormGroup;
  displayDialog: boolean;
  TipoComponente: TipoComponente[]; // se guarda en la base de datos al arrelgo

  // tslint:disable-next-line:max-line-length
  constructor(public config: DialogConfig, public dialog: DialogRef, private WsGrupoComponente: GrupocomponenteService,
                                           private WsTipoComponente: TipocomponenteService, private fb: FormBuilder ) {
    super();
    this.displayDialog = true;
    this.Ws = WsGrupoComponente;
    // console.log(config.data._id);
   }

  ngOnInit() {
       this.FrmItem = this.fb.group({
       Nombre: ['', [Validators.required]],
       TipoComponente: ['', [Validators.required]]
    });

    if (this.config.data._id !== undefined) {
      this.WsGrupoComponente.get(this.config.data._id).subscribe(data => {
         let item = new GrupoComponente(data);
         this.FrmItem.patchValue(item);
         console.log('Respuesta del servidor DC', data);
      });
    }

  }

  save () {
    this.item = new GrupoComponente(this.FrmItem.value);
    super.save();
  }


 


}
