import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../../models/Generales/Unidad';
import { UnidadService } from '../../../../services/inventarios/unidad.service';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmunidadesComponent } from '../frmunidades/frmunidades.component';

@Component({
  selector: 'app-gridunidades',
  templateUrl: './gridunidades.component.html'

})
export class GridunidadesComponent implements OnInit {
  unidades: Unidad[] = [];
  cols: any[];
  selectedConcepto: Unidad;
  constructor( private WsUnidad: UnidadService, public dialog: DialogService) { }

  ngOnInit( ) {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Abreviatura', header: 'Abreviatura' },

    ];
  }
  refresh() {
    this.WsUnidad.getAll().subscribe(data => {
      this.unidades = data;
     });
  }

  open() {
    const ref = this.dialog.open(FrmunidadesComponent, { 
      data: { message: 'I am a dynamic component inside of a dialog!'} });
  }
  add() {
    const ref = this.dialog.open(FrmunidadesComponent , { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }
}
