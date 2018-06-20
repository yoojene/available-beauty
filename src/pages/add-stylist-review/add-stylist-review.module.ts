import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStylistReviewPage } from './add-stylist-review';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AddStylistReviewPage],
  imports: [IonicPageModule.forChild(AddStylistReviewPage), ComponentsModule],
})
export class AddStylistReviewPageModule {}
