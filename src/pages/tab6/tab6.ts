import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular'; // toast controller

/**
 * Generated class for the Tab6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab6',
  templateUrl: 'tab6.html',
})
export class Tab6Page {

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  presentToast(message: string, duration: number) { //function I added to use Ionic 3's built in Toast system.
    let toast = this.toastCtrl.create({ //create the popup
      message: message, //give message and duration as parameters for the function.
      duration: duration,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast'); //some debug information
    });
  
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab6Page');
  }

}
