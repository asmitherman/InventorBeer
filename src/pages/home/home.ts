import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { AddPage } from '../add/add';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
        this.users = auth;
    });

  }

  show(id) {
    var listItem = document.getElementById("1");
    var listButton = document.createElement('button');
    listButton.setAttribute("class","ion-item");
    listButton.setAttribute("id", id+"1");
    var icon = document.createElement("ion-icon");
    icon.setAttribute("name","ios-add");
    let text = document.createTextNode("Add");
    listButton.appendChild(text);
    listButton.appendChild(icon);
    listItem.appendChild(listButton);

  }



  ionViewDidLoad() {
    document.getElementById('user').innerHTML = this.users.displayName;
  }

  add() {
    this.navCtrl.push(AddPage);
  }

}
