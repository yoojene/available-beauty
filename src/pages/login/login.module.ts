import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Store } from '@ngrx/store';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AngularFireAuthModule
  ],
  exports: [LoginPage],
  providers: [AuthProvider]
})
export class LoginPageModule {}
