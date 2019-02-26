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
    let jugue = false;
    jugue = this.verificarCasillas('fas fa-angry', 'fas fa-angry');
    if (!jugue) {
      jugue = this.verificarCasillas('fas fa-times', 'fas fa-angry');
    }
    if (!jugue) {
      jugue = this.TomarCentro('fas fa-angry');
    }
    if (!jugue) {
      jugue = this.CuidadoDoble('fas fa-times', 'fas fa-angry');
    }
    if (!jugue) {
      jugue = this.PriorizarEsquinas('fas fa-angry');
    }
    if (!jugue) {
      this.jugarAzar();
    }
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
      alert('Fin del Juego! Todas las casillas han sido ocupadas!');
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
      alert('Fin del Juego!, Perdiste');
      return true;
    }
    if (this.ganaPorFicha('fas fa-times')) {
      alert('Fin del Juego!, Ganaste');
      return true;
    }
    return false;
  }

  verificarCasillas(ficha: string, fichaJuego: string) {
    let cuenta = 0;
    let columnaAtencion = 5;
    let filaAtencion = 5;
    // Verificación por filas
    for (let fila = 0 ; fila < 3 ; fila++) {
      for (let columna = 0; columna < 3 ; columna ++) {
        if (this.tablero[fila][columna] === ficha) {
          cuenta ++;
        } else {
          if (this.tablero[fila][columna] !== '') {
            cuenta += 5;
          } else {
            columnaAtencion = columna;
            filaAtencion = fila;
          }
        }
      }
      if ( cuenta === 2 ) {
        this.seleccionarCasilla(fichaJuego, filaAtencion, columnaAtencion);
        this.estaTableroLleno();
        return true;
      } else {
        cuenta = 0;
        columnaAtencion = 5;
        filaAtencion = 5;
      }
    }
    // Verificación por columnas
    for (let columna = 0 ; columna < 3 ; columna++) {
      for (let fila = 0; fila < 3 ; fila ++) {
        if (this.tablero[fila][columna] === ficha) {
          cuenta ++;
        } else {
          if (this.tablero[fila][columna] !== '') {
            cuenta += 5;
          } else {
            columnaAtencion = columna;
            filaAtencion = fila;
          }
        }
      }
      if ( cuenta === 2 ) {
        this.seleccionarCasilla(fichaJuego, filaAtencion, columnaAtencion);
        this.estaTableroLleno();
        return true;
      } else {
        cuenta = 0;
        columnaAtencion = 5;
        filaAtencion = 5;
      }
    }
    // VERIFICAR DIAGONALES
    if (this.tablero[0][0] === ficha) {
      cuenta++;
    } else {
      if (this.tablero[0][0] !== '') {
        cuenta += 5;
      } else {
        columnaAtencion = 0;
        filaAtencion = 0;
      }
    }
    if (this.tablero[1][1] === ficha) {
      cuenta++;
    } else {
      if (this.tablero[1][1] !== '') {
        cuenta += 5;
      } else {
        columnaAtencion = 1;
        filaAtencion = 1;
      }
    }
    if (this.tablero[2][2] === ficha) {
      cuenta++;
    } else {
      if (this.tablero[2][2] !== '') {
        cuenta += 5;
      } else {
        columnaAtencion = 2;
        filaAtencion = 2;
      }
    }
    if ( cuenta === 2 ) {
      this.seleccionarCasilla(fichaJuego, filaAtencion, columnaAtencion);
      this.estaTableroLleno();
      return true;
    } else {
      cuenta = 0;
      columnaAtencion = 5;
      filaAtencion = 5;
    }

    if (this.tablero[0][2] === ficha) {
      cuenta++;
    } else {
      if (this.tablero[0][2] !== '') {
        cuenta += 5;
      } else {
        columnaAtencion = 2;
        filaAtencion = 0;
      }
    }
    if (this.tablero[1][1] === ficha) {
      cuenta++;
    } else {
      if (this.tablero[1][1] !== '') {
        cuenta += 5;
      } else {
        columnaAtencion = 1;
        filaAtencion = 1;
      }
    }
    if (this.tablero[2][0] === ficha) {
      cuenta++;
    } else {
      if (this.tablero[2][0] !== '') {
        cuenta += 5;
      } else {
        columnaAtencion = 2;
        filaAtencion = 2;
      }
    }
    if ( cuenta === 2 ) {
      this.seleccionarCasilla(fichaJuego, filaAtencion, columnaAtencion);
      this.estaTableroLleno();
      return true;
    } else {
      cuenta = 0;
      columnaAtencion = 5;
      filaAtencion = 5;
    }
    return false;
  }

  TomarCentro(fichaJuego) {
    if (this.tablero[1][1] === '') {
      this.seleccionarCasilla(fichaJuego, 1, 1);
      this.estaTableroLleno();
      return true;
    }
    return false;
  }

  PriorizarEsquinas(fichaJuego) {
    if (this.tablero[0][0] === '') {
      this.seleccionarCasilla(fichaJuego, 0, 0);
      this.estaTableroLleno();
      return true;
    }
    if (this.tablero[0][2] === '') {
      this.seleccionarCasilla(fichaJuego, 0, 2);
      this.estaTableroLleno();
      return true;
    }
    if (this.tablero[2][0] === '') {
      this.seleccionarCasilla(fichaJuego, 2, 0);
      this.estaTableroLleno();
      return true;
    }
    if (this.tablero[2][2] === '') {
      this.seleccionarCasilla(fichaJuego, 2, 2);
      this.estaTableroLleno();
      return true;
    }
    return false;
  }

  CuidadoDoble(ficha, fichaJuego) {
    const sorteo = Math.floor(Math.random() * 4);
    let fila = 0;
    let columna = 0;
    if (this.tablero[0][0] === '' && this.tablero[0][1] === '' && this.tablero[0][2] === ficha &&
        this.tablero[1][0] === '' && this.tablero[1][1] === fichaJuego && this.tablero[1][2] === '' &&
        this.tablero[2][0] === ficha && this.tablero[2][1] === '' && this.tablero[2][2] === ''
    ) {
      switch (sorteo) {
        case 0:
          fila = 0;
          columna = 1;
          break;
        case 1:
          fila = 1;
          columna = 0;
          break;
        case 2:
          fila = 1;
          columna = 2;
          break;
        case 3:
          fila = 2;
          columna = 1;
          break;
      }
      this.seleccionarCasilla(fichaJuego, fila, columna);
      this.estaTableroLleno();
      return true;
    }
    if (this.tablero[0][0] === ficha && this.tablero[0][1] === '' && this.tablero[0][2] === '' &&
        this.tablero[1][0] === '' && this.tablero[1][1] === fichaJuego && this.tablero[1][2] === '' &&
        this.tablero[2][0] === '' && this.tablero[2][1] === '' && this.tablero[2][2] === ficha
    ) {
      switch (sorteo) {
        case 0:
          fila = 0;
          columna = 1;
          break;
        case 1:
          fila = 1;
          columna = 0;
          break;
        case 2:
          fila = 1;
          columna = 2;
          break;
        case 3:
          fila = 2;
          columna = 1;
          break;
      }
      this.seleccionarCasilla(fichaJuego, fila, columna);
      this.estaTableroLleno();
      return true;
    }
    return false;
  }
}
