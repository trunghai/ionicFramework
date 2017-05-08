import { Component } from '@angular/core';

import { NavController, ModalController, ViewController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
       
  }
  
  onLink(url: string) {
      window.open(url);
  }

  presentModalMenu() {
      let profileModal = this.modalCtrl.create(MenuPage);
      profileModal.present();
  }
}
