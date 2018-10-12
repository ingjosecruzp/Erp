import { Component, OnInit } from '@angular/core';
import { TipoConcepto } from '../../../../models/Inventarios/tipoconcepto';

@Component({
  selector: 'app-gridtipoconceptos',
  templateUrl: './gridtipoconceptos.component.html'
})
export class GridtipoconceptosComponent implements OnInit {
 TipoConcepto: TipoConcepto[] = [];
 cols: any[];
  selectedConcepto: TipoConcepto;

  constructor( ) { }

  ngOnInit() {
  }

}
