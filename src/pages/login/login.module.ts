import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Store } from '@ngrx/store';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angular4-social-login';


let config = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
  // },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('125684678101312')
  }
]);
@NgModule({
  declarations: [LoginPage],
  imports: [
    IonicPageModule.forChild(LoginPage),
    SocialLoginModule.initialize(config),
    AngularFireAuthModule
  ],
  exports: [LoginPage],
  providers: [AuthProvider]
})
export class LoginPageModule {}
