import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the StylistRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stylist-register',
  templateUrl: 'stylist-register.html'
})
export class StylistRegisterPage {
  public stylistNameLabel = 'Stylist Name';
  public bioLabel = 'Write a few details here about your salon';
  public mobileLabel = 'Are you a mobile stylist?';
  public mobileRangeLabel = 'How far will you travel from your base?';
  public loadImagesLabel = 'Upload gallery images now?';
  public stylistRegForm: any;
  public showMobileRange: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.stylistRegForm = formBuilder.group({
      // phoneNumber: ['', Validators.required],
      stylistName: ['', Validators.required],
      bio: [''],
      mobile: [false, Validators.required],
      mobileRange: [''],
      loadImages: [false, Validators.required]
      // galleryImages: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistRegisterPage');
    this.stylistRegForm.get('mobile').valueChanges.subscribe(val => {
      console.log(val);
      this.showMobileRange = val;
    });
    // console.log(this.showMobileRange);
  }

  goToHome() {
    this.navCtrl.push('TabsPage');
  }

  completeStylistReg() {
    console.log('Stylist reged!');
  }
}
