import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { Http, Headers } from '@angular/http';
import { ActionSheet, ActionSheetOptions, HTTP } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, private http: Http, private platform: Platform) {

    }

    public doFakeLogin() {
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');

        //this.http.post('http://10.1.14.229:9080/EBCorpCore3/ebservice', { "cmdType": "100", "time": 1492056106331, "app": "GPRS_WEB", "version": "5.0.1", "language": "VN", "args": ["", { "user": "9888888801", "pass": "123456", "captcha": "", "hashcode": "2bd21a47-fab1-42d3-9934-957ff3599faf", "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36", "isMobile": 0, "isCheckCapt": "N" }], "raw": "" }, { headers: headers }).subscribe(res => {
        //    console.log(res.json().respContent);
        //}, (err) => {
        //    console.log(err);
        //});;

        this.navCtrl.setRoot(TabsPage);

        //this.platform.ready().then(() => {
        //    let buttonLabels = ['Share via Facebook', 'Share via Twitter'];

            

        //    HTTP.post('http://10.1.14.229:9080/EBCorpCore3/ebservice', { "cmdType": "100", "time": 1492056106331, "app": "GPRS_WEB", "version": "5.0.1", "language": "VN", "args": ["", { "user": "9888888801", "pass": "123456", "captcha": "", "hashcode": "2bd21a47-fab1-42d3-9934-957ff3599faf", "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36", "isMobile": 0, "isCheckCapt": "N" }], "raw": "" }, { 'Content-Type': 'application/json' })
        //        .then(data => {

        //            const options: ActionSheetOptions = {
        //                title: data.status.toString(),
        //                buttonLabels: buttonLabels,
        //                addCancelButtonWithLabel: 'Cancel',
        //                addDestructiveButtonWithLabel: 'Delete',
        //                //androidTheme: ActionSheet.ANDROID_THEMES.THEME_HOLO_DARK
        //            };
        //            ActionSheet.show(options).then((buttonIndex: number) => {
        //                console.log('Button pressed: ' + buttonIndex);
        //            });
        //            console.log(data.data);
        //        }).catch(error => {
        //            console.log(error.error);
        //        });

            

           
        //})
    }

}
