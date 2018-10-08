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

   if (this.config.data._id !== undefined) {
    this.WsSubgrupoComponentes.get(this.config.data._id).subscribe(data => {
       let item = new GrupoComponente(data);
       this.FrmSubgrupoComponente.patchValue(item);
       console.log('Respuesta del servidor', data);
    });
  }
  }

  

  searchGrupoComponente(event) {
    this.WsGrupoComponentes.search(event.query).subscribe(data => {
      console.log(data);
      this.GruposComponentes = data;
    });
  }

  save () {
    let item = new SubgrupoComponente(this.FrmSubgrupoComponente.value);
 console.log(JSON.stringify(item));
    this.WsSubgrupoComponentes.save(item).subscribe(data => {
      this.FrmSubgrupoComponente.reset();
        });
  }
}

