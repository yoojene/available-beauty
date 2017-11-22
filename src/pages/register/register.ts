import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { UserProvider } from '../../providers/user/user';
import { LocationProvider } from '../../providers/location/location';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  public registerForm: any;
  private coords: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public user: UserProvider,
    public location: LocationProvider
  ) {
    this.registerForm = formBuilder.group({
      name: ["", Validators.required],
      emailAddress: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
         this.location.getGeoLocation()
          .then(res => this.coords = res);
          // .subscribe(res => {
          //   this.coords = res
          // });
          console.log(this.coords);
  }

  doRegister() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      console.log("registered!");

      // let location = this.location.getGeoLocation();
      console.log(this.coords);
      // let user = Object.assign({}, this.registerForm.value, {"homeLocation" : this.coords})
      let user = this.registerForm.value;

      console.log(this.registerForm.value);
      console.log(user);

      delete user.password;

      user.homeLocation = this.coords
       console.log(user);


      this.user.addUser(user)
        .subscribe(res => console.log(res),
         err => console.error(err));
    }
  }
}
