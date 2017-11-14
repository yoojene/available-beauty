import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Store } from '@ngrx/store';
import { AuthService } from '../../providers/auth/auth.provider';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [LoginPage],
  providers: [AuthService]
})
export class LoginPageModule {}
