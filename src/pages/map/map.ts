import { Component, ViewChild, ElementRef } from '@angular/core';

import { IonicPage, NavController, AlertController, NavParams, MenuController } from 'ionic-angular';

declare var BMap;
declare var BMapLib;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
  // 城市
  city: any;
  // 区县
  area: any;
  // 街道
  address: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.city = navParams.get('city') || '广州';
    this.area = navParams.get('area') || '天河区';
    this.address = navParams.get('address') || ' ';

  }


  ionViewDidLoad() {

    let _this = this;
    // 百度地图API功能
    function G(id) {
      return document.getElementById(id);
    }

    var map = new BMap.Map("l-map");
    map.centerAndZoom(_this.city+_this.area,12);                   // 初始化地图,设置城市和地图级别。

    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
      {"input" : "suggestId"
        ,"location" : map
      });

    ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
      var str = "";
      var _value = e.fromitem.value;
      var value = "";
      if (e.fromitem.index > -1) {
        // value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        value =  _value.street +  _value.business;
      }
      str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

      value = "";
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        //value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        value =  _value.street +  _value.business;
      }
      str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
      G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function(e) {     //鼠标点击下拉列表后的事件
      var _value = e.item.value;
      // myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
      myValue = _value.street +  _value.business;
      G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
      setPlace(myValue);
    });

    function setPlace(myValue){
      map.clearOverlays();    //清除地图上所有覆盖物
      function myFun(){
        var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
        map.centerAndZoom(pp, 18);
        map.addOverlay(new BMap.Marker(pp));    //添加标注
      }
      var local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: myFun
      });
      local.search(myValue);

      // 返回上一页
      _this.navCtrl.getPrevious().data.myAddress = myValue;
      _this.navCtrl.pop();
    }
  }

}
