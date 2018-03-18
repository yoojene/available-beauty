import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylistReviewPage } from './stylist-review';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [StylistReviewPage],
  imports: [IonicPageModule.forChild(StylistReviewPage), ComponentsModule],
})
export class StylistReviewPageModule {}
