import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,MenuController,Platform} from 'ionic-angular';

import { JsonDataProvider } from '../../providers/json-data/json-data';

import { DetailAudioPage } from '../detail-audio/detail-audio';
import { SearchAudioPage } from '../search-audio/search-audio';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage {
  
  cat:any;
  
         
  errorMessage: string;

  limit = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ,public menuCtrl:MenuController
    , private platform: Platform
    ,private admobFree: AdMobFree
    ) {
  }

  ionViewDidLoad() {
  
  }
  ngOnInit() {
    this.getAudio();
             }

  getAudio() {

     
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.JsonDataProvider.getaudio()
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

  push_data_audio(num: Number){

    this.navCtrl.push(DetailAudioPage,{num: num});
  }

  push_to_search_audio(){
    this.navCtrl.push(SearchAudioPage);
  }


  launchInterstitial() {
 
    /**/
     if (this.platform.is('android')) {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
            // isTesting: true, Remove in production
              autoShow: true,
          //id: Your Ad Unit ID goes here
        id:'ca-app-pub-3000905870244951/7672735021'
         // id:'ca-app-pub-3940256099942544/1033173712'//testads
    
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


}
