import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Navbar } from 'ionic-angular'; //import navbar for editing
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
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertctrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string) {  //for displaying alerts
    this.alertctrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['Ok']
    }).present();
  }

  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
    //Write here wherever you wanna do
       this.navCtrl.pop({animate:true,animation:'transition',duration:500,direction:'back'});
    }
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.setBackButtonAction();
  }

  RegisterUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value).then (data => { //authenticate with firebase
    console.log ('got data', data); //not needed
    this.alert('Registered!'); //give user some info
    })
    .catch(error => {
      console.log('got an error ', error); //not needed
      this.alert(error.message); //give user some info
    });
    console.log ('Would register user with ', this.user.value, this.password.value)
  }

}
