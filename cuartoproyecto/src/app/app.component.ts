import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  urlWS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';
  pokemons = [];
  pokemonSeleccionado: any;
  constructor(private http: Http) {

  }

  ngOnInit() {
    this.traerDatos();
  }

  traerDatos() {
    this.http.get( this.urlWS ).toPromise().then( r => {
      this.pokemons = r.json().results;
      console.log(this.pokemons);
    }).catch( e => {
      console.log(e);
    });
  }

  traerPokemon(urlApi) {
    this.http.get( urlApi ).toPromise().then( r => {
      this.pokemonSeleccionado = r.json();
      console.log(this.pokemonSeleccionado);
    }).catch( e => {
      console.log(e);
    });
  }
}
