import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  contactos = [];

  constructor() {
  }

  ngOnInit() {
    this.crearContacto("1720364049", "Luis Salazar", "0998600661", "lsalazar@yavirac.edu.ec");
    this.crearContacto("1720364049", "Maria  Salazar", "0998600661", "lsalazar@yavirac.edu.ec");
    console.log(this.contactos);
  }

  crearContacto(cedula: string, nombre: string, telefono: string, email: string) {
    let contacto = {
      cedula: "",
      nombre: "",
      telefono: "",
      email: ""
    };
    contacto.cedula = cedula;
    contacto.nombre = nombre;
    contacto.telefono = telefono;
    contacto.email = email;
    this.contactos.push(contacto);
  }
}
