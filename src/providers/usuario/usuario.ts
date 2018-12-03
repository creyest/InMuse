import { UsuarioModelo } from './../../modelos/usuario-model';
import { API_URL, HTTPOptions } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient, public storage:Storage) {
    console.log('Hello UsuarioProvider Provider');
  }

  logIn = (correo:String, password:String) => {
    return this.http.post(API_URL + "/usuario",{strCorreo:correo,strPassword:password},HTTPOptions).toPromise();
  }

  updateUsuario = (usuario:UsuarioModelo) => {
    return this.http.put(API_URL + "/usuario",{modeloUsuario:usuario},HTTPOptions).toPromise();
  }
  
}