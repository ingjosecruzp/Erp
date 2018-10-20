import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/models/Inventarios/almacen';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TipocomponenteService } from '../../../../services/inventarios/tipocomponente.service';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';
import { AlmacenService } from 'src/app/services/inventarios/almacen.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-frmalmacenes',
  templateUrl: './frmalmacenes.component.html'
})
export class FrmalmacenesComponent extends FrmBase<Almacen> implements OnInit, IFrmBase {
  FrmAlmacen: FormGroup;
  displayDialog: boolean;
  TipoComponente: TipoComponente[]; // se guarda en la base de datos al arrelgo
  TipoComponenteId: string;
  GrupocomponenteSelecte: SelectItem[];

  constructor(
              public config: DialogConfig,
              public dialog: DialogRef,
              private WsTipoComponente: TipocomponenteService,
              private WsAlmacen: AlmacenService,
              private fb: FormBuilder,
              private confirmationService: ConfirmationService,
              private WsGrupoComponente: GrupocomponenteService ) {
    super();
    this.displayDialog = true;
    this.Ws = WsAlmacen;
    
    
   }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Clave: [null, [Validators.required]],
      Nombre: [null, [Validators.required]],
      TipoAlmacen: [null, [Validators.required]],
      Activo: [null, [Validators.required]],
      TipoComponente: [null, [Validators.required]],
   });

   if (this.config.data._id !== undefined) {
     this.WsAlmacen.get(this.config.data._id).subscribe(data => {
        this._id = data._id;
        let item = new Almacen(data);
        this.FrmItem.patchValue(item);
        console.log('Respuesta del servidor DC', data);
     });
   }

      this.FrmItem.controls['TipoComponente'].valueChanges.subscribe( data => {
        // console.log('entramos', event);
        this.TipoComponenteId = data._id;
        // console.log('grupocompontnetID', this.TipoComponenteId);
        this.searchGrupoComponenteXTipoComponente(null, this.TipoComponenteId, this.WsGrupoComponente);
        // this.FrmItem.controls['GrupoComponente'].reset();
    });

  }

  save () {
    this.confirmationService.confirm({
      message: '¿Esta seguro de guardar la información?',
      header: 'Erp',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.item = new Almacen(this.FrmItem.value);
        super.save();
      },
      reject: () => {
        console.log('cancelar');
      }
  });

  
  }

}
