import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-view-pdf',
  templateUrl: 'view-pdf.html',
})
export class ViewPdfPage {
url : string;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.url = this.navParams.get('url'); 
    console.log(this.url);
  }

}
