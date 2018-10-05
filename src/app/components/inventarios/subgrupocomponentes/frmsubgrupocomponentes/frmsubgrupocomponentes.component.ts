import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';

@Component({
  selector: 'app-frmsubgrupocomponentes',
  templateUrl: './frmsubgrupocomponentes.component.html'
})
export class FrmsubgrupocomponentesComponent implements OnInit {
  FrmSubgrupoComponente: FormGroup;
  displayDialog: boolean;
  GruposComponentes: GrupoComponente[];

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, 
              private WsGrupoComponentes: GrupocomponenteService) {
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
    console.log('FrmSubgrupoComponente');
  }
}
