import { Component } from '@angular/core';
import { PaisesService } from '../paises.service';
import { ActivatedRoute } from '@angular/router';
import { IPais } from '../pais.interface';

@Component({
  selector: 'app-pais-detalles',
  templateUrl: './pais-detalles.component.html',
  styleUrls: ['./pais-detalles.component.css']
})
export class PaisDetallesComponent {
  paisConsulta: string = '';
  pais!: IPais;

  constructor(private paisesService: PaisesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => (this.paisConsulta = params['pais']));
    // este "pais" es el que viene de la ruta  importante que ambos coincida  "pais" =  / : pais
    this.getPais(this.paisConsulta);
  }

  getPais(pais: string) {
    this.paisesService.getPais(pais).subscribe({
      next: (data) => {
        this.pais = data[0];
      },
      error: (err) => console.log(err)
    });
  }
}