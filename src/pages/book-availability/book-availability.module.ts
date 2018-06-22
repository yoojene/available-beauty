import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAvailabilityPage } from './book-availability';
import { ComponentsModule } from '../../components/components.module';
import { AddReviewPageModule } from '../add-review/add-review.module';

@NgModule({
  declarations: [BookAvailabilityPage],
  imports: [
    IonicPageModule.forChild(BookAvailabilityPage),
    ComponentsModule,
    AddReviewPageModule,
  ],
})
export class BookAvailabilityPageModule {}
