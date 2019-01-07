import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  leftNavs  : Array<any> = [];
  rightDates: Array<any> = [];
  navIndex  : number = 0;
  childIndex: number = 0;

  constructor(public navCtrl: NavController, private zone: NgZone) {

  }

  ionViewWillEnter(){
    this.zone.run(() => {
      // 初始化侧边栏数据
      this.leftNavs = [
        {
          title:'衣服',
          child:['上衣','毛衣','外套']
        }
      ];

      this.rightDates = [
        {
          title:'衣服',
          child:[
            {
              img:'https://s10.mogucdn.com/mlcdn/c45406/181126_58g8bkegg92k4bfj51adigb8g1l44_150x150.png_640x640.v1cAC.40.webp',
              tit:'上衣'
            },
            {
              img:'https://s10.mogucdn.com/mlcdn/c45406/181227_6f18ab4h9340a37ge7k6eh615bldh_150x150.png_640x640.v1cAC.40.webp',
              tit:'套装'
            },
            {
              img:'https://s10.mogucdn.com/mlcdn/c45406/181123_4kgdbg4fghik412hc5ijh0g2fa5hk_150x150.png_640x640.v1cAC.40.webp',
              tit:'毛衣'
            }
          ]
        }
      ];
    });
  }
  ionViewDidEnter(){

  }
  ionViewDidLoad(){
    setTimeout(()=>{
      this.initHeigth()
    },100)
  }

  initHeigth(){
    let rightHeight = $(".about-right").height();
    $(".about-left").height(rightHeight);
  }
  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
  }
  navShow(i){
    this.navIndex = i;
    this.childIndex = 0;
  }
  childShow(ii) {
    this.childIndex = ii;
  }
}
