import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../shared/dialog/dialog-config';
import { EventEmitter } from 'events';
import { DialogRef } from '../shared/dialog/dialog-ref';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(public config: DialogConfig, public dialog: DialogRef) { 

  }

  ngOnInit() {
  }

  onClose() {
    console.log('TEST');
    this.dialog.close('some value');
  }
  save() {
   console.log('test');
  }
}
