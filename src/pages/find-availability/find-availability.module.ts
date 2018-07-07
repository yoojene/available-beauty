import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindAvailabilityPage } from './find-availability';

@NgModule({
  declarations: [
    FindAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(FindAvailabilityPage),
  ],
})
export class FindAvailabilityPageModule {}
