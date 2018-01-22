import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylistRegisterPage } from './stylist-register';
// import { NativeGeocoder } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [StylistRegisterPage],
  imports: [IonicPageModule.forChild(StylistRegisterPage)]
  // providers: [NativeGeocoder]
})
export class StylistRegisterPageModule {}
