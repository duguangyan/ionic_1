import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../map/map";
import { city } from '../../providers/city-data/city';
/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  address:any = '';
  public session: any;
  public params: any;
  public cityColumns: any[];
  public citydefault: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cityColumns = city;
    this.session = window.localStorage.getItem('session');
    this.citydefault = '440000 440100 440106';//默认的地区id
  }
  ionViewWillEnter() {
    this.address = this.navParams.get('myAddress')|| '';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

  onFocus(){
    let city = this.citydefault.split(" ")[1];
    let area = this.citydefault.split(" ")[2];
    let cityName = this.cityColumns[1].options.find((element) => (element.value == city));
    let areaName = this.cityColumns[2].options.find((element) => (element.value == area));

    this.navCtrl.push(MapPage, {
      city   : cityName.text,
      area   : areaName.text,
      address: this.address
    });
  }
}
