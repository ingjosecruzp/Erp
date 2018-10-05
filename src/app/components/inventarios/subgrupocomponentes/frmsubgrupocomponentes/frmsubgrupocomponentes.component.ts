import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { SubgrupoComponente } from '../../../../models/Generales/subgrupocompenente';
import { SubgrupocomponenteService } from '../../../../services/inventarios/subgrupocomponente.service';

@Component({
  selector: 'app-frmsubgrupocomponentes',
  templateUrl: './frmsubgrupocomponentes.component.html'
})
export class FrmsubgrupocomponentesComponent implements OnInit {
  FrmSubgrupoComponente: FormGroup;
  displayDialog: boolean;
  GruposComponentes: GrupoComponente[];

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, 
              private WsGrupoComponentes: GrupocomponenteService, private WsSubgrupoComponentes: SubgrupocomponenteService) {
    this.displayDialog = true;
   }

  ngOnInit() {
    this.FrmSubgrupoComponente = this.fb.group({
      Nombre: ['', [Validators.required]],
      GrupoComponente: ['', [Validators.required]]
   });
  }

  searchGrupoComponente(event) {
    this.WsGrupoComponentes.search(event.query).subscribe(data => {
      console.log(data);
      this.GruposComponentes = data;
    });
  }

  save () {
    // console.log('FrmSubgrupoComponente');
      // console.log(item);
    // console.log(JSON.stringify(item));
    let item = new SubgrupoComponente(this.FrmSubgrupoComponente.value);
 console.log(JSON.stringify(item));
    this.WsSubgrupoComponentes.save(item).subscribe(data => {
         console.log('Guardado');
         console.log(data);
        });
  }
}
