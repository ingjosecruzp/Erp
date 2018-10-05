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


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'clientes', component: ClientesComponent},
    { path: 'paises', component: PaisesComponent},
    { path:  'conceptos', component: GridconceptosComponent},
    { path: 'unidades', component: GridunidadesComponent},
    { path: 'grupocompnentes', component: GridgruposcomponentesComponent},
    { path: 'subgrupocomponentes', component: GridsubgrupocomponentesComponent},
    { path: 'tipocomponentes', component: GridtipocomponentesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);