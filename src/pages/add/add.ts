import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// import { AngularFireModule } from 'angularfire2';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
users: any;
location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public af: AngularFireDatabase,public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe((auth) => {
      this.users = auth;
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
