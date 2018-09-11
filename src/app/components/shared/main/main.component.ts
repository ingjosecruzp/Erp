import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  items: any[];
  public index: number = 0;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        header: 'Tab 1',
        content: `<app-clientes></app-clientes>`,
        selected: true,
        closable : false
      },
      {
        header: 'Tab 1',
        content: 'Item 1',
        selected: false,
        closable: true
      }
    ];
  }

  addTab (): void {
    this.items.forEach(function(element) {
      element.selected = false;
    });

    this.items.push({header: 'Tab 0', content: 'Item 0', selected: true, closable: true});
    console.log(this.items);
  }

}
