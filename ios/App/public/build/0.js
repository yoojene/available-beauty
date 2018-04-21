webpackJsonp([0],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylistRegisterPageModule", function() { return StylistRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylist_register__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { NativeGeocoder } from '@ionic-native/native-geocoder';
var StylistRegisterPageModule = /** @class */ (function () {
    function StylistRegisterPageModule() {
    }
    StylistRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stylist_register__["a" /* StylistRegisterPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stylist_register__["a" /* StylistRegisterPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]]
            // providers: [NativeGeocoder]
        })
    ], StylistRegisterPageModule);
    return StylistRegisterPageModule;
}());

//# sourceMappingURL=stylist-register.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_phone_number_validators__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_location_location__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_photo_photo__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeLast__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeLast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeLast__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the StylistRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StylistRegisterPage = /** @class */ (function () {
    function StylistRegisterPage(navCtrl, plt, navParams, formBuilder, storage, stylist, location, camera, actionSheetCtrl, photo, afdb) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.stylist = stylist;
        this.location = location;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photo = photo;
        this.afdb = afdb;
        this.pageSubheader = 'OK, now enter some details to set up your profile..';
        this.stylistNameLabel = 'Stylist Name';
        this.stylistHeaderLabel = 'Enter a Salon or Stylist name';
        this.bioLabel = 'A short description of your business and what you offer';
        this.bioPlaceholder = 'Write a few details here';
        this.phoneNumberLabel = 'Telephone Number';
        this.locationLabel = 'Where are you located?';
        this.useMyCurrentLocationLabel = 'Use My Current';
        this.enterLocationLabel = 'Enter your location';
        this.findAddressLabel = 'Find Address';
        this.addressLine1Label = 'Address Line 1';
        this.addressLine2Label = 'Address Line 2';
        this.addressTownCityLabel = 'Town / City';
        this.addressCountyLabel = 'County';
        this.addressPostcodeLabel = 'Post Code';
        this.mobileLabel = 'Are you a mobile stylist?';
        this.mobileRangeLabel = 'How far will you travel from your base?';
        this.mobileRangePlaceholder = 'Enter in miles';
        this.loadImagesLabel = 'Upload gallery images now?';
        this.orLabel = 'Or';
        this.nextButtonText = 'Next';
        this.yesButtonText = 'Yes';
        this.noButtonText = 'No';
        this.choosePhotoButtonText = 'Choose Photo';
        this.useCameraButtonText = 'Take Photo';
        this.finishButtonText = 'Finish';
        this.loadProgress = 0;
        this.downloadUrls = [];
        this.activeSlideIdx = 0;
        this.stylistRegForm = formBuilder.group({
            phoneNumber: [
                '',
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_phone_number_validators__["a" /* PhoneNumberValidator */].isPhoneNumber],
            ],
            stylistName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            isMyLocation: [true, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            locationLookup: [''],
            baseLocation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            addressLine1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            addressLine2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            addressTownCity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            addressCounty: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            addressPostcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            bio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            mobile: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            mobileRange: [''],
            loadImages: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    StylistRegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StylistRegisterPage');
        this.slides.lockSwipeToNext(true);
        this.slides.lockSwipeToPrev(true);
        this.showAddressForm = false;
        this.stylistRegForm.get('mobile').valueChanges.subscribe(function (val) {
            _this.showMobileRange = val;
        });
        this.stylistRegForm.get('loadImages').valueChanges.subscribe(function (val) {
            if (val) {
                console.log(val);
                _this.showImageActionSheet();
            }
        });
        this.storage.getStorage('geolocation').subscribe(function (res) {
            _this.coords = res;
        });
        this.stylistKey = this.afdb.list('stylistProfile');
        this.stylistKey
            .snapshotChanges()
            .subscribe(function (action) {
            console.log(action.type);
            console.log(action.key);
            console.log(action.payload.val());
        });
    };
    /**
     * Use current coordinates to lookup address and populate form
     *
     * @memberof StylistRegisterPage
     */
    StylistRegisterPage.prototype.useCurrentAddress = function () {
        var _this = this;
        console.log('using current address!');
        console.log(this.plt.platforms());
        if (this.plt.is('cordova')) {
            if (this.showAddressForm) {
                this.showAddressForm = false;
            }
            else {
                this.location
                    .getAddressFromCoordinates(this.coords[0], this.coords[1])
                    .then(function (result) {
                    _this.stylistRegForm.controls['addressLine1'].setValue(result.subThoroughfare);
                    _this.stylistRegForm.controls['addressLine2'].setValue(result.thoroughfare);
                    _this.stylistRegForm.controls['addressTownCity'].setValue(result.locality);
                    _this.stylistRegForm.controls['addressCounty'].setValue(result.subAdministrativeArea);
                    _this.stylistRegForm.controls['addressPostcode'].setValue(result.postalCode);
                    _this.stylistRegForm.controls['baseLocation'].setValue([
                        _this.coords[0],
                        _this.coords[1],
                    ]);
                    _this.showAddressForm = true;
                })
                    .catch(function (error) { return console.error(error); });
            }
        }
        else {
            // Do it for mobile web
        }
    };
    /**
     * Use address string to lookup coordinates and populate form.
     *
     * @memberof StylistRegisterPage
     */
    StylistRegisterPage.prototype.findAddress = function () {
        var _this = this;
        console.log('finding address');
        console.log(this.stylistRegForm.get('baseLocation').value);
        if (this.plt.is('cordova')) {
            if (this.showAddressForm) {
                this.showAddressForm = false;
            }
            else {
                this.location
                    .getCoordinatesFromAddress(this.stylistRegForm.get('locationLookup').value)
                    .then(function (coords) {
                    _this.location
                        .getAddressFromCoordinates(coords.latitude, coords.longitude)
                        .then(function (result) {
                        _this.stylistRegForm.controls['addressLine1'].setValue(result.subThoroughfare);
                        _this.stylistRegForm.controls['addressLine2'].setValue(result.thoroughfare);
                        _this.stylistRegForm.controls['addressTownCity'].setValue(result.locality);
                        _this.stylistRegForm.controls['addressCounty'].setValue(result.subAdministrativeArea);
                        _this.stylistRegForm.controls['addressPostcode'].setValue(result.postalCode);
                        _this.stylistRegForm.controls['baseLocation'].setValue([
                            coords.latitude,
                            coords.longitude,
                        ]);
                        _this.showAddressForm = true;
                    });
                })
                    .catch(function (error) { return console.error(error); });
            }
        }
        else {
            // Do it for mobileweb
        }
    };
    /**
     * Submit stylist
     *
     * @memberof StylistRegisterPage
     */
    StylistRegisterPage.prototype.onSubmitStylistRegForm = function () {
        var _this = this;
        console.log(this.stylistRegForm.value);
        this.stylist.addStylistProfile(this.stylistRegForm.value).then(function (res) {
            console.log('Registered stylist!', res);
            // this.stylist
            //   .updateStylistProfile('galleryImages', this.downloadUrls)
            //   .then(res => {
            console.log('updated image refs');
            _this.storage.setStorage('stylistRegistered', true);
            _this.navCtrl.push('TabsPage', { isStylist: true });
            // });
        });
    };
    /**
     * Camera / Library action sheet
     *
     * @memberof StylistRegisterPage
     */
    StylistRegisterPage.prototype.showImageActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.photo.getLibraryPictures().then(function (res) {
                            var photos = res;
                            photos.forEach(function (el) {
                                _this.photo
                                    .getBase64Data(el.photoFullPath, el.path)
                                    .then(function (baseress) {
                                    console.log(baseress);
                                    _this.photo.pushPhotoToStorage(baseress).then(function (stores) {
                                        console.log(stores[0]);
                                        _this.monitorUploadProgress(stores[0]);
                                    });
                                });
                            });
                        });
                    },
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.photo
                            .takePhoto(_this.camera.PictureSourceType.CAMERA)
                            .then(function (res) {
                            console.log(res);
                            _this.photo.getBase64Data(res).then(function (baseres) {
                                _this.photo.pushPhotoToStorage(baseres).then(function (stores) {
                                    console.log(stores[0]);
                                    _this.monitorUploadProgress(stores[0]);
                                });
                            });
                        });
                    },
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
            ],
        });
        actionSheet.present();
    };
    StylistRegisterPage.prototype.monitorUploadProgress = function (tasks) {
        var _this = this;
        console.log('monitorUploadProgress');
        tasks.forEach(function (task) {
            console.log(task);
            task.on('state_changed', function (snapshot) {
                _this.loadProgress = (snapshot.bytesTransferred /
                    snapshot.totalBytes *
                    100).toFixed(2);
                // this.loadProgress.push(prog);
                // console.log(this.loadProgress);
                console.log('Upload is ' + _this.loadProgress + '% done');
                switch (snapshot.state) {
                    case __WEBPACK_IMPORTED_MODULE_9_firebase__["storage"].TaskState.PAUSED:// or 'paused'
                        console.log('Upload is paused');
                        break;
                    case __WEBPACK_IMPORTED_MODULE_9_firebase__["storage"].TaskState.RUNNING:// or 'running'
                        console.log('Upload is running');
                        break;
                }
                // return progress;
            }, function (err) {
                console.error(err);
            }, function () {
                console.log('success!');
                // Need the URLs for RTDB update
                _this.downloadUrls.push(task.snapshot.downloadURL);
            });
        });
    };
    StylistRegisterPage.prototype.goBack = function () {
        this.navCtrl.push('LoginPage');
    };
    // Slides
    StylistRegisterPage.prototype.next = function () {
        this.slides.lockSwipeToNext(false);
        this.slides.slideNext();
        this.slides.lockSwipeToNext(true);
    };
    StylistRegisterPage.prototype.back = function () {
        this.slides.lockSwipeToPrev(false);
        this.slides.slidePrev();
        this.slides.lockSwipeToPrev(true);
    };
    StylistRegisterPage.prototype.onSlideChange = function (e) {
        // console.log(e);
        console.log(this.slides.getActiveIndex());
        this.activeSlideIdx = this.slides.getActiveIndex();
    };
    StylistRegisterPage.prototype.setMobile = function (value) {
        this.stylistRegForm.controls['mobile'].setValue(value);
        if (!value) {
            this.next();
        }
    };
    StylistRegisterPage.prototype.takePhoto = function () {
        var _this = this;
        this.photo.takePhoto(this.camera.PictureSourceType.CAMERA).then(function (res) {
            console.log(res);
            _this.photo.getBase64Data(res).then(function (baseres) {
                _this.photo.pushPhotoToStorage(baseres).then(function (stores) {
                    console.log(stores[0]);
                    _this.monitorUploadProgress(stores[0]);
                });
            });
        });
    };
    StylistRegisterPage.prototype.selectPhoto = function () {
        var _this = this;
        this.photo.getLibraryPictures().then(function (res) {
            var photos = res;
            photos.forEach(function (el) {
                _this.photo.getBase64Data(el.photoFullPath, el.path).then(function (baseress) {
                    console.log(baseress);
                    _this.photo.pushPhotoToStorage(baseress).then(function (stores) {
                        console.log(stores[0]);
                        // TODO: this looks to be the place to update RTDB
                        _this.monitorUploadProgress(stores[0]);
                    });
                });
            });
        });
    };
    StylistRegisterPage.prototype.checkDisabled = function () {
        var required = false;
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
            case 4:// Location
                break;
            case 5:// Mobile Stylist
                break;
            case 6:// Gallery Images
                break;
        }
        return required;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], StylistRegisterPage.prototype, "slides", void 0);
    StylistRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stylist-register',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-register/stylist-register.html"*/'<!--\n  Generated template for the StylistRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n      <ion-buttons start *ngIf=!slides.isBeginning()>\n        <button ion-button clear color="aubergine" (click)="back()"> Back</button>\n      </ion-buttons>\n      <ion-title>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="stylistRegForm" (submit)="onSubmitStylistRegForm()">\n  <ion-slides (ionSlideDidChange)="onSlideChange($event)">\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{pageSubheader}} </h3>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{stylistHeaderLabel}} </h3>\n      <ion-item>\n        <ion-input formControlName="stylistName" type="text" placeholder="{{stylistNameLabel}}">\n        </ion-input>\n      </ion-item>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{bioLabel}} </h3>\n      <ion-textarea formControlName="bio" type="text" placeholder="{{bioPlaceholder}}">\n      </ion-textarea>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{phoneNumberLabel}} </h3>\n      <ion-label>\n        <ion-icon name="call"></ion-icon>\n      </ion-label>\n      <ion-input formControlName="phoneNumber" type="text" placeholder="{{phoneNumberLabel}}">\n      </ion-input>\n      <!-- <div *ngIf="stylistRegForm.get(\'phoneNumber\').hasError(\'invalidPhone\')"> Invalid phone number</div> -->\n    </ion-slide>\n    <ion-slide  class="page-stylist-register--stylist-reg-slide">\n       <h3> {{locationLabel}}</h3>\n      <button text-center ion-item icon-start detail-none (click)="useCurrentAddress()" type="button">\n        <ion-icon class="page-stylist-register--locate" name="locate"></ion-icon> {{useMyCurrentLocationLabel}}\n      </button>\n      <div text-center> {{orLabel}} </div>\n      <ion-item>\n        <ion-label text-center floating>{{enterLocationLabel}}</ion-label>\n        <ion-input formControlName="locationLookup" type="text">\n        </ion-input>\n        <button ion-button icon-only small item-end type="button" (click)="findAddress()" color="aubergine">\n          <ion-icon name="search">\n          </ion-icon>\n          </button>\n      </ion-item>\n      <div *ngIf="showAddressForm">\n        <ion-item>\n          <ion-label floating>{{addressLine1Label}}</ion-label>\n          <ion-input formControlName="addressLine1" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressLine2Label}}</ion-label>\n          <ion-input formControlName="addressLine2" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressTownCityLabel}}</ion-label>\n          <ion-input formControlName="addressTownCity" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressCountyLabel}}</ion-label>\n          <ion-input formControlName="addressCounty" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressPostcodeLabel}}</ion-label>\n          <ion-input formControlName="addressPostcode" type="text">\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h2>{{mobileLabel}}</h2>\n        <ion-buttons>\n          <button round ion-button outline type="button" (click)="setMobile(true)" [class.activated]="stylistRegForm.get(\'mobile\').value === true" color="aubergine">\n            {{yesButtonText}}\n          </button>\n          <button round ion-button outline type="button"(click)="setMobile(false)" color="aubergine">\n            {{noButtonText}}\n          </button>\n        </ion-buttons>\n        <br>\n        <div *ngIf="showMobileRange">\n          <h5> {{mobileRangeLabel}}</h5>\n          <ion-item>\n            <ion-input formControlName="mobileRange" type="number" placeholder="{{mobileRangePlaceholder}}">\n            </ion-input>\n          </ion-item>\n        </div>\n\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/390.jpg">\n      <!-- <ion-item>\n        <ion-label>{{loadImagesLabel}}</ion-label>\n        <ion-toggle formControlName="loadImages">\n        </ion-toggle>\n\n      </ion-item> -->\n      <h2>{{loadImagesLabel}}</h2>\n\n      <button block round ion-button outline type="button" (click)="selectPhoto()" color="aubergine">\n        {{choosePhotoButtonText}}\n      </button>\n      <button block round ion-button outline type="button" (click)="takePhoto()" color="aubergine">\n        {{useCameraButtonText}}\n      </button>\n      <progress-bar *ngIf="stylistRegForm.get(\'loadImages\').value === true && loadProgress < 100" [progress]="loadProgress">\n      </progress-bar>\n\n    </ion-slide>\n  </ion-slides>\n\n  <button *ngIf="activeSlideIdx === 6" ion-button block round color="aubergine">\n     {{finishButtonText}}\n  </button>\n</form>\n\n  <!-- Sign up your Salon or business here -->\n  <!-- <form\n  [formGroup]="stylistRegForm"\n  (submit)="onSubmitStylistRegForm()">\n\n  <div>{{pageSubheader}}</div>\n\n  <ion-item>\n    <ion-label floating>{{stylistNameLabel}}</ion-label>\n    <ion-input formControlName="stylistName" type="text">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>{{bioLabel}}</ion-label>\n    <ion-textarea formControlName="bio" type="text">\n    </ion-textarea>\n  </ion-item>\n <ion-item icon-start>\n    <ion-label> <ion-icon name="call"></ion-icon></ion-label>\n    <ion-input formControlName="phoneNumber" type="number" placeholder="{{phoneNumberLabel}}">\n    </ion-input>\n  </ion-item>\n     {{locationLabel}}\n  <button text-center ion-item icon-start detail-none (click)="useCurrentAddress()" type="button">\n    <ion-icon name="locate"></ion-icon> {{useMyCurrentLocationLabel}}\n  </button>\n  <div text-center> {{orLabel}} </div>\n  <ion-item>\n    <ion-label text-center floating>{{enterLocationLabel}}</ion-label>\n      <ion-input formControlName="locationLookup" type="text">\n      </ion-input>\n      <button ion-button item-end type="button" (click)="findAddress()"> {{findAddressLabel}}</button>\n  </ion-item>\n\n  <div *ngIf="showAddressForm">\n      <ion-item>\n        <ion-label floating>{{addressLine1Label}}</ion-label>\n        <ion-input formControlName="addressLine1" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressLine2Label}}</ion-label>\n        <ion-input formControlName="addressLine2" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressTownCityLabel}}</ion-label>\n        <ion-input formControlName="addressTownCity" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressCountyLabel}}</ion-label>\n        <ion-input formControlName="addressCounty" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressPostcodeLabel}}</ion-label>\n        <ion-input formControlName="addressPostcode" type="text">\n        </ion-input>\n      </ion-item>\n  </div>\n\n\n <ion-item>\n    <ion-label>{{mobileLabel}}</ion-label>\n    <ion-toggle item-end formControlName="mobile">\n    </ion-toggle>\n  </ion-item>\n  <ion-item *ngIf="showMobileRange">\n    <ion-label stacked>{{mobileRangeLabel}}</ion-label>\n    <ion-input formControlName="mobileRange" type="number" placeholder="{{mobileRangePlaceholder}}">\n    </ion-input>\n  </ion-item>\n<ion-item>\n  <ion-label>{{loadImagesLabel}}</ion-label>\n  <ion-toggle formControlName="loadImages">\n  </ion-toggle>\n</ion-item>\n  <progress-bar *ngIf="stylistRegForm.get(\'loadImages\').value === true && loadProgress < 100" [progress]="loadProgress">\n  </progress-bar>\n\n<button\nion-button\nblock\ncolor="tonal">\nRegister\n</button>\n\n  </form> -->\n\n  <!-- <button ion-button (click)="goBack()">\n    Go back\n  </button> -->\n\n  <button *ngIf="activeSlideIdx !== 6" block round ion-button (click)="next()" color="aubergine" [disabled]="checkDisabled()">\n   {{nextButtonText}}\n  </button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-register/stylist-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_stylist_stylist__["a" /* StylistProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_photo_photo__["a" /* PhotoProvider */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], StylistRegisterPage);
    return StylistRegisterPage;
}());

//# sourceMappingURL=stylist-register.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberValidator; });
var PhoneNumberValidator = /** @class */ (function () {
    function PhoneNumberValidator() {
    }
    PhoneNumberValidator.isPhoneNumber = function (control) {
        var regexp = /^(?:\W*\d){11}\W*$/; // 11 digits no spaces
        var valid = regexp.test(control.value);
        console.log(valid);
        return valid ? null : { invalidPhone: true };
    };
    return PhoneNumberValidator;
}());

// export const isPhoneNumber = (country: string): ValidatorFn => {
//   return (control: AbstractControl): { [key: string]: boolean } => {
//     console.log(control);
//     console.log(country);
//     if (Validators.required(control)) return null;
//     let v: string = control.value;
//     let parsedVal: any = parse(v, country as CountryCode);
//     console.log(v);
//     console.log(parsedVal);
//     return isValidNumber(parsedVal) ? null : { phone: true };
//   };
// };
//# sourceMappingURL=phone-number.validators.js.map

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var takeLast_1 = __webpack_require__(741);
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(15);
var ArgumentOutOfRangeError_1 = __webpack_require__(742);
var EmptyObservable_1 = __webpack_require__(108);
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeLastOperator(count));
    }
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.ring = new Array();
        this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ })

});
//# sourceMappingURL=0.js.map