import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConceptosService } from '../../../../services/inventarios/conceptos.service';
import { Concepto } from '../../../../models/Inventarios/concepto';
import { FrmBase } from 'src/app/components/frmbase';
import { IFrmBase } from 'src/app/components/ifrmbase';
import { TipoconceptoService } from 'src/app/services/inventarios/tipoconcepto.service';

@Component({
  selector: 'app-frmconceptos',
  templateUrl: './frmconceptos.component.html'
})
export class FrmconceptosComponent extends FrmBase<Concepto> implements OnInit, IFrmBase {
  FrmConceptos: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, 
              private WsCoceptos: ConceptosService, private WsTipoConcepto: TipoconceptoService ) {
                super();
                this.displayDialog = true;
                this.Ws = WsCoceptos;
  }

  ngOnInit() {
    this.FrmConceptos = this.fb.group({
      Clave: ['', [Validators.required]],
      FolioAutomatico: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      Naturaleza: ['', [Validators.required]],
      TipoConcepto: ['', [Validators.required]],
      Predefinido: ['', [Validators.required]],
      CostoAutomatico: ['', [Validators.required]]
   });

   if (this.config.data._id !== undefined) {
     this.WsCoceptos.get(this.config.data._id).subscribe(data => {
        let item = new Concepto(data);
        this.FrmConceptos.patchValue(item);
        console.log('Respuesta del servidor', data);
     });
   }
  }

}

