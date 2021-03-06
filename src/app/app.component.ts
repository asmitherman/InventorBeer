import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddPage } from '../pages/add/add';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}

export const firebaseConfig = {
    apiKey: "AIzaSyBqIhekP1rTh2D-HY7is-suchCE7Z2_piU",
    authDomain: "inventorybeer.firebaseapp.com",
    databaseURL: "https://inventorybeer.firebaseio.com",
    projectId: "inventorybeer",
    storageBucket: "inventorybeer.appspot.com",
    messagingSenderId: "1097246804973"
  };
