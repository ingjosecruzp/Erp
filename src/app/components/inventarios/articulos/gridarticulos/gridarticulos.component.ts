import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { ArticulosService } from '../../../../services/inventarios/articulos.service';
import { Articulo } from '../../../../models/Inventarios/articulos';
import { FrmarticulosComponent } from '../frmarticulos/frmarticulos.component';

@Component({
  selector: 'app-gridarticulos',
  templateUrl: './gridarticulos.component.html'
})
export class GridarticulosComponent implements OnInit {
  articulos: Articulo[] = [];
  cols: any[];
  selectedConcepto: Articulo;

  constructor(private WsArticulos: ArticulosService, public dialog: DialogService) { 

  }

  ngOnInit() {
    this.cols = [
      { field: 'Clave', header: 'Clave' },
      { field: 'NombreCorto', header: 'Nombre Corto' },
      { field: 'Marca.Nombre', header: 'Marca' },
      { field: 'Activo', header: 'Activo' },
      { field: 'GrupoComponente.Nombre', header: 'Grupo Componente' },
      { field: 'SubGrupoComponente.Nombre', header: 'Subgrupo Componente' }
    ];
  }

  refresh() {
    this.WsArticulos.getAll().subscribe(data => {
      this.articulos = data;
      console.log(this.articulos);
     });
  }

  open(item: Articulo) {
    const ref = this.dialog.open(FrmarticulosComponent, { 
      data: {_id: item._id} });
  }

  add() {
    const ref = this.dialog.open(FrmarticulosComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }
}
