import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddressPage } from  '../address/address'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goBack(){
    this.navCtrl.push(AddressPage)
  }
}
