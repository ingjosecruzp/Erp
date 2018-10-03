import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';

@Component({
  selector: 'app-frmsubgrupocomponentes',
  templateUrl: './frmsubgrupocomponentes.component.html'
})
export class FrmsubgrupocomponentesComponent implements OnInit {
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef) {
    this.displayDialog = true;
   }

  ngOnInit() {
  }

}
