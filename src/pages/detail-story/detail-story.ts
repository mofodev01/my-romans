import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {TextToSpeech} from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-detail-story',
  templateUrl: 'detail-story.html',
})
export class DetailStoryPage {
  id:any;
  data: any;
  serie:string;

  
  
  

  constructor(private tts: TextToSpeech, public http:  HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.serie = "des";

  }
  play_Text_eng(texteng: string) {
    this.tts.speak({
      text: ''+texteng+'',
      
      locale: 'en-US'
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  play_Text_fr(textfr: string) {
    this.tts.speak({
      text: ''+textfr+''
      
      ,locale: 'fr-FR'
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  stop(){
    this.tts.stop();
  }

  ionViewDidLoad() {

    this.id = this.navParams.get('id');
    
   
      console.log(this.id);
      
  }

  ionViewWillEnter(){
    this.get_detail_story();
             }

  get_detail_story() {

    this.id = this.navParams.get('id');
 
   this.http.get('http://story-kads.iptvmedia.me/api/detail-stories.php?id='+this.id+'')
   
    .subscribe(res => {
    
    
    this.data=res;
    
    console.log(this.data);
    });
  
}



}
