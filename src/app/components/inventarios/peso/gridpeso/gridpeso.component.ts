import { Component, OnInit } from '@angular/core';
import { Peso } from '../../../../models/Inventarios/peso';
import { PesoService } from '../../../../services/inventarios/peso.service';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmpesoComponent } from '../frmpeso/frmpeso.component';


@Component({
  selector: 'app-gridpeso',
  templateUrl: './gridpeso.component.html'
})
export class GridpesoComponent implements OnInit {
  pesos: Peso[] = [];
  cols: any[];
  selectedConcepto: Peso;

  constructor(private WsPeso: PesoService, public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },

    ];
  }

  refresh() {
    this.WsPeso.getAll().subscribe(data => {
      this.pesos = data;
     });
  }

  open(item: Peso) {
    const ref = this.dialog.open(FrmpesoComponent, { 
      data: { _id: item._id} });
  }
  
  add() {
    const ref = this.dialog.open(FrmpesoComponent , { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
