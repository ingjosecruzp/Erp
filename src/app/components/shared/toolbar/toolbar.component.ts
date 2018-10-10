import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() Formulario: any;
  btnIcon: string = 'fa fa-check';
  // cargando: boolean=true;
  
  constructor() { 
    
  }

  ngOnInit() {

  }

  save() {
    console.log(this.Formulario.Cargando);
     this.Formulario.save();
  }

  delete() {
    this.Formulario.delete();
  }

}
