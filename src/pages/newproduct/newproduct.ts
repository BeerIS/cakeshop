import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-newproduct',
  templateUrl: 'newproduct.html',
})
export class NewproductPage {
  product = {
    name:"",
    productType:"",
    description:"",
    flavour:"",
    price:""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewproductPage');
  }
  addProduct(){
    let url="http://localhost:8080/product";
    console.log(this.product);
    this.http.post(url,this.product)
    .subscribe(data=>{
      console.log(data);
      this.navCtrl.popToRoot();
    });
  }
}
