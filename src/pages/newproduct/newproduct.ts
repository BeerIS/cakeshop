import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

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
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: HttpClient, private alertCtrl:AlertController) {
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
      this.data = data;
      if(this.data.msg==true){
          this.showAlert();
          this.navCtrl.popToRoot();      
      }      
    });
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Data added',
      buttons: ['OK']
    });
    alert.present();
  }
}
