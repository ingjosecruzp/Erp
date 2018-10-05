import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { TipocomponenteService } from '../../../../services/inventarios/tipocomponente.service';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';

@Component({
  selector: 'app-gridtipocomponentes',
  templateUrl: './gridtipocomponentes.component.html',

})
export class GridtipocomponentesComponent implements OnInit {
  TipoComponentes: TipoComponente [] = [];
  cols: any[];
  selectedConcepto: TipoComponente;

  constructor(private WsTipoComponente: TipocomponenteService, public dialog: DialogService) { }

  ngOnInit( ) {
      this.cols = [
       { field: 'Nombre', header: 'Nombre' }
  
  ];
  }

  
  refresh() {
    this.WsTipoComponente.getAll().subscribe(data => {
      this.WsTipoComponente = data;
     });
  }

}
