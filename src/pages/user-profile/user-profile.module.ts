import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import { SettingsPageModule } from '../settings/settings.module';

@NgModule({
  declarations: [UserProfilePage],
  imports: [IonicPageModule.forChild(UserProfilePage), SettingsPageModule]
})
export class UserProfilePageModule {}
