import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LookingPage } from './looking';

@NgModule({
  declarations: [
    LookingPage,
  ],
  imports: [
    IonicPageModule.forChild(LookingPage),
  ],
})
export class LookingPageModule {}
