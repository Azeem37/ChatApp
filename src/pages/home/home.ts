import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string ="";
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  

  user(){
    if(/^[a-zA-Z]+$/.test(this.username)){
      // all cool
      this.navCtrl.push(ChatPage, {
        username: this.username
      });
    }else{
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'please enter username!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
