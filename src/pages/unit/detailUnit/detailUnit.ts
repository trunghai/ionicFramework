import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-detailunit',
    templateUrl: 'detailUnit.html'
})
export class DetailUnitPage {

    public item: String;

    constructor(public navCtrl: NavController, private navParams: NavParams) {
        this.item = this.navParams.data;
    }

}
