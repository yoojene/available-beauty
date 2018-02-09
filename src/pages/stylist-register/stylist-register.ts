import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { StorageProvider } from '../../providers/storage/storage';
import { StylistProvider } from '../../providers/stylist/stylist';

import { PhoneNumberValidator } from '../../validators/phone-number.validators';

import {
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult
} from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';

import { LocationProvider } from '../../providers/location/location';
import { PhotoProvider } from '../../providers/photo/photo';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/takeLast';
import { Slides } from 'ionic-angular';

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
  @ViewChild(Slides) slides: Slides;
  public pageSubheader = 'OK, now enter some details to set up your profile..';
  public stylistNameLabel = 'Stylist Name';
  public stylistHeaderLabel = 'Enter a Salon or Stylist name';
  public bioLabel = 'A short description of your business and what you offer';
  public bioPlaceholder = 'Write a few details here';
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
  public nextButtonText = 'Next';
  public yesButtonText = 'Yes';
  public noButtonText = 'No';
  public choosePhotoButtonText = 'Choose Photo';
  public useCameraButtonText = 'Take Photo';
  public finishButtonText = 'Finish';
  public stylistRegForm: any;
  public showMobileRange: boolean;
  public showAddressForm: boolean;
  private coords: any;
  public loadProgress: any = 0;
  public downloadUrls: Array<any> = [];
  public stylistKey: any;

  public activeSlideIdx: any = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public storage: StorageProvider,
    public stylist: StylistProvider,
    public location: LocationProvider,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public photo: PhotoProvider,
    public afdb: AngularFireDatabase
  ) {
    this.stylistRegForm = formBuilder.group({
      phoneNumber: [
        '',
        [Validators.required, PhoneNumberValidator.isPhoneNumber]
      ],
      stylistName: ['', Validators.required],
      isMyLocation: [true, Validators.required],
      locationLookup: [''],
      baseLocation: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      addressTownCity: ['', Validators.required],
      addressCounty: ['', Validators.required],
      addressPostcode: ['', Validators.required],
      bio: ['', Validators.required],
      mobile: [false, Validators.required],
      mobileRange: [''],
      loadImages: [false, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistRegisterPage');

    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
    this.showAddressForm = false;
    this.stylistRegForm.get('mobile').valueChanges.subscribe(val => {
      this.showMobileRange = val;
    });

    this.stylistRegForm.get('loadImages').valueChanges.subscribe(val => {
      if (val) {
        console.log(val);
        this.showImageActionSheet();
      }
    });

    this.storage.getStorage('geolocation').subscribe(res => {
      this.coords = res;
    });

    this.stylistKey = this.afdb.list('stylistProfile');

    this.stylistKey
      // .last()
      .snapshotChanges()
      // .takeLast(10)
      .subscribe(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
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
      // this.stylist
      //   .updateStylistProfile('galleryImages', this.downloadUrls)
      //   .then(res => {
      console.log('updated image refs');
      this.storage.setStorage('stylistRegistered', true);
      this.navCtrl.push('TabsPage', { isStylist: true });
      // });
    });
  }
  /**
   * Camera / Library action sheet
   *
   * @memberof StylistRegisterPage
   */
  public showImageActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.photo.getLibraryPictures().then(res => {
              let photos: any = res;
              photos.forEach(el => {
                this.photo
                  .getBase64Data(el.photoFullPath, el.path)
                  .then(baseress => {
                    console.log(baseress);
                    this.photo.pushPhotoToStorage(baseress).then(stores => {
                      console.log(stores[0]);
                      this.monitorUploadProgress(stores[0]);
                    });
                  });
              });
            });
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.photo
              .takePhoto(this.camera.PictureSourceType.CAMERA)
              .then(res => {
                console.log(res);
                this.photo.getBase64Data(res).then(baseres => {
                  this.photo.pushPhotoToStorage(baseres).then(stores => {
                    console.log(stores[0]);
                    this.monitorUploadProgress(stores[0]);
                  });
                });
              });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public monitorUploadProgress(tasks) {
    console.log('monitorUploadProgress');

    tasks.forEach(task => {
      console.log(task);
      task.on(
        'state_changed',
        (snapshot: any) => {
          this.loadProgress = (
            snapshot.bytesTransferred /
            snapshot.totalBytes *
            100
          ).toFixed(2);
          // this.loadProgress.push(prog);
          // console.log(this.loadProgress);
          console.log('Upload is ' + this.loadProgress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
          // return progress;
        },
        err => {
          console.error(err);
        },
        () => {
          console.log('success!');
          // Need the URLs for RTDB update
          this.downloadUrls.push(task.snapshot.downloadURL);
        }
      );
    });
  }

  goBack() {
    this.navCtrl.push('LoginPage');
  }

  // Slides

  next() {
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext();
    this.slides.lockSwipeToNext(true);
  }

  back() {
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
    this.slides.lockSwipeToPrev(true);
  }

  onSlideChange(e) {
    // console.log(e);

    console.log(this.slides.getActiveIndex());

    this.activeSlideIdx = this.slides.getActiveIndex();
  }

  setMobile(value) {
    this.stylistRegForm.controls['mobile'].setValue(value);
  }

  takePhoto() {
    this.photo.takePhoto(this.camera.PictureSourceType.CAMERA).then(res => {
      console.log(res);
      this.photo.getBase64Data(res).then(baseres => {
        this.photo.pushPhotoToStorage(baseres).then(stores => {
          console.log(stores[0]);
          this.monitorUploadProgress(stores[0]);
        });
      });
    });
  }

  selectPhoto() {
    this.photo.getLibraryPictures().then(res => {
      let photos: any = res;
      photos.forEach(el => {
        this.photo.getBase64Data(el.photoFullPath, el.path).then(baseress => {
          console.log(baseress);
          this.photo.pushPhotoToStorage(baseress).then(stores => {
            console.log(stores[0]);
            this.monitorUploadProgress(stores[0]);
          });
        });
      });
    });
  }

  checkDisabled() {
    let required = false;

    switch (this.activeSlideIdx) {
      case 0:
        break;
      case 1:
        if (this.stylistRegForm.get('stylistName').errors) {
          required = this.stylistRegForm.get('stylistName').errors.required
            ? true
            : false;
        }
        break;
      case 2:
        if (this.stylistRegForm.get('bio').errors) {
          required = this.stylistRegForm.get('bio').errors.required
            ? true
            : false;
        }
        break;
      case 3:
        if (this.stylistRegForm.get('phoneNumber').errors) {
          required = this.stylistRegForm.get('phoneNumber').errors
            ? true
            : false;
        }
        break;
      case 4: // Location
        break;
      case 5: // Mobile Stylist
        break;
      case 6: // Gallery Images
        break;
    }

    return required;
  }
}
