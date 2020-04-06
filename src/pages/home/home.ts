import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,Platform} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { DetailRomansPage } from '../detail-romans/detail-romans';
import { SearchPage } from '../search/search';
import { LaunchReview } from '@ionic-native/launch-review';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
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
    ,private admobFree: AdMobFree
    , private platform: Platform
    ) {
      this.serie = "des"; 
      this.rate();
  }

  launchInterstitial() {
    /**/
      if (this.platform.is('android')) {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
              //isTesting: true, Remove in production
              autoShow: true,
          //id: Your Ad Unit ID goes here
        id:'ca-app-pub-3000905870244951/7672735021'
        //id:'ca-app-pub-3940256099942544/1033173712'//testads
      };
    
      this.admobFree.interstitial.config(interstitialConfig);
    
      
      this.admobFree.interstitial.prepare().then(() => {
          // success
          
      });
    
      }else if (this.platform.is('ios')) {
        const interstitialConfig: AdMobFreeInterstitialConfig = {
          //isTesting: true,// Remove in production
          autoShow: true,
      //id: Your Ad Unit ID goes here
     id:'ca-app-pub-3000905870244951/9831994503'
    };
    
    this.admobFree.interstitial.config(interstitialConfig);
    
    
    this.admobFree.interstitial.prepare().then(() => {
      // success
      
    });
    
      }
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
              //this.launchInterstitial();
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
