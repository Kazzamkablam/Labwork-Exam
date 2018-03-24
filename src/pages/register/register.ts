import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()  // 1700028 Juha Penttinen, register page code
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertctrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string) {  
    this.alertctrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['Ok']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  RegisterUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value).then (data => { //authenticate with firebase
    console.log ('got data', data);
    this.alert('Registered!');
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
    console.log ('Would register user with ', this.user.value, this.password.value)
  }

}
