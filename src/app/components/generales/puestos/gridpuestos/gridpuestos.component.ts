import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Generales/puesto';
import { PuestoService } from '../../../../services/Generales/puesto.service';
import { DialogService } from 'src/app/services/dinamicos/dialog.service';
import { FrmpuestosComponent } from '../frmpuestos/frmpuestos.component';

@Component({
  selector: 'app-gridpuestos',
  templateUrl: './gridpuestos.component.html'
})
export class GridpuestosComponent implements OnInit {
  Puesto: Puesto[] = [];
  cols: any[];
  selectedGruposComponentes: Puesto; 


  constructor(private wsPuesto: PuestoService,
    public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Puesto' },
      { field: 'Departamento.Nombre', header: 'Departamento' }
    ];
  }
  refresh() {
    this.wsPuesto.getAll().subscribe(data => {
      this.Puesto = data;
     });
  }
  open(item: Puesto) {
    const ref = this.dialog.open(FrmpuestosComponent, { 
      data: {_id: item._id} });
  }
  add() {
    const ref = this.dialog.open(FrmpuestosComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
