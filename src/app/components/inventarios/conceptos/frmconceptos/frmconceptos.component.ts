import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConceptosService } from '../../../../services/inventarios/conceptos.service';
import { Concepto } from '../../../../models/Inventarios/concepto';
import { FrmBase } from 'src/app/components/frmbase';
import { IFrmBase } from 'src/app/components/ifrmbase';
import { TipoconceptoService } from 'src/app/services/inventarios/tipoconcepto.service';

import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-frmconceptos',
  templateUrl: './frmconceptos.component.html'
})

export class FrmconceptosComponent extends FrmBase<Concepto> implements OnInit, IFrmBase {
  displayDialog: boolean;
  Opcion: SelectItem[];
  Naturaleza: SelectItem[];
  
  

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, 
              private WsCoceptos: ConceptosService, private WsTipoConcepto: TipoconceptoService,private confirmationService: ConfirmationService) {
                super();
                this.displayDialog = true;
                this.Ws = WsCoceptos;

                this.Opcion = [
                  {label: 'SI', value: 'SI' } ,
                  {label: 'NO', value: 'NO'},
                ];

                this.Naturaleza = [
                  {label: 'ENTRADA', value: 'ENTRADA'},
                  {label: 'SALIDA', value:  'SALIDA'},
                ];
  }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Clave: [null, [Validators.required]],
      FolioAutomatico: [null, [Validators.required]],
      Nombre: [null, [Validators.required]],
      Naturaleza: [null, [Validators.required]],
      TipoConcepto: [null, [Validators.required]],
      Predefinido: [null, [Validators.required]],
      CostoAutomatico: [null, [Validators.required]]
   });

   if (this.config.data._id !== undefined) {
     this.WsCoceptos.get(this.config.data._id).subscribe(data => {
        let item = new Concepto(data);
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
          this.item = new Concepto(this.FrmItem.value);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
  }

}

