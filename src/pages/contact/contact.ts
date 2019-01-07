import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddressPage } from  '../address/address'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  headerBarTit: String;
  shopCheckAll: boolean = false;
  number: number;

  lists: Array<any>;
  constructor(public navCtrl: NavController, private zone: NgZone) {
    this.zone.run(() => {
      this.headerBarTit = '编辑';
      this.number = 1;
      this.lists = [
        {
          img:'https://img.alicdn.com/bao/uploaded/i2/3295725672/O1CN01hn4u661rloxjUz0hS_!!0-item_pic.jpg_180x180.jpg',
          name:'衣服衣服衣服',
          price:'28.00',
          spec:'白色L',
          check:true
        },
        {
          img:'https://img.alicdn.com/bao/uploaded/i1/3295725672/O1CN017Ss7Oa1rloxsjL6Xn_!!0-item_pic.jpg_180x180.jpg',
          name:'衣服衣服衣服衣服',
          price:'28.00',
          spec:'白色L',
          check:true
        }
      ];
    })


  }
  goBack(){
    this.navCtrl.push(AddressPage)
  }
  editHeaderBarTit(){
    this.headerBarTit = (this.headerBarTit == "编辑"?"完成":"编辑");
  }

  addNum(){
    this.number++
  }
  pulNum(){
    this.number--
  }
}
