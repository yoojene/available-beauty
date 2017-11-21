import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
  declarations: [HomePage],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage)
  ],
  providers: [
    Geolocation
  ]
})
export class HomePageModule {}
