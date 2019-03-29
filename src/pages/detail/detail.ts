import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  product:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let pid=this.navParams.get('pid');
    let url = "http://localhost:8080/product/" + pid;
    this.http.get(url)
      .map(res=>res.json())
      .subscribe(data => { 
        this.product = data;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
