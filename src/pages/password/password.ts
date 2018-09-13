import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  public resetSent: boolean = false;
  public passwordForm: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public auth: AuthProvider
  ) {
    this.passwordForm = formBuilder.group({
      emailAddress: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  public doResetPassword() {
    console.log(this.passwordForm);

    console.log('resetting pw');
    const email = this.passwordForm.value.emailAddress;
    this.auth
      .doResetPassword(email)
      .then(() => {
        // TODO Show success message
        this.resetSent = true;
      })
      .catch(err => console.error(err));
  }
}
