import { Component, OnInit } from '@angular/core';
import { Concepto } from '../../../../models/Inventarios/concepto';
import { ConceptosService } from '../../../../services/inventarios/conceptos.service';

@Component({
  selector: 'app-gridconceptos',
  templateUrl: './gridconceptos.component.html'
})
export class GridconceptosComponent implements OnInit {
  conceptos: Concepto[] = [];
  cols: any[];
  selectedConcepto: Concepto;

  constructor(private WsConceptos: ConceptosService) {

   }

  ngOnInit() {

    this.cols = [
      { field: 'Clave', header: 'Clave' },
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Naturaleza', header: 'Naturaleza' },
      { field: 'TipoConcepto._id', header: 'Tipo Concepto' },
      { field: 'Predefinido', header: 'Predefinido' }
    ];

  }

}
