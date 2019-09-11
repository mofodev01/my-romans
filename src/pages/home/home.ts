import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { RecipcesPage } from '../recipces/recipces';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  cat: any;
  errorMessage: string;
  serie:string;
    limit = 100;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ) {
      this.serie = "des"; 
  }
  doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
}
  ngOnInit() {
    this.getFoodListe();
             }

             getFoodListe(){
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
          
              this.JsonDataProvider.getFood()
                       .subscribe(
                        cat =>{
                           this.cat = cat 
                               loading.dismiss();
                                     } ,
                         error => {
                           this.errorMessage = <any>error
                              loading.dismiss();
                                  });
             }

             push_data_liste_food(nom_food: String){ 
          
              this.navCtrl.push(RecipcesPage,{nom_food: nom_food});
            }


}
