import { Component, OnInit } from '@angular/core';
import { SubgrupocomponenteService } from '../../../../services/inventarios/subgrupocomponente.service';
import { SubgrupoComponente } from '../../../../models/Generales/subgrupocompenente';


@Component({
  selector: 'app-gridsubgrupocomponentes',
  templateUrl: './gridsubgrupocomponentes.component.html'
})
export class GridsubgrupocomponentesComponent implements OnInit {
  SubgrupoComponente: SubgrupoComponente[] = [];
  cols: any[];
  selectedConcepto: SubgrupoComponente;

  constructor(private WsSubgrupocomponentes: SubgrupocomponenteService) { }

  ngOnInit() {

    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
      { field: 'GrupoComponente.Nombre', header: 'Nombre Grupo' },
      { field: 'TipoComponente.Nombre', header: 'Tipo Componente' }
    ];

  }

}
