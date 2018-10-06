import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TipocomponenteService } from '../../../../services/inventarios/tipocomponente.service';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';


@Component({
  selector: 'app-frmtipocomponentes',
  templateUrl: './frmtipocomponentes.component.html',

})
export class FrmtipocomponentesComponent implements OnInit {
  FrmTipoComponente: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef,
               private fb: FormBuilder, private WsTipoComponente: TipocomponenteService) {
    this.displayDialog = true;
   }

  ngOnInit() {
    this.FrmTipoComponente = this.fb.group({
      Nombre: ['', [Validators.required]]
   });
   console.log('ñaña');
  }


  save () {
    let item = new TipoComponente(this.FrmTipoComponente.value);

    this.WsTipoComponente.save(item).subscribe(data => {
         console.log('Guardado');
         console.log(data);
         this.FrmTipoComponente.reset();
    });
  }

}
