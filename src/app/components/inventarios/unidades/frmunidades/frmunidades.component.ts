import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-frmunidades',
  templateUrl: './frmunidades.component.html'
})
export class FrmunidadesComponent implements OnInit {
  FrmDocumento: FormGroup;
  displayDialog: boolean;
  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder) {this.displayDialog = true; }

  ngOnInit() {
    this.FrmDocumento = this.fb.group({
      Nombre: ['', [Validators.required]],
      Abreviatura: ['', [Validators.required]],
   });
  }

}
