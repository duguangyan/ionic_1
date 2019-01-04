import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import * as $ from 'jquery';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

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
