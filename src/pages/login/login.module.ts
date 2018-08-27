import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { GooglePlus } from '@ionic-native/google-plus';

@NgModule({
  declarations: [LoginPage],
  imports: [IonicPageModule.forChild(LoginPage), AngularFireAuthModule],
  exports: [LoginPage],
  providers: [AuthProvider, GooglePlus, TwitterConnect],
})
export class LoginPageModule {}
