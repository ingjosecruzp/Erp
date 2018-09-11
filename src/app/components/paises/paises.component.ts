import { Component, OnInit } from '@angular/core';
import { Paises } from '../../models/paises';
import { PaisesService } from '../../services/paises.service';

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

  constructor(private WsPaises: PaisesService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Abreviacion', header: 'Abreviatura' },
    ];
  }

  saveCliente() {
    console.log('Save desde paisesComponent');
    this.displayDialog = true;
  }

}
