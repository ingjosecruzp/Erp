import { Component, OnInit, Input } from '@angular/core';
import { ServicesBase } from '../../../services/servicesBase';
import { ClienteService } from '../../../services/cliente.service';



@Component({
  selector: 'app-gridbase',
  templateUrl: './gridbase.component.html',
  styles: []
})
export class GridbaseComponent<T, S extends ServicesBase> implements OnInit {
   @Input() items: T[] = [];
   @Input() cols: any[];
   @Input() Ws: S;

   selectedCliente: T;

  constructor() {
  }

  ngOnInit() {
    this.Ws.getAll().subscribe(data => {
      this.items = data;
      // console.log(this.items);
     });
  }

}
