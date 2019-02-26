import swal from 'sweetalert';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {
  turno: string;
  tablero: any[];

  constructor() { }

  ngOnInit() {
    this.sortearPrimerTurno();
  }

  sortearPrimerTurno() {
    const sorteo = Math.random();
    if ( sorteo > 0.5 ) {
      this.turno = 'Humano';
      this.iniciarTablero();
    } else {
      this.turno = 'PC';
      this.iniciarTablero();
      this.juegaPC();
    }
  }

  iniciarTablero() {
    this.tablero = [['', '', ''],
                    ['', '', ''],
                    ['', '', '']];
  }

  seleccionarCasilla(ficha: string, fila: number, columna: number) {
    this.tablero[fila][columna] = ficha;
  }

  juegaHumano(fila: number, columna: number) {
    if ( this.turno === 'Humano' && this.tablero[fila][columna] === '') {
      this.seleccionarCasilla('fas fa-times', fila, columna);
      this.turno = 'PC';
      if (this.alguienGano()) {
        return;
      }
      this.juegaPC();
    }
  }

  juegaPC() {
    this.jugarAzar();
    this.turno = 'Humano';
  }

  estaTableroLleno() {
    if (this.alguienGano()) {
      return;
    }
    let casillasLibres = false;
    this.tablero.forEach(fila => {
      fila.forEach(columna => {
        if (columna === '') {
          casillasLibres = true;
        }
      });
    });
    if (!casillasLibres) {
      swal('Fin del Juego!', 'Todas las casillas han sido ocupadas!', 'info');
      return true;
    }
    return false;
  }

  jugarAzar() {
    if ( this.estaTableroLleno() ) {
      return;
    }
    const sorteo = Math.floor(Math.random() * 9);
    let fila = 0;
    let columna = 0;
    switch (sorteo) {
      case 0:
        fila = 0;
        columna = 0;
        break;
      case 1:
        fila = 0;
        columna = 1;
        break;
      case 2:
        fila = 0;
        columna = 2;
        break;
      case 3:
        fila = 1;
        columna = 0;
        break;
      case 4:
        fila = 1;
        columna = 1;
        break;
      case 5:
        fila = 1;
        columna = 2;
        break;
      case 6:
        fila = 2;
        columna = 0;
        break;
      case 7:
        fila = 2;
        columna = 1;
        break;
      case 8:
        fila = 2;
        columna = 2;
        break;
    }
    if ( this.tablero[fila][columna] === '' ){
      this.seleccionarCasilla('fas fa-angry', fila, columna);
      this.estaTableroLleno();
    } else {
      this.jugarAzar();
    }
  }

  ganaPorFicha(ficha: string) {
    if (this.tablero[0][0] === this.tablero[0][1] && this.tablero[0][0] === this.tablero[0][2] && this.tablero[0][0] === ficha ||
        this.tablero[1][0] === this.tablero[1][1] && this.tablero[1][0] === this.tablero[1][2] && this.tablero[1][0] === ficha ||
        this.tablero[2][0] === this.tablero[2][1] && this.tablero[2][0] === this.tablero[2][2] && this.tablero[2][0] === ficha ) {
          return true;
    }
    if (this.tablero[0][0] === this.tablero[1][0] && this.tablero[0][0] === this.tablero[2][0] && this.tablero[0][0] === ficha ||
        this.tablero[0][1] === this.tablero[1][1] && this.tablero[0][1] === this.tablero[2][1] && this.tablero[0][1] === ficha ||
        this.tablero[0][2] === this.tablero[1][2] && this.tablero[0][2] === this.tablero[2][2] && this.tablero[0][2] === ficha ) {
        return true;
    }
    if (this.tablero[0][0] === this.tablero[1][1] && this.tablero[0][0] === this.tablero[2][2] && this.tablero[0][0] === ficha ||
      this.tablero[0][2] === this.tablero[1][1] && this.tablero[0][2] === this.tablero[2][0] && this.tablero[0][2] === ficha) {
        return true;
    }
    return false;
  }

  alguienGano() {
    if (this.ganaPorFicha('fas fa-angry')) {
      swal('Fin del Juego!', 'Perdiste', 'error');
      return true;
    }
    if (this.ganaPorFicha('fas fa-times')) {
      swal('Fin del Juego!', 'Ganaste', 'success');
      return true;
    }
    return false;
  }
}
function ganar(){
  var numEspacios=0;
  var i=0;
  for(i=0 ; i < 9 ; i++){
  if(this.tablero[i] == 0) numEspacios++;
  }
//ganar lineas horizontales
if(this.tablero[0] == this.tablero[1] && this.tablero[1] == this.tablero[2] && this.tablero[0] !=0) return this.tablero[0];
if(this.tablero[3] == this.tablero[4] && this.tablero[4] == this.tablero[5] && this.tablero[3] !=0) return this.tablero[3];
if(this.tablero[6] == this.tablero[7] && this.tablero[7] == this.tablero[8] && this.tablero[6] !=0) return this.tablero[6];
//verticales
if(this.tablero[0] == this.tablero[3] && this.tablero[3] == this.tablero[6] && this.tablero[0] !=0) return this.tablero[0];
if(this.tablero[1] == this.tablero[4] && this.tablero[4] == this.tablero[7] && this.tablero[1] !=0) return this.tablero[1];
if(this.tablero[2] == this.tablero[5] && this.tablero[5] == this.tablero[8] && this.tablero[2] !=0) return this.tablero[2];
//diagonales
if(this.tablero[0] == this.tablero[4] && this.tablero[4] == this.tablero[8] && this.tablero[0] !=0) return this.tablero[0];
if(this.tablero[2] == this.tablero[4] && this.tablero[4] == this.tablero[6] && this.tablero[2] !=0) return this.tablero[2];
if (numEspacios > 0){
  return 0;
  } else {
  return 3;
  }
  }
