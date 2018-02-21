import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import { SettingsPageModule } from '../settings/settings.module';
import { EditUserProfilePageModule } from '../edit-user-profile/edit-user-profile.module';

@NgModule({
  declarations: [UserProfilePage],
  imports: [
    IonicPageModule.forChild(UserProfilePage),
    SettingsPageModule,
    EditUserProfilePageModule,
  ],
})
export class UserProfilePageModule {}
