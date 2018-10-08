import { Component, OnInit } from '@angular/core';
import { Paises } from '../../models/paises';
import { PaisesService } from '../../services/paises.service';
import { FrmpaisesComponent } from './frmpaises/frmpaises.component';
import { DialogService } from '../../services/dinamicos/dialog.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: []
})
export class PaisesComponent implements OnInit {
  paises: Paises[] = [];
  cols: any[];
  selectedPais: Paises;
  displayDialog: boolean;

  constructor(private WsPaises: PaisesService, public dialog: DialogService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Abreviatura', header: 'Abreviatura' },
    ];
  }

  saveCliente() {
    console.log('Save desde paisesComponent');
    this.displayDialog = true;
  }

  refresh() {
    this.WsPaises.getAll().subscribe(data => {
      this.paises = data;
     });
  }

  open(item: Paises) {
    const ref = this.dialog.open(FrmpaisesComponent, { 
      data: { _id: item._id} });
  }


  
  add() {
    const ref = this.dialog.open(FrmpaisesComponent , { 
                  data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/
  }

}
