import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() Formulario: any;
  
  constructor() { 
    
  }

  ngOnInit() {

  }

  save() {
     this.Formulario.save();
  }

}
