import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage { // 1700028 Juha Penttinen, tabs navigation like the tutorial 
 
  tab1Root: any = 'Tab1Page'; //tabroot dependencies
  tab2Root: any = 'Tab6Page';
  tab3Root: any = 'Tab5Page';
  tab4Root: any = 'Tab2Page';
  tab5Root: any = 'Tab7Page';
  tab6Root: any = 'Tab3Page';
  tab7Root: any = 'Tab4Page';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
