import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ScanPage } from '../scan/scan';
import { NavController } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ScanPage;
  tab4Root = ContactPage;
  tab5Root = ContactPage;

  constructor(public navCtrl: NavController) {

  }

  selectFriend(){
    this.navCtrl.push(ScanPage);
  }
}
