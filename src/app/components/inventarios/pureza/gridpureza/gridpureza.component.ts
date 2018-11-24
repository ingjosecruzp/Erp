import { Component, OnInit } from '@angular/core';
import { PurezaService } from '../../../../services/inventarios/pureza.service';
import { Pureza } from '../../../../models/Generales/pureza';
import { DialogService } from '../../../../services/dinamicos/dialog.service';
import { FrmpurezaComponent } from '../frmpureza/frmpureza.component';


@Component({
  selector: 'app-gridpureza',
  templateUrl: './gridpureza.component.html'
})
export class GridpurezaComponent implements OnInit {
  Pureza: Pureza[] = [];
  cols: any[];
  selectedConcepto: Pureza;

  constructor( private WsPureza: PurezaService, public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Pureza' },
      { field: 'GrupoComponente.Nombre', header: 'Nombre Grupo' },
      { field: 'GrupoComponente.TipoComponente.Nombre', header: 'Tipo Componente' }
    ];
  }

  add() {
    const ref = this.dialog.open(FrmpurezaComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

  refresh() {
    this.WsPureza.getAll().subscribe(data => {
      this.Pureza = data;
     });
  }

  open(item: Pureza) {
    const ref = this.dialog.open(FrmpurezaComponent, { 
      data: {_id: item._id} });
  }

}

