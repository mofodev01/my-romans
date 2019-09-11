import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController,AlertController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { DetailRecipesPage } from '../detail-recipes/detail-recipes';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers : [JsonDataProvider]

})
export class SearchPage {
  recipessearch : string ;

  recipes: any;
  constructor(public alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    
    ,private admobFree: AdMobFree
    ,private platform: Platform) {
  }

  search_recipes(search){
    this.recipessearch=search.target.value
    //if(this.recipessearch.length > 2){
   // this.recipes.length = 0
    this.loadsearch(this.recipessearch)
   // }
    
    }
    loadsearch(search){

        this.JsonDataProvider.getsearch(search).subscribe(recipes =>{this.recipes = recipes});
    
    }

    push_data_liste_recipes(nom_recipes: String){ 
          
      this.navCtrl.push(DetailRecipesPage,{nom_recipes: nom_recipes});
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
