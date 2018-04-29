import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

var config = {
  apiKey: "AIzaSyD6QYctSuutnjCItu9dcbWGjsDTCdfcP6s",
  authDomain: "chatapp-433a2.firebaseapp.com",
  databaseURL: "https://chatapp-433a2.firebaseio.com",
  projectId: "chatapp-433a2",
  storageBucket: "chatapp-433a2.appspot.com",
  messagingSenderId: "635898805022"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
