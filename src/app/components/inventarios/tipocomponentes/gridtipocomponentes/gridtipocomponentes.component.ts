import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { TipocomponenteService } from '../../../../services/inventarios/tipocomponente.service';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';
import { FrmtipocomponentesComponent } from '../frmtipocomponentes/frmtipocomponentes.component';



@Component({
  selector: 'app-gridtipocomponentes',
  templateUrl: './gridtipocomponentes.component.html',

})
export class GridtipocomponentesComponent implements OnInit {
  TipoComponentes: TipoComponente [] = [];
  cols: any[];
  selectedConcepto: TipoComponente;

  constructor(private WsTipoComponente: TipocomponenteService,
               public dialog: DialogService) { }

  ngOnInit( ) {
      this.cols = [
       { field: 'Nombre', header: 'Nombre' }
  ];
  }

  
  refresh() {
    this.WsTipoComponente.getAll().subscribe(data => {
      this.TipoComponentes = data;
     });
  }


  open(item: TipoComponente) {
    const ref = this.dialog.open(FrmtipocomponentesComponent, { 
      data: { _id: item._id} });
  }

  add() {
    const ref = this.dialog.open(FrmtipocomponentesComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
  
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
