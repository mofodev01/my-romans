import { Component  } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';




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
   
   
    ) {
      this.index = "description";
  }

  play_audio( url : String,image : String) {


              let options: StreamingAudioOptions = {
                bgColor: "#eb2f06",
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



}
