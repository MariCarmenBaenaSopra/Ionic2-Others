import { ContactDetail } from './../contact-detail/contact-detail';
import { ContactService } from './../../providers/contact-service';
import { Menu } from './../menu/menu';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})

export class Contacts {
  public people: any;
  searchTerm: string = '';
  items: Array<{ name: { first: string, last: string }, picture: { thumbnail: string } }>    /*SEARCH*/
  list: Array<{ name: { first: string, last: string }, picture: { thumbnail: string } }>     /*SEARCH*/

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contactService: ContactService
  ) {
    this.loadContact();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Contacts');
  }


  returnMenu() {
    this.navCtrl.setRoot(Menu);
  }

  /**LOAD API TO CONTACT */
  loadContact() {
    this.contactService.load()
      .then(data => {
        this.people = data;
      })
  }


  /**SEARCH */
  filterItems(searchTerm) {
    return this.list.filter((item)=> {
      return item.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.name.last.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    if (this.searchTerm != '') {
      this.items = this.filterItems(this.searchTerm);
    } else {
      this.items = this.list;
    }
  }

 /**DETAILS OF CONTACT WHEN CLICK IN THERE */
  openContactDetail(people: any){
    this.navCtrl.push(ContactDetail, people);
  }
}
