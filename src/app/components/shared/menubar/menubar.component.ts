import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];
  @Input() main: MainComponent;

  constructor() { }

  ngOnInit() {
        this.items = [
            {
                label: 'Documentos',
                items: [
                    {label: 'Factura', icon: 'pi pi-fw pi-external-link', command: (event) => {
                        console.log('click');
                        console.log(event);
                        this.main.addTab();
                    }},
                    // {separator: true},
                    {label: 'Recibo de pago', icon: 'pi pi-fw pi-times', command: (event) => {
                        console.log(this.main.items);
                        this.main.items.forEach(function(element) {
                            element.selected = false;
                          });
                    }}
                ]
            },
            {
                label: 'Catalogos',
                items: [
                    {label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/clientes']},
                    {label: 'Paises', icon: 'pi pi-fw pi-globe', routerLink: ['/paises']},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
    }

}
