import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: []
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
                    {label: 'Conceptos', icon: 'pi pi-fw pi-th-large', routerLink: ['/conceptos']},
                    {label: 'Tipo Concepto', icon: 'pi pi-fw fa fa-object-group', routerLink: ['/tipoconcepto']},
                    {label: 'Unidades', icon: 'pi pi-fw fa fa-puzzle-piece', routerLink: ['/unidades']},
                    {label: 'Grupos Componentes', icon: 'pi pi-fw fa fa-puzzle-piece', routerLink: ['/grupocompnentes']},
                    {label: 'Subgrupo Componentes', icon: 'pi pi-fw fa fa-object-group', routerLink: ['/subgrupocomponentes']},
                    {label: 'tipo Componentes', icon: 'pi pi-fw fa fa-object-group', routerLink: ['/tipocomponentes']},
                    {label: 'Articulos', icon: 'pi pi-fw fa fa-product-hunt', routerLink: ['/articulos']},
                    {label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/usuario']},
                    {label: 'Usuarios Rol', icon: 'pi pi-fw pi-user-plus', routerLink: ['/usuariorol']},
                    {label: 'Marcas', icon: 'pi pi-fw fa fa-object-group', routerLink: ['/marca']},
                    {label: 'Almacenes', icon: 'pi pi-fw pi-home', routerLink: ['/almacenes']},
                    {label: 'Departamentos', icon: 'pi pi-fw fa fa-object-group', routerLink: ['/departamentos']},
                    {label: 'Puestos', icon: 'pi pi-fw fa fa-object-group', routerLink: ['/puestos']},
                    {label: 'Entradas', icon: 'fa fa-file-text-o', routerLink: ['/entradas']},
                    {label: 'Refresh', icon: 'pi pi-fw pi pi-fw pi-refresh'},
                ]
            }
        ];
    }

}
