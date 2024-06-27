import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesMundoComponent } from './paises-mundo/paises-mundo.component';
import { PaisDetallesComponent } from './pais-detalles/pais-detalles.component';
import { PaisesComponent } from './paises.component';



@NgModule({
  declarations: [
    PaisesMundoComponent,
    PaisDetallesComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisesModule { }
