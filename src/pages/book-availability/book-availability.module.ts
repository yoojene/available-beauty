import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAvailabilityPage } from './book-availability';
import { ComponentsModule } from '../../components/components.module';
import { AddStylistReviewPageModule } from '../add-stylist-review/add-stylist-review.module';

@NgModule({
  declarations: [BookAvailabilityPage],
  imports: [
    IonicPageModule.forChild(BookAvailabilityPage),
    ComponentsModule,
    AddStylistReviewPageModule,
  ],
})
export class BookAvailabilityPageModule {}
