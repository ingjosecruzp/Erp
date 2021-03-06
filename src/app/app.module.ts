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
import { ClientesComponent } from './components/ventas/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import {CarouselModule} from 'primeng/carousel';
import {FileUploadModule} from 'primeng/fileupload';

import {ToolbarModule} from 'primeng/toolbar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { GridbaseComponent } from './components/shared/gridbase/gridbase.component';
import {DialogModule} from './modules/dialog/dialog.module';
import {DialogModule as DialogPrime} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';
import {GalleriaModule} from 'primeng/galleria';
import {PaisesComponent } from './components/paises/paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ExampleComponent } from './components/example/example.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FrmclientesComponent } from './components/ventas/clientes/frmclientes/frmclientes.component';
import { GridunidadesComponent } from './components/inventarios/unidades/gridunidades/gridunidades.component';
import { FrmunidadesComponent } from './components/inventarios/unidades/frmunidades/frmunidades.component';
import { GridgruposcomponentesComponent } from './components/inventarios/gruposcomponentes/gridgruposcomponentes/gridgruposcomponentes.component';
import { FrmgruposcomponentesComponent } from './components/inventarios/gruposcomponentes/frmgruposcomponentes/frmgruposcomponentes.component';
import { GridsubgrupocomponentesComponent } from './components/inventarios/subgrupocomponentes/gridsubgrupocomponentes/gridsubgrupocomponentes.component';
import { FrmsubgrupocomponentesComponent } from './components/inventarios/subgrupocomponentes/frmsubgrupocomponentes/frmsubgrupocomponentes.component';
import { GridconceptosComponent } from './components/inventarios/conceptos/gridconceptos/gridconceptos.component';
import { FrmconceptosComponent } from './components/inventarios/conceptos/frmconceptos/frmconceptos.component';

import { ObjectUtils } from 'primeng/components/utils/objectutils';
import { GridtipocomponentesComponent } from './components/inventarios/tipocomponentes/gridtipocomponentes/gridtipocomponentes.component';
import { FrmtipocomponentesComponent } from './components/inventarios/tipocomponentes/frmtipocomponentes/frmtipocomponentes.component';
import { FrmpaisesComponent } from './components/paises/frmpaises/frmpaises.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CalendarModule} from 'primeng/calendar';

import {ConfirmationService} from 'primeng/api';
import { GridarticulosComponent } from './components/inventarios/articulos/gridarticulos/gridarticulos.component';
import { FrmarticulosComponent } from './components/inventarios/articulos/frmarticulos/frmarticulos.component';
import { GridusuariosComponent } from './components/administracion/usuarios/gridusuarios/gridusuarios.component';
import { FrmusuariosComponent } from './components/administracion/usuarios/frmusuarios/frmusuarios.component';
import { GridusuariosrolesComponent } from './components/administracion/usuariosroles/gridusuariosroles/gridusuariosroles.component';
import { FrmusuariosrolesComponent } from './components/administracion/usuariosroles/frmusuariosroles/frmusuariosroles.component';
import { GridtipoconceptosComponent } from './components/inventarios/tipoconceptos/gridtipoconceptos/gridtipoconceptos.component';
import { FrmtipoconceptosComponent } from './components/inventarios/tipoconceptos/frmtipoconceptos/frmtipoconceptos.component';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/primeng';
import { GridalmacenesComponent } from './components/inventarios/almacenes/gridalmacenes/gridalmacenes.component';
import { FrmalmacenesComponent } from './components/inventarios/almacenes/frmalmacenes/frmalmacenes.component';
import { GridmarcasComponent } from './components/generales/marcas/gridmarcas/gridmarcas.component';
import { FrmmarcasComponent } from './components/generales/marcas/frmmarcas/frmmarcas.component';
import { GriddepartamentosComponent } from './components/generales/departamentos/griddepartamentos/griddepartamentos.component';
import { FrmdepartamentosComponent } from './components/generales/departamentos/frmdepartamentos/frmdepartamentos.component';
import { FrmpuestosComponent } from './components/generales/puestos/frmpuestos/frmpuestos.component';
import { GridpuestosComponent } from './components/generales/puestos/gridpuestos/gridpuestos.component';
import {PasswordModule} from 'primeng/password';
import { GridentradasComponent } from './components/inventarios/entradas/gridentradas/gridentradas.component';
import { FrmentradasComponent } from './components/inventarios/entradas/frmentradas/frmentradas.component';
import { GridsalidasComponent } from './components/inventarios/salidas/gridsalidas/gridsalidas.component';
import { FrmsalidasComponent } from './components/inventarios/salidas/frmsalidas/frmsalidas.component';
import { GridpurezaComponent } from './components/inventarios/pureza/gridpureza/gridpureza.component';
import { FrmpurezaComponent } from './components/inventarios/pureza/frmpureza/frmpureza.component';
import { FrmpesoComponent } from './components/inventarios/peso/frmpeso/frmpeso.component';
import { GridpesoComponent } from './components/inventarios/peso/gridpeso/gridpeso.component';
import { GridprocedenciasComponent } from './components/inventarios/procedencias/gridprocedencias/gridprocedencias.component';
import { FrmprocedenciasComponent } from './components/inventarios/procedencias/frmprocedencias/frmprocedencias.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    BarComponent,
    MainComponent,
    ClientesComponent,
    HomeComponent,
    GridbaseComponent,
    PaisesComponent,
    ExampleComponent,
    ToolbarComponent,
    FrmclientesComponent,
    GridunidadesComponent,
    FrmunidadesComponent,
    GridgruposcomponentesComponent,
    FrmgruposcomponentesComponent,
    GridsubgrupocomponentesComponent,
    FrmsubgrupocomponentesComponent,
    GridconceptosComponent,
    FrmconceptosComponent,
    GridtipocomponentesComponent,
    FrmtipocomponentesComponent,
    FrmpaisesComponent,
    GridarticulosComponent,
    FrmarticulosComponent,
    GridusuariosComponent,
    FrmusuariosComponent,
    GridusuariosrolesComponent,
    FrmusuariosrolesComponent,
    GridtipoconceptosComponent,
    FrmtipoconceptosComponent,
    GridalmacenesComponent,
    FrmalmacenesComponent,
    GridmarcasComponent,
    FrmmarcasComponent,
    GriddepartamentosComponent,
    FrmdepartamentosComponent,
    FrmpuestosComponent,
    GridpuestosComponent,
    GridentradasComponent,
    FrmentradasComponent,
    GridsalidasComponent,
    FrmsalidasComponent,
    GridpurezaComponent,
    FrmpurezaComponent,
    FrmpesoComponent,
    GridpesoComponent,
    GridprocedenciasComponent,
    FrmprocedenciasComponent
  ],
  imports: [
    DropdownModule,
    PasswordModule,
    ListboxModule,
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
    DialogPrime,
    DialogModule,
    FieldsetModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    AutoCompleteModule,
    ButtonModule,
    ConfirmDialogModule,
    GalleriaModule,
    KeyFilterModule,
    OverlayPanelModule,
    CalendarModule,
    CarouselModule,
    FileUploadModule
  ],
  providers: [ObjectUtils, ConfirmationService],
  bootstrap: [AppComponent],
  entryComponents: [ExampleComponent,
                    FrmclientesComponent, 
                    FrmconceptosComponent, 
                    FrmgruposcomponentesComponent,
                    FrmsubgrupocomponentesComponent,
                    FrmtipocomponentesComponent,
                    FrmunidadesComponent,
                    FrmpaisesComponent,
                    FrmconceptosComponent,
                    FrmarticulosComponent,
                    FrmusuariosComponent,
                    FrmusuariosrolesComponent,
                    FrmtipoconceptosComponent,
                    FrmalmacenesComponent,
                    FrmmarcasComponent,
                    FrmdepartamentosComponent,
                    FrmpuestosComponent,
                    FrmentradasComponent,
                    FrmsalidasComponent,
                    FrmpurezaComponent,
                    FrmpesoComponent,
                    FrmprocedenciasComponent
                    
                    ]
})
export class AppModule { }
