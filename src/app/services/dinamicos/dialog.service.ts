import { Injectable, Type, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef  } from '@angular/core';
import { DialogComponent } from '../../components/shared/dialog/dialog.component';
import { DialogModule } from '../../modules/dialog/dialog.module';
import { DialogConfig } from '../../components/shared/dialog/dialog-config';
import { DialogInjector } from '../../components/shared/dialog/dialog-injector';
import { DialogRef } from '../../components/shared/dialog/dialog-ref';

@Injectable({
  providedIn: DialogModule
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
              private appRef: ApplicationRef, private injector: Injector) {}

            
  appendDialogComponentToBody(config: DialogConfig) {
    const map = new WeakMap();
    map.set(DialogConfig, config);

    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    const sub = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    // const componentRef = componentFactory.create(this.injector);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  
    this.dialogComponentRef = componentRef;

    /*this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });*/

    return dialogRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public open(componentType: Type<any>, config: DialogConfig) {

   const dialogRef = this.appendDialogComponentToBody(config);

   this.dialogComponentRef.instance.childComponentType = componentType;

   return dialogRef;
 
 }
}
