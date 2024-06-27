import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { NotFoundComponent } from './inicio/not-found/not-found.component';

const routes: Routes = [
  // carga inmediata
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: '**', component: NotFoundComponent }

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },

  // rutas lazyload
  { path: 'paises', loadChildren: () => import('./paises/paises.module').then((m) => m.PaisesModule) },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
