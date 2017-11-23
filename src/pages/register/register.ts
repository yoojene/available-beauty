import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from "@ngrx/store";
import { AppState } from "../../model/app.state";

import { UserProvider } from '../../providers/user/user';
import { LocationProvider } from '../../providers/location/location';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterAction, RegisterErrorAction } from '../../model/auth/auth.actions';

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
    public location: LocationProvider,
    private store: Store<AppState>
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
        console.log(this.coords);
  }

  doRegister() {

    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      console.log("registered!");

      console.log(this.coords);

      let user = this.registerForm.value;



      user.homeLocation = this.coords
      console.log(user);
      console.log(JSON.stringify(user));

      // this.store.dispatch(new RegisterAction(user));
      // TODO Needs more work

      // For now call user service and API
      this.user.addUser(user)
      .subscribe(res => {
          console.log(res);
          // success - move to HomePage
          this.navCtrl.push('HomePage');
        },
        (err: HttpErrorResponse) => {
           console.error(err);
           // Throw some dialog or error text
         }
        );
    }else{
      // Error!
      this.store.dispatch(new RegisterErrorAction(this.registerForm.value));
      // Throw some dialog or error text
    }
  }
}
