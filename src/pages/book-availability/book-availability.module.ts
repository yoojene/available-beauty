import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAvailabilityPage } from './book-availability';

@NgModule({
  declarations: [
    BookAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAvailabilityPage),
  ],
})
export class BookAvailabilityPageModule {}
