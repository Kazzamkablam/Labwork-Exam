import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { Tab3Page } from './../tab3/tab3';
import { Tab4Page } from './../tab4/tab4';
import { Tab5Page } from './../tab5/tab5';
import { Tab6Page } from './../tab6/tab6';
import { Tab7Page } from './../tab7/tab7';
import { TabsPage } from './../tabs/tabs';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, AlertController } from 'ionic-angular'; //navcontroller depedencies
import { AngularFireAuth } from 'angularfire2/auth';

export interface PageInterface { //pageinterface structure
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [  //1700028 Juha Penttinen, pageinterface like in the tutorial
    { title: 'Personal Profile', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'person' },
    { title: 'Technical Skills', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'basket' },
    { title: 'Soft Skills', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'basket' },
    { title: 'Personal Projects', pageName: 'TabsPage', tabComponent: 'Tab4Page', index: 3, icon: 'person' },
    { title: 'Team Projects', pageName: 'TabsPage', tabComponent: 'Tab5Page', index: 1, icon: 'people' },
    { title: 'Extracurricular Activities', pageName: 'TabsPage', tabComponent: 'Tab6Page', index: 2, icon: 'tennisball' },
    { title: 'Contact Information', pageName: 'TabsPage', tabComponent: 'Tab7Page', index: 3, icon: 'contact' },

    { title: 'About', pageName: 'SpecialPage', icon: 'shuffle' },
  ];
 
  constructor(public navCtrl: NavController, private fire: AngularFireAuth, private alertctrl: AlertController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
  alert(message: string) {  //function for showing alerts
    this.alertctrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['Ok']
    }).present();
  }

  logOffUser() {
    
    console.log("Logged off");
    this.fire.auth.signOut().then(() => {
      this.navCtrl.setRoot ( 'LoginPage' );
      this.nav.popToRoot();
   });
   };
    
   ionViewWillEnter() { //pop user back to login page if not logged in
    console.log('ionViewDidLoad MenuPage');
    if (this.fire.auth.currentUser == null) {
      this.navCtrl.setRoot ( 'LoginPage' );
      this.nav.popToRoot();    
    }
  }

}
