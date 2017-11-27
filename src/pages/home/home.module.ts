import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { Geolocation } from "@ionic-native/geolocation";
import { UserProvider } from '../../providers/user/user';
import { StylistProvider } from "../../providers/stylist/stylist";


@NgModule({
  declarations: [HomePage],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage)
  ],
  providers: [
    Geolocation,
    UserProvider,
    StylistProvider
  ]
})
export class HomePageModule {}
