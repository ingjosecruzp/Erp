import { Component, OnInit } from '@angular/core';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';

@Component({
  selector: 'app-gridgruposcomponentes',
  templateUrl: './gridgruposcomponentes.component.html',
  styles: []
})
export class GridgruposcomponentesComponent implements OnInit {
  GrupoComponente: GrupoComponente[] = [];
  cols: any[];
  selectedGruposComponentes: GrupoComponente; 


  constructor(private WsGrupocomponenteService: GrupocomponenteService) { 
    
  }

  ngOnInit() {

    this.cols = [
      { field: 'Nombre', header: 'Nobre' },
      { field: 'TipoComponentes.Nombre', header: 'Tipo Componente' },
    ];
  }

}
