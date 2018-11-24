import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FrmBase } from 'src/app/components/frmbase';
import { IFrmBase } from '../../../ifrmbase';
import {ConfirmationService} from 'primeng/api';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { Pureza } from '../../../../models/Generales/pureza';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { PurezaService } from '../../../../services/inventarios/pureza.service';


@Component({
  selector: 'app-frmpureza',
  templateUrl: './frmpureza.component.html'
})
export class FrmpurezaComponent  extends FrmBase<Pureza> implements OnInit, IFrmBase {
  FrmItem: FormGroup;
  displayDialog: boolean;
  GruposComponentes: GrupoComponente[];

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, 
    private WsGrupoComponentes: GrupocomponenteService, private WsPureza: PurezaService,
    private confirmationService: ConfirmationService) {
      super();
      this.displayDialog = true;
      this.Ws = WsPureza;
     }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
      GrupoComponente: [null, [Validators.required]]
   });

   if (this.config.data._id !== undefined) {
    this.WsPureza.get(this.config.data._id).subscribe(data => {
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
        this.item = new Pureza(this.FrmItem.value);
    super.save();
      },
      reject: () => {
        console.log('cancelar');
      }
  });
  }

}

