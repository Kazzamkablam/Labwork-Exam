import { Component } from '@angular/core'; //page dependencies
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

import { AngularFirestore } from 'angularfire2/firestore'; //1700028 Juha Penttinen, firebase dependencies
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage'; //LoginPage
  items: Observable<any[]>;

  constructor(db: AngularFirestore, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.items = db.collection('items').valueChanges(); //for database
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });



  }
}
