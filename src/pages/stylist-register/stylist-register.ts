import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { StorageProvider } from '../../providers/storage/storage';

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
  public pageSubheader = 'Enter details for your Salon or business here';
  public stylistNameLabel = 'Stylist Name';
  public bioLabel = 'Write a few details here about your salon';
  public phoneNumberLabel = 'Telephone Number';
  public mobileLabel = 'Are you a mobile stylist?';
  public mobileRangeLabel = 'How far will you travel from your base?';
  public mobileRangePlaceholder = 'Enter in miles';
  public loadImagesLabel = 'Upload gallery images now?';
  public stylistRegForm: any;
  public showMobileRange: boolean;
  private coords: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public storage: StorageProvider
  ) {
    this.stylistRegForm = formBuilder.group({
      phoneNumber: ['', Validators.required],
      stylistName: ['', Validators.required],
      bio: [''],
      mobile: [false, Validators.required],
      mobileRange: [''],
      loadImages: [false, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistRegisterPage');
    this.stylistRegForm.get('mobile').valueChanges.subscribe(val => {
      console.log(val);
      this.showMobileRange = val;
    });

    this.storage
      .getStorage('geolocation')
      .subscribe(res => (this.coords = res));
    // console.log(this.showMobileRange);
  }

  goToHome() {
    this.navCtrl.push('TabsPage');
  }

  completeStylistReg() {
    console.log(this.stylistRegForm.value);
  }
}
