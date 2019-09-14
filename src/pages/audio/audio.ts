import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,MenuController} from 'ionic-angular';

import { JsonDataProvider } from '../../providers/json-data/json-data';

import { DetailAudioPage } from '../detail-audio/detail-audio';
import { SearchAudioPage } from '../search-audio/search-audio';

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
    ,public menuCtrl:MenuController) {
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


}
