import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { SubgrupoComponente } from '../../../../models/Generales/subgrupocompenente';
import { SubgrupocomponenteService } from '../../../../services/inventarios/subgrupocomponente.service';
import { FrmBase } from 'src/app/components/frmbase';
import { IFrmBase } from '../../../ifrmbase';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-frmsubgrupocomponentes',
  templateUrl: './frmsubgrupocomponentes.component.html'
})
export class FrmsubgrupocomponentesComponent extends FrmBase<SubgrupoComponente> implements OnInit, IFrmBase {
  FrmItem: FormGroup;
  displayDialog: boolean;
  GruposComponentes: GrupoComponente[];

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, 
              private WsGrupoComponentes: GrupocomponenteService, private WsSubgrupoComponentes: SubgrupocomponenteService,
              private confirmationService: ConfirmationService) {
                super();
                this.displayDialog = true;
                this.Ws = WsSubgrupoComponentes;
   }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
      GrupoComponente: [null, [Validators.required]]
   });

   if (this.config.data._id !== undefined) {
    this.WsSubgrupoComponentes.get(this.config.data._id).subscribe(data => {
      this._id = data._id;
       let item = new GrupoComponente(data);
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
        this.item = new SubgrupoComponente(this.FrmItem.value);
    super.save();
      },
      reject: () => {
        console.log('cancelar');
      }
  });
  }
}
