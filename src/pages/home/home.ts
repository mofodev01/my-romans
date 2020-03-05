import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { DetailRomansPage } from '../detail-romans/detail-romans';
import { SearchPage } from '../search/search';
import { LaunchReview } from '@ionic-native/launch-review';
//declare var fbanfree: any;

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
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController ,
    private launchReview: LaunchReview
    ) {
      this.serie = "des"; 
      this.rate();
  }
  rate(){
    if(this.launchReview.isRatingSupported()){
      this.launchReview.rating()
        .then(() => console.log('Successfully launched rating dialog'));
    }
  }
  doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
}
  ngOnInit() {
    this.getromansListe();
             }

             getromansListe(){
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
          
              this.JsonDataProvider.getromans()
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

             push_data_liste_romans(id: String){ 
          
              this.navCtrl.push(DetailRomansPage,{id: id});
            }

            push_to_search_pdf(){
             
              this.navCtrl.push(SearchPage);
              
            }
           /*
            ads_facebook(){
              fbanfree.showInterstitial('752642228498844_752626718500395')
              .then(res => {
              console.log('interstitial show success:', res);
               })
              .catch(err => {
               console.log('error showing interstitial:', err);
              });
            }

          */

}
