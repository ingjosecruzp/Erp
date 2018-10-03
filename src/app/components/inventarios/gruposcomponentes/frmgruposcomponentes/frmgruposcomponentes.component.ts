import { Component, OnInit } from '@angular/core';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';

@Component({
  selector: 'app-frmgruposcomponentes',
  templateUrl: './frmgruposcomponentes.component.html',
  styles: []
})
export class FrmgruposcomponentesComponent implements OnInit {
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef ) {
    this.displayDialog = true;
   }

  ngOnInit() {



  }

}
