import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReviewPage } from './add-review';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AddReviewPage],
  imports: [IonicPageModule.forChild(AddReviewPage), ComponentsModule],
})
export class AddReviewPageModule {}
