import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController, ModalController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

//import { FileOpener } from '@ionic-native/file-opener';

declare var window: any;

@Component({
  selector: 'page-detail-recipes',
  templateUrl: 'detail-recipes.html',
})



export class DetailRecipesPage  {

  @ViewChild('videoPlayer') mVideoPlayer: any;

  // http://iptv-line.com:6969/live/ursula_cardoso@yahoo.com.br/b0McJAxavRaml814YlkF/19344.m3u8

  playType: string;
  /*
  urls: string[] = [
    'rtmp://live.hkstv.hk.lxdns.com/live/hks',
    'http://fms.cntv.lxdns.com/live/flv/channel179.flv',
    '',
    'http://iptv-line.com:6969/live/ursula_cardoso@yahoo.com.br/b0McJAxavRaml814YlkF/19344.m3u8',
    'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    'rtmp://live.hkstv.hk.lxdns.com/live/hks',
    'file://',
    'https://renditions3-tastemade.akamaized.net/883c6dc6-boulettes-de-riz-l-fr-fr/883c6dc6-boulettes-de-riz-l-fr-frmp4-360-730-webm.webm'
  ];
  
  urls: string;
*/


  nom_recipes:any;
  cat_ing: any;
  cat_ins: any;
  cat_profil: any;
  errorMessage: string;
  serie:string;
  limit = 100;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ,private streamingMedia: StreamingMedia
    , private platform: Platform
    //,private fileOpener: FileOpener
    ,private modal: ModalController
    ) {
      this.serie = "des"; 
      this.playType = '4';//3 vod_M3U8/ 4 vod_MP4
     /// this.changeType(this.playType)
  }
/*
  changeType(type: string) {
    this.url = this.urls[type];

    if (type == '2') {
      alert('iOS下精简版SDK暂不支持flv点播');
    }
  }
*/
  
  goToPlayerPage( url : String ) {
    if (this.platform.is('ios')) {
    if (url) {
      let modal = this.modal.create('player', {
        url: url,
        playType: this.playType
      });
      modal.present();
    }
 // }

// startVideo(urls) {
}else if(this.platform.is('android')){
              let options: StreamingVideoOptions = {
                successCallback: () => { console.log('Finished Video') },
                errorCallback: (e) => { console.log('Error: ', e) },
               
              };
              
            
this.streamingMedia.playVideo('https://renditions3-tastemade.akamaized.net/'+url+'/mp4/'+url+'-360-730-mp4.mp4', options);
   /* 
this.streamingMedia.playVideo('https://renditions3-tastemade.akamaized.net/'+url+'/wifi.m3u8', options);     */       
              
            }
              }

  doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
}
  ngOnInit() {
    this.getIngredientsListe();
    this.getInstrectionsListe();
    this.getprofilListe();
             }
             /**/

            
            
          


             getIngredientsListe(){
               /**/
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
              
             
              this.nom_recipes = this.navParams.get('nom_recipes');
              this.JsonDataProvider.getingredients(this.nom_recipes)
                       .subscribe(
                        cat_ing =>{
                           this.cat_ing = cat_ing 
                               loading.dismiss();
                              
                                     } ,
                         error => {
                           this.errorMessage = <any>error
                              loading.dismiss();
                                  });
             }

             getInstrectionsListe(){
               /* */
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
             
             
              this.nom_recipes = this.navParams.get('nom_recipes');
              this.JsonDataProvider.getInstrections(this.nom_recipes)
                       .subscribe(
                        cat_ins =>{
                           this.cat_ins = cat_ins 
                              loading.dismiss();
                               
                                     } ,
                         error => {
                           this.errorMessage = <any>error
                             loading.dismiss();
                              
                                  });
             }
             getprofilListe(){
               /**/
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
              
             
              this.nom_recipes = this.navParams.get('nom_recipes');
              this.JsonDataProvider.getprofil(this.nom_recipes)
                       .subscribe(
                        cat_profil =>{
                           this.cat_profil = cat_profil 
                               loading.dismiss();
                              
                                     } ,
                         error => {
                           this.errorMessage = <any>error
                             loading.dismiss();
                             
                                  });
             }

          

  ionViewDidLoad() {
   

}
}
