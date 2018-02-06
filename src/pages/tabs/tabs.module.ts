import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HomePageModule } from '../home/home.module';
import { StylistProfilePageModule } from '../stylist-profile/stylist-profile.module';
import { BookingsPageModule } from '../bookings/bookings.module';
import { UserProfilePageModule } from '../user-profile/user-profile.module';
import { AvailabilityPageModule } from '../availability/availability.module';

@NgModule({
  declarations: [TabsPage],
  imports: [
    // tabs
    HomePageModule,
    StylistProfilePageModule,
    BookingsPageModule,
    UserProfilePageModule,
    AvailabilityPageModule,

    IonicPageModule.forChild(TabsPage)
  ],
  exports: [TabsPage]
})
export class TabsPageModule {}
