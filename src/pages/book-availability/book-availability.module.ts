import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAvailabilityPage } from './book-availability';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [BookAvailabilityPage],
  imports: [IonicPageModule.forChild(BookAvailabilityPage), ComponentsModule],
})
export class BookAvailabilityPageModule {}
