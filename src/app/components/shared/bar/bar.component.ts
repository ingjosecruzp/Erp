import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: []
})
export class BarComponent implements OnInit {
  items: MenuItem[];
  @Input() item: any;

  constructor() { }

  save() {
    this.item.add();
  }

  ngOnInit() {
      this.items = [
          {
            icon: 'pi pi-file'
          },
          {
            icon: 'pi  pi-pencil'
          },
          {
            icon: 'pi pi-trash'
          },
          {
            icon: 'pi pi-print'
          },
          {
              icon: 'pi pi-replay'
          },
          {
              icon: 'pi pi-home'
          }
      ];
  }
}
