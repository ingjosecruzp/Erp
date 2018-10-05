import { Component, OnInit } from '@angular/core';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TipocomponenteService } from '../../../../services/inventarios/tipocomponente.service';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';



@Component({
  selector: 'app-frmgruposcomponentes',
  templateUrl: './frmgruposcomponentes.component.html',
  styles: []
})
export class FrmgruposcomponentesComponent implements OnInit {
  FrmGrupoComponente: FormGroup;
  displayDialog: boolean;
  TipoComponente: TipoComponente[]; // se guarda en la base de datos al arrelgo

  // tslint:disable-next-line:max-line-length
  constructor(public config: DialogConfig, public dialog: DialogRef, private WsGrupoComponente: GrupocomponenteService , private WsTipoComponente: TipocomponenteService, private fb: FormBuilder ) {
    this.displayDialog = true;
   }

  ngOnInit() {

       this.FrmGrupoComponente = this.fb.group({
       Nombre: ['', [Validators.required]],
       TipoComponente: ['', [Validators.required]]
    });



  }

  searchTipoComponente(event) {
    this.WsTipoComponente.search(event.query).subscribe(data => {
      console.log(data);
      this.TipoComponente = data;
    });
  }


  save () {
    let item = new GrupoComponente(this.FrmGrupoComponente.value);
    console.log(item);
    console.log(JSON.stringify(item));

    this.WsGrupoComponente.save(item).subscribe(data => {
         console.log('Guardado Grupo componente');
         console.log(data);
    });
  }


}
