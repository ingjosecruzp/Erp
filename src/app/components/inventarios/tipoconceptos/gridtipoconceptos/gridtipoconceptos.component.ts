import { Component, OnInit } from '@angular/core';
import { TipoConcepto } from '../../../../models/Inventarios/tipoconcepto';
import { TipoconceptoService } from '../../../../services/inventarios/tipoconcepto.service';
import { DialogService } from 'src/app/services/dinamicos/dialog.service';
import { FrmtipoconceptosComponent } from '../frmtipoconceptos/frmtipoconceptos.component';

@Component({
  selector: 'app-gridtipoconceptos',
  templateUrl: './gridtipoconceptos.component.html'
})
export class GridtipoconceptosComponent implements OnInit {
 TipoConcepto: TipoConcepto[] = [];
 cols: any[];
  selectedConcepto: TipoConcepto;

  constructor(private WsTipoConcepto: TipoconceptoService,
                      public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' }
    ];
  }

  refresh() {
    this.WsTipoConcepto.getAll().subscribe(data => {
      this.WsTipoConcepto = data;
     });
  }

  open(item: TipoConcepto) {
    const ref = this.dialog.open(FrmtipoconceptosComponent, { 
      data: { _id: item._id} });
  }

  add() {
    const ref = this.dialog.open(FrmtipoconceptosComponent, { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
  
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }


}
