import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HttpClient } from "@angular/common/http"
import * as $ from 'jquery';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  num_people: any;
  data: any;
  constructor(public navCtrl: NavController, private http:HttpClient, private zone: NgZone) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CenterPage');
    this.http.get("https://apiv2.yidap.com/find/api/material")
      .subscribe(res=>{
        this.num_people = res['data']['num_people'];
      })
  }
  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
  }

  ngAfterViewInit() {
    this.slides.freeMode = true;
  }
  doClick(){
    alert($(".do-click").html());
  }
}
