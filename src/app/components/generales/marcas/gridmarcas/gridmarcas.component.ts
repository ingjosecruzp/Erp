import { Component, OnInit } from '@angular/core';
import { Marca } from '../../../../models/Generales/marca';
import { MarcaService } from 'src/app/services/Generales/marca.service';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmmarcasComponent } from '../frmmarcas/frmmarcas.component';

@Component({
  selector: 'app-gridmarcas',
  templateUrl: './gridmarcas.component.html'
})
export class GridmarcasComponent implements OnInit {
  
  Marca: Marca[] = [];
  cols: any[];
  selectedConcepto: Marca;

  constructor(private WsMarca: MarcaService, public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
    ];
  }

  refresh() {
    this.WsMarca.getAll().subscribe(data => {
      this.Marca = data;
     });
  }

  open(item: Marca) {
    const ref = this.dialog.open(FrmmarcasComponent, { 
      data: { _id: item._id} });
  }

  add() {
    const ref = this.dialog.open(FrmmarcasComponent , { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }
}
