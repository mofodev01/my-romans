import { Component  } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController, ModalController} from 'ionic-angular';
import { JsonDataProvider } from '../../providers/json-data/json-data';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';


@Component({
  selector: 'page-detail-romans',
  templateUrl: 'detail-romans.html',
})
export class DetailRomansPage {
  id:any;
  cat: any;

  errorMessage: string;
 
  limit = 100;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ,private streamingMedia: StreamingMedia
    , private platform: Platform
    ,private fileOpener: FileOpener
    ,private document: DocumentViewer
    ) {
 
  }
  open_pdf(urls : String){
    this.fileOpener.open(''+urls+'', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error opening file', e));
    /*
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    
    this.document.viewDocument(''+urls+'', 'application/pdf', options)
    */
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

            
         

          

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    console.log(this.id)   

}

}
