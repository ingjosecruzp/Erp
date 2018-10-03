import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';

@Component({
  selector: 'app-frmunidades',
  templateUrl: './frmunidades.component.html'
})
export class FrmunidadesComponent implements OnInit {
  displayDialog: boolean;
  constructor(public config: DialogConfig, public dialog: DialogRef) {this.displayDialog = true; }

  ngOnInit() {
  }

}
