import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylistProfilePage } from './stylist-profile';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [StylistProfilePage],
  imports: [IonicPageModule.forChild(StylistProfilePage), ComponentsModule]
})
export class StylistProfilePageModule {}
