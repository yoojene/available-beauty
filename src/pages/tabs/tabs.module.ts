import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HomePageModule } from '../home/home.module';
import { ProfilePageModule } from '../profile/profile.module';
import { BookingsPageModule } from '../bookings/bookings.module';


@NgModule({
  declarations: [TabsPage],
  imports: [

    // tabs
    HomePageModule,
    ProfilePageModule,
    BookingsPageModule,

    IonicPageModule.forChild(TabsPage)
  ],
  exports: [TabsPage]
})
export class TabsPageModule {}
