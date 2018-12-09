import { HomePage } from './../home/home';
import { RegistroPage } from './../registro/registro';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo:string;
  password:string;
  form:FormGroup;
  constructor(
    public alertCtrl:AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public usuarioProvider:UsuarioProvider,
    public formBuilder:FormBuilder,
    public storage:Storage) {
      this.correo = '';
      this.password = '';
      this.form = this.formBuilder.group({
        correo: ['', [Validators.required,Validators.email]],
        password: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  irRegistro = () =>{
    this.navCtrl.push(RegistroPage);
  }

  submit = () => {
    this.usuarioProvider.logIn(this.correo,this.password).then((response:any)=>{
      if (response.intStatus == 1){
        this.storage.set('usuario',JSON.stringify(response.jsnAnswer)).then(()=>{
          this.navCtrl.push(HomePage);
        });
      }else{
        this.alertCtrl.create({
          title:"Credenciales inválidas",
        }).present();
      }
    });
  }

}
