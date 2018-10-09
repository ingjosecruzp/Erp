import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConceptosService } from '../../../../services/inventarios/conceptos.service';
import { Concepto } from '../../../../models/Inventarios/concepto';

@Component({
  selector: 'app-frmconceptos',
  templateUrl: './frmconceptos.component.html'
})
export class FrmconceptosComponent implements OnInit {
  FrmConceptos: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, 
              private WsCoceptos: ConceptosService, ) {
    this.displayDialog = true;
  }

  ngOnInit() {
    this.FrmConceptos = this.fb.group({
      Nombre: ['', [Validators.required]],
      TipoComponente: ['', [Validators.required]]
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

