import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController,AlertController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { DetailRomansPage } from '../detail-romans/detail-romans';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers : [JsonDataProvider]

})
export class SearchPage {
  pdfsearch : string ;
  audiosearch : string ;
  index: string;
  pdfliste: any;
  audioliste: any;
  constructor(public alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    
    ,private admobFree: AdMobFree
    ,private platform: Platform) {
      this.index = "pdf";
  }

  search_pdf(searchpdf){
    this.pdfsearch=searchpdf.target.value
    //if(this.recipessearch.length > 2){
   // this.recipes.length = 0
    this.loadsearchpdf(this.pdfsearch)
   // }
    
    }
    loadsearchpdf(searchloadpdf){

        this.JsonDataProvider.getsearchpdf(searchloadpdf).subscribe(pdfliste =>{this.pdfliste = pdfliste});
    
    }

    push_data_liste_romans(id: String){ 
          
      this.navCtrl.push(DetailRomansPage,{id: id});
    }
   

  launchInterstitial() {
    if (this.platform.is('android')) {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
            isTesting: true,// Remove in production
            autoShow: true,
        //id: Your Ad Unit ID goes here
       //id:'ca-app-pub-3000905870244951/5491408793'
    };
  
    this.admobFree.interstitial.config(interstitialConfig);
  
    
    this.admobFree.interstitial.prepare().then(() => {
        // success
        
    });
  
    }else if (this.platform.is('ios')) {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true,// Remove in production
        autoShow: true,
    //id: Your Ad Unit ID goes here
   //id:'ca-app-pub-3000905870244951/5491408793'
  };
  
  this.admobFree.interstitial.config(interstitialConfig);
  
  
  this.admobFree.interstitial.prepare().then(() => {
    // success
    
  });
  
    }
  }

}
