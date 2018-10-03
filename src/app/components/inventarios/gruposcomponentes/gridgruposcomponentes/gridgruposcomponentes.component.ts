import { Component, OnInit } from '@angular/core';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmgruposcomponentesComponent } from '../frmgruposcomponentes/frmgruposcomponentes.component';

@Component({
  selector: 'app-gridgruposcomponentes',
  templateUrl: './gridgruposcomponentes.component.html',
  styles: []
})
export class GridgruposcomponentesComponent implements OnInit {
  GrupoComponente: GrupoComponente[] = [];
  cols: any[];
  selectedGruposComponentes: GrupoComponente; 


  constructor(private WsGrupocomponenteService: GrupocomponenteService, public dialog: DialogService) { 
    
  }

  ngOnInit() {

    this.cols = [
      { field: 'Nombre', header: 'Nobre' },
      { field: 'TipoComponentes.Nombre', header: 'Tipo Componente' },
    ];
  }

  add() {
    const ref = this.dialog.open(FrmgruposcomponentesComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }
  
}
