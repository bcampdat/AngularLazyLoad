import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPais } from '../pais.interface';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  @Input() paises: IPais[] = [];
  @Output() elegidoPais = new EventEmitter<IPais>();

  constructor() {}

  verDetalles(pais: IPais) {
    this.elegidoPais.emit(pais);
  }
}