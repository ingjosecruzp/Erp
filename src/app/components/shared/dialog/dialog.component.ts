import { Component, ViewChild,  Type, OnDestroy, AfterViewInit, ComponentFactoryResolver, 
                                       ComponentRef, ChangeDetectorRef  } from '@angular/core';
import { InsertionDirective } from '../../../directives/insertion.directive';
import { ExampleComponent } from '../../example/example.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  implements AfterViewInit, OnDestroy {
  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;
  displayDialog: boolean = true;

  @ViewChild(InsertionDirective)
  insertionPoint: InsertionDirective;

  //@ViewChild(ExampleComponent) f: ExampleComponent;
  

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges(); 
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  /*save () {
    console.log('test');
    console.log(this.myChild);
    console.log(this.componentRef);
    console.log(this.childComponentType);
    // this.myChild.save();
  }*/

  loadChildComponent(componentType: Type<any>) {
    console.log(componentType);
    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    console.log(componentFactory);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    console.log(viewContainerRef);

    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(this.componentRef);
}

}
