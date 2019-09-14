import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController,AlertController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { DetailAudioPage } from '../detail-audio/detail-audio';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-search-audio',
  templateUrl: 'search-audio.html',
  providers : [JsonDataProvider]
})
export class SearchAudioPage {
  pdfsearch : string ;
  audiosearch : string ;
  index: string;
  pdfliste: any;
  audioliste: any;
  constructor(public alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    
    ,private admobFree: AdMobFree
    ,private platform: Platform) {
  }

  search_audio(search){
    this.audiosearch=search.target.value
    //if(this.recipessearch.length > 2){
   // this.recipes.length = 0
    this.loadsearchaudio(this.audiosearch)
   // }
    
    }
    loadsearchaudio(search){

        this.JsonDataProvider.getsearchaudio(search).subscribe(audioliste =>{this.audioliste = audioliste});
    
    }

    push_data_audio(num: Number){

      this.navCtrl.push(DetailAudioPage,{num: num});
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
