import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { StorageProvider } from '../../providers/storage/storage';
import { StylistProvider } from '../../providers/stylist/stylist';

import {
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult
} from '@ionic-native/native-geocoder';

import { LocationProvider } from '../../providers/location/location';

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
  public locationLabel = 'Where are you located?';
  public useMyCurrentLocationLabel = 'Use My Current';
  public enterLocationLabel = 'Enter your location';
  public findAddressLabel = 'Find Address';

  public addressLine1Label = 'Address Line 1';
  public addressLine2Label = 'Address Line 2';
  public addressTownCityLabel = 'Town / City';
  public addressCountyLabel = 'County';
  public addressPostcodeLabel = 'Post Code';

  public mobileLabel = 'Are you a mobile stylist?';
  public mobileRangeLabel = 'How far will you travel from your base?';
  public mobileRangePlaceholder = 'Enter in miles';
  public loadImagesLabel = 'Upload gallery images now?';
  public orLabel = 'Or';
  public stylistRegForm: any;
  public showMobileRange: boolean;
  public showAddressForm: boolean;
  private coords: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public storage: StorageProvider,
    public stylist: StylistProvider,
    public location: LocationProvider
  ) {
    this.stylistRegForm = formBuilder.group({
      phoneNumber: ['', Validators.required],
      stylistName: ['', Validators.required],
      isMyLocation: [true, Validators.required],
      locationLookup: [''],
      baseLocation: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      addressTownCity: ['', Validators.required],
      addressCounty: ['', Validators.required],
      addressPostcode: ['', Validators.required],
      bio: [''],
      mobile: [false, Validators.required],
      mobileRange: [''],
      loadImages: [false, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistRegisterPage');
    this.showAddressForm = false;
    this.stylistRegForm.get('mobile').valueChanges.subscribe(val => {
      this.showMobileRange = val;
    });

    this.storage.getStorage('geolocation').subscribe(res => {
      this.coords = res;
    });
  }
  /**
   * Use current coordinates to lookup address and populate form
   *
   * @memberof StylistRegisterPage
   */
  useCurrentAddress() {
    console.log('using current address!');
    if (this.showAddressForm) {
      this.showAddressForm = false;
    } else {
      this.location
        .getAddressFromCoordinates(this.coords[0], this.coords[1])
        .then((result: NativeGeocoderReverseResult) => {
          this.stylistRegForm.controls['addressLine1'].setValue(
            result.subThoroughfare
          );
          this.stylistRegForm.controls['addressLine2'].setValue(
            result.thoroughfare
          );
          this.stylistRegForm.controls['addressTownCity'].setValue(
            result.locality
          );
          this.stylistRegForm.controls['addressCounty'].setValue(
            result.subAdministrativeArea
          );
          this.stylistRegForm.controls['addressPostcode'].setValue(
            result.postalCode
          );

          this.stylistRegForm.controls['baseLocation'].setValue([
            this.coords[0],
            this.coords[1]
          ]);
          this.showAddressForm = true;
        })
        .catch((error: any) => console.error(error));
    }
  }
  /**
   * Use address string to lookup coordinates and populate form.
   *
   * @memberof StylistRegisterPage
   */
  findAddress() {
    console.log('finding address');
    console.log(this.stylistRegForm.get('baseLocation').value);
    if (this.showAddressForm) {
      this.showAddressForm = false;
    } else {
      this.location
        .getCoordinatesFromAddress(
          this.stylistRegForm.get('locationLookup').value
        )
        .then((coords: NativeGeocoderForwardResult) => {
          this.location
            .getAddressFromCoordinates(coords.latitude, coords.longitude)
            .then((result: NativeGeocoderReverseResult) => {
              this.stylistRegForm.controls['addressLine1'].setValue(
                result.subThoroughfare
              );
              this.stylistRegForm.controls['addressLine2'].setValue(
                result.thoroughfare
              );
              this.stylistRegForm.controls['addressTownCity'].setValue(
                result.locality
              );
              this.stylistRegForm.controls['addressCounty'].setValue(
                result.subAdministrativeArea
              );
              this.stylistRegForm.controls['addressPostcode'].setValue(
                result.postalCode
              );

              this.stylistRegForm.controls['baseLocation'].setValue([
                coords.latitude,
                coords.longitude
              ]);

              this.showAddressForm = true;
            });
        })
        .catch((error: any) => console.error(error));
    }
  }
  /**
   * Submit stylist
   *
   * @memberof StylistRegisterPage
   */
  onSubmitStylistRegForm() {
    console.log(this.stylistRegForm.value);

    this.stylist.addStylistProfile(this.stylistRegForm.value).then(res => {
      console.log('Registered stylist!', res);
      this.navCtrl.push('TabsPage');
    });
  }
}
