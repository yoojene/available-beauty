import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingsPage } from './bookings';
import { BookingProvider } from '../../providers/booking/booking';

@NgModule({
  declarations: [BookingsPage],
  imports: [IonicPageModule.forChild(BookingsPage)],
  providers: [BookingProvider]
})
export class BookingsPageModule {}
