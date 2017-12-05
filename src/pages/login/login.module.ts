import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Store } from '@ngrx/store';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SocialLoginModule } from 'angular4-social-login';
import { SOCIAL_LOGIN_CONFIG_VALUES } from '../../config/social.login.config';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { GooglePlus } from '@ionic-native/google-plus';


@NgModule({
  declarations: [LoginPage],
  imports: [
    IonicPageModule.forChild(LoginPage),
    SocialLoginModule.initialize(SOCIAL_LOGIN_CONFIG_VALUES),
    AngularFireAuthModule
  ],
  exports: [LoginPage],
  providers: [AuthProvider, GooglePlus, TwitterConnect]
})
export class LoginPageModule {}
