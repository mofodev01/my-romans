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
import { DetailRecipesPage } from '../pages/detail-recipes/detail-recipes';

import { YoutubePipe } from '../pipes/youtube/youtube';
import { FileOpener } from '@ionic-native/file-opener';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { SearchPage } from '../pages/search/search';
import { DetailRomansPage } from '../pages/detail-romans/detail-romans'
import { DocumentViewer } from '@ionic-native/document-viewer';
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
  DetailRecipesPage,
  SearchPage,
  DetailRomansPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
   
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-round-back',
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-md-slide-in',
      modalLeave: 'modal-md-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      tabsHideOnSubPages: true
    }),
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
    DetailRecipesPage,
    SearchPage,
    DetailRomansPage
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
    DocumentViewer

   
  ]
})
export class AppModule {}
