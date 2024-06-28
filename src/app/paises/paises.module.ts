import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesMundoComponent } from './paises-mundo/paises-mundo.component';
import { PaisDetallesComponent } from './pais-detalles/pais-detalles.component';
import { PaisesComponent } from './paises.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { CardPaisComponent } from './card-pais/card-pais.component';
import { PaisesService } from './paises.service';



@NgModule({
  declarations: [
    PaisesMundoComponent,
    PaisDetallesComponent,
    PaisesComponent,
    TablaPaisesComponent,
    CardPaisComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ],
  providers: [PaisesService],
})
export class PaisesModule { }
