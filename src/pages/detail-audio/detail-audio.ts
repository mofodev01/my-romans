import { Component  } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { Media, MediaObject } from '@ionic-native/media';


@Component({
  selector: 'page-detail-audio',
  templateUrl: 'detail-audio.html',
})



export class DetailAudioPage  {

 

 


  num:any;
  cat: any;
  cat_info: any;

  errorMessage: string;
  index: string
  limit = 100;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ,private streamingMedia: StreamingMedia
    , private platform: Platform
    ,private admobFree: AdMobFree
   ,private media: Media
    ) {
      this.index = "description";
  }

  play_audio( url : String) {

    /*
              let options: StreamingAudioOptions = {
                bgColor: "#222",
                bgImage: ""+image+"",
                bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
                initFullscreen: false, // true is default. iOS only.
                successCallback: () => { console.log('Finished Audio') },
                errorCallback: (e) => { console.log('Error: ', e) },
               
              };
              
            
this.streamingMedia.playAudio(''+url+'', options);
this.streamingMedia.stopAudio();

  // Pause current audio (iOS only)
this.streamingMedia.pauseAudio();

  // Resume current audio (iOS only)
this.streamingMedia.resumeAudio();

   */ 
//-----------------------------------------------------------
const file: MediaObject = this.media.create(''+url+'');

// to listen to plugin events:

file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

file.onSuccess.subscribe(() => console.log('Action is successful'));

file.onError.subscribe(error => console.log('Error!', error));


file.play();

file.pause();

file.getCurrentPosition().then((position) => {
  console.log(position);
});

let duration = file.getDuration();
console.log(duration);

file.seekTo(10000);

file.stop();

file.release();

   

              }

  doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
}
  ngOnInit() {
    this.get_detail_audio();
    this.getProfil();
             }
             /**/

            
            
          


             get_detail_audio(){
               /**/
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
              
             
              this.num = this.navParams.get('num');
              this.JsonDataProvider.getdetail_audio(this.num)
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

             getProfil() {

     
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
              this.num = this.navParams.get('num');
              this.JsonDataProvider.getprofil(this.num)
                       .subscribe(
                        cat_info =>{
                           this.cat_info = cat_info 
                               loading.dismiss();
                                     } ,
                         error => {
                           this.errorMessage = <any>error
                              loading.dismiss();
                                  });
            
             }

         

          

  ionViewDidLoad() {
    this.num = this.navParams.get('num');
    console.log(this.num)

}

launchInterstitial() {
  
  const interstitialConfig: AdMobFreeInterstitialConfig = {
          isTesting: true,// Remove in production
          autoShow: true,
      //id: Your Ad Unit ID goes here
    id:'ca-app-pub-3000905870244951/7672735021'
  };

  this.admobFree.interstitial.config(interstitialConfig);

  
  this.admobFree.interstitial.prepare().then(() => {
      // success
      
  });

  
/*
 if (this.platform.is('android')) {
  const interstitialConfig: AdMobFreeInterstitialConfig = {
          // isTesting: true,// Remove in production
          autoShow: true,
      //id: Your Ad Unit ID goes here
    id:'ca-app-pub-3000905870244951/7672735021'
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
*/
  
}

}
