import { Component, OnInit } from '@angular/core';
import { Procedencia } from '../../../../models/Inventarios/procedencia';
import { ProcedenciaService } from '../../../../services/inventarios/procedencia.service';
import { FrmprocedenciasComponent } from '../frmprocedencias/frmprocedencias.component';
import { DialogService } from '../../../../services/dinamicos/dialog.service';

@Component({
  selector: 'app-gridprocedencias',
  templateUrl: './gridprocedencias.component.html'
})
export class GridprocedenciasComponent implements OnInit {
  Procedencia: Procedencia[] = [];
  cols: any[];
  selectedConcepto: Procedencia;

  constructor(private Wsprocedencia: ProcedenciaService, public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },

    ];
  }

  refresh() {
    this.Wsprocedencia.getAll().subscribe(data => {
      this.Procedencia = data;
     });
  }

  open(item: Procedencia) {
    const ref = this.dialog.open(FrmprocedenciasComponent, { 
      data: { _id: item._id} });
  }
  
  add() {
    const ref = this.dialog.open(FrmprocedenciasComponent , { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
