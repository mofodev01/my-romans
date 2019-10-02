import { Component  } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController, ModalController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';


import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-detail-romans',
  templateUrl: 'detail-romans.html',
})
export class DetailRomansPage {
  id:any;
  cat: any;

  errorMessage: string;
 
  limit = 100;
  fileTransfer: FileTransferObject;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ,private streamingMedia: StreamingMedia
    , private platform: Platform
    ,private fileOpener: FileOpener
    ,private document: DocumentViewer
    ,private transfer: FileTransfer, private file: File
    ,private admobFree: AdMobFree
    ) {
 
  }

  

  open_pdf(urls: string, title: string){
   
    this.fileTransfer = this.transfer.create();
    this.fileTransfer
      .download(""+urls+"", this.file.dataDirectory + ""+title+"" + ".pdf")
      .then(entry => {
        console.log("download complete: " + entry.toURL());
        this.fileOpener
          .open(entry.toURL(), "application/pdf")
          .then(() => console.log("File is opened"))
          .catch(e => console.log("Error opening file", e));
      });
  }

  goToPlayerPage( url : String ) {


              let options: StreamingVideoOptions = {
                successCallback: () => { console.log('Finished Video') },
                errorCallback: (e) => { console.log('Error: ', e) },
               
              };
              
            
this.streamingMedia.playVideo(''+url+'', options);
         
         
              }

  doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
}
  ngOnInit() {
    this.get_detail_romans();
   
             }
             /**/

            
            
          


             get_detail_romans(){
               /**/
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
            
              loading.present();
              
             
              this.id = this.navParams.get('id');
              this.JsonDataProvider.getdetail_romans(this.id)
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

            
         

          
             launchInterstitial() {
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
            }

}
