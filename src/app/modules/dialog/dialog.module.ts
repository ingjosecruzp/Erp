import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../components/shared/dialog/dialog.component';
import { InsertionDirective } from '../../directives/insertion.directive';
import {DialogModule as DialogPrime} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    DialogPrime,
    ButtonModule
  ],
  declarations: [DialogComponent, InsertionDirective],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
