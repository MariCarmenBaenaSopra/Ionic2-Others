import { ContactService } from './../../providers/contact-service';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController, ActionSheet } from 'ionic-angular';

@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetail {
  person: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contactServide: ContactService,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {
      this.person = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetail');
  }

/**Guardar en favoritos */
    favorite(person) {
        this.contactServide.favorite(person)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Property added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

  /**Compartir */
    share(property) {
        /**ActionSheet= diálogo que permite al usuario elegir entre un conjunto de opciones. */
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => [console.log('share via twitter')]
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });
        
        actionSheet.present();
    }
  
}
