import { Statistics } from './../statistics/statistics';
import { Contacts } from './../contacts/contacts';
import { Menu } from './../menu/menu';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mis-tabs',
  templateUrl: 'mis-tabs.html'
})

export class MisTabs {

  tab1Root: any = Menu;
  tab2Root: any = Contacts;
  tab3Root: any = Statistics;

  constructor(public navCtrl: NavController) {}

}
