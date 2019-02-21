import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.scss']
})
export class PuntajesComponent implements OnInit {

  constructor() {
    console.log(this.calcular(63));
  }

  ngOnInit() {
  }

  calcular(vueltoInicio: number) {
    let llevoDos = 0;
    let vuelto = vueltoInicio;
    if (vuelto === 1 || vuelto === 3 || vuelto === 0) {
      return 'no';
    }
    if ( vuelto % 10 === 1 ) {
      vuelto = vuelto - 2;
      llevoDos = 1;
    }
    if ( vuelto % 10 === 3 ) {
      vuelto = vuelto - 4;
      llevoDos = 2;
    }
    const diez = Math.floor(vuelto / 10);
    let residuo = vuelto - (diez * 10);
    const cinco = Math.floor(residuo / 5);
    residuo = vuelto - ((diez * 10) + (cinco * 5));
    const dos = Math.floor(residuo / 2) + llevoDos;
    residuo = vueltoInicio - ((diez * 10) + (cinco * 5) + (dos * 2));
    if (residuo === 0) {
      const respuesta = {10: diez, 5: cinco, 2: dos};
      return respuesta;
    }
  }
}
