import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import person from 'https://randomuser.me/api/';

@Injectable()
export class ContactService {
  
  constructor(public http: Http) { }

  data: any;
  favoriteCounter: number = 0;
  favorites: Array<any> = [];


  load(){
    if (this.data){
      //datos cargados
      return Promise.resolve(this.data);
    }

    //Aun no tiene los datos cargados
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=15')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }

  favorite(person){
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: person});
    return Promise.resolve();
  }
}
