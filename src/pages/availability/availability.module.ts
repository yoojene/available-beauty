import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailabilityPage } from './availability';
import { AvailabilityProvider } from '../../providers/availability/availability';

@NgModule({
  declarations: [AvailabilityPage],
  imports: [IonicPageModule.forChild(AvailabilityPage)],
  providers: [AvailabilityProvider]
})
export class AvailabilityPageModule {}
