import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../shared/dialog/dialog-config';
import { DialogRef } from '../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { PaisesService } from '../../../services/paises.service';
import { Paises } from 'src/app/models/paises';


@Component({
  selector: 'app-frmpaises',
  templateUrl: './frmpaises.component.html'
})
export class FrmpaisesComponent implements OnInit {
  FrmPaises: FormGroup;
  displayDialog: boolean;
  constructor(public config: DialogConfig, public dialog: DialogRef, 
              private fb: FormBuilder, private WsPaises: PaisesService) { 
                this.displayDialog = true;
                console.log(config.data._id);
  }

  ngOnInit() {
    this.FrmPaises = this.fb.group({
      Nombre: ['', [Validators.required]],
      Abreviatura: ['', [Validators.required]],
   });

   if (this.config.data._id !== undefined) {
    this.WsPaises.get(this.config.data._id).subscribe(data => {
      let item = new Paises(data);
      console.log(item);
      this.FrmPaises.patchValue(item);
 
    });
  }
  }

  save () {

    let item = new Paises(this.FrmPaises.value);

    this.WsPaises.save(item).subscribe(data => {
         console.log('Guardado');
         console.log(data);
         this.FrmPaises.reset();
    });
  }

}

