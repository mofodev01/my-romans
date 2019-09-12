import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController,AlertController} from 'ionic-angular';



@Component({
  selector: 'page-recipces',
  templateUrl: 'recipces.html',
})
export class RecipcesPage {
  nom_food:any;
  cat: any;
  errorMessage: string;
  serie:string;
  limit = 100;
  constructor(public alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams
    ) {
      
  }
 

}
