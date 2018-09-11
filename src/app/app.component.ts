import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  item: any;

  public onRouterOutletActivate(event: any) {
    console.log(event);
    this.item= event;
  }
}
