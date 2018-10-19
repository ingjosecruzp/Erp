import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dinamicos/dialog.service';
import { FrmentradasComponent } from '../frmentradas/frmentradas.component';
import { Entradas } from '../../../../models/Inventarios/entradas';


@Component({
  selector: 'app-gridentradas',
  templateUrl: './gridentradas.component.html'
})
export class GridentradasComponent implements OnInit {
Entradas: Entradas[] = [];
cols: any[];
selectedConcepto: Entradas;

  constructor() { }

  ngOnInit() {
  }

}
