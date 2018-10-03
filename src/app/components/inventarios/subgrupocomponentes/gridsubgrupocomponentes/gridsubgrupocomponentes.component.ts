import { Component, OnInit } from '@angular/core';
import { SubgrupocomponenteService } from '../../../../services/inventarios/subgrupocomponente.service';
import { SubgrupoComponente } from '../../../../models/Generales/subgrupocompenente';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmsubgrupocomponentesComponent } from '../frmsubgrupocomponentes/frmsubgrupocomponentes.component';



@Component({
  selector: 'app-gridsubgrupocomponentes',
  templateUrl: './gridsubgrupocomponentes.component.html'
})
export class GridsubgrupocomponentesComponent implements OnInit {
  SubgrupoComponente: SubgrupoComponente[] = [];
  cols: any[];
  selectedConcepto: SubgrupoComponente;

  constructor(private WsSubgrupocomponentes: SubgrupocomponenteService, public dialog: DialogService) { }

  ngOnInit() {

    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
      { field: 'GrupoComponente.Nombre', header: 'Nombre Grupo' },
      { field: 'TipoComponente.Nombre', header: 'Tipo Componente' }
    ];

  }

  add() {
    const ref = this.dialog.open(FrmsubgrupocomponentesComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
