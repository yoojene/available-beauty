import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylistRegisterPage } from './stylist-register';

@NgModule({
  declarations: [
    StylistRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(StylistRegisterPage),
  ],
})
export class StylistRegisterPageModule {}
