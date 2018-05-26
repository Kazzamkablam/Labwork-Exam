import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs'
import { MenuPage } from '../menu/menu'
import * as firebase from 'firebase';
import { GoogleAuthProvider } from '@firebase/auth-types';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
  authState: any = null;

  constructor(private alertctrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string) {  //function for showing alerts
    this.alertctrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['Ok']
    }).present();
  }

  signInUser() {
this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)  // Juha Penttinen 1700028 Firebase authentication
    .then ( data => {
      console.log('got some data',this.fire.auth.currentUser.email); //not necessary, just for testing
      this.alert ('Success! You\'re logged in'); //yay we're in! Better tell user!
      this.navCtrl.setRoot ( 'MenuPage' );
    })
    .catch ( error => { //if error do stuff
      console.log('got an error', error)
      this.alert(error.message);
    })

    console.log ('Would sign in with ', this.user.value, this.password.value) //not necessary, just for testing
  }

  private socialSignIn(provider) { //huge success in Google login!
    return this.fire.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user
          this.navCtrl.setRoot ( 'MenuPage' );
          //this.updateUserData()
      })
      .catch ( error => { //if error do stuff
        console.log('got an error', error)
        this.alert(error.message);
      })
    //  .catch(error => console.log(error));
}


  googleLogin() {
    
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
}

  push() {
    this.navCtrl.push('RegisterPage',{},{animate:true,animation:'transition',duration:500,direction:'forward'});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
