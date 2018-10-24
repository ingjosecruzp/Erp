import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/ventas/clientes/clientes.component';
import { PaisesComponent } from './components/paises/paises.component';
import { GridconceptosComponent } from './components/inventarios/conceptos/gridconceptos/gridconceptos.component';
import { GridunidadesComponent } from './components/inventarios/unidades/gridunidades/gridunidades.component';
// tslint:disable-next-line:max-line-length
import { GridgruposcomponentesComponent } from './components/inventarios/gruposcomponentes/gridgruposcomponentes/gridgruposcomponentes.component';
import { GridsubgrupocomponentesComponent } from './components/inventarios/subgrupocomponentes/gridsubgrupocomponentes/gridsubgrupocomponentes.component';
import { GridtipocomponentesComponent } from './components/inventarios/tipocomponentes/gridtipocomponentes/gridtipocomponentes.component';
import { GridarticulosComponent } from './components/inventarios/articulos/gridarticulos/gridarticulos.component';
import { GridusuariosrolesComponent } from './components/administracion/usuariosroles/gridusuariosroles/gridusuariosroles.component';
import { GridusuariosComponent } from './components/administracion/usuarios/gridusuarios/gridusuarios.component';
import { GridtipoconceptosComponent } from './components/inventarios/tipoconceptos/gridtipoconceptos/gridtipoconceptos.component';
import { GridmarcasComponent } from './components/generales/marcas/gridmarcas/gridmarcas.component';
import { GridalmacenesComponent } from './components/inventarios/almacenes/gridalmacenes/gridalmacenes.component';
import { GriddepartamentosComponent } from './components/generales/departamentos/griddepartamentos/griddepartamentos.component';
import { GridpuestosComponent } from './components/generales/puestos/gridpuestos/gridpuestos.component';
import { GridentradasComponent } from './components/inventarios/entradas/gridentradas/gridentradas.component';
import { GridsalidasComponent } from './components/inventarios/salidas/gridsalidas/gridsalidas.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'clientes', component: ClientesComponent},
    { path: 'paises', component: PaisesComponent},
    { path:  'conceptos', component: GridconceptosComponent},
    { path: 'unidades', component: GridunidadesComponent},
    { path: 'grupocompnentes', component: GridgruposcomponentesComponent},
    { path: 'subgrupocomponentes', component: GridsubgrupocomponentesComponent},
    { path: 'tipocomponentes', component: GridtipocomponentesComponent},
    { path: 'articulos', component: GridarticulosComponent},
    { path: 'usuario', component: GridusuariosComponent},
    { path: 'usuariorol', component: GridusuariosrolesComponent},
    { path: 'tipoconcepto', component: GridtipoconceptosComponent},
    { path: 'marca', component: GridmarcasComponent},
    { path: 'almacenes', component: GridalmacenesComponent},
    { path: 'departamentos', component: GriddepartamentosComponent},
    { path: 'puestos', component: GridpuestosComponent},
    { path: 'entradas', component: GridentradasComponent},
    { path: 'salidas', component: GridsalidasComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
