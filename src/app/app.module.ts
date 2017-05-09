import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UnitPage } from '../pages/unit/unit';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { DetailUnitPage } from '../pages/unit/detailUnit/detailUnit';

@NgModule({
  declarations: [
    MyApp,
      UnitPage,
      HomePage,
      TabsPage,
      MenuPage,
      LoginPage,
      DetailUnitPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      UnitPage,
      HomePage,
      TabsPage,
      MenuPage,
      LoginPage,
      DetailUnitPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
