import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dinamicos/dialog.service';
import { FrmentradasComponent } from '../frmentradas/frmentradas.component';
import { Entradas } from '../../../../models/Inventarios/entradas';


@Component({
  selector: 'app-gridentradas',
  templateUrl: './gridentradas.component.html'
})
export class GridentradasComponent implements OnInit {
Entradas: Entradas[] = [];
cols: any[];
selectedConcepto: Entradas;

  constructor(public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      {field: 'fecha', header: 'Fecha'},
      {field: 'folio', header: 'Folio'},
      {field: 'Concepto.Nombre', header: 'Concepto'},
      {field: 'Almacen.Nombre', header: 'Almacen'},
      {field: 'descripcion', header: 'Descripcion'}
    ];
  }

  add() {
    const ref = this.dialog.open(FrmentradasComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
