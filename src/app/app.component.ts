import { Menu } from './../pages/menu/menu';
import { Contacts } from './../pages/contacts/contacts';
import { Statistics } from './../pages/statistics/statistics';
import { MisTabs } from './../pages/mis-tabs/mis-tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  /**Nav: NavController --> componente de navegacion */
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MisTabs;
  pagesMenu: Array<{ title: string, component: any }>;


  constructor(
    public platform: Platform,
    public menu: MenuController
  ){
      this.initializeApp();
  
      this.pagesMenu = [
        { title: 'Info', component: Statistics },
        { title: 'Other', component: Contacts }
      ];
  
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        Splashscreen.hide();
  
      });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


  openPage(pagesMenu) {
    // close the menu when clicking a link from the menu
    this.menu.close();  /**cerrar el menu (menuToggle) */
    // navigate to the new page if it is not the current page
    this.nav.setRoot(pagesMenu.component);
  }

   return() {
    this.menu.close();          /**cerrar el menu (menuToggle)*/
    this.nav.setRoot(Menu); /**Enviar a la pagina deseada = HomePage */
  }

}