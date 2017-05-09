import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailUnitPage } from '../unit/detailUnit/detailUnit';


@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html'
})
export class UnitPage {

    public items: Array<Object> = ['Khoa công nghệ thông tin', 'Khoa toán tin ứng dụng', 'Hệ thống thông tin', 'An toàn và bảo mật'];

  constructor(public navCtrl: NavController) {

    }

  public itemSelected(item) {
      this.navCtrl.push(DetailUnitPage, item);
  }

}
