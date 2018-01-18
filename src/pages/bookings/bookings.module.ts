import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingsPage } from './bookings';
import { BookingProvider } from '../../providers/booking/booking';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [BookingsPage],
  imports: [IonicPageModule.forChild(BookingsPage), MomentModule],
  providers: [BookingProvider]
})
export class BookingsPageModule {}
