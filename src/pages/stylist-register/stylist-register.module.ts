import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylistRegisterPage } from './stylist-register';
import { ComponentsModule } from '../../components/components.module';

// import { NativeGeocoder } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [StylistRegisterPage],
  imports: [IonicPageModule.forChild(StylistRegisterPage), ComponentsModule]
  // providers: [NativeGeocoder]
})
export class StylistRegisterPageModule {}
