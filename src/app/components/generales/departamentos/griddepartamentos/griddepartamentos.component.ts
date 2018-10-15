import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../../../models/Generales/departamento';
import { DepartamentoService } from 'src/app/services/Generales/departamento.service';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmdepartamentosComponent } from '../frmdepartamentos/frmdepartamentos.component';


@Component({
  selector: 'app-griddepartamentos',
  templateUrl: './griddepartamentos.component.html'
})
export class GriddepartamentosComponent implements OnInit {
  Departamento: Departamento[] = [];
  cols: any[];
  selectedConcepto: Departamento;
  constructor( private WsDepartamento: DepartamentoService, public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
    ];
  }
  refresh() {
    this.WsDepartamento.getAll().subscribe(data => {
      this.Departamento = data;
     });
  }
  open(item: Departamento) {
    const ref = this.dialog.open(FrmdepartamentosComponent, { 
      data: { _id: item._id} });
  }
  add() {
    const ref = this.dialog.open(FrmdepartamentosComponent , { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
