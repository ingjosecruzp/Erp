import { Component, OnInit } from '@angular/core';
import { Salidas } from '../../../../models/Inventarios/salidas';
import { FrmsalidasComponent } from '../frmsalidas/frmsalidas.component';
import { DialogService } from '../../../../services/dinamicos/dialog.service';



@Component({
  selector: 'app-gridsalidas',
  templateUrl: './gridsalidas.component.html'
})
export class GridsalidasComponent implements OnInit {
Salidas: Salidas[] = [];
cols: any[];
selectedConcepto: Salidas;

  constructor(public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
    {fields: 'fecha', header: 'Fecha'},
    {fields: 'folio', header: 'Folio'},
    {fields: 'Concepto.Nombre', header: 'Concepto'},
    {fields: 'Almacen.Nombre', header: 'Almacen'},
    {fields: 'Descripcion', header: 'Descripcion'},
    ];
  }

  add() {
    const ref = this.dialog.open(FrmsalidasComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
