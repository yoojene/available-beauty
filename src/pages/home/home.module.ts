import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { Geolocation } from "@ionic-native/geolocation";
import { UserProvider } from '../../providers/user/user';
import { StylistProvider } from "../../providers/stylist/stylist";
import { SearchPageModule } from '../search/search.module';
import { SearchPage } from '../search/search';


@NgModule({
  declarations: [HomePage],
  imports: [
    ComponentsModule,
    SearchPageModule,
    IonicPageModule.forChild(HomePage)
  ],
  providers: [
    Geolocation,
    UserProvider,
    StylistProvider
  ]
})
export class HomePageModule {}
