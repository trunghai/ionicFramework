import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//import { HeaderColor } from 'ionic-native/';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
        //HeaderColor.tint("#f53d3d");
  }
  
  onLink(url: string) {
      window.open(url);
  }



  //presentProfileModal() {
  //    let profileModal = this.modalCtrl.create(MenuPage);
  //    profileModal.onDidDismiss(data => {
  //        console.log(data);
  //    });
  //    profileModal.present();
  //}
}
