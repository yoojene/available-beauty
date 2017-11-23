import {Injectable} from '@angular/core';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {App} from 'ionic-angular';

@Injectable()
export class AuthService {
  constructor(private app: App,
              private fb: Facebook) {}

  public doLogin(event) {
    console.log('native login success', event);

    // Call /login API
    // Return success / failure
    // Update store with success / failure

    this.app.getActiveNav().push('TabsPage');

    //  this.navCtrl.push('HomePage');


  }

  public doSocialLogin(event) {
    console.log('Facebook Login Success', event);

    this.fb
      .login(['email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into facebook ', res)
        this.app.getActiveNav().push('TabsPage');
      })
      .catch(e => console.error('Error! ', e));

    // Call facebook API
    // Return success / failure
    // Update store with success / failure


  }

}
