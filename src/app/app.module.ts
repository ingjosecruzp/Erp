import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { MenubarComponent } from './components/shared/menubar/menubar.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import { BarComponent } from './components/shared/bar/bar.component';
import {MenubarModule} from 'primeng/menubar';
import { MainComponent } from './components/shared/main/main.component';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';

import {ToolbarModule} from 'primeng/toolbar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';
import { GridbaseComponent } from './components/shared/gridbase/gridbase.component';
import {DialogModule} from 'primeng/dialog';
import {FieldsetModule} from 'primeng/fieldset';
import {PaisesComponent } from './components/paises/paises.component';
import {PanelModule} from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    BarComponent,
    MainComponent,
    ClientesComponent,
    HomeComponent,
    GridbaseComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    PanelMenuModule,
    MenuModule,
    MenubarModule,
    TabViewModule,
    TableModule,
    HttpClientModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    DialogModule,
    FieldsetModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
