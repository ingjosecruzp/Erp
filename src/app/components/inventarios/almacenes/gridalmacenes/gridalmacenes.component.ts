import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/models/Inventarios/almacen';
import { AlmacenService } from 'src/app/services/inventarios/almacen.service';
import { DialogService } from 'src/app/services/dinamicos/dialog.service';
import { FrmalmacenesComponent } from '../frmalmacenes/frmalmacenes.component';


@Component({
  selector: 'app-gridalmacenes',
  templateUrl: './gridalmacenes.component.html'
})
export class GridalmacenesComponent implements OnInit {
  Almacen: Almacen[] = [];
  cols: any[];
  selectedAlmacen: Almacen; 

  constructor(private WsAlmacen: AlmacenService,
              public dialog: DialogService) {  }

  ngOnInit() {
    this.cols = [
      { field: 'Clave', header: 'Clave' },
      { field: 'Nombre', header: 'Nombre' },
      { field: 'TipoAlmacen', header: 'Nombre' },
      { field: 'Activo', header: 'Nombre' },
      { field: 'TipoComponente.Nombre', header: 'Tipo Componente' }
    ];
  }

  refresh() {
    this.WsAlmacen.getAll().subscribe(data => {
      this.Almacen = data;
     });
  }

  open(item: Almacen) {
    const ref = this.dialog.open(FrmalmacenesComponent, { 
      data: {_id: item._id} });
  }

  add() {
    const ref = this.dialog.open(FrmalmacenesComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
  }

}
