import { Menu } from './../menu/menu';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class Statistics {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Statistics');
  }


  returnMenu() {
    this.navCtrl.setRoot(Menu);
  }
}
