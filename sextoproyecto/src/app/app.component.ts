import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  marcadores = [];
  lat = -0.224710;
  lng = -78.516763;
  zoom = 15;
  count = 0;
  constructor() {

  }

  ngOnInit() {
    let marcador = {
      lat: -0.224710,
      lng: -78.516763,
      ico: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    };
    this.marcadores.push(marcador);
  }

  saluda() {
    alert("hola");
  }

  muestraCordenadas(event) {
    this.count++;
    let marcador = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      animation: 'DROP',
      ico: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.count.toString()+'.png'
    };
    this.marcadores.push(marcador);
  }

  finDrag($event) {
    console.log($event);
  }
}
