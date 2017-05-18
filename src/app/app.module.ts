import { ContactDetail } from './../pages/contact-detail/contact-detail';
import { ContactService } from './../providers/contact-service';
import { Statistics } from './../pages/statistics/statistics';
import { Contacts } from './../pages/contacts/contacts';
import { Menu } from './../pages/menu/menu';
import { MisTabs } from './../pages/mis-tabs/mis-tabs';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    MisTabs,
    Menu,
    Contacts,
    Statistics,
    ContactDetail
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabs,
    Menu,
    Contacts,
    Statistics,
    ContactDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService
  ]
})
export class AppModule {}
