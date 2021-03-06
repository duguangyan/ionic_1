import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ScanPage } from '../pages/scan/scan';
import { AddressPage } from '../pages/address/address';
import { AddressCreatePage } from '../pages/address-create/address-create';
import { MapPageModule } from "../pages/map/map.module";
import { CenterPageModule } from "../pages/center/center.module";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { MultiPickerModule } from'ion-multi-picker';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ScanPage,
    AddressPage,
    AddressCreatePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MapPageModule,
    CenterPageModule,
    MultiPickerModule,
    IonicModule.forRoot(MyApp,{backButtonText:' '}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ScanPage,
    AddressPage,
    AddressCreatePage
  ],
  providers: [
    StatusBar,
    Camera,
    QRScanner,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
