import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs'

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = "";
  message: string = "";
  messages: object[] = [];
  chatSubscription;

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');

      this.chatSubscription = this.db.list('/chat').valueChanges().subscribe(data => {
       this.messages = data;
      });
  }

  sendMessage() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then( () => {

    });
    this.message = '';
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave chat page');
    this.chatSubscription.unsubscribe();
    this.db.list('/chat').push({
      specialMessage: true,
      message: this.username+' has left the team'
    })
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad chat page');
    this.db.list('/chat').push({
      specialMessage: true,
      message: this.username+' has joined the team'
    })
  }
}
