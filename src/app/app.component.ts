import { Component } from '@angular/core';
import { DialogService } from './services/dinamicos/dialog.service';
import { ExampleComponent } from './components/example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  item: any;

  public onRouterOutletActivate(event: any) {
    // console.log(event);
    this.item = event;
  }

  constructor(public dialog: DialogService) {
    const ref = this.dialog.open(ExampleComponent, { 
                    data: { message: 'I am a dynamic component inside of a dialog!' } });
    console.log(ref);
    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
}
