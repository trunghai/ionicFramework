import { Component } from '@angular/core';

import { NavController, ViewController, LoadingController } from 'ionic-angular';

import { SpinnerDialog } from 'ionic-native';

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuPage {

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
        //SpinnerDialog.show();

    }

    showSpiner() {
        let loading = this.loadingCtrl.create({
            spinner: "dots",
            cssClass:"ion-spinner",
            content: "Connexion au serveur Migal en cours...",
        })
        //loading.onDidDismiss(() => {
        //    console.log('Dismissed loading');
        //});

        loading.present();

        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }

}
