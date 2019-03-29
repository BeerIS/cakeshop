import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products:any=0;
  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http) {
    this.http.get('http://localhost:8080/products')
      .map(res=>res.json())
      .subscribe(data=>{
        this.products = data;
      });

  }

}
