import { Component, OnInit } from '@angular/core';
import { Concepto } from '../../../../models/Inventarios/concepto';
import { ConceptosService } from '../../../../services/inventarios/conceptos.service';
import { FrmconceptosComponent } from '../frmconceptos/frmconceptos.component';
import { DialogService } from '../../../../services/dinamicos/dialog.service';


@Component({
  selector: 'app-gridconceptos',
  templateUrl: './gridconceptos.component.html'
})
export class GridconceptosComponent implements OnInit {
  conceptos: Concepto[] = [];
  cols: any[];
  selectedConcepto: Concepto;

  constructor(private WsConceptos: ConceptosService, public dialog: DialogService) {

   }

  ngOnInit() {
    this.cols = [
      { field: 'Clave', header: 'Clave' },
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Naturaleza', header: 'Naturaleza' },
      { field: 'TipoConcepto.Nombre', header: 'Tipo Concepto' },
      { field: 'Predefinido', header: 'Predefinido' }
    ];

  }

  add() {
    const ref = this.dialog.open(FrmconceptosComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
