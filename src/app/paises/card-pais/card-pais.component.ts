import { Component, Input } from '@angular/core';
import { IPais } from '../pais.interface';


@Component({
  selector: 'app-card-pais',
  templateUrl: './card-pais.component.html',
  styleUrls: ['./card-pais.component.css']
})
export class CardPaisComponent {
  @Input() pais!: IPais;
}