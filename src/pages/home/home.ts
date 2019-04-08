import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewproductPage } from '../newproduct/newproduct';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products:any=0;
  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http) {
    this.getData();
  }
  showDetail(id){
    this.navCtrl.push(DetailPage,{pid: id});
  }

  gotoNewProduct(){
    this.navCtrl.push(NewproductPage);
  }
  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/products')
    .map(res=>res.json())
    .subscribe(data=>{
      this.products = data;
    });
  }
}
