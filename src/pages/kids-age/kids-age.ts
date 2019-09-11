import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StoryPage } from '../story/story'

@Component({
  selector: 'page-kids-age',
  templateUrl: 'kids-age.html',
})
export class KidsAgePage {
  result1:any;
  result2:any;
  result3:any;
  result4:any;
  a5to7yrs:any= "5 to 7yrs"; 
  a8to10yrs:any = "8 to 10yrs";
  a10to14yrs:any = "10 to 14yrs";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  
     this.result1 = this.navParams.get('fairytales');
    this.result2 = this.navParams.get('folktales');
    this.result3 = this.navParams.get('legends');
    this.result4 = this.navParams.get('historicalfiction');
    if(this.result1){
      console.log(this.result1);
    }else if(this.result2){
      console.log(this.result2);
    }else if(this.result3){
     console.log(this.result3);
    }
    else if(this.result4){
       console.log(this.result4); 
    }
  
  }


  a5_to_7yrs(){

    this.result1 = this.navParams.get('fairytales');
    this.result2 = this.navParams.get('folktales');
    this.result3 = this.navParams.get('legends');
    this.result4 = this.navParams.get('historicalfiction');
    if(this.result1){
      console.log(this.result1);
      console.log(this.a5to7yrs);
      this.navCtrl.push(StoryPage,{age: this.a5to7yrs , type:this.result1});
    }else if(this.result2){
      console.log(this.result2);
      console.log(this.a5to7yrs);
      this.navCtrl.push(StoryPage,{age: this.a5to7yrs , type:this.result2});
    }else if(this.result3){
     console.log(this.result3);
     console.log(this.a5to7yrs);
     this.navCtrl.push(StoryPage,{age: this.a5to7yrs , type:this.result3});
    }
    else if(this.result4){
       console.log(this.result4);
       console.log(this.a5to7yrs);
       this.navCtrl.push(StoryPage,{age: this.a5to7yrs , type:this.result4}); 
    }

  }

  a8_to_10yrs(){
    this.result1 = this.navParams.get('fairytales');
    this.result2 = this.navParams.get('folktales');
    this.result3 = this.navParams.get('legends');
    this.result4 = this.navParams.get('historicalfiction');
    if(this.result1){
      console.log(this.result1);
      console.log(this.a8to10yrs);
      this.navCtrl.push(StoryPage,{age: this.a8to10yrs , type:this.result1});
    }else if(this.result2){
      console.log(this.result2);
      console.log(this.a8to10yrs);
      this.navCtrl.push(StoryPage,{age: this.a8to10yrs , type:this.result2});
    }else if(this.result3){
     console.log(this.result3);
     console.log(this.a8to10yrs);
     this.navCtrl.push(StoryPage,{age: this.a8to10yrs , type:this.result3});
    }
    else if(this.result4){
       console.log(this.result4);
       console.log(this.a8to10yrs);
       this.navCtrl.push(StoryPage,{age: this.a8to10yrs , type:this.result4}); 
    }
  }

  a10_to_14yrs(){
    this.result1 = this.navParams.get('fairytales');
    this.result2 = this.navParams.get('folktales');
    this.result3 = this.navParams.get('legends');
    this.result4 = this.navParams.get('historicalfiction');
    if(this.result1){
      console.log(this.result1);
      console.log(this.a10to14yrs);
      this.navCtrl.push(StoryPage,{age: this.a10to14yrs , type:this.result1});
    }else if(this.result2){
      console.log(this.result2);
      console.log(this.a10to14yrs);
      this.navCtrl.push(StoryPage,{age: this.a10to14yrs , type:this.result2});
    }else if(this.result3){
     console.log(this.result3);
     console.log(this.a10to14yrs);
     this.navCtrl.push(StoryPage,{age: this.a10to14yrs , type:this.result3});
    }
    else if(this.result4){
       console.log(this.result4);
       console.log(this.a10to14yrs);
       this.navCtrl.push(StoryPage,{age: this.a10to14yrs , type:this.result4}); 
    }
  }


}
