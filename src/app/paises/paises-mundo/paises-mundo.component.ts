import { Component } from '@angular/core';
import { IPais } from '../pais.interface';
import { PaisesService } from '../paises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises-mundo',
  templateUrl: './paises-mundo.component.html',
  styleUrls: ['./paises-mundo.component.css']
})
export class PaisesMundoComponent {
  paises: IPais[] = [];

  constructor(private paisesService: PaisesService, private router: Router) {}

  ngOnInit() {
    this.getPaises();
  }



  getPaises() {
    this.paisesService.getPaises().subscribe({
      next: (data) => {
        console.log(data);
        this.paises = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }

  getPaisesGenerico() {
    this.paisesService.get<IPais[]>('https://restcountries.com/v3.1/all').subscribe({
      next: (data) => {
        console.log(data);
        this.paises = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }

  verDetalles(pais: IPais) {
    this.router.navigateByUrl('/paises/pais-detalles/' + pais.name.common);
    
  }
}