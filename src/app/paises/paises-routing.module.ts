import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { PaisesMundoComponent } from './paises-mundo/paises-mundo.component';
import { PaisDetallesComponent } from './pais-detalles/pais-detalles.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PaisesComponent,
    children: [
      { path: '', redirectTo: '/paises/paises-mundo', pathMatch: 'full' },
      { path: 'paises-mundo', component: PaisesMundoComponent },
      {
        path: 'pais-detalles/:pais',
        component: PaisDetallesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule {}
