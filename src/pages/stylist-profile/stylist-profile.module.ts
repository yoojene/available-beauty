import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylistProfilePage } from './stylist-profile';

@NgModule({
  declarations: [
    StylistProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(StylistProfilePage),
  ],
})
export class StylistProfilePageModule {}
