import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { JsonDataProvider } from '../providers/json-data/json-data';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { Toast } from '@ionic-native/toast';

import { HttpClientModule } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';

import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Market } from '@ionic-native/market';
import { AdMobFree } from '@ionic-native/admob-free';

import { KidsAgePage } from '../pages/kids-age/kids-age';
import { StoryPage } from '../pages/story/story'
import { DetailStoryPage } from '../pages/detail-story/detail-story'

import { SelectSearchableModule } from 'ionic-select-searchable';

import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Network } from '@ionic-native/network';
import { RecipcesPage } from '../pages/recipces/recipces';
import { DetailAudioPage } from '../pages/detail-audio/detail-audio';

import { YoutubePipe } from '../pipes/youtube/youtube';
import { FileOpener } from '@ionic-native/file-opener';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


import { SearchPage } from '../pages/search/search';
import { SearchAudioPage } from '../pages/search-audio/search-audio';
import { DetailRomansPage } from '../pages/detail-romans/detail-romans'
import { DocumentViewer } from '@ionic-native/document-viewer';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AudioPage } from '../pages/audio/audio';
import { File } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { Media } from '@ionic-native/media';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
   /// LivePage,
    SearchPipe,
  SortPipe,
  YoutubePipe,
  KidsAgePage,
  StoryPage,
  DetailStoryPage,
  RecipcesPage,
  DetailAudioPage,
  SearchPage,
  DetailRomansPage,
  AudioPage,
  SearchAudioPage
  ],
  imports: [
    BrowserModule,
    //PdfViewerModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   /// LivePage,
   
    KidsAgePage,
    StoryPage,
    DetailStoryPage,
    RecipcesPage,
    DetailAudioPage,
    SearchPage,
    DetailRomansPage,
    AudioPage,
    SearchAudioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    
    SQLitePorter,
    SQLite,
    Toast,
    SocialSharing,
    Market,
    
   /**/ 
    HttpClientModule,
    /*IonicStorageModule,
   */
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonDataProvider,
    DatabaseProvider,
    AdMobFree,
    Network,
    TextToSpeech,
    FileOpener,
    ScreenOrientation,
    DocumentViewer,
    FileTransfer,
    File,
    Media
   
  ]
})
export class AppModule {}
