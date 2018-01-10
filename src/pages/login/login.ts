import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  users: any;
  Auth: any;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public af: AngularFireDatabase, public afAuth: AngularFireAuth,
    public loadingCtrl: LoadingController
  ) {
      this.afAuth.authState.subscribe((auth) => {
          this.users = auth
          if (this.users) {
            // console.log("authenticated")
            this.navCtrl.setRoot(TabsPage);

          }

    });

    // this.user = afAuth.auth.currentUser;
    // console.log(this.user);
    // if(this.user) {
    //   // console.log("is it working");
    //   this.navCtrl.setRoot(HomePage);
    // }

}
  goHome() {
     this.navCtrl.setRoot(TabsPage);
  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading',
      dismissOnPageChange: true,
      showBackdrop: false
    });

    document.getElementById("hide").style.visibility = "hidden";
    loading.present();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
