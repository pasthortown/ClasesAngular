import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  resultado: number;

  constructor() {
    this.resultado = this.calcular(100000);
  }

  calcular(cantidad: number) {
    let dentroCirculo = 0;
    for(let i = 1; i<=cantidad; i++) {
      let punto = {x: Math.random(), y: Math.random()};
      let distancia = Math.sqrt(Math.pow(punto.x, 2) + Math.pow(punto.y, 2));
      if( distancia <= 1 ){
        dentroCirculo++;
      }
    }
    return (dentroCirculo/cantidad)*4;
  }
}
