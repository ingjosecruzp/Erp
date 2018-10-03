import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/ventas/clientes/clientes.component';
import { PaisesComponent } from './components/paises/paises.component';
import { GridconceptosComponent } from './components/inventarios/conceptos/gridconceptos/gridconceptos.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'clientes', component: ClientesComponent},
    { path: 'paises', component: PaisesComponent},
    { path:  'conceptos', component: GridconceptosComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);