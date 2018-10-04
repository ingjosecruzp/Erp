import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';

@Component({
  selector: 'app-frmsubgrupocomponentes',
  templateUrl: './frmsubgrupocomponentes.component.html'
})
export class FrmsubgrupocomponentesComponent implements OnInit {
  FrmSubgrupoComponente: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder) {
    this.displayDialog = true;
   }

  ngOnInit() {
    this.FrmSubgrupoComponente = this.fb.group({
      Nombre: ['', [Validators.required]]
   });
  }

}
