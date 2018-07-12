import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindAvailabilityPage } from './find-availability';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [FindAvailabilityPage],
  imports: [IonicPageModule.forChild(FindAvailabilityPage), ComponentsModule],
})
export class FindAvailabilityPageModule {}
