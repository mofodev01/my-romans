import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController,AlertController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { DetailRecipesPage } from '../detail-recipes/detail-recipes';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-recipces',
  templateUrl: 'recipces.html',
})
export class RecipcesPage {
  nom_food:any;
  cat: any;
  errorMessage: string;
  serie:string;
  limit = 100;
  constructor(public alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    
    ,private admobFree: AdMobFree
    ,private platform: Platform
    ) {
      this.serie = "des"; 
  }
  doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
}
  ngOnInit() {
    this.getRecipcesListe();
             }


             getRecipcesListe(){
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
              this.nom_food = this.navParams.get('nom_food');
              this.JsonDataProvider.getRecipces(this.nom_food)
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

             push_data_liste_recipes(nom_recipes: String){ 
          
              this.navCtrl.push(DetailRecipesPage,{nom_recipes: nom_recipes});
            }

  ionViewDidLoad() {
    this.nom_food = this.navParams.get('nom_food');
    console.log(this.nom_food);
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
