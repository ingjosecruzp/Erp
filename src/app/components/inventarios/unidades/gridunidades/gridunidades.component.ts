import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../../models/Generales/Unidad';
import { UnidadService } from '../../../../services/inventarios/unidad.service';

@Component({
  selector: 'app-gridunidades',
  templateUrl: './gridunidades.component.html'

})
export class GridunidadesComponent implements OnInit {
  unidades: Unidad[] = [];
  cols: any[];
  selectedConcepto: Unidad;
  constructor( private WsUnidad: UnidadService) { }

  ngOnInit( ) {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Abreviatura', header: 'Abreviatura' },
  
    ];
  }
}
