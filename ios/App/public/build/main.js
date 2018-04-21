webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_SUCCESS; });
/* unused harmony export LOGIN_ERROR */
/* unused harmony export LOGOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGOUT_SUCCESS; });
/* unused harmony export USER_NOT_VALIDATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REGISTER_ERROR; });
/* unused harmony export LoginAction */
/* unused harmony export LoginSuccessAction */
/* unused harmony export LoginErrorAction */
/* unused harmony export LogoutAction */
/* unused harmony export LogoutSuccessAction */
/* unused harmony export UserNotValidatedAction */
/* unused harmony export RegisterAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RegisterSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RegisterErrorAction; });
var LOGIN = '[Auth] Login';
var LOGIN_SUCCESS = '[Auth] Login Success';
var LOGIN_ERROR = '[Auth] Login Error';
var LOGOUT = '[Auth] Logout';
var LOGOUT_SUCCESS = '[Auth] Logout Success';
var USER_NOT_VALIDATED = '[Auth] User Not Validated';
var REGISTER = '[Auth] Register';
var REGISTER_SUCCESS = '[Auth] Register Success';
var REGISTER_ERROR = '[Auth] Register Error';
// Login
var LoginAction = /** @class */ (function () {
    function LoginAction(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LOGIN;
        console.info('LoginAction()', payload);
    }
    return LoginAction;
}());

var LoginSuccessAction = /** @class */ (function () {
    function LoginSuccessAction(payload) {
        this.payload = payload;
        this.type = LOGIN_SUCCESS;
        console.info("LoginSuccessAction()", payload);
    }
    return LoginSuccessAction;
}());

var LoginErrorAction = /** @class */ (function () {
    function LoginErrorAction(payload) {
        this.payload = payload;
        this.type = LOGIN_ERROR;
        console.info("LoginErrorAction()", payload);
    }
    return LoginErrorAction;
}());

// Logout
var LogoutAction = /** @class */ (function () {
    function LogoutAction(payload) {
        this.payload = payload;
        this.type = LOGOUT;
        console.info('LogoutAction()', payload);
    }
    return LogoutAction;
}());

var LogoutSuccessAction = /** @class */ (function () {
    function LogoutSuccessAction(payload) {
        this.payload = payload;
        this.type = LOGOUT_SUCCESS;
        console.info("LogoutSuccessAction()", payload);
    }
    return LogoutSuccessAction;
}());

var UserNotValidatedAction = /** @class */ (function () {
    function UserNotValidatedAction(payload) {
        this.payload = payload;
        this.type = USER_NOT_VALIDATED;
        console.error("UserNotValidatedAction()", payload);
    }
    return UserNotValidatedAction;
}());

// Register
var RegisterAction = /** @class */ (function () {
    function RegisterAction(payload) {
        this.payload = payload;
        this.type = REGISTER;
        console.info("RegisterAction()", payload);
    }
    return RegisterAction;
}());

var RegisterSuccessAction = /** @class */ (function () {
    function RegisterSuccessAction(payload) {
        this.payload = payload;
        this.type = REGISTER_SUCCESS;
        console.info("RegisterSuccessAction()", payload);
    }
    return RegisterSuccessAction;
}());

var RegisterErrorAction = /** @class */ (function () {
    function RegisterErrorAction(payload) {
        this.payload = payload;
        this.type = REGISTER_ERROR;
        console.info("RegisterErrorAction()", payload);
    }
    return RegisterErrorAction;
}());

//# sourceMappingURL=auth.actions.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationProvider = /** @class */ (function () {
    function LocationProvider(geolocation, storage, nativeGeocoder) {
        this.geolocation = geolocation;
        this.storage = storage;
        this.nativeGeocoder = nativeGeocoder;
        console.log('Hello LocationProvider Provider');
    }
    LocationProvider.prototype.watchGeoLocation = function () {
        var _this = this;
        return this.geolocation
            .watchPosition()
            .filter(function (p) { return p.coords !== undefined; })
            .subscribe(function (position) {
            console.log([position.coords.latitude, position.coords.longitude]);
            _this.storage.setStorage('geolocation', [
                position.coords.latitude,
                position.coords.longitude,
            ]);
            return [position.coords.latitude, position.coords.longitude];
        });
    };
    LocationProvider.prototype.getGeoLocation = function () {
        var _this = this;
        return this.geolocation
            .getCurrentPosition()
            .then(function (resp) {
            console.log([resp.coords.latitude, resp.coords.longitude]);
            _this.storage.setStorage('geolocation', [
                resp.coords.latitude,
                resp.coords.longitude,
            ]);
            return [resp.coords.latitude, resp.coords.longitude];
        })
            .catch(function (err) { return console.error('Error getting location', err); });
    };
    /**
     * Passes coordinates to Native Geocoder cordova plugin to get address
     *
     * @param {any} lat
     * @param {any} long
     * @returns
     * @memberof LocationProvider
     */
    LocationProvider.prototype.getAddressFromCoordinates = function (lat, long) {
        console.log('getAddressFromCoordinates');
        return this.nativeGeocoder
            .reverseGeocode(lat, long)
            .then(function (result) {
            console.log(JSON.stringify(result));
            return result;
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * Passes address to Native Geocoder cordova plugin to get coordinates
     *
     * @param {any} address
     * @returns
     * @memberof LocationProvider
     */
    LocationProvider.prototype.getCoordinatesFromAddress = function (address) {
        console.log('getCoordinatesFromAddress');
        return this.nativeGeocoder
            .forwardGeocode(address)
            .then(function (coordinates) {
            return coordinates;
        })
            .catch(function (error) { return console.error(error); });
    };
    LocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], LocationProvider);
    return LocationProvider;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var API_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('api.config');
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_module__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stylist_review_stylist_review_module__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_availability_book_availability_module__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { SearchPage } from '../search/search';


var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__stylist_review_stylist_review_module__["StylistReviewPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__book_availability_book_availability_module__["BookAvailabilityPageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_stylist_stylist__["a" /* StylistProvider */]],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stylist_profile_stylist_profile__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stylist_review_stylist_review__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_booking_booking__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_availability_book_availability__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, stylist, user, modalCtrl, utils, alertCtrl, booking) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.stylist = stylist;
        this.user = user;
        this.modalCtrl = modalCtrl;
        this.utils = utils;
        this.alertCtrl = alertCtrl;
        this.booking = booking;
        this.availabilityHeader = 'Availability';
        this.noAvailabilitiesText = 'No Availability';
        this.reviewsText = 'Reviews >';
        this.toggled = false;
        this.showMap = false;
        this.mapButton = false;
        this.itemExpandHeight = 400; // TODO: this needs to be dynamic based on device size
        this.uid = __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.uid;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getGeoLocation();
    };
    HomePage.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
        this.destroy$.next();
        this.destroy$.unsubscribe();
    };
    //-- Public
    HomePage.prototype.toggleMap = function () {
        if (!this.showMap) {
            this.showMap = true;
        }
        else {
            this.showMap = false;
        }
    };
    HomePage.prototype.showSearch = function (ev) {
        console.log(ev);
        this.getUsers();
        // let searchModal = this.modalCtrl.create(SearchPage);
        // searchModal.onDidDismiss(data => {
        //   console.log('dismissed ', data);
        // });
        // searchModal.present();
    };
    HomePage.prototype.openProfile = function (user) {
        console.log(user);
        console.log('opent da modal');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__stylist_profile_stylist_profile__["a" /* StylistProfilePage */], {
            user: user,
        });
        profileModal.onDidDismiss(function (data) {
            console.log('dismissed stylistProfileModal', data);
        });
        profileModal.present();
    };
    HomePage.prototype.openReviews = function (stylistId) {
        var reviewModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__stylist_review_stylist_review__["a" /* StylistReviewPage */], {
            stylistId: stylistId,
        });
        reviewModal.onDidDismiss(function (data) {
            console.log('dismissed stylistReviewModal', data);
        });
        reviewModal.present();
    };
    HomePage.prototype.expandCard = function (user) {
        var _this = this;
        this.users.map(function (listItem) {
            if (user == listItem) {
                listItem.expanded = !listItem.expanded;
                // console.log(user.key);
                _this.stylistUserId = user.key;
                _this.stylist$ = _this.stylist
                    .getStylist(_this.stylistUserId)
                    .snapshotChanges();
                _this.stylist$.subscribe(function (res) {
                    // this.stylistId = res[0].key;
                    _this.stylistAvail$ = _this.stylist
                        .getStylistAvailability(res[0].key)
                        .snapshotChanges();
                    _this.stylist
                        .getStylistReview(res[0].key)
                        .valueChanges()
                        .subscribe(function (res) { return (_this.stylistReviews = res.length); });
                    _this.stylistAvail$.takeUntil(_this.destroy$).subscribe(function (actions) {
                        var avails = _this.utils.generateFirebaseKeyedValues(actions);
                        _this.availabilities = avails.filter(function (res) { return res.booked === false; });
                        _this.availabilities.sort(function (a, b) {
                            return a.datetime - b.datetime;
                        });
                        _this.availabilities = _this.availabilities.filter(function (el) {
                            return el.datetime >= __WEBPACK_IMPORTED_MODULE_6_moment__().unix();
                        });
                        console.log('filtered availabilities rrrrr');
                        console.log(_this.availabilities);
                        _this.availabilities.forEach(function (el) {
                            // TODO group availabilities by day / month and display
                            return ((el.day = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](el.datetime).format('ddd Do')) &&
                                (el.month = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](el.datetime).format('MMM')) &&
                                (el.datetime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](el.datetime)
                                    .format('ddd Do MMM HH:mm')));
                        });
                    });
                });
            }
            else {
                listItem.expanded = false;
                _this.availabilities = null;
            }
            return listItem;
        });
    };
    HomePage.prototype.bookAvailability = function (avail) {
        console.log(avail);
        // Make pending booking
        this.booking
            .makePendingBooking(avail.key, this.uid)
            .then(function (res) { return console.log(res); });
        var bookingModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__book_availability_book_availability__["a" /* BookAvailabilityPage */], {
            avail: avail,
        });
        bookingModal.onDidDismiss(function (data) {
            console.log('dismissed bookAvailabilityModal', data);
        });
        bookingModal.present();
    };
    // let bookingAlert = this.alertCtrl.create({
    //   title: `Request Booking for ${avail.datetime}?`,
    //   message:
    //     'Do you want to request to book this slot?  <br> <br> Enter any details for the stylist below and they will contact you to confirm the booking',
    //   inputs: [
    //     {
    //       name: 'details',
    //       placeholder: 'Details',
    //       type: 'text'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Confirm',
    //       handler: () => {
    //         console.log('Confirm booking clicked');
    //         this.booking.makeBooking(avail.key); // TODO what should happen here MVP 1 are we actually booking
    //       }
    //     }
    //   ]
    // });
    // bookingAlert.present();
    // }
    HomePage.prototype.toggleFavourite = function () {
        if (!this.toggled) {
            this.toggled = true;
            return;
        }
        this.toggled = false;
    };
    //--- Private
    HomePage.prototype.getGeoLocation = function () {
        var _this = this;
        this.storage.getStorage('geolocation').subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.lat = res[0];
                _this.long = res[1];
                console.log(_this.lat);
                console.log(_this.long);
                _this.mapButton = true;
            }
        });
    };
    HomePage.prototype.getUsers = function () {
        var _this = this;
        this.user
            .getStylistUsers()
            .snapshotChanges()
            .subscribe(function (actions) {
            var values = _this.utils.generateFirebaseKeyedValues(actions);
            _this.users = _this.utils.addExpandedProperty(values);
            console.log(_this.users);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>\n      <!-- Available Beauty -->\n      <img src="assets/img/AB_logo_text.png">\n    </ion-title>\n\n  </ion-navbar>\n  <ion-searchbar (keyup.enter)="showSearch($event)"></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div class="search-item" (click)="showSearch()"> Search </div>\n  <br> -->\n    <ion-maps *ngIf="showMap" mapStyle="standard" lat="{{lat}}" lng="{{long}}" height="50%" >\n      <!--Custom HTML marker-->\n      <!-- lat="lat" lng="long" -->\n      <!-- <ion-marker lat="40.717317" lng="-73.995284" parentClass="heart" customHTML="<div class=\'outline\'></div>"></ion-marker> -->\n      <!-- <ion-marker lat="{{lat}}" lng="{{long}}" parentClass="heart" customHTML="<div class=\'outline\'></div>"></ion-marker> -->\n\n      <!--Custom icon marker-->\n      <!-- <ion-marker lat="40.718217" lng="-73.991434" title="Custom icon" iconUrl="http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png"></ion-marker> -->\n      <!-- <ion-marker lat="{{lat}}" lng="{long}}" title="Custom icon" iconUrl="http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png"></ion-marker> -->\n\n      <!--Normal marker-->\n      <!-- <ion-marker lat="40.718417" lng="-73.996734" label="Y" title="Normal Marker"></ion-marker> -->\n      <ion-marker lat="{{lat}}" lng="{{long}}" label="Y" title="Me"></ion-marker>\n      <div *ngFor="let stylist of stylists$ | async">\n        <ion-marker\n          lat="{{stylist.baseLocation[0]}}"\n          lng="{{stylist.baseLocation[1]}}"\n          label="{{stylist.name[0]}}"\n          title="{{stylist.name}}">\n        </ion-marker>\n        </div>\n    </ion-maps>\n    <br>\n    <div>\n      <ion-list>\n          <ion-card *ngFor="let user of users" >\n            <ion-card-content>\n              <ion-grid no-padding>\n                <ion-row>\n                  <ion-col>\n                      <ion-item no-padding no-border (click)="expandCard(user)">\n                        <ion-avatar item-start>\n                          <img src="{{user.avatarImage}}">\n                        </ion-avatar>\n                        {{user.name}}\n                      </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item class="page-home--stylist-profile" >\n                        <button *ngIf="user.expanded" ion-button item-end color="aubergine" (click)="openProfile(user)"> Stylist</button>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n              <expandable-item [expandHeight]="itemExpandHeight" [expanded]="user.expanded">\n                <br>\n                <div *ngIf="stylist$ | async; let stylists">\n                    <div *ngFor="let style of stylists" text-wrap #stylest>\n                      <ion-slides pager autoplay="3000" speed="500" loop>\n                        <ion-slide *ngFor="let img of style.payload.val().galleryImages" [ngStyle]="{\'background-image\': \'url(\' + img +\')\'}" class="page-home--slide-background">\n                        </ion-slide>\n                      </ion-slides>\n                      <div *ngIf="style.payload.val().stylistRating; let starRating;">\n                        <ion-item>\n                          <star-rating [rating]="starRating"></star-rating>\n                         <div (click)="openReviews(style.payload.key)">  {{stylistReviews}} {{reviewsText}} </div>\n                          <ion-icon item-end name="heart" [ngStyle]="{\'color\': toggled===true ? \'red\' : \'black\'}" (click)="toggleFavourite()"></ion-icon>\n                        </ion-item>\n                      </div>\n                    </div>\n                </div>\n                <ion-list-header no-padding>\n                  {{availabilityHeader}}\n                </ion-list-header>\n                <div *ngIf="availabilities && availabilities.length === 0; then no_avail else avail"></div>\n                <ng-template #no_avail>\n                  <h2>{{noAvailabilitiesText}}</h2>\n                </ng-template>\n                <ng-template #avail>\n                  <ion-scroll scrollX="true">\n                    <ion-col *ngFor="let avail of availabilities">\n                      <button ion-button outline small color="aubergine" (click)="bookAvailability(avail)">\n                        {{avail.datetime}}\n                      </button>\n                    </ion-col>\n                  </ion-scroll>\n                </ng-template>\n              </expandable-item>\n            </ion-card-content>\n          </ion-card>\n      </ion-list>\n    </div>\n    <ion-fab right bottom>\n      <button ion-fab [disabled]="!mapButton" (click)="toggleMap()" color="aubergine">\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stylist_stylist__["a" /* StylistProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_booking_booking__["a" /* BookingProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SearchProvider = /** @class */ (function () {
    function SearchProvider(http) {
        this.http = http;
        this.searches$ = this.http.get('http://localhost:3004/search');
        console.log('Hello SearchProvider Provider');
    }
    SearchProvider.prototype.updateSearch = function (term) {
        console.log(term);
        this.http
            .post('http://localhost:3004/search', term)
            .subscribe(function (res) { return console.log(res); });
    };
    SearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchProvider);
    return SearchProvider;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/availability/availability.module": [
		240
	],
	"../pages/book-availability/book-availability.module": [
		416
	],
	"../pages/bookings/bookings.module": [
		424
	],
	"../pages/edit-user-profile/edit-user-profile.module": [
		445
	],
	"../pages/home/home.module": [
		161
	],
	"../pages/landing/landing.module": [
		449
	],
	"../pages/login-background-slider/login-background-slider.module": [
		450
	],
	"../pages/login/login.module": [
		451
	],
	"../pages/looking/looking.module": [
		731,
		3
	],
	"../pages/mynewpage/mynewpage.module": [
		732,
		2
	],
	"../pages/password/password.module": [
		733,
		1
	],
	"../pages/register/register.module": [
		457
	],
	"../pages/search/search.module": [
		443
	],
	"../pages/settings/settings.module": [
		459
	],
	"../pages/stylist-profile/stylist-profile.module": [
		461
	],
	"../pages/stylist-register/stylist-register.module": [
		734,
		0
	],
	"../pages/stylist-review/stylist-review.module": [
		444
	],
	"../pages/tabs/tabs.module": [
		464
	],
	"../pages/user-profile/user-profile.module": [
		466
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityPageModule", function() { return AvailabilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__availability__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_availability_availability__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvailabilityPageModule = /** @class */ (function () {
    function AvailabilityPageModule() {
    }
    AvailabilityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__availability__["a" /* AvailabilityPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__availability__["a" /* AvailabilityPage */])],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_availability_availability__["a" /* AvailabilityProvider */]]
        })
    ], AvailabilityPageModule);
    return AvailabilityPageModule;
}());

//# sourceMappingURL=availability.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_availability_availability__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(81);
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
 * Generated class for the AvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvailabilityPage = /** @class */ (function () {
    //  = [
    //   { unit: 'day', date: moment().format(this.dayOfWeekFmt) },
    //   {
    //     unit: 'day',
    //     date: moment()
    //       .add(1, 'day')
    //       .format(this.dayOfWeekFmt)
    //   }
    // ];
    function AvailabilityPage(navCtrl, navParams, avail, stylist, _afdb, _utils, _loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avail = avail;
        this.stylist = stylist;
        this._afdb = _afdb;
        this._utils = _utils;
        this._loading = _loading;
        this.availabilitySubHeader = 'Mark the times you are available';
        this.dayOfWeekFmt = 'ddd Do MMM';
        this.availTimeFmt = 'HH:mm';
        this.morningStart = __WEBPACK_IMPORTED_MODULE_2_moment__()
            .hour(8)
            .minutes(30)
            .seconds(0);
    }
    AvailabilityPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter');
        this.entryLoader = this._loading.create();
        this.entryLoader.present().then(function () {
            _this.stylist
                .getStylist(__WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid)
                .snapshotChanges()
                .subscribe(function (res) {
                console.log('cmon');
                _this.stylistId = res[0].key;
                console.log(_this.stylistId);
                _this.generateAvailabilitySchedule();
            });
        });
        this.doCheckShowNext();
    };
    AvailabilityPage.prototype.ionViewDidLoad = function () { };
    /**
     * Set up length of schedule on availability page and slot length/duration
     * Default is 1 day for 7 days ahead and 18 slots of 30m per day
     * @private
     * @memberof AvailabilityPage
     */
    AvailabilityPage.prototype.generateAvailabilitySchedule = function () {
        var _this = this;
        // Generate the schedule
        this.schedule = this.generateSchedule(__WEBPACK_IMPORTED_MODULE_2_moment__(), this.dayOfWeekFmt, 1, 'day', 7);
        // Generate the slots per schedule
        for (var y = 0; y < this.schedule.length; y++) {
            var slots = [];
            slots.push(this.avail.generateAvailabilitySlots(__WEBPACK_IMPORTED_MODULE_2_moment__(this.schedule[y].date, this.dayOfWeekFmt)
                .hour(8)
                .minutes(30)
                .seconds(0), this.availTimeFmt, 30, 'm', 6, 'morning'));
            slots.push(this.avail.generateAvailabilitySlots(__WEBPACK_IMPORTED_MODULE_2_moment__(this.schedule[y].date, this.dayOfWeekFmt)
                .hour(12)
                .minutes(0)
                .seconds(0), this.availTimeFmt, 30, 'm', 6, 'afternoon'));
            slots.push(this.avail.generateAvailabilitySlots(__WEBPACK_IMPORTED_MODULE_2_moment__(this.schedule[y].date, this.dayOfWeekFmt)
                .hour(16)
                .minutes(30)
                .seconds(0), this.availTimeFmt, 30, 'm', 6, 'evening'));
            // Collapse into single array
            var merged = [].concat.apply([], slots);
            this.schedule[y].slots = merged;
        }
        // This is a bit naff, ideally want to seed schedule from what's already taken, and not the otherway around
        var stylistId = this.stylistId;
        console.log(stylistId);
        this.avail
            .getBookedAvailability(stylistId)
            .snapshotChanges()
            .subscribe(function (res) {
            var results = _this._utils.generateFirebaseKeyedValues(res);
            results.forEach(function (res) {
                _this.schedule.forEach(function (sched) {
                    sched.slots.forEach(function (el) {
                        if (el.epoch === res.datetime) {
                            el.disabled = true;
                        }
                    });
                });
            });
        });
        this.entryLoader.dismiss();
    };
    AvailabilityPage.prototype.goToHome = function () {
        console.log('go to home');
        console.log(this.navCtrl.length());
        if (this.navCtrl.length() === 1) {
            this.navCtrl.push('TabsPage', {
                isStylist: true
            });
        }
    };
    /**
     * Create the parent schedule object
     *
     * @param {any} startDate - Date to start schedule
     * @param {any} dateFmt - moment date/time format
     * @param {any} interval 1
     * @param {any} dateUnit - moment date format
     * @param {any} runsFor - how long the schedule runs for
     * @returns
     * @memberof AvailabilityPage
     */
    AvailabilityPage.prototype.generateSchedule = function (startDate, dateFmt, interval, dateUnit, runsFor) {
        var schedule = [{ date: startDate.format(dateFmt), unit: dateUnit }];
        var loopInt = interval;
        for (var x = 0; x < runsFor; x++) {
            schedule.push({
                date: __WEBPACK_IMPORTED_MODULE_2_moment__(startDate)
                    .add(loopInt, dateUnit)
                    .format(dateFmt),
                unit: dateUnit
            });
            loopInt = loopInt + interval;
        }
        return schedule;
    };
    /**
     * Mark the given slot taken
     *
     * @param {any} option
     * @param {any} optionobj
     * @memberof AvailabilityPage
     */
    AvailabilityPage.prototype.setSlotTaken = function (option, optionobj) {
        var _this = this;
        optionobj.forEach(function (el) {
            if (option.time === el.time && option.date === el.date) {
                el.disabled = !option.disabled;
                _this.avail.setAvailabilityTaken(el.epoch, _this.stylistId);
            }
        });
    };
    /**
     * Mark all slots on the day taken
     *
     * @param {any} slot
     * @memberof AvailabilityPage
     */
    AvailabilityPage.prototype.setAllSlotsTaken = function (slot) {
        slot.slots.forEach(function (el) {
            el.disabled = !el.disabled;
        });
    };
    AvailabilityPage.prototype.updateTakenSlots = function (bookedSlots) {
        console.log(bookedSlots);
        console.log(this.schedule);
        bookedSlots.forEach(function (el) {
            // return momel.datetime;
        });
    };
    AvailabilityPage.prototype.doCheckShowNext = function () {
        if (this.navCtrl.length() === 2) {
            console.log(';showing');
            this.showNext = true;
        }
        else {
            console.log('not showing');
            this.showNext = false;
        }
    };
    AvailabilityPage.prototype.doShowPeriod = function (period) {
        // For filtering am/pm/eve if required
        console.log(period);
        console.log(period._elementRef.nativeElement.name);
        var filtered = this.availableAMDates.filter(function (el) {
            return el.period === period._elementRef.nativeElement.name;
        });
        console.log(filtered);
        // this.availableAMDates = filtered;
    };
    AvailabilityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-availability',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/availability/availability.html"*/'<!--\n  Generated template for the AvailabilityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>\n      <img src="assets/img/AB_logo_text.png">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3 text-center>{{availabilitySubHeader}}</h3>\n<div *ngFor="let slot of schedule">\n  <br>\n  <ion-grid>\n    <ion-row>\n      <button text-right ion-button round color="aubergine" (click)="setAllSlotsTaken(slot)"> {{slot.date}}</button>\n    </ion-row>\n    <ion-row>\n    </ion-row>\n  </ion-grid>\n  <ion-buttons text-center>\n    <button *ngFor="let date of slot.slots; let i = index" ion-button round [color]="date.disabled ? \'tonal\' : \'aubergine\'"\n      (click)="setSlotTaken(date, slot.slots)">\n      {{date.time}}\n    </button>\n  </ion-buttons>\n  <hr>\n  </div>\n    <ion-fab *ngIf="showNext" right bottom>\n      <button ion-fab (click)="goToHome()" color="tonal">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/availability/availability.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_availability_availability__["a" /* AvailabilityProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_stylist_stylist__["a" /* StylistProvider */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], AvailabilityPage);
    return AvailabilityPage;
}());

//# sourceMappingURL=availability.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_api_config__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var StylistProvider = /** @class */ (function () {
    function StylistProvider(http, afdb, config) {
        this.http = http;
        this.afdb = afdb;
        this.config = config;
    }
    /**
     * Get stylists
     *
     * @returns
     * @memberof StylistProvider
     */
    StylistProvider.prototype.getStylists = function () {
        //  return this.http.get<Stylist>(this.config.endpointURL + this.config.stylistsPath);
        // return Observable.of(MOCK_STYLISTS);
        return this.afdb.list('stylistProfile');
    };
    StylistProvider.prototype.getStylist = function (uid) {
        // TODO should this be .object returned?  Only ever should be 1-1 stylist / user?
        console.log(uid);
        return this.afdb.list("stylistProfile", function (ref) {
            return ref.orderByChild('userId').equalTo(uid);
        });
    };
    StylistProvider.prototype.getStylistAvailability = function (stylistId) {
        console.log(stylistId);
        return this.afdb.list("stylistProfile/" + stylistId + "/availability", function (ref) {
            return ref.orderByChild('datetime');
        });
    };
    StylistProvider.prototype.getStylistById = function (stylist) {
        console.log(stylist);
        return this.afdb.object("stylistProfile/" + stylist.stylistId);
    };
    StylistProvider.prototype.addStylistProfile = function (stylist) {
        console.log('addStylistProfile');
        console.log(stylist);
        var stylistProfile = {
            userId: __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid,
            stylistName: stylist.stylistName,
            mobile: stylist.mobile,
            mobileRange: stylist.mobileRange,
            bio: stylist.bio,
            baseLocation: stylist.baseLocation,
            addressLine1: stylist.addressLine1,
            addressLine2: stylist.addressLine2,
            addressTownCity: stylist.addressTownCity,
            addressCounty: stylist.addressCounty,
            addressPostcode: stylist.addressPostcode,
            galleryImages: null,
        };
        if (stylist.loadImages) {
            stylistProfile.galleryImages = stylist.galleryImages;
        }
        var stylistKey = this.afdb.database
            .ref()
            .child('stylistProfile')
            .push().key;
        var stylistPayload = {};
        stylistPayload["stylistProfile/" + stylistKey] = stylistProfile;
        return this.afdb.database
            .ref()
            .update(stylistPayload)
            .then(function (res) { return console.log(res); });
    };
    StylistProvider.prototype.updateStylistProfile = function (key, value) {
        console.log(key);
        console.log(value);
        if (value instanceof Array) {
            value.forEach(function (el) {
                console.log(el);
            });
        }
        return this.afdb.database.ref().update({ key: value });
    };
    StylistProvider.prototype.getStylistReview = function (stylistId) {
        console.log(stylistId);
        return this.afdb.list("stylistProfile/" + stylistId + "/reviews");
    };
    // OLD *****
    /**
     * Create a new stylist
     *
     * @param {any} stylist
     * @returns
     * @memberof StylistProvider
     */
    StylistProvider.prototype.createStylist = function (stylist) {
        return this.http.post(this.config.endpointURL + this.config.stylistPath, stylist);
    };
    /**
     * Update existing an stylist
     *
     * @param {any} stylistId
     * @param {any} stylistDetails
     * @returns
     * @memberof StylistProvider
     */
    StylistProvider.prototype.updateStylist = function (stylistId, stylistDetails) {
        return this.http.put(this.config.endpointURL + this.config.stylistsPath + stylistId, stylistDetails);
    };
    /**
     * Delete a stylist
     *
     * @returns
     * @memberof StylistProvider
     */
    StylistProvider.prototype.deleteStylist = function () {
        // When would we do this?  Account delete only?
        return this.http.delete(this.config.endpointURL + this.config.stylistsPath);
    };
    StylistProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__model_api_config__["a" /* API_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], Object])
    ], StylistProvider);
    return StylistProvider;
}());

//# sourceMappingURL=stylist.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
    }
    StorageProvider.prototype.getStorage = function (key) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(this.storage.get(key));
    };
    StorageProvider.prototype.setStorage = function (key, value) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(this.storage.set(key, value));
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAvailabilityPageModule", function() { return BookAvailabilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_availability__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookAvailabilityPageModule = /** @class */ (function () {
    function BookAvailabilityPageModule() {
    }
    BookAvailabilityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__book_availability__["a" /* BookAvailabilityPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book_availability__["a" /* BookAvailabilityPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]],
        })
    ], BookAvailabilityPageModule);
    return BookAvailabilityPageModule;
}());

//# sourceMappingURL=book-availability.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_messages_messages__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Generated class for the BookAvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookAvailabilityPage = /** @class */ (function () {
    function BookAvailabilityPage(navCtrl, navParams, msg) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msg = msg;
        this.booking = {};
        this.chatmsgs = [];
    }
    BookAvailabilityPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter BookAvailabilityPage');
        var params = this.navParams.get('avail');
        this.availableDate = params.datetime;
        var result = this.msg
            .getChatsForUser(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid) // TODO Need to account for when there is no /chat existing for user
            .mergeMap(function (res) {
            _this.chatId = res[0].key;
            return _this.msg.getMessagesForChat(res[0].key);
        });
        result.subscribe(function (res) {
            console.log(res);
            res.sort(function (a, b) {
                return a.messageDate - b.messageDate;
            });
            console.log(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.photoURL);
            // This works out whether to to use position = left or position = right and add that to the object,
            // based on who was the chat sender
            res.forEach(function (el, idx) {
                el.position = 'right';
                if (idx > 0) {
                    var prevUser = res[idx - 1].senderUid;
                    var prevPos = res[idx - 1].position;
                    console.log('prevUser', prevUser);
                    console.log('prevPos', prevPos);
                    console.log('currUser', el.senderUid);
                    console.log('currPos', el.position);
                    console.log('----------------------------------');
                    prevUser !== el.senderUid && prevPos !== el.position
                        ? (el.position = 'right')
                        : (el.position = 'left');
                }
                return (el.position,
                    (el.messageDate = __WEBPACK_IMPORTED_MODULE_4_moment__["unix"](el.messageDate)
                        .format('ddd Do MMM HH:mm')));
            });
            _this.chatmsgs = res;
            console.log(_this.chatmsgs);
        });
        // this.chatmsgs.forEach(chat => {
        //   return (chat.messageDate = moment
        //     .unix(chat.messageDate)
        //     .format('ddd Do MMM HH:mm'));
        // });
    };
    BookAvailabilityPage.prototype.onSubmitBookForm = function (e) {
        e.preventDefault();
        console.log('submitted', this.booking.bookMessage);
        this.msg.addMessageForUser(this.chatId, this.booking.bookMessage);
        this.booking.bookMessage = '';
    };
    BookAvailabilityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-book-availability',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/book-availability/book-availability.html"*/'<!--\n  Generated template for the BookAvailabilityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>book-availability</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>{{availableDate}} </h2>\n  <div> Do you want to request to book this slot?\n  <br>\n  <br> Enter any details for the stylist below and they will contact you to confirm the booking</div>\n\n\n  <ion-list no-padding>\n      <div *ngFor="let msg of chatmsgs">\n        <chat-bubble [msg]="msg"></chat-bubble>\n        <!-- <ion-item>\n          {{msg.messageSender}} -- {{msg.messageDate}}\n        </ion-item>\n        <ion-item text-wrap no-lines>\n          {{msg.messageText}}\n        </ion-item> -->\n    </div>\n  </ion-list>\n  <form (submit)="onSubmitBookForm($event)">\n    <ion-item-divider></ion-item-divider>\n    <ion-item>\n      <ion-textarea required [(ngModel)]="booking.bookMessage" name="bookingMessage" placeholder="Write Message"></ion-textarea>\n      <button ion-button item-end>\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-item>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/book-availability/book-availability.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_messages_messages__["a" /* MessagesProvider */]])
    ], BookAvailabilityPage);
    return BookAvailabilityPage;
}());

//# sourceMappingURL=book-availability.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the MessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessagesProvider = /** @class */ (function () {
    function MessagesProvider(afdb) {
        this.afdb = afdb;
        console.log('Hello MessagesProvider Provider');
    }
    MessagesProvider.prototype.getChatsForUser = function (uid) {
        return this.afdb
            .list('chats', function (ref) {
            return ref.orderByChild('userId').equalTo(uid);
        })
            .snapshotChanges();
    };
    MessagesProvider.prototype.getMessagesForChat = function (key) {
        console.log(key);
        return this.afdb.list("chats/" + key + "/messages").valueChanges();
    };
    MessagesProvider.prototype.addChat = function () { };
    MessagesProvider.prototype.addMessageForUser = function (chatId, msg) {
        var messageData = {
            messageDate: __WEBPACK_IMPORTED_MODULE_3_moment__().unix(),
            messageSender: __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.displayName,
            messageText: msg,
            senderUid: __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid,
        };
        var msgKey = this.afdb.database
            .ref()
            .child("chats/" + chatId + "/messages")
            .push().key;
        var messagePayload = {};
        messagePayload["chats/" + chatId + "/messages/" + msgKey] = messageData;
        return this.afdb.database
            .ref()
            .update(messagePayload)
            .then(function (res) { return console.log(res); });
    };
    MessagesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MessagesProvider);
    return MessagesProvider;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeGoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_maps_styles__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NativeGoogleMapsProvider = /** @class */ (function () {
    function NativeGoogleMapsProvider(geolocation, googleMaps) {
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
    }
    // Note: Call this method on ngAfterViewInit
    NativeGoogleMapsProvider.prototype.create = function (map, markers) {
        var _this = this;
        if (markers === void 0) { markers = []; }
        var lat = map.lat, lng = map.lng, zoom = map.zoom, tilt = map.tilt;
        var options = {
            camera: {
                target: {
                    lat: map.lat,
                    lng: map.lng
                },
                zoom: map.zoom,
                tilt: map.tilt
            },
            controls: {
                compass: false,
                myLocationButton: true,
                zoom: true
            },
            styles: this.parseMapStyles(map)
        };
        this.map = __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */].create(map.element.nativeElement, options);
        return this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY)
            .then(function (_) { return _this.loadMarkers(markers); });
    };
    NativeGoogleMapsProvider.prototype.parseMapStyles = function (map) {
        return typeof map.mapStyle === 'string'
            ? __WEBPACK_IMPORTED_MODULE_3__components_maps_styles__["a" /* IonMapStyles */][map.mapStyle.toLowerCase()]
            : map.mapStyle;
    };
    NativeGoogleMapsProvider.prototype.loadMarkers = function (markers) {
        var _this = this;
        markers.map(function (marker) { return _this.addMarker(marker); });
    };
    NativeGoogleMapsProvider.prototype.centerToGeolocation = function () {
        var _this = this;
        return this.getGeolocationPosition()
            .then(function (position) { return _this.centerToPosition(position); });
    };
    NativeGoogleMapsProvider.prototype.getGeolocationPosition = function () {
        return this.geolocation.getCurrentPosition()
            .then(function (position) { return new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["d" /* LatLng */](position.coords.latitude, position.coords.longitude); });
    };
    NativeGoogleMapsProvider.prototype.addGeolocationPin = function () {
        // No need to do anything, native already handles that.
    };
    NativeGoogleMapsProvider.prototype.centerToPosition = function (latLng, zoom, tilt) {
        var cameraPosition = {
            target: latLng,
            zoom: zoom || 15,
            tilt: tilt || 10
        };
        return this.map.moveCamera(cameraPosition);
    };
    NativeGoogleMapsProvider.prototype.addMarker = function (marker) {
        var lat = marker.lat, lng = marker.lng, iconUrl = marker.iconUrl, title = marker.title, animated = marker.animated, draggable = marker.draggable, visible = marker.visible, zIndex = marker.zIndex;
        var markerOptions = {
            position: new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["d" /* LatLng */](lat, lng),
            title: title,
            icon: iconUrl,
            animation: animated ? __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].DROP : null,
            zIndex: zIndex,
            draggable: draggable,
            visible: visible
        };
        return this.map.addMarker(markerOptions);
    };
    NativeGoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], NativeGoogleMapsProvider);
    return NativeGoogleMapsProvider;
}());

//# sourceMappingURL=native-google-maps.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonMapStyles; });
var IonMapStyles = {
    standard: [],
    silver: [{ 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f5f5' }] }, { 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#616161' }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#f5f5f5' }] }, { 'featureType': 'administrative.land_parcel', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#bdbdbd' }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#eeeeee' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#757575' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#e5e5e5' }] }, { 'featureType': 'poi.park', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#9e9e9e' }] }, { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'color': '#ffffff' }] }, { 'featureType': 'road.arterial', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#757575' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#dadada' }] }, { 'featureType': 'road.highway', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#616161' }] }, { 'featureType': 'road.local', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#9e9e9e' }] }, { 'featureType': 'transit.line', 'elementType': 'geometry', 'stylers': [{ 'color': '#e5e5e5' }] }, { 'featureType': 'transit.station', 'elementType': 'geometry', 'stylers': [{ 'color': '#eeeeee' }] }, { 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#c9c9c9' }] }, { 'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#9e9e9e' }] }],
    light: [{ 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#e9e9e9' }, { 'lightness': 17 }] }, { 'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f5f5' }, { 'lightness': 20 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 17 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 29 }, { 'weight': 0.2 }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 18 }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 16 }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f5f5' }, { 'lightness': 21 }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#dedede' }, { 'lightness': 21 }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'visibility': 'on' }, { 'color': '#ffffff' }, { 'lightness': 16 }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'saturation': 36 }, { 'color': '#333333' }, { 'lightness': 40 }] }, { 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{ 'color': '#f2f2f2' }, { 'lightness': 19 }] }, { 'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#fefefe' }, { 'lightness': 20 }] }, { 'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#fefefe' }, { 'lightness': 17 }, { 'weight': 1.2 }] }],
    dark: [{ 'elementType': 'geometry', 'stylers': [{ 'color': '#212121' }] }, { 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#757575' }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#212121' }] }, { 'featureType': 'administrative', 'elementType': 'geometry', 'stylers': [{ 'color': '#757575' }] }, { 'featureType': 'administrative.country', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#9e9e9e' }] }, { 'featureType': 'administrative.land_parcel', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'administrative.locality', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#bdbdbd' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#757575' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#181818' }] }, { 'featureType': 'poi.park', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#616161' }] }, { 'featureType': 'poi.park', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#1b1b1b' }] }, { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#2c2c2c' }] }, { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#8a8a8a' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#373737' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#3c3c3c' }] }, { 'featureType': 'road.highway.controlled_access', 'elementType': 'geometry', 'stylers': [{ 'color': '#4e4e4e' }] }, { 'featureType': 'road.local', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#616161' }] }, { 'featureType': 'transit', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#757575' }] }, { 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#000000' }] }, { 'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#3d3d3d' }] }],
    night: [{ 'elementType': 'geometry', 'stylers': [{ 'color': '#242f3e' }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#746855' }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#242f3e' }] }, { 'featureType': 'administrative.locality', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#d59563' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#d59563' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#263c3f' }] }, { 'featureType': 'poi.park', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#6b9a76' }] }, { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'color': '#38414e' }] }, { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#212a37' }] }, { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#9ca5b3' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#746855' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#1f2835' }] }, { 'featureType': 'road.highway', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#f3d19c' }] }, { 'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{ 'color': '#2f3948' }] }, { 'featureType': 'transit.station', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#d59563' }] }, { 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#17263c' }] }, { 'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#515c6d' }] }, { 'featureType': 'water', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#17263c' }] }],
    midnight: [{ 'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#ffffff' }] }, { 'featureType': 'all', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#000000' }, { 'lightness': 13 }] }, { 'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#000000' }] }, { 'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#144b53' }, { 'lightness': 14 }, { 'weight': 1.4 }] }, { 'featureType': 'landscape', 'elementType': 'all', 'stylers': [{ 'color': '#08304b' }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#0c4152' }, { 'lightness': 5 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#000000' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#0b434f' }, { 'lightness': 25 }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#000000' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#0b3d51' }, { 'lightness': 16 }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#000000' }] }, { 'featureType': 'transit', 'elementType': 'all', 'stylers': [{ 'color': '#146474' }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'color': '#021019' }] }],
    aubergine: [{ 'elementType': 'geometry', 'stylers': [{ 'color': '#1d2c4d' }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#8ec3b9' }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#1a3646' }] }, { 'featureType': 'administrative.country', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#4b6878' }] }, { 'featureType': 'administrative.land_parcel', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#64779e' }] }, { 'featureType': 'administrative.province', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#4b6878' }] }, { 'featureType': 'landscape.man_made', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#334e87' }] }, { 'featureType': 'landscape.natural', 'elementType': 'geometry', 'stylers': [{ 'color': '#023e58' }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#283d6a' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#6f9ba5' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#1d2c4d' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#023e58' }] }, { 'featureType': 'poi.park', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#3C7680' }] }, { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'color': '#304a7d' }] }, { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#98a5be' }] }, { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#1d2c4d' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#2c6675' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#255763' }] }, { 'featureType': 'road.highway', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#b0d5ce' }] }, { 'featureType': 'road.highway', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#023e58' }] }, { 'featureType': 'transit', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#98a5be' }] }, { 'featureType': 'transit', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#1d2c4d' }] }, { 'featureType': 'transit.line', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#283d6a' }] }, { 'featureType': 'transit.station', 'elementType': 'geometry', 'stylers': [{ 'color': '#3a4762' }] }, { 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#0e1626' }] }, { 'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#4e6d70' }] }],
    military: [{ 'elementType': 'geometry', 'stylers': [{ 'color': '#ebe3cd' }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#523735' }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#f5f1e6' }] }, { 'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#c9b2a6' }] }, { 'featureType': 'administrative.land_parcel', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#dcd2be' }] }, { 'featureType': 'administrative.land_parcel', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#ae9e90' }] }, { 'featureType': 'landscape.natural', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#93817c' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#a5b076' }] }, { 'featureType': 'poi.park', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#447530' }] }, { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f1e6' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#fdfcf8' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#f8c967' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#e9bc62' }] }, { 'featureType': 'road.highway.controlled_access', 'elementType': 'geometry', 'stylers': [{ 'color': '#e98d58' }] }, { 'featureType': 'road.highway.controlled_access', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#db8555' }] }, { 'featureType': 'road.local', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#806b63' }] }, { 'featureType': 'transit.line', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'transit.line', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#8f7d77' }] }, { 'featureType': 'transit.line', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ebe3cd' }] }, { 'featureType': 'transit.station', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'water', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#b9d3c2' }] }, { 'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#92998d' }] }],
    paledawn: [{ 'featureType': 'administrative', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }, { 'lightness': 33 }] }, { 'featureType': 'landscape', 'elementType': 'all', 'stylers': [{ 'color': '#f2e5d4' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#c5dac6' }] }, { 'featureType': 'poi.park', 'elementType': 'labels', 'stylers': [{ 'visibility': 'on' }, { 'lightness': 20 }] }, { 'featureType': 'road', 'elementType': 'all', 'stylers': [{ 'lightness': 20 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#c5c6c6' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#e4d7c6' }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#fbfaf7' }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }, { 'color': '#acbcc9' }] }],
    red: [{ 'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{ 'gamma': 0.01 }, { 'lightness': 20 }, { 'color': '#c81313' }] }, { 'featureType': 'all', 'elementType': 'labels.text.stroke', 'stylers': [{ 'saturation': -31 }, { 'lightness': -33 }, { 'weight': 2 }, { 'gamma': 0.8 }, { 'color': '#ffffff' }] }, { 'featureType': 'all', 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#f46767' }] }, { 'featureType': 'administrative', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#d81616' }] }, { 'featureType': 'administrative', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] }, { 'featureType': 'administrative.country', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#d66767' }] }, { 'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{ 'lightness': 30 }, { 'saturation': 30 }] }, { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ffcece' }] }, { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#fff1f1' }] }, { 'featureType': 'landscape.natural.landcover', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ffcece' }] }, { 'featureType': 'landscape.natural.terrain', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ffcece' }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'saturation': 20 }] }, { 'featureType': 'poi', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ff9e9e' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#d81616' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] }, { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'lightness': '100' }, { 'saturation': '-100' }, { 'color': '#ffffff' }] }, { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'saturation': 25 }, { 'lightness': 25 }] }, { 'featureType': 'transit.line', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#df4848' }] }, { 'featureType': 'transit.line', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#7a0000' }] }, { 'featureType': 'transit.station.airport', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ff9e9e' }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'lightness': -20 }, { 'color': '#eb7474' }] }],
    purple: [{ 'featureType': 'all', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }, { 'hue': '#bc00ff' }, { 'saturation': '0' }] }, { 'featureType': 'administrative', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'administrative', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#e8b8f9' }] }, { 'featureType': 'administrative.country', 'elementType': 'labels', 'stylers': [{ 'color': '#ff0000' }] }, { 'featureType': 'administrative.land_parcel', 'elementType': 'labels.text.fill', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'landscape', 'elementType': 'all', 'stylers': [{ 'color': '#3e114e' }, { 'visibility': 'simplified' }] }, { 'featureType': 'landscape', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }, { 'color': '#a02aca' }] }, { 'featureType': 'landscape.natural', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }, { 'color': '#2e093b' }] }, { 'featureType': 'landscape.natural', 'elementType': 'labels.text', 'stylers': [{ 'color': '#9e1010' }, { 'visibility': 'off' }] }, { 'featureType': 'landscape.natural', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#ff0000' }] }, { 'featureType': 'landscape.natural.landcover', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }, { 'color': '#58176e' }] }, { 'featureType': 'landscape.natural.landcover', 'elementType': 'labels.text.fill', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'poi', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'poi.business', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road', 'elementType': 'all', 'stylers': [{ 'saturation': -100 }, { 'lightness': 45 }] }, { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'visibility': 'simplified' }, { 'color': '#a02aca' }] }, { 'featureType': 'road', 'elementType': 'labels', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#d180ee' }] }, { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'visibility': 'simplified' }, { 'color': '#a02aca' }] }, { 'featureType': 'road.highway', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }, { 'color': '#ff0000' }] }, { 'featureType': 'road.highway', 'elementType': 'labels.text', 'stylers': [{ 'color': '#a02aca' }, { 'visibility': 'simplified' }] }, { 'featureType': 'road.highway', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#cc81e7' }, { 'visibility': 'simplified' }] }, { 'featureType': 'road.highway', 'elementType': 'labels.text.stroke', 'stylers': [{ 'visibility': 'simplified' }, { 'hue': '#bc00ff' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#6d2388' }] }, { 'featureType': 'road.arterial', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#c46ce3' }] }, { 'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'transit', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'color': '#b7918f' }, { 'visibility': 'on' }] }, { 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#280b33' }] }, { 'featureType': 'water', 'elementType': 'labels', 'stylers': [{ 'visibility': 'simplified' }, { 'color': '#a02aca' }] }],
    green: [{ 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#333739' }] }, { 'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{ 'color': '#2ecc71' }] }, { 'featureType': 'poi', 'stylers': [{ 'color': '#2ecc71' }, { 'lightness': -7 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#2ecc71' }, { 'lightness': -28 }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#2ecc71' }, { 'visibility': 'on' }, { 'lightness': -15 }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#2ecc71' }, { 'lightness': -18 }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#ffffff' }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{ 'color': '#2ecc71' }, { 'lightness': -34 }] }, { 'featureType': 'administrative', 'elementType': 'geometry', 'stylers': [{ 'visibility': 'on' }, { 'color': '#333739' }, { 'weight': 0.8 }] }, { 'featureType': 'poi.park', 'stylers': [{ 'color': '#2ecc71' }] }, { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#333739' }, { 'weight': 0.3 }, { 'lightness': 10 }] }],
    yellow: [{ 'featureType': 'landscape', 'stylers': [{ 'hue': '#FFAD00' }, { 'saturation': 50.2 }, { 'lightness': -34.8 }, { 'gamma': 1 }] }, { 'featureType': 'road.highway', 'stylers': [{ 'hue': '#FFAD00' }, { 'saturation': -19.8 }, { 'lightness': -1.8 }, { 'gamma': 1 }] }, { 'featureType': 'road.arterial', 'stylers': [{ 'hue': '#FFAD00' }, { 'saturation': 72.4 }, { 'lightness': -32.6 }, { 'gamma': 1 }] }, { 'featureType': 'road.local', 'stylers': [{ 'hue': '#FFAD00' }, { 'saturation': 74.4 }, { 'lightness': -18 }, { 'gamma': 1 }] }, { 'featureType': 'water', 'stylers': [{ 'hue': '#00FFA6' }, { 'saturation': -63.2 }, { 'lightness': 38 }, { 'gamma': 1 }] }, { 'featureType': 'poi', 'stylers': [{ 'hue': '#FFC300' }, { 'saturation': 54.2 }, { 'lightness': -14.4 }, { 'gamma': 1 }] }],
};
//# sourceMappingURL=maps.styles.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonMarker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonMarker = /** @class */ (function () {
    function IonMarker() {
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        this.draggable = false;
        /**
         * If true, the marker will have a DROP animation on the screen. Default value is false.
         */
        this.animated = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * Only works on javascript maps.
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMarker.prototype, "address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMarker.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMarker.prototype, "lng", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMarker.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMarker.prototype, "customHTML", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMarker.prototype, "parentClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMarker.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMarker.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IonMarker.prototype, "draggable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IonMarker.prototype, "animated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMarker.prototype, "iconUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IonMarker.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IonMarker.prototype, "openInfoWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMarker.prototype, "opacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMarker.prototype, "zIndex", void 0);
    IonMarker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-marker',
            template: "<template></template>"
        })
    ], IonMarker);
    return IonMarker;
}());

//# sourceMappingURL=ion-marker.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_booking_booking__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__bookings__["a" /* BookingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookings__["a" /* BookingsPage */]), __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_booking_booking__["a" /* BookingProvider */]]
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());

//# sourceMappingURL=bookings.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_booking_booking__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatMap__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_availability_availability__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__ = __webpack_require__(81);
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
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingsPage = /** @class */ (function () {
    function BookingsPage(navCtrl, navParams, book, avail, stylist, user, afdb, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.book = book;
        this.avail = avail;
        this.stylist = stylist;
        this.user = user;
        this.afdb = afdb;
        this.utils = utils;
        this.pendingBookingText = 'Pending Bookings';
        this.noPendingBookingText = 'No Pending Bookings';
        this.acceptedBookingText = 'Accepted Bookings';
        this.noAcceptedBookingText = 'No Accepted Bookings';
        this.mybookings = [];
        this.bookingTitle = 'Booking';
        this.stylistTitle = 'Stylist';
    }
    BookingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingsPage');
    };
    BookingsPage.prototype.ionViewDidEnter = function () {
        // console.log('getting bookings');
        // TODO 16th Feb - This all needs to be rewritten with the new structure
        var _this = this;
        this.stylist
            .getStylist(__WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid)
            .snapshotChanges()
            .subscribe(function (res) {
            _this.stylistId = res[0].key;
            _this.getBookings();
        });
    };
    BookingsPage.prototype.getBookings = function () {
        var _this = this;
        console.log('gettttBookings');
        var uid = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid;
        console.log(uid);
        console.log(this.stylistId);
        this.bookings$ = this.book.getUserBookings(uid);
        this.bookings$.subscribe(function (res) {
            console.log(res);
            console.log(res[0].payload.val());
            // this.availabilities$ =
            _this.avail
                .getAvailabilityById(_this.stylistId, res[0].payload.val().availabilityId)
                .snapshotChanges()
                .subscribe(function (res) {
                console.log('getAvailabilityByIdssss');
                console.log(res);
                var ava = _this.utils.generateFirebaseKeyedValues(res);
                console.log(ava);
            });
        });
    };
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bookings',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/bookings/bookings.html"*/'<!--\n  Generated template for the BookingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Bookings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="bookings$ | async; let bookings">\n    <div *ngFor="let book of bookings">\n      <div *ngIf="book.payload.val().userAccepted === false && book.payload.val().stylistAccepted === false; then pending else no_pending"></div>\n        <ng-template #pending>\n            <h2> {{pendingBookingText}}</h2>\n          {{book.payload.val().availabilityId}}\n        </ng-template>\n        <ng-template #no_pending>\n          <h2> {{noPendingBookingText}}</h2>\n        </ng-template>\n      <div *ngIf="book.payload.val().userAccepted === true && book.payload.val().stylistAccepted === true; then accepted else no_accepted"></div>\n        <ng-template #accepted>\n          <h2> {{acceptedBookingText}}</h2>\n        {{book.payload.val().availabilityId}}\n        </ng-template>\n        <ng-template #no_accepted>\n          <h2> {{noAcceptedBookingText}}</h2>\n        </ng-template>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/bookings/bookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_booking_booking__["a" /* BookingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_availability_availability__["a" /* AvailabilityProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_stylist_stylist__["a" /* StylistProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__["a" /* UtilsProvider */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_availability_availability__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_booking_booking__ = __webpack_require__(82);
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
 * Generated class for the StylistProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StylistProfilePage = /** @class */ (function () {
    function StylistProfilePage(navCtrl, navParams, events, stylist, afdb, avail, utils, booking) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.stylist = stylist;
        this.afdb = afdb;
        this.avail = avail;
        this.utils = utils;
        this.booking = booking;
        this.availabilityHeader = 'Availability';
        this.bookText = 'Book';
        this.toggled = false;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        // this.id = navParams.get('id');
        this.user = navParams.get('user');
        // events.subscribe('change-stylist-profile-tab', (tab, id, param) => {
        //   this.id = id;
        //   this.user = param;
        // });
    }
    StylistProfilePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter ProfilePage');
        if (this.user) {
            this.getStylistDetails(this.user.key);
        }
    };
    StylistProfilePage.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
        this.destroy$.next();
        this.destroy$.unsubscribe();
    };
    /**
     * Get the stylist related to the user selected and the stylistId
     * Then get the availabilities for that StylistId
     *
     * @param {any} key
     * @memberof StylistProfilePage
     */
    StylistProfilePage.prototype.getStylistDetails = function (key) {
        var _this = this;
        console.log(key);
        this.stylist$ = this.stylist.getStylist(key).valueChanges();
        console.log(this.stylist$);
        this.stylist
            .getStylist(key)
            .snapshotChanges()
            .takeUntil(this.destroy$)
            .subscribe(function (actions) {
            var stylists = _this.utils.generateFirebaseKeyedValues(actions);
            console.log(stylists);
            _this.stylists = stylists;
            _this.stylistId = stylists[0].key;
            console.log(_this.stylistId);
            _this.avail
                .getStylistAvailability(_this.stylistId)
                .snapshotChanges()
                .takeUntil(_this.destroy$)
                .subscribe(function (actions) {
                var avails = _this.utils.generateFirebaseKeyedValues(actions);
                console.log(avails);
                _this.availabilities = avails;
                _this.availabilities.forEach(function (el) {
                    return (el.datetime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](el.datetime)
                        .format('ddd Do h:mm'));
                });
            });
        });
    };
    StylistProfilePage.prototype.toggleHeart = function () {
        if (!this.toggled) {
            this.toggled = true;
            return;
        }
        this.toggled = false;
    };
    StylistProfilePage.prototype.doBooking = function () {
        /***Make booking
          1.) create /booking entry
          2.) mark given /availability booked = true
        ****/
        // this.booking.makeBooking(this.selectedAvailability);
    };
    // Events
    StylistProfilePage.prototype.onAvailSelected = function (ev) {
        console.log(ev);
        this.selectedAvailability = ev;
    };
    StylistProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stylist-profile',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-profile/stylist-profile.html"*/'<!--\n  Generated template for the stylist-profilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Stylist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-stylist-profile" padding>\n  <ion-card>\n\n    <!-- <img src="{{user.avatarImage}}"> -->\n    <ion-card-title no-padding>\n\n      <div *ngFor="let stylist of stylist$ | async">\n        <ion-row>\n          <ion-icon [ngStyle]="{\'color\': toggled===true ? \'red\' : \'white\'}" class="page-stylist-profile--stylist-profile-card-button"\n            name="heart" (click)="toggleHeart()">\n          </ion-icon>\n        </ion-row>\n        <!-- <img src="{{stylist.bannerImage}}"> -->\n        <ion-slides pager autoplay="3000" speed="500" loop>\n          <ion-slide *ngFor="let img of stylist.galleryImages" [ngStyle]="{\'background-image\': \'url(\' + img +\')\'}" class="page-stylist-profile--slide-background">\n            <ion-row>\n              <ion-icon [ngStyle]="{\'color\': toggled===true ? \'red\' : \'white\'}" class="page-stylist-profile--stylist-profile-card-button"\n                name="heart" (click)="toggleHeart()">\n              </ion-icon>\n            </ion-row>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <ion-item>\n        {{user.name}}\n      </ion-item>\n    </ion-card-title>\n    <ion-card-content no-padding>\n      <div *ngFor="let style of stylist$ | async">\n        <ion-item text-wrap>\n          {{style.bio}}\n        </ion-item>\n\n      <ion-item>\n        {{user.emailAddress}}\n      </ion-item>\n      <ion-item>\n        <star-rating [rating]="style.stylistRating"></star-rating>\n      </ion-item>\n        </div>\n\n      <!-- <ion-list-header>\n        <h2>{{availabilityHeader}}</h2>\n      </ion-list-header>\n\n      <ion-list radio-group>\n        <ion-item *ngFor="let avail of availabilities">\n          <ion-label *ngIf="avail.booked === false">\n            {{avail.datetime}}\n          </ion-label>\n          <ion-radio\n            *ngIf="avail.booked === false"\n            value="{{avail.key}}"\n            (ionSelect)="onAvailSelected($event)">\n          </ion-radio>\n          <ion-icon item-end\n            *ngIf="avail.booked === true"\n            name="checkmark-circle">\n          </ion-icon>\n        </ion-item>\n      </ion-list>\n\n      <ion-item>\n        <button ion-button (click)="doBooking()">\n          {{bookText}}\n        </button>\n      </ion-item> -->\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-profile/stylist-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stylist_stylist__["a" /* StylistProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_availability_availability__["a" /* AvailabilityProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_booking_booking__["a" /* BookingProvider */]])
    ], StylistProfilePage);
    return StylistProfilePage;
}());

//# sourceMappingURL=stylist-profile.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(49);
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
 * Generated class for the StylistReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StylistReviewPage = /** @class */ (function () {
    function StylistReviewPage(navCtrl, navParams, stylist, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stylist = stylist;
        this.user = user;
    }
    StylistReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StylistReviewPage');
    };
    StylistReviewPage.prototype.ionViewDidEnter = function () { };
    StylistReviewPage.prototype.ngAfterContentInit = function () {
        this.stylistId = this.navParams.get('stylistId');
        console.log(this.stylistId);
        this.getReviews(this.stylistId);
    };
    StylistReviewPage.prototype.getReviews = function (stylistId) {
        var _this = this;
        console.log(stylistId);
        this.review$ = this.stylist.getStylistReview(stylistId).valueChanges();
        this.review$.subscribe(function (res) {
            res.forEach(function (el) {
                _this.getReviewer(el.userId).subscribe(function (res) {
                    // TODO need to unsub
                    // TODO need to test how this works with different review users
                    var userObj = res.payload.val();
                    userObj.uid = res.key;
                    _this.reviewUser = userObj;
                });
            });
        });
    };
    StylistReviewPage.prototype.getReviewer = function (uid) {
        return this.user.getUserById(uid).snapshotChanges();
    };
    StylistReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stylist-review',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-review/stylist-review.html"*/'<!--\n  Generated template for the StylistReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reviews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <div *ngFor="let review of review$ | async">\n      <div *ngIf="reviewUser && review.userId === reviewUser.uid">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="{{reviewUser.avatarImage}}">\n          </ion-avatar>\n          {{reviewUser.name}}\n        </ion-item>\n        <ion-item>\n          <star-rating [rating]="review.starRating"></star-rating>\n        </ion-item>\n      </div>\n      <ion-item text-wrap>\n        {{review.reviewText}}\n      </ion-item>\n      <ion-item-divider></ion-item-divider>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-review/stylist-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stylist_stylist__["a" /* StylistProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], StylistReviewPage);
    return StylistReviewPage;
}());

//# sourceMappingURL=stylist-review.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_search__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_search_search__["a" /* SearchProvider */]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylistReviewPageModule", function() { return StylistReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylist_review__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StylistReviewPageModule = /** @class */ (function () {
    function StylistReviewPageModule() {
    }
    StylistReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stylist_review__["a" /* StylistReviewPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stylist_review__["a" /* StylistReviewPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]],
        })
    ], StylistReviewPageModule);
    return StylistReviewPageModule;
}());

//# sourceMappingURL=stylist-review.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfilePageModule", function() { return EditUserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_user_profile__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditUserProfilePageModule = /** @class */ (function () {
    function EditUserProfilePageModule() {
    }
    EditUserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_user_profile__["a" /* EditUserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_user_profile__["a" /* EditUserProfilePage */]),
            ],
        })
    ], EditUserProfilePageModule);
    return EditUserProfilePageModule;
}());

//# sourceMappingURL=edit-user-profile.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capacitor_core__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the EditUserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditUserProfilePage = /** @class */ (function () {
    function EditUserProfilePage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.editProfileTitle = 'Edit Profile';
    }
    EditUserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditUserProfilePage');
    };
    EditUserProfilePage.prototype.takePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Camera, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('takePhoto');
                        Camera = __WEBPACK_IMPORTED_MODULE_2__capacitor_core__["b" /* Plugins */].Camera;
                        return [4 /*yield*/, Camera.getPhoto({
                                quality: 90,
                                allowEditing: true,
                                resultType: __WEBPACK_IMPORTED_MODULE_2__capacitor_core__["a" /* CameraResultType */].Base64,
                            }).catch(function (err) { return console.error(err); })];
                    case 1:
                        image = _a.sent();
                        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.base64Data);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditUserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-user-profile',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/edit-user-profile/edit-user-profile.html"*/'<!--\n  Generated template for the EditUserProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{editProfileTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button (click)="takePhoto()"> Take Photo</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/edit-user-profile/edit-user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EditUserProfilePage);
    return EditUserProfilePage;
}());

//# sourceMappingURL=edit-user-profile.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]),
            ],
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundSliderPageModule", function() { return LoginBackgroundSliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_background_slider__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginBackgroundSliderPageModule = /** @class */ (function () {
    function LoginBackgroundSliderPageModule() {
    }
    LoginBackgroundSliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_background_slider__["a" /* LoginBackgroundSliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login_background_slider__["a" /* LoginBackgroundSliderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__login_background_slider__["a" /* LoginBackgroundSliderPage */]
            ]
        })
    ], LoginBackgroundSliderPageModule);
    return LoginBackgroundSliderPageModule;
}());

//# sourceMappingURL=login-background-slider.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__["a" /* TwitterConnect */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_CONFIG_VALUES; });
var API_CONFIG_VALUES = {
    google_ios_reversed_client_id: 'com.googleusercontent.apps.625369331469-pmq20aisjh665khr4jm4fisdv570lkp3',
    google_ab_app_web_client_id: '625369331469-oqvj72hnm3g1mgg3v2cbs50f73u0fd5f.apps.googleusercontent.com',
    endpointURL: 'http://frozen-sands-96988.herokuapp.com',
    usersPath: '/users',
    userPath: '/user',
    stylistsPath: '/stylists',
    stylistPath: '/stylist'
};
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, afauth, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.viewCtrl = viewCtrl;
        this.settingsTitle = 'Settings';
        this.notificationsLabel = 'Notifications';
        this.termsLabel = 'Terms of Service';
        this.logOutLabel = 'Log Out';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.doLogOut = function () {
        this.viewCtrl.dismiss();
        this.afauth.auth.signOut();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{settingsTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      {{notificationsLabel}}\n    </ion-item>\n    <ion-item>\n      {{termsLabel}}\n    </ion-item>\n    <a ion-item (click)="doLogOut()" detail-none>\n      {{logOutLabel}}\n    </a>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylistProfilePageModule", function() { return StylistProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylist_profile__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StylistProfilePageModule = /** @class */ (function () {
    function StylistProfilePageModule() {
    }
    StylistProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stylist_profile__["a" /* StylistProfilePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stylist_profile__["a" /* StylistProfilePage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]]
        })
    ], StylistProfilePageModule);
    return StylistProfilePageModule;
}());

//# sourceMappingURL=stylist-profile.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stylist_profile_stylist_profile_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookings_bookings_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_module__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__availability_availability_module__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]],
            imports: [
                // tabs
                __WEBPACK_IMPORTED_MODULE_3__home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__stylist_profile_stylist_profile_module__["StylistProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_5__bookings_bookings_module__["BookingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_module__["UserProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_7__availability_availability_module__["AvailabilityPageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_user_profile_edit_user_profile__ = __webpack_require__(446);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, navParams, afauth, modalCtrl, storage, stylist) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.stylist = stylist;
        this.editProfileText = 'Edit Profile';
    }
    UserProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad UserProfilePage');
        this.getUserProfile();
        this.getStylistProfile();
        this.storage.getStorage('isStylist').subscribe(function (res) {
            if (res) {
                _this.isStylist = true;
            }
            else {
                _this.isStylist = false;
            }
        });
    };
    //-- Public
    UserProfilePage.prototype.doEditProfile = function () {
        console.log('editing PRofile');
        var editProfileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__edit_user_profile_edit_user_profile__["a" /* EditUserProfilePage */]);
        editProfileModal.onDidDismiss(function (data) {
            console.log('dismissed ', data);
        });
        editProfileModal.present();
    };
    UserProfilePage.prototype.doOpenSettings = function () {
        var settingsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
        settingsModal.onDidDismiss(function (data) {
            console.log('dismissed ', data);
        });
        settingsModal.present();
    };
    UserProfilePage.prototype.doLogOut = function () {
        console.log('sign out valled');
        this.afauth.auth.signOut();
    };
    //-- Private
    UserProfilePage.prototype.getUserProfile = function () {
        var _this = this;
        console.log(this.afauth.auth.currentUser.uid);
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
            .database()
            .ref('/userProfile')
            .child(this.afauth.auth.currentUser.uid)
            .once('value')
            .then(function (res) {
            console.log(res.val());
            _this.user = res.val();
        });
    };
    UserProfilePage.prototype.getStylistProfile = function () {
        var _this = this;
        console.log('getstylistprofile');
        this.stylist
            .getStylist(this.afauth.auth.currentUser.uid)
            .valueChanges()
            .subscribe(function (res) {
            console.log(res);
            var obj = __assign({}, res[0]);
            _this.style = res;
            console.log(obj);
        });
        console.log(this.style);
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/user-profile/user-profile.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="tonal" (click)="doOpenSettings()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<div no-padding *ngFor="let s of style">\n  <div no-padding>\n    <img src="{{s.bannerImage}}">\n  </div>\n</div>\n\n<ion-list no-lines padding>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{user?.avatarImage}}">\n      </ion-avatar>\n         {{user?.name}}\n      <ion-icon item-end name="ios-open-outline" (click)="doEditProfile()"></ion-icon>\n    </ion-item>\n    <ion-item>{{user?.emailAddress}}</ion-item>\n    <div no-padding *ngFor="let s of style">\n      <ion-item text-wrap>\n        {{s.bio}}\n      </ion-item>\n    </div>\n\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/user-profile/user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_stylist_stylist__["a" /* StylistProvider */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_user_profile_edit_user_profile_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__edit_user_profile_edit_user_profile_module__["EditUserProfilePageModule"],
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_api_config__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserProvider = /** @class */ (function () {
    function UserProvider(http, afdb, config) {
        this.http = http;
        this.afdb = afdb;
        this.config = config;
    }
    /**
     * Return users
     *
     * @returns {Observable<User>}
     * @memberof UserProvider
     */
    UserProvider.prototype.getStylistUsers = function () {
        // return this.http.get<User>(this.config.endpointURL + this.config.usersPath);
        return this.afdb.list('userProfile', function (ref) {
            return ref.orderByChild('isStylist').equalTo(true);
        });
    };
    UserProvider.prototype.getUserById = function (id) {
        return this.afdb.object("userProfile/" + id);
    };
    // OLD *****
    /**
     * Add a new user
     *
     * @param {any} user
     * @returns
     * @memberof UserProvider
     */
    UserProvider.prototype.addUser = function (user) {
        console.log(user);
        return this.http.post(this.config.endpointURL + this.config.usersPath, user);
    };
    /**
     * Update existing user details
     *
     * @param {any} userId
     * @param {any} userDetails
     * @returns
     * @memberof UserProvider
     */
    UserProvider.prototype.updateUser = function (userId, userDetails) {
        return this.http.put(this.config.endpointURL + this.config.usersPath + userId, userDetails);
    };
    /**
     * Delete a user
     *
     * @param {any} userId
     * @returns
     * @memberof UserProvider
     */
    UserProvider.prototype.deleteUser = function (userId) {
        // When would we do this?  Account delete only?
        return this.http.delete(this.config.endpointURL + this.config.usersPath);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__model_api_config__["a" /* API_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], Object])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoProvider = /** @class */ (function () {
    function PhotoProvider(camera, imagePicker, file, plt) {
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.file = file;
        this.plt = plt;
        this.photos = [];
        console.log('Hello PhotoProvider Provider');
    }
    /**
     * Cordova camera, take photo
     *
     * @param {any} sourceType
     * @returns
     * @memberof PhotoProvider
     */
    PhotoProvider.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        return this.camera.getPicture(options).then(function (imagePath) {
            console.log(imagePath);
            var fullPath;
            if (_this.plt.is('ios')) {
                fullPath = 'file://' + imagePath;
            }
            else {
                fullPath = imagePath;
            }
            return fullPath;
        });
    };
    /**
     * Cordova image picker, select image from library
     *
     * @returns
     * @memberof PhotoProvider
     */
    PhotoProvider.prototype.getLibraryPictures = function () {
        var _this = this;
        var options = {};
        var photos = [];
        return this.imagePicker.getPictures(options).then(function (res) {
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                var fullPath = void 0;
                if (_this.plt.is('ios')) {
                    fullPath = 'file://' + res[i];
                }
                else {
                    fullPath = res[i];
                }
                var path = fullPath.substring(0, fullPath.lastIndexOf('/'));
                photos.push({ photoFullPath: fullPath, path: path });
            }
            return Promise.resolve(photos);
        }, function (err) {
            console.error(err);
        });
    };
    /**
     * Add photo to Firebase Storage as base64 string
     * TODO: create filename convention?  Using default
     * @param {*} photo
     * @returns
     * @memberof PhotoProvider
     */
    PhotoProvider.prototype.pushPhotoToStorage = function (photo) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        var photoPromises = [];
        photo.forEach(function (el) {
            console.log(el);
            var promise = storageRef
                .child("stylistGalleryImages/" + el.photoFileName)
                .putString(el.photoBase64Data, 'data_url');
            photoPromises.push(promise);
        });
        console.log(photoPromises);
        return Promise.all([photoPromises]);
    };
    /**
     * Util method to get base64 data for image
     *
     * @param {string} fullPath
     * @param {string} [path]
     * @returns
     * @memberof PhotoProvider
     */
    PhotoProvider.prototype.getBase64Data = function (fullPath, path) {
        var _this = this;
        console.log('getBase64Data');
        console.log(fullPath);
        console.log(path);
        var shortPath;
        if (!path) {
            shortPath = fullPath.substring(0, fullPath.lastIndexOf('/'));
        }
        else {
            shortPath = path;
        }
        return this.file.resolveLocalFilesystemUrl(fullPath).then(function (res) {
            return _this.file.readAsDataURL(shortPath, res.name).then(function (data) {
                _this.photos.push({
                    photoFullPath: fullPath,
                    photoFileName: res.name,
                    photoBase64Data: data
                });
                console.log(_this.photos);
                return _this.photos;
            }, function (err) { return console.error(err); });
        }, function (err) { return console.error(err); });
    };
    PhotoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */]])
    ], PhotoProvider);
    return PhotoProvider;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(523);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_background_slider_login_background_slider_module__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_landing_landing_module__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_app_reducer__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_geocoder__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_image_picker__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ngrx_store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngrx_store_devtools__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngrx_effects__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__model_auth_auth_effects__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_components_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_google_maps__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__config_api_config__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__config_firebase_config__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__model_api_config__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_location_location__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_register_register_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_search_search__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_availability_availability__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_utils_utils__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_booking_booking__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_photo_photo__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_messages_messages__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AvailableBeautyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AvailableBeautyApp */], {
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/availability/availability.module#AvailabilityPageModule', name: 'AvailabilityPage', segment: 'availability', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/book-availability/book-availability.module#BookAvailabilityPageModule', name: 'BookAvailabilityPage', segment: 'book-availability', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookings/bookings.module#BookingsPageModule', name: 'BookingsPage', segment: 'bookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user-profile/edit-user-profile.module#EditUserProfilePageModule', name: 'EditUserProfilePage', segment: 'edit-user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-background-slider/login-background-slider.module#LoginBackgroundSliderPageModule', name: 'LoginBackgroundSliderPage', segment: 'login-background-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: ['LandingPage'] },
                        { loadChildren: '../pages/looking/looking.module#LookingPageModule', name: 'LookingPage', segment: 'looking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mynewpage/mynewpage.module#MynewpagePageModule', name: 'MynewpagePage', segment: 'mynewpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stylist-profile/stylist-profile.module#StylistProfilePageModule', name: 'StylistProfilePage', segment: 'stylist-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stylist-review/stylist-review.module#StylistReviewPageModule', name: 'StylistReviewPage', segment: 'stylist-review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stylist-register/stylist-register.module#StylistRegisterPageModule', name: 'StylistRegisterPage', segment: 'stylist-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_30__config_firebase_config__["a" /* FIREBASE_CONFIG_VALUES */]),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_background_slider_login_background_slider_module__["LoginBackgroundSliderPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_landing_landing_module__["LandingPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_21__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__model_app_reducer__["a" /* APP_REDUCER */]),
                // Note that you must instrument after importing StoreModule
                __WEBPACK_IMPORTED_MODULE_22__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25,
                }),
                __WEBPACK_IMPORTED_MODULE_23__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_24__model_auth_auth_effects__["a" /* AuthEffects */]]),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AvailableBeautyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_user_user__["a" /* UserProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_31__model_api_config__["a" /* API_CONFIG */],
                    useValue: __WEBPACK_IMPORTED_MODULE_29__config_api_config__["a" /* API_CONFIG_VALUES */],
                },
                __WEBPACK_IMPORTED_MODULE_32__providers_stylist_stylist__["a" /* StylistProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_location_location__["a" /* LocationProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_search_search__["a" /* SearchProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_availability_availability__["a" /* AvailabilityProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_utils_utils__["a" /* UtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_utils_utils__["a" /* UtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_booking_booking__["a" /* BookingProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_photo_photo__["a" /* PhotoProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_messages_messages__["a" /* MessagesProvider */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 242,
	"./af.js": 242,
	"./ar": 243,
	"./ar-dz": 244,
	"./ar-dz.js": 244,
	"./ar-kw": 245,
	"./ar-kw.js": 245,
	"./ar-ly": 246,
	"./ar-ly.js": 246,
	"./ar-ma": 247,
	"./ar-ma.js": 247,
	"./ar-sa": 248,
	"./ar-sa.js": 248,
	"./ar-tn": 249,
	"./ar-tn.js": 249,
	"./ar.js": 243,
	"./az": 250,
	"./az.js": 250,
	"./be": 251,
	"./be.js": 251,
	"./bg": 252,
	"./bg.js": 252,
	"./bm": 253,
	"./bm.js": 253,
	"./bn": 254,
	"./bn.js": 254,
	"./bo": 255,
	"./bo.js": 255,
	"./br": 256,
	"./br.js": 256,
	"./bs": 257,
	"./bs.js": 257,
	"./ca": 258,
	"./ca.js": 258,
	"./cs": 259,
	"./cs.js": 259,
	"./cv": 260,
	"./cv.js": 260,
	"./cy": 261,
	"./cy.js": 261,
	"./da": 262,
	"./da.js": 262,
	"./de": 263,
	"./de-at": 264,
	"./de-at.js": 264,
	"./de-ch": 265,
	"./de-ch.js": 265,
	"./de.js": 263,
	"./dv": 266,
	"./dv.js": 266,
	"./el": 267,
	"./el.js": 267,
	"./en-au": 268,
	"./en-au.js": 268,
	"./en-ca": 269,
	"./en-ca.js": 269,
	"./en-gb": 270,
	"./en-gb.js": 270,
	"./en-ie": 271,
	"./en-ie.js": 271,
	"./en-nz": 272,
	"./en-nz.js": 272,
	"./eo": 273,
	"./eo.js": 273,
	"./es": 274,
	"./es-do": 275,
	"./es-do.js": 275,
	"./es-us": 276,
	"./es-us.js": 276,
	"./es.js": 274,
	"./et": 277,
	"./et.js": 277,
	"./eu": 278,
	"./eu.js": 278,
	"./fa": 279,
	"./fa.js": 279,
	"./fi": 280,
	"./fi.js": 280,
	"./fo": 281,
	"./fo.js": 281,
	"./fr": 282,
	"./fr-ca": 283,
	"./fr-ca.js": 283,
	"./fr-ch": 284,
	"./fr-ch.js": 284,
	"./fr.js": 282,
	"./fy": 285,
	"./fy.js": 285,
	"./gd": 286,
	"./gd.js": 286,
	"./gl": 287,
	"./gl.js": 287,
	"./gom-latn": 288,
	"./gom-latn.js": 288,
	"./gu": 289,
	"./gu.js": 289,
	"./he": 290,
	"./he.js": 290,
	"./hi": 291,
	"./hi.js": 291,
	"./hr": 292,
	"./hr.js": 292,
	"./hu": 293,
	"./hu.js": 293,
	"./hy-am": 294,
	"./hy-am.js": 294,
	"./id": 295,
	"./id.js": 295,
	"./is": 296,
	"./is.js": 296,
	"./it": 297,
	"./it.js": 297,
	"./ja": 298,
	"./ja.js": 298,
	"./jv": 299,
	"./jv.js": 299,
	"./ka": 300,
	"./ka.js": 300,
	"./kk": 301,
	"./kk.js": 301,
	"./km": 302,
	"./km.js": 302,
	"./kn": 303,
	"./kn.js": 303,
	"./ko": 304,
	"./ko.js": 304,
	"./ky": 305,
	"./ky.js": 305,
	"./lb": 306,
	"./lb.js": 306,
	"./lo": 307,
	"./lo.js": 307,
	"./lt": 308,
	"./lt.js": 308,
	"./lv": 309,
	"./lv.js": 309,
	"./me": 310,
	"./me.js": 310,
	"./mi": 311,
	"./mi.js": 311,
	"./mk": 312,
	"./mk.js": 312,
	"./ml": 313,
	"./ml.js": 313,
	"./mr": 314,
	"./mr.js": 314,
	"./ms": 315,
	"./ms-my": 316,
	"./ms-my.js": 316,
	"./ms.js": 315,
	"./mt": 317,
	"./mt.js": 317,
	"./my": 318,
	"./my.js": 318,
	"./nb": 319,
	"./nb.js": 319,
	"./ne": 320,
	"./ne.js": 320,
	"./nl": 321,
	"./nl-be": 322,
	"./nl-be.js": 322,
	"./nl.js": 321,
	"./nn": 323,
	"./nn.js": 323,
	"./pa-in": 324,
	"./pa-in.js": 324,
	"./pl": 325,
	"./pl.js": 325,
	"./pt": 326,
	"./pt-br": 327,
	"./pt-br.js": 327,
	"./pt.js": 326,
	"./ro": 328,
	"./ro.js": 328,
	"./ru": 329,
	"./ru.js": 329,
	"./sd": 330,
	"./sd.js": 330,
	"./se": 331,
	"./se.js": 331,
	"./si": 332,
	"./si.js": 332,
	"./sk": 333,
	"./sk.js": 333,
	"./sl": 334,
	"./sl.js": 334,
	"./sq": 335,
	"./sq.js": 335,
	"./sr": 336,
	"./sr-cyrl": 337,
	"./sr-cyrl.js": 337,
	"./sr.js": 336,
	"./ss": 338,
	"./ss.js": 338,
	"./sv": 339,
	"./sv.js": 339,
	"./sw": 340,
	"./sw.js": 340,
	"./ta": 341,
	"./ta.js": 341,
	"./te": 342,
	"./te.js": 342,
	"./tet": 343,
	"./tet.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 349,
	"./tzm-latn": 350,
	"./tzm-latn.js": 350,
	"./tzm.js": 349,
	"./uk": 351,
	"./uk.js": 351,
	"./ur": 352,
	"./ur.js": 352,
	"./uz": 353,
	"./uz-latn": 354,
	"./uz-latn.js": 354,
	"./uz.js": 353,
	"./vi": 355,
	"./vi.js": 355,
	"./x-pseudo": 356,
	"./x-pseudo.js": 356,
	"./yo": 357,
	"./yo.js": 357,
	"./zh-cn": 358,
	"./zh-cn.js": 358,
	"./zh-hk": 359,
	"./zh-hk.js": 359,
	"./zh-tw": 360,
	"./zh-tw.js": 360
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 545;

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isCordova */
/* unused harmony export documentUrlFactory */
/* unused harmony export gmapsProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__native_google_maps_native_google_maps__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__javascript_google_maps_javascript_google_maps__ = __webpack_require__(652);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Checks if the supplied document url is a one used by
 * cordova to load the app.
 *
 * @param {string} docUrl the current document url.
 */
function isCordova(docUrl) {
    // if running `ionic cordova run PLATFORM --device --livereload`
    // it loads from the local ip of the host.
    var DEFAULT_LIVERELOAD_URL = new RegExp(/^http:\/\/\d+\.\d+\.\d+\.\d+\:810[0-9]/);
    // cordova by default loads app from file
    var DEFAULT_WEBVIEW_URL = 'file:///';
    // using ionic wk-webview creates a local webserver on the device to serve the app.
    var WK_WEBVIEW_URL = 'http://localhost:8080/var/containers/Bundle/Application';
    return docUrl.match(DEFAULT_LIVERELOAD_URL)
        || docUrl.startsWith(DEFAULT_WEBVIEW_URL)
        || docUrl.startsWith(WK_WEBVIEW_URL);
}
// Injection Token to pass document.url to angular contexts
var DOCUMENT_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('document-url');
// returns the document url -- necessary for AoT compilation
function documentUrlFactory() {
    return document.URL;
}
// Need factories for every provider that
// changes based on app runtime context
function gmapsProviderFactory(docUrl, geolocation, gmaps) {
    return isCordova(docUrl)
        ? new __WEBPACK_IMPORTED_MODULE_3__native_google_maps_native_google_maps__["a" /* NativeGoogleMapsProvider */](geolocation, gmaps)
        : new __WEBPACK_IMPORTED_MODULE_4__javascript_google_maps_javascript_google_maps__["a" /* JavascriptGoogleMapsProvider */](geolocation);
}
/**
 * Import this module into your root module.
 *
 * Use it's static `.forRoot()` when importing
 * angular would register the providers into DI
 */
var MapProvidersModule = /** @class */ (function () {
    function MapProvidersModule() {
    }
    MapProvidersModule_1 = MapProvidersModule;
    MapProvidersModule.forRoot = function () {
        return {
            ngModule: MapProvidersModule_1,
            providers: [
                {
                    provide: DOCUMENT_URL,
                    useFactory: documentUrlFactory,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__native_google_maps_native_google_maps__["a" /* NativeGoogleMapsProvider */],
                    useFactory: gmapsProviderFactory,
                    deps: [DOCUMENT_URL, __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */]],
                },
            ],
        };
    };
    MapProvidersModule = MapProvidersModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])()
    ], MapProvidersModule);
    return MapProvidersModule;
    var MapProvidersModule_1;
}());

//# sourceMappingURL=map.providers.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JavascriptGoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_loader__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_maps_styles__ = __webpack_require__(422);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JavascriptGoogleMapsProvider = /** @class */ (function () {
    function JavascriptGoogleMapsProvider(geolocation) {
        this.geolocation = geolocation;
        this.markers = new Array();
    }
    // Note: Call this method on ngAfterViewInit
    JavascriptGoogleMapsProvider.prototype.create = function (map, markers) {
        var _this = this;
        if (markers === void 0) { markers = []; }
        return __WEBPACK_IMPORTED_MODULE_2__google_maps_loader__["a" /* GoogleMapsLoader */]
            .load()
            .then(function (_) { return _this.initMap(map); })
            .then(function (_) { return _this.setupCustomHTMLMarker(); })
            .then(function (_) { return _this.addGeolocationPin(map.showGeolocation); })
            .then(function (_) { return _this.loadMarkers(markers); });
    };
    JavascriptGoogleMapsProvider.prototype.initMap = function (map) {
        var lat = map.lat, lng = map.lng, zoom = map.zoom;
        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: this.parseMapStyles(map),
        };
        this.map = new google.maps.Map(map.element.nativeElement, mapOptions);
        return Promise.resolve(this.map);
    };
    JavascriptGoogleMapsProvider.prototype.setupCustomHTMLMarker = function () {
        this.USGSOverlay = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(latlng, map, parentclass, html, isPointer, div) {
                var _this = _super.call(this) || this;
                _this.latlng = latlng;
                _this.map = map;
                _this.parentclass = parentclass;
                _this.html = html;
                _this.isPointer = isPointer;
                _this.div = div;
                _this.setMap(map);
                return _this;
            }
            class_1.prototype.onAdd = function () {
                // Create the parent element marker
                this.div = document.createElement('div');
                // Set any classes defined for the parent element
                this.div.className = this.parentclass;
                // Parent element must be set to absolute so it's positioned correctly on the map
                this.div.style.position = 'absolute';
                // If the user wants the cursor to become a pointer when hovered
                if (this.isPointer) {
                    this.div.style.cursor = 'pointer';
                }
                // Add the user defined HTML string to the parent div marker...
                this.div.innerHTML = this.html;
                // The parent div gets added to the overlay image
                var panes = this.getPanes();
                panes.overlayImage.appendChild(this.div);
            };
            class_1.prototype.draw = function () {
                var _this = this;
                // We make sure that the marker becomes clickable in case the user wants to do something on click
                google.maps.event.addDomListener(this.div, 'click', function (event) {
                    google.maps.event.trigger(_this, 'click', event);
                });
                // We create the actual position of the marker on the map, this is where the marker gets added
                var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
                if (point) {
                    this.div.style.left = point.x + "px";
                    this.div.style.top = point.y + "px";
                }
            };
            return class_1;
        }(google.maps.OverlayView));
    };
    JavascriptGoogleMapsProvider.prototype.addGeolocationPin = function (showGeolocation) {
        var _this = this;
        if (showGeolocation == 'true') {
            return this.getGeolocationPosition().then(function (position) {
                var geolocationHTML = "<div class='geolocation-inner'></div>";
                new _this.USGSOverlay(position, _this.map, 'geolocation', geolocationHTML, false);
            });
        }
    };
    JavascriptGoogleMapsProvider.prototype.parseMapStyles = function (map) {
        return typeof map.mapStyle === 'string'
            ? __WEBPACK_IMPORTED_MODULE_3__components_maps_styles__["a" /* IonMapStyles */][map.mapStyle.toLowerCase()]
            : map.mapStyle;
    };
    JavascriptGoogleMapsProvider.prototype.loadMarkers = function (markers) {
        var _this = this;
        markers.map(function (marker) { return marker.customHTML ? _this.addHtmlMarker(marker) : _this.addMarker(marker); });
    };
    JavascriptGoogleMapsProvider.prototype.centerToGeolocation = function () {
        var _this = this;
        return this.getGeolocationPosition()
            .then(function (position) { return _this.centerToPosition(position); });
    };
    JavascriptGoogleMapsProvider.prototype.getGeolocationPosition = function () {
        return this.geolocation.getCurrentPosition()
            .then(function (position) { return new google.maps.LatLng(position.coords.latitude, position.coords.longitude); });
    };
    JavascriptGoogleMapsProvider.prototype.centerToPosition = function (latLng) {
        return Promise.resolve(this.map.panTo(latLng));
    };
    JavascriptGoogleMapsProvider.prototype.addHtmlMarker = function (marker) {
        var lat = marker.lat, lng = marker.lng, customHTML = marker.customHTML, parentClass = marker.parentClass;
        new this.USGSOverlay(new google.maps.LatLng(lat, lng), this.map, parentClass, customHTML, true);
    };
    JavascriptGoogleMapsProvider.prototype.addMarker = function (marker) {
        var _this = this;
        var lat = marker.lat, lng = marker.lng, label = marker.label, iconUrl = marker.iconUrl, title = marker.title, animated = marker.animated, draggable = marker.draggable, opacity = marker.opacity, visible = marker.visible, zIndex = marker.zIndex;
        var mapMarker = new google.maps.Marker({
            label: label,
            title: title,
            opacity: opacity,
            visible: visible,
            zIndex: zIndex,
            icon: iconUrl,
            draggable: draggable,
            position: new google.maps.LatLng(lat, lng),
            map: this.map,
            animation: animated ? google.maps.Animation.DROP : null,
        });
        if (title) {
            var infoWindow_1 = new google.maps.InfoWindow({ content: title });
            mapMarker.addListener('click', function (_) { return infoWindow_1.open(_this.map, mapMarker); });
            // infoWindow.addListener('click', _ => infoClickCallback);
        }
        this.markers.push(mapMarker);
        return Promise.resolve(mapMarker);
    };
    JavascriptGoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], JavascriptGoogleMapsProvider);
    return JavascriptGoogleMapsProvider;
}());

//# sourceMappingURL=javascript-google-maps.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_maps_settings__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GoogleMapsLoader = /** @class */ (function () {
    function GoogleMapsLoader() {
    }
    GoogleMapsLoader_1 = GoogleMapsLoader;
    GoogleMapsLoader.load = function () {
        // First time 'load' is called?
        if (!GoogleMapsLoader_1.promise) {
            // Make promise to load
            GoogleMapsLoader_1.promise = new Promise(function (resolve) {
                // Set callback for when google maps is loaded.
                window['__onGoogleMapsLoaded'] = function (ev) {
                    resolve('google maps api loaded');
                };
                var url = __WEBPACK_IMPORTED_MODULE_1__google_maps_settings__["a" /* mapSettings */].url, version = __WEBPACK_IMPORTED_MODULE_1__google_maps_settings__["a" /* mapSettings */].version, apiKey = __WEBPACK_IMPORTED_MODULE_1__google_maps_settings__["a" /* mapSettings */].apiKey;
                var mapsNode = document.createElement('script');
                mapsNode.src = url + "js?v=" + version + "&key=" + apiKey + "&callback=__onGoogleMapsLoaded";
                mapsNode.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(mapsNode);
            });
        }
        // Always return promise. When 'load' is called many times, the promise is already resolved.
        return GoogleMapsLoader_1.promise;
    };
    GoogleMapsLoader = GoogleMapsLoader_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GoogleMapsLoader);
    return GoogleMapsLoader;
    var GoogleMapsLoader_1;
}());

//# sourceMappingURL=google-maps.loader.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapSettings; });
var mapSettings = {
    version: '3.30',
    url: 'https://maps.google.com/maps/api/',
    apiKey: 'AIzaSyBaTVlHDndpSgbdDnRsCy2xFJt2tB41NB0',
    staticMapsUrl: 'https://maps.googleapis.com/maps/api/staticmap?'
};
//# sourceMappingURL=google-maps.settings.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonMaps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_marker_ion_marker__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_maps_native_google_maps_native_google_maps__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IonMaps = /** @class */ (function () {
    function IonMaps(mapsCtrl) {
        this.mapsCtrl = mapsCtrl;
        /**
         * The height of the map. Default value is '100%'.
         */
        this.height = '100%';
        /**
         * The width of the map. Default value is '100%'.
         */
        this.width = '100%';
        /**
         * The zoom of the map. Default value is 16.
         */
        this.zoom = 15;
    }
    IonMaps.prototype.ngAfterContentInit = function () {
        // After content is rendered, load markers, if any
        var markers = this.markers.toArray();
        // Then, generate the map itself
        this.mapsCtrl.create(this, markers);
    };
    IonMaps.prototype.centerToGeolocation = function () {
        return this.mapsCtrl.centerToGeolocation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMaps.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMaps.prototype, "lng", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMaps.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IonMaps.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMaps.prototype, "zoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonMaps.prototype, "tilt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IonMaps.prototype, "showGeolocation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IonMaps.prototype, "mapStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], IonMaps.prototype, "element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__ion_marker_ion_marker__["a" /* IonMarker */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], IonMaps.prototype, "markers", void 0);
    IonMaps = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-maps',
            template: "\n    <div #map [style.height]=\"height\" [style.width]=\"width\"></div>\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_maps_native_google_maps_native_google_maps__["a" /* NativeGoogleMapsProvider */]])
    ], IonMaps);
    return IonMaps;
}());

//# sourceMappingURL=ion-maps.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Renderer } from '@angular/core/src/render/api';
/**
 * Generated class for the ExpandableItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExpandableItemComponent = /** @class */ (function () {
    // text: string;
    function ExpandableItemComponent(renderer) {
        this.renderer = renderer;
        console.log('Hello ExpandableItemComponent Component');
        // this.text = 'Hello World';
    }
    ExpandableItemComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ExpandableItemComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableItemComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableItemComponent.prototype, "expandHeight", void 0);
    ExpandableItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable-item',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/expandable-item/expandable-item.html"*/'<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n  <ng-content></ng-content>\n</div>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/expandable-item/expandable-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableItemComponent);
    return ExpandableItemComponent;
}());

//# sourceMappingURL=expandable-item.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}%\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the StarRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        this.starRating = [];
        console.log('Hello StarRatingComponent Component');
    }
    StarRatingComponent.prototype.ngAfterContentInit = function () {
        this.generateStarList(this.rating);
    };
    StarRatingComponent.prototype.generateStarList = function (rating) {
        var remainder = rating - Math.floor(rating);
        var whole = Math.floor(rating);
        this.remainder = remainder;
        for (var i = 0; i < whole; i++) {
            this.starRating.push(i);
        }
        console.log(this.starRating);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StarRatingComponent.prototype, "rating", void 0);
    StarRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'star-rating',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/star-rating/star-rating.html"*/'<!-- Generated template for the StarRatingComponent component -->\n<div>\n<ion-grid>\n  <ion-row>\n      <ion-col *ngFor="let rate of starRating">\n        <ion-icon class="icon icon-ios ion-ios-star" aria-label="star">\n        </ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon *ngIf="remainder" class="icon icon-ios ion-ios-star-half" aria-label="star">\n        </ion-icon>\n      </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/star-rating/star-rating.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());

//# sourceMappingURL=star-rating.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubbleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ChatBubbleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatBubbleComponent = /** @class */ (function () {
    function ChatBubbleComponent() {
        console.log('Hello ChatBubbleComponent Component');
        // firebase
        //   .database()
        //   .ref('/userProfile')
        //   .child(firebase.auth().currentUser.uid)
        //   .once('value')
        //   .then(res => {
        //     console.log(res.val());
        //     this.user = res.val();
        //     this.msg = {
        //       img: this.user.avatarImage,
        //       messageText: 'Am I dreaming?',
        //       position: 'left',
        //       messageDate: '12/3/2016',
        //       messageSender: 'Gregory',
        //     };
        //   });
    }
    ChatBubbleComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatBubbleComponent.prototype, "msg", void 0);
    ChatBubbleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-bubble',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/chat-bubble/chat-bubble.html"*/'<!-- Generated template for the ChatBubbleComponent component -->\n<div class="chatBubble">\n  <img class="profile-pic {{msg.position}}" src="{{msg.img}}">\n  <div class="chat-bubble {{msg.position}}">\n    <div class="message">{{msg.messageText}}</div>\n    <div class="message-detail">\n      <span style="font-weight:bold;">{{msg.messageSender}} </span>\n      <span>{{msg.messageDate}}</span>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/components/chat-bubble/chat-bubble.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ChatBubbleComponent);
    return ChatBubbleComponent;
}());

//# sourceMappingURL=chat-bubble.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_maps_map_providers_module__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ion_maps_ion_maps__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ion_marker_ion_marker__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expandable_item_expandable_item__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__star_rating_star_rating__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_bubble_chat_bubble__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { IonStaticMapsComponent } from './ion-static-maps/ion-static-maps';




// import { FavouriteIndicatorComponent } from './favourite-indicator/favourite-indicator';

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ion_maps_ion_maps__["a" /* IonMaps */],
                // IonStaticMapsComponent,
                __WEBPACK_IMPORTED_MODULE_4__ion_marker_ion_marker__["a" /* IonMarker */],
                __WEBPACK_IMPORTED_MODULE_5__expandable_item_expandable_item__["a" /* ExpandableItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__star_rating_star_rating__["a" /* StarRatingComponent */],
                // FavouriteIndicatorComponent,
                __WEBPACK_IMPORTED_MODULE_8__chat_bubble_chat_bubble__["a" /* ChatBubbleComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2__providers_maps_map_providers_module__["a" /* MapProvidersModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ion_maps_ion_maps__["a" /* IonMaps */],
                // IonStaticMapsComponent,
                __WEBPACK_IMPORTED_MODULE_4__ion_marker_ion_marker__["a" /* IonMarker */],
                __WEBPACK_IMPORTED_MODULE_5__expandable_item_expandable_item__["a" /* ExpandableItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__star_rating_star_rating__["a" /* StarRatingComponent */],
                // FavouriteIndicatorComponent,
                __WEBPACK_IMPORTED_MODULE_8__chat_bubble_chat_bubble__["a" /* ChatBubbleComponent */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__star_rating_star_rating__["a" /* StarRatingComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_search__ = __webpack_require__(163);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, formBuilder, search) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.search = search;
        this.counter = this.getRandomInt();
        this.searchForm = formBuilder.group({
            search: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SearchPage.prototype.getRandomInt = function () {
        var min = Math.ceil(1);
        var max = Math.floor(100000);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        this.previousTerms = this.search.searches$;
    };
    SearchPage.prototype.onEnterTap = function (event) {
        console.log(event);
        this.navCtrl.pop();
    };
    SearchPage.prototype.onSubmit = function () {
        this.searchTerm = {
            id: this.counter,
            term: this.searchForm.get('search').value
        };
        console.log('this.searchTerm');
        console.log(this.searchTerm);
        this.search.updateSearch(this.searchTerm);
        this.navCtrl.pop();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="false">\n\n    <ion-title>Search</ion-title>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <input type="text" placeholder="Enter some stuff"> -->\n  <form [formGroup]="searchForm" (submit)="onSubmit()">\n  <ion-item>\n    <ion-label stacked> Look for beauty </ion-label>\n    <ion-input type="text" placeholder="Search" formControlName="search"></ion-input>\n  </ion-item>\n  </form>\n\n  <ion-item-divider>\n\n  </ion-item-divider>\n\n<!-- <div *ngIf="previousTerms && previousTerms.length > 0; then current else previous"></div> -->\n  <!-- <ng-template #previous> -->\n    <ion-item *ngFor="let item of previousTerms | async">\n    {{item.term}}\n  </ion-item>\n  <!-- </ng-template> -->\n  <!-- <ng-template #current> -->\n\n  <!-- </ng-template> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_search_search__["a" /* SearchProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/man-studio-portrait-light-90764.jpeg',
            'assets/img/background/pexels-photo-556665_1.jpg',
            'assets/img/background/pexels-photo-97218_1.jpg'
        ];
        this.tourSlides = [
            {
                slideText: 'Find salons and beauty specialists available near to you'
            },
            {
                slideText: 'View recommendations, ratings and  reviews '
            },
            {
                slideText: 'Get deals on the treatments you want'
            }
        ];
        this.lookingTitle = 'Looking for Beauty';
        this.offeringTitle = 'Offering Beauty';
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.openPage = function (el) {
        console.log(el);
        var type = el._elementRef.nativeElement.name;
        this.navCtrl.push('LoginPage', { loginType: type });
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/landing/landing.html"*/'<ion-header no-border>\n</ion-header>\n<ion-content class="landing-page">\n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n    </ion-slide>\n  </ion-slides>\n\n  <div class="landing-page--login-container">\n    <div class="ab-logo"></div>\n    <div class="ab-text"></div>\n      <ion-slides centeredSlides pager autoplay="3000" speed="500" loop class="landing-page--tour-slides">\n        <ion-slide *ngFor="let slide of tourSlides">\n          <div>{{slide.slideText}}</div>\n          <br>\n        </ion-slide>\n      </ion-slides>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n        <button #looking name="Looking" ion-button margin color="tonal" (click)="openPage(looking)"> {{lookingTitle}} </button>\n        <button #offering name="Offering" ion-button margin color="tonal" (click)="openPage(offering)"> {{offeringTitle}} </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/landing/landing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginBackgroundSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginBackgroundSliderPage = /** @class */ (function () {
    function LoginBackgroundSliderPage(formBuilder, navCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/background-2.jpg',
            'assets/img/background/background-3.jpg',
            'assets/img/background/background-4.jpg'
        ];
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginBackgroundSliderPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginBackgroundSlider Page');
    };
    LoginBackgroundSliderPage.prototype.openResetPassword = function () {
        console.log('Reset password clicked');
    };
    LoginBackgroundSliderPage.prototype.doLogin = function () {
        if (!this.loginForm.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            console.log('Invalid or empty data');
        }
        else {
            var userEmail = this.loginForm.value.email;
            var userPassword = this.loginForm.value.password;
            console.log('user data', userEmail, userPassword);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    LoginBackgroundSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-background-slider',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/login-background-slider/login-background-slider.html"*/'<ion-header no-border >\n  <ion-navbar transparent hideBackButton="true">\n  </ion-navbar>\n</ion-header>\n<ion-content no-bounce>\n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n    </ion-slide>\n  </ion-slides>\n  <div class="login-container">\n    <form (submit)="doLogin()">\n      <!-- <strong>Login:</strong> -->\n      <ion-item>\n        <ion-input type="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <p (click)="openResetPassword()">\n        <strong>Forgot your password?</strong>\n      </p>\n      <div ion-buttons>\n<button ion-button margin color="tonal">Login</button>\n<button ion-button icon-start margin color="blue"><ion-icon name="logo-facebook"></ion-icon> Sign in with Facebook</button>\n      </div>\n    </form>\n    <img class="logo" src="assets/img/Logo Main - Tonal2.png" />\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/login-background-slider/login-background-slider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]])
    ], LoginBackgroundSliderPage);
    return LoginBackgroundSliderPage;
}());

//# sourceMappingURL=login-background-slider.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app_test_config__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(store, formBuilder, navCtrl, navParams, modal, afAuth, auth, loadingCtrl, storage, user) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.afAuth = afAuth;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.user = user;
        this.invalidLogin = false;
        this.stylistRegistered = false;
        this.loginForm = formBuilder.group({
            email: [
                __WEBPACK_IMPORTED_MODULE_4__config_app_test_config__["a" /* APP_TEST_CONFIG */].email,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]),
            ],
            password: [
                __WEBPACK_IMPORTED_MODULE_4__config_app_test_config__["a" /* APP_TEST_CONFIG */].password,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            ],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        console.log(this.navParams.get('loginType'));
        this.loginType = this.navParams.get('loginType');
        this.storage
            .getStorage('stylistRegistered')
            .subscribe(function (res) { return (_this.stylistRegistered = res); });
        // TODO this is not good to determine who is a Stylist!
        switch (this.loginType) {
            case 'Looking':
                this.isStylist = false;
                break;
            case 'Offering':
                this.isStylist = true;
                break;
        }
        console.log(this.isStylist);
    };
    LoginPage.prototype.openResetPassword = function () {
        var passModal = this.modal.create('PasswordPage');
        passModal.present();
    };
    LoginPage.prototype.onLoginSubmit = function () {
        var _this = this;
        var userEmail = this.loginForm.value.email;
        var userPassword = this.loginForm.value.password;
        this.loading = this.loadingCtrl.create();
        this.loading.present().then(function () {
            _this.auth
                .doNativeLogin(userEmail, userPassword)
                .then(function (res) {
                console.log(res);
                var uid = res.uid;
                _this.user
                    .getUserById(uid)
                    .valueChanges()
                    .subscribe(function (res) {
                    _this.loading.dismiss().catch();
                    _this.navCtrl.push('TabsPage', { isStylist: res.isStylist });
                });
            })
                .catch(function (err) {
                _this.invalidLogin = true;
                _this.error = err.message; // This is the Firebase error - too techy?
                console.error(err.code);
                console.error(err.message);
                _this.loading.dismiss();
            });
        });
    };
    LoginPage.prototype.onFacebookTap = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present().then(function () {
            _this.auth
                .doFacebookLogin(_this.isStylist)
                .then(function (res) {
                console.log(res);
                loading.dismiss();
                // this.navCtrl.push('LookingPage');
                _this.setNavigationPage(_this.isStylist);
            })
                .catch(function (err) {
                console.error(err);
                loading.dismiss();
                _this.invalidLogin = true;
                _this.error = err.email + " " + err.message; // This is the Firebase error - too techy?
            });
        });
    };
    LoginPage.prototype.onGoogleTap = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present().then(function () {
            _this.auth
                .doGoogleLogin(_this.isStylist)
                .then(function (res) {
                loading.dismiss();
                console.log(res);
                _this.setNavigationPage(_this.isStylist);
            })
                .catch(function (err) {
                loading.dismiss();
                console.error(err);
                _this.invalidLogin = true;
                _this.error = err; // Actual error code returned from Google Auth i.e. 12501
            });
        });
    };
    LoginPage.prototype.onTwitterTap = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present().then(function () {
            _this.auth.doTwitterLogin(_this.isStylist).then(function (res) {
                console.log(res);
                loading.dismiss();
                _this.setNavigationPage(_this.isStylist);
            }, function (err) {
                loading.dismiss();
                console.error(err); // Eg: Failed Login Session
                // We are not setting this.error here as Twitter opens up the native Oauth window so
                // any errors are captured there.
            });
        });
    };
    LoginPage.prototype.openRegisterPage = function () {
        var regModal = this.modal.create('RegisterPage', {
            isStylist: this.isStylist,
        });
        regModal.present();
    };
    /**
     * Reset boolean for server side error display
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.onEmailFocus = function () {
        this.invalidLogin = false;
    };
    /**
     * Toggle password or text input
     *
     * @param {any} input
     * @memberof LoginPage
     */
    LoginPage.prototype.showPassword = function (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    };
    LoginPage.prototype.setNavigationPage = function (stylist) {
        if (!stylist) {
            // A regular user
            return this.navCtrl.push('LookingPage');
        }
        else {
            // A first time stylist login
            if (this.stylistRegistered) {
                this.navCtrl.push('TabsPage', { isStylist: true });
            }
            else {
                // subsequent stylist logins
                return this.navCtrl.push('StylistRegisterPage');
            }
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content class="page-login">\n    <div class="page-login--login-container">\n      <form [formGroup]="loginForm" (submit)="onLoginSubmit()">\n        <ion-item>\n          <ion-input\n          formControlName="email"\n          type="email"\n          placeholder="Email"\n          (focus)="onEmailFocus()"\n          clearInput></ion-input>\n        </ion-item>\n        <ion-item>\n            <button type="button"\n              ion-button\n              icon-only\n              outline\n              clear\n              item-right\n              (click)="showPassword(input)">\n                <ion-icon\n                [style.color]="input.type === \'password\' ? \'black\' : \'white\'"\n                name="eye">\n                </ion-icon>\n            </button>\n          <ion-input #input\n            formControlName="password"\n            type="password"\n            placeholder="Password"\n            (ionFocus)="onEmailFocus()"\n            clearInput>\n          </ion-input>\n        </ion-item>\n        <div *ngIf="invalidLogin" class="invalid-login"> {{error}} </div>\n        <p (click)="openResetPassword()">\n          <strong>Forgot your password?</strong>\n        </p>\n          <button class="login-button"\n            ion-button\n            margin\n            [disabled]="!loginForm.valid"\n            color="tonal">Login\n          </button>\n      </form>\n\n          <div>\n          <button ion-button icon-only margin color="facebook" (tap)="onFacebookTap()">\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n          <button ion-button icon-only margin color="google" (tap)="onGoogleTap()">\n            <ion-icon name="logo-google"></ion-icon>\n          </button>\n          <button ion-button icon-only margin color="twitter" (tap)="onTwitterTap()">\n            <ion-icon name="logo-twitter"></ion-icon>\n          </button>\n          </div>\n            <div> Don\'t have an account?\n              <b (click)="openRegisterPage()">Sign up</b>\n            </div>\n            <br>\n            <div class="ab-logo"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_TEST_CONFIG; });
var APP_TEST_CONFIG = {
    email: '',
    password: ''
};
//# sourceMappingURL=app.test.config.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_password_validation__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_location__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_auth_auth_actions__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__ = __webpack_require__(36);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, user, location, auth, storage, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.user = user;
        this.location = location;
        this.auth = auth;
        this.storage = storage;
        this.store = store;
        this.invalidReg = false;
        this.passwordError = 'Passwords do not match';
        this.minLengthError = 'Passwords must be 6 characters or more';
        this.termsConditionsText = '<p> By signing up you agree to the <a href="">Terms and Conditions</a> and <a href=""> Privacy Policy</a></p>';
        this.registerForm = formBuilder.group({
            displayName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            emailAddress: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]),
            ],
            password: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            ],
            confpassword: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            ],
        }, { validator: __WEBPACK_IMPORTED_MODULE_3__forms_password_validation__["a" /* PasswordValidation */].MatchPassword });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegisterPage');
        console.log(this.navParams.get('isStylist'));
        this.storage
            .getStorage('geolocation')
            .subscribe(function (res) { return (_this.coords = res); });
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        console.log(this.registerForm.value);
        if (this.registerForm.valid) {
            console.log(this.coords);
            var user_1 = this.registerForm.value;
            user_1.homeLocation = this.coords;
            user_1.isStylist = this.navParams.get('isStylist');
            console.log(user_1);
            console.log(JSON.stringify(user_1));
            // this.store.dispatch(new RegisterAction(user));
            this.auth
                .doRegister(user_1)
                .then(function (res) {
                console.log('User Registered : ' + JSON.stringify(res));
                if (user_1.isStylist) {
                    _this.navCtrl.push('StylistRegisterPage');
                }
                else {
                    _this.navCtrl.push('TabsPage', { isStylist: user_1.isStylist });
                }
            })
                .catch(function (err) {
                _this.invalidReg = true;
                _this.regError = err.message;
                console.error(err);
            });
        }
        else {
            // Error!
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__model_auth_auth_actions__["g" /* RegisterErrorAction */](this.registerForm.value));
            this.navCtrl.pop();
            // TODO: Show visual error message
        }
    };
    /**
     * Toggle password or text input
     *
     * @param {any} input
     * @memberof RegisterPage
     */
    RegisterPage.prototype.showPassword = function (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/register/register.html"*/'<ion-header no-border>\n  <ion-navbar transparent hideBackButton="false">\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-register">\n  <div class="page-register--register-container">\n    <form [formGroup]="registerForm" (submit)="doRegister()">\n      <ion-item>\n        <ion-input formControlName="displayName" type="text" placeholder="Name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input formControlName="emailAddress" type="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n          <button\n          type="button"\n          ion-button\n          icon-only\n          outline\n          clear\n          item-right\n          (click)="showPassword(pwinput)">\n            <ion-icon\n            [style.color]="pwinput.type === \'password\' ? \'black\' : \'white\'"\n            name="eye">\n            </ion-icon>\n            </button>\n        <ion-input #pwinput\n          formControlName="password"\n          type="password"\n          placeholder="Password"\n          clearInput>\n        </ion-input>\n      </ion-item>\n        <div *ngIf="registerForm.controls.password.errors?.minlength" class="invalid-reg">{{minLengthError}}</div>\n      <ion-item>\n        <button\n          type="button"\n          ion-button\n          icon-only\n          outline\n          clear\n          item-right\n          (click)="showPassword(input)">\n            <ion-icon\n            [style.color]="input.type === \'password\' ? \'black\' : \'white\'"\n            name="eye">\n            </ion-icon>\n            </button>\n        <ion-input #input\n          formControlName="confpassword"\n          type="password"\n          placeholder="Confirm Password"\n          clearInput>\n        </ion-input>\n      </ion-item>\n        <div *ngIf="registerForm.controls.confpassword.errors?.MatchPassword" class="invalid-reg">{{passwordError}}</div>\n        <div *ngIf="invalidReg" class="invalid-reg"> {{regError}} </div>\n\n      <button\n        ion-button\n        margin\n        [disabled]="!registerForm.valid"\n        color="tonal">Register\n      </button>\n\n    </form>\n    <div [innerHtml]="termsConditionsText"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidation; });
/**
 * Validates password and confirm password fields
 *
 * @export
 * @class PasswordValidation
 */
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value;
        var confirmPassword = AC.get('confpassword').value;
        if (password !== confirmPassword) {
            AC.get('confpassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());

//# sourceMappingURL=password-validation.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings_bookings__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__availability_availability__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Keyboard } from '@ionic-native/keyboard';






var TabsPage = /** @class */ (function () {
    function TabsPage(_platform, navParams, 
    // private keyboard: Keyboard,
    navCtrl, events, storage) {
        this._platform = _platform;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.events = events;
        this.storage = storage;
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__bookings_bookings__["a" /* BookingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__["a" /* UserProfilePage */];
        this.tab1Params = { id: 0 };
        // tab2Params = { id: 1, user: '' };
        this.tab3Params = { id: 2 };
        this.tab4Params = { id: 3 };
        var param = navParams.get('isStylist');
        console.log(param);
        if (param) {
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__availability_availability__["a" /* AvailabilityPage */];
            this.tab1Title = 'Availability';
            this.tabTitle = this.tab1Title;
            this.tab1Icon = 'calendar';
            this.tabIcon = this.tab1Icon;
        }
        else {
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
            this.tab1Title = 'Search';
            this.tabTitle = this.tab1Title;
            this.tab1Icon = 'search';
            this.tabIcon = this.tab1Icon;
        }
        // events.subscribe('change-stylist-profile-tab', (tab, id, param) => {
        //   this.tab2Params.id = id;
        //   this.tab2Params.user = param;
        //   this.tabs.select(tab);
        // });
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        // this.keyboard.onKeyboardShow().subscribe(() => {
        //   this.showkeyboard = true;
        // });
        // this.keyboard.onKeyboardHide().subscribe(() => {
        //   this.showkeyboard = false;
        // });
        // Dynamically set the .mdi class to show the MD icon for Consultas
        // let parentnode = document.getElementById('tab-t0-1');
        // let childnode = parentnode.getElementsByClassName('tab-button-icon')[0];
        // childnode.className += ' mdi';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Tabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Tabs */])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" [rootParams]="tab1Params" [tabTitle]="tab1Title" [tabIcon]="tab1Icon"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" [rootParams]="tab2Params" tabTitle="Stylist" tabIcon="cut"></ion-tab> -->\n  <ion-tab [root]="tab3Root" [rootParams]="tab3Params" tabTitle="Bookings" tabIcon="bookmarks"></ion-tab>\n  <ion-tab [root]="tab4Root" [rootParams]="tab4Params" tabTitle="Profile" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableBeautyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_location__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stylist_stylist__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AvailableBeautyApp = /** @class */ (function () {
    function AvailableBeautyApp(platform, statusBar, splashScreen, stylist, location, afAuth, storage) {
        var _this = this;
        this.stylist = stylist;
        this.location = location;
        this.afAuth = afAuth;
        this.storage = storage;
        this.rootPage = 'LandingPage'; // This needs to be updated once logged in / registered to be TabsPage
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.watchGeoLocation();
            _this.checkAuthState();
        });
    }
    AvailableBeautyApp.prototype.watchGeoLocation = function () {
        this.location.watchGeoLocation();
    };
    AvailableBeautyApp.prototype.checkAuthState = function () {
        var _this = this;
        console.log('checking auth state....');
        this.afAuth.authState.subscribe(function (res) {
            if (!res) {
                // Unauthenticated state
                _this.rootPage = 'LandingPage';
            }
            else {
                var uid_1 = res.uid;
                // Check if is Stylist or User
                _this.storage.getStorage('isStylist').subscribe(function (res) {
                    console.log(res);
                    if (!res) {
                        _this.rootPage = 'LookingPage';
                    }
                    else {
                        _this.stylist
                            .getStylist(uid_1)
                            .valueChanges()
                            .subscribe(function (res) {
                            console.log(res);
                            if (res && res.length > 0) {
                                // Has a stylistProfile
                                _this.rootPage = 'AvailabilityPage';
                            }
                            else {
                                _this.rootPage = 'StylistRegisterPage';
                            }
                        });
                    }
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('#myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
    ], AvailableBeautyApp.prototype, "nav", void 0);
    AvailableBeautyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/app/app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_stylist_stylist__["a" /* StylistProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */]])
    ], AvailableBeautyApp);
    return AvailableBeautyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = APP_REDUCER;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_reducer__ = __webpack_require__(711);


var reducers = {
    auth: __WEBPACK_IMPORTED_MODULE_1__auth_auth_reducer__["a" /* authReducer */]
};
// const reducer: ActionReducer<AppState> = (compose({}, combineReducers)(reducers));
var reducer = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["k" /* combineReducers */])(reducers);
function APP_REDUCER(state, action) {
    return reducer(state, action);
}
//# sourceMappingURL=app.reducer.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_state__ = __webpack_require__(712);


function authReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__auth_state__["a" /* initialState */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["b" /* LOGIN_SUCCESS */]:
            return Object.assign({}, state, {
                isLoggedIn: true,
                user: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["c" /* LOGOUT_SUCCESS */]:
            return Object.assign({}, state, {
                isLoggedIn: false,
            });
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["f" /* REGISTER_SUCCESS */]:
            return Object.assign({}, state, {
                registrationDetails: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["e" /* REGISTER_ERROR */]:
            return Object.assign({}, state, {
                registrationError: action.payload
            });
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducer.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
var initialState = {
    isLoggedIn: false
};
//# sourceMappingURL=auth.state.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_actions__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_user__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, auth, store, user, app) {
        var _this = this;
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.user = user;
        this.app = app;
        this.login = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__auth_actions__["a" /* LOGIN */])
            .map(function (action) {
            // Workaround typechecking payload on Action https://github.com/ngrx/platform/issues/31#issuecomment-308056417
            var payload = action.payload;
            if (payload.isNativeLogin) {
                // this.auth.doLogin(payload.email, payload.password);
            }
            else {
                // this.auth.doSocialLogin();
            }
        });
        this.register = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__auth_actions__["d" /* REGISTER */])
            .map(function (action) {
            console.log(action);
            var payload = action.payload;
            console.log(action.payload);
            // Call service to register with API
            _this.user.addUser(payload)
                .map(function (res) {
                console.log(res);
                new __WEBPACK_IMPORTED_MODULE_5__auth_actions__["h" /* RegisterSuccessAction */]({ res: res });
            })
                .subscribe(function (res) {
                console.log(res);
                // thisthis.store.dispatch(new RegisterSuccessAction());
            }, function (err) {
                console.error(err);
                // this.store.dispatch(new RegisterErrorAction(err));
            });
        });
        this.registerSuccess = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__auth_actions__["f" /* REGISTER_SUCCESS */])
            .map(function (action) {
            var payload = action.payload;
            console.log('registerSuccess Effect');
            _this.app.getActiveNav().push('HomePage');
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"])
    ], AuthEffects.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"])
    ], AuthEffects.prototype, "register", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"])
    ], AuthEffects.prototype, "registerSuccess", void 0);
    AuthEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_12__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* App */]])
    ], AuthEffects);
    return AuthEffects;
}());

//# sourceMappingURL=auth.effects.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stylist_stylist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AvailabilityProvider = /** @class */ (function () {
    function AvailabilityProvider(afdb, stylist) {
        this.afdb = afdb;
        this.stylist = stylist;
        console.log('Hello AvailabilityProvider Provider');
    }
    // Legacy
    AvailabilityProvider.prototype.getAvailabilities = function () {
        return this.afdb.list('availability');
    };
    // Legacy
    AvailabilityProvider.prototype.getStylistAvailability = function (stylistId) {
        console.log(stylistId);
        return this.afdb.list("availability", function (ref) {
            console.log(ref);
            return ref.orderByChild('stylistId').equalTo(stylistId);
        });
    };
    // Legacy
    AvailabilityProvider.prototype.getOldAvailabilityById = function (avail) {
        var _this = this;
        console.log('calling getAvailabilityById()');
        console.log(avail);
        console.log(JSON.stringify(avail));
        var availIds = [];
        // let availList$;
        avail.forEach(function (el) {
            return availIds.push(el.availabilityId);
        });
        var availList$;
        availIds.forEach(function (el) {
            console.log(el);
            availList$ = _this.afdb
                .list("availability", function (ref) {
                return ref.orderByKey().equalTo(el);
                // .orderByChild('booked')
                // .equalTo(true);
            })
                .valueChanges()
                .subscribe(function (res) {
                console.log(res);
                res.forEach(function (el) {
                    console.log(el);
                    console.log(el.booked);
                    if (el.booked === true) {
                        console.log('found booked');
                        return _this.stylist.getStylistById(el);
                        // return availList$;
                    }
                });
            });
        });
        console.log(availList$);
        return availList$;
    };
    // New
    AvailabilityProvider.prototype.getAvailabilityById = function (stylistId, availId) {
        console.log(stylistId);
        console.log(availId);
        return this.afdb.list("/stylistProfile/" + stylistId + "/availability/" + availId);
    };
    // New RTDB format
    AvailabilityProvider.prototype.getBookedAvailability = function (stylistId) {
        console.log(stylistId);
        console.log("/stylistProfile/" + stylistId + "/availability");
        return this.afdb.list("/stylistProfile/" + stylistId + "/availability");
    };
    /**
     * Update /availability in realtime DB
     *
     * @param {number} slot Unix time
     * @param {string} stylistId
     * @returns
     * @memberof AvailabilityProvider
     */
    AvailabilityProvider.prototype.setAvailabilityTaken = function (slot, stylistId) {
        console.log('setAvailabilityTaken');
        var availData = {
            datetime: slot,
            booked: false,
        };
        var availKey = this.afdb.database
            .ref()
            .child("/stylistProfile/" + stylistId + "/availability")
            .push().key;
        var availPayload = {};
        availPayload["/stylistProfile/" + stylistId + "/availability/" + availKey] = availData;
        console.log(availPayload);
        return this.afdb.database
            .ref()
            .update(availPayload)
            .then(function (res) { return console.log(res); });
    };
    /**
     * Create stylist availability slots
     *
     * @param {any} startTime - 8:30
     * @param {any} format - HH:mm
     * @param {any} interval - 30
     * @param {any} unit -  m
     * @param {any} slot number of slots (6) - 6 slots of 30m intervals
     * @param {any} period one of morning, afternoon, evening
     * @memberof AvailabilityProvider
     */
    AvailabilityProvider.prototype.generateAvailabilitySlots = function (startTime, format, interval, unit, slot, period) {
        // moment(option.date + ' ' + option.time, 'ddd Do MMM HH:mm').unix();
        var slots = [
            {
                date: startTime.format('ddd Do MMM'),
                time: startTime.format(format),
                epoch: startTime.unix(),
                disabled: false,
                period: period,
            },
        ];
        var loopInt = interval;
        for (var x = 0; x < slot; x++) {
            slots.push({
                date: startTime.format('ddd Do MMM'),
                time: __WEBPACK_IMPORTED_MODULE_4_moment__(startTime)
                    .add(loopInt, unit)
                    .format(format),
                epoch: __WEBPACK_IMPORTED_MODULE_4_moment__(startTime)
                    .add(loopInt, unit)
                    .unix(),
                disabled: false,
                period: period,
            });
            loopInt = loopInt + interval;
        }
        return slots;
    };
    AvailabilityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__stylist_stylist__["a" /* StylistProvider */]])
    ], AvailabilityProvider);
    return AvailabilityProvider;
}());

//# sourceMappingURL=availability.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG_VALUES; });
var FIREBASE_CONFIG_VALUES = {
    apiKey: 'AIzaSyCXAR0kOUMapDbVSn0dIK6MY0MX7iV-rqo',
    authDomain: 'available-beauty-1511287868565.firebaseapp.com',
    databaseURL: 'https://available-beauty-1511287868565.firebaseio.com',
    projectId: 'available-beauty-1511287868565',
    storageBucket: 'available-beauty-1511287868565.appspot.com',
    messagingSenderId: '625369331469'
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsProvider = /** @class */ (function () {
    function UtilsProvider() {
        console.log('Hello UtilsProvider Provider');
    }
    /**
     * Firebase snapshotChanges() returns the attributes in object but not the key itself,
     * which this does
     * Ref: https://ilikekillnerds.com/2017/05/convert-firebase-database-snapshotcollection-array-javascript/
     *
     * @param {any} actions
     * @returns
     * @memberof UtilsProvider
     */
    UtilsProvider.prototype.generateFirebaseKeyedValues = function (actions) {
        var returnArr = [];
        actions.forEach(function (act) {
            var item = act.payload.val();
            item.key = act.key;
            return returnArr.push(item);
        });
        console.log(returnArr);
        return returnArr;
    };
    /**
     * Controls expanded-item component
     *
     * @param {any} keyedVals
     * @returns
     * @memberof UtilsProvider
     */
    UtilsProvider.prototype.addExpandedProperty = function (keyedVals) {
        keyedVals.forEach(function (val) {
            val.expanded = false;
        });
        return keyedVals;
    };
    UtilsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilsProvider);
    return UtilsProvider;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingProvider = /** @class */ (function () {
    function BookingProvider(afdb) {
        this.afdb = afdb;
        console.log('Hello BookingProvider Provider');
    }
    /**
     * Get all /bookings
     *
     * @returns
     * @memberof BookingProvider
     */
    BookingProvider.prototype.getBookings = function () {
        return this.afdb.list('booking');
    };
    BookingProvider.prototype.getUserBookings = function (uid) {
        // return this.afdb.list<Booking>(`booking`, ref => {
        //   console.log(ref);
        //   return ref.orderByChild('userId').equalTo(uid);
        // });
        console.log(uid);
        return this.afdb
            .list("userProfile/" + uid + "/bookings")
            .snapshotChanges();
    };
    /**
     * Create /booking and update /availability booked to true
     *
     * @param {any} availId
     * @param {any} userId
     * @returns
     * @memberof BookingProvider
     */
    BookingProvider.prototype.makePendingBooking = function (availId, userId) {
        console.log('makePendingBooking ');
        var bookingData = {
            availabilityId: availId,
            userAccepted: false,
            stylistAccepted: false,
        };
        var bookingKey = this.afdb.database
            .ref()
            .child("userProfile/" + userId + "/bookings")
            .push().key;
        var bookingPayload = {};
        bookingPayload["userProfile/" + userId + "/bookings/" + bookingKey] = bookingData;
        return this.afdb.database
            .ref()
            .update(bookingPayload)
            .then(function (res) { return console.log(res); });
    };
    BookingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BookingProvider);
    return BookingProvider;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_twitter_connect__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_api_config__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthProvider = /** @class */ (function () {
    function AuthProvider(app, plt, store, storage, afauth, fb, google, twitter) {
        this.app = app;
        this.plt = plt;
        this.store = store;
        this.storage = storage;
        this.afauth = afauth;
        this.fb = fb;
        this.google = google;
        this.twitter = twitter;
    }
    /**
     * Email/password login
     *
     * @param {any} email
     * @param {any} password
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doNativeLogin = function (email, password) {
        console.log('native afth login success', email + ' ' + password);
        return this.afauth.auth.signInWithEmailAndPassword(email, password);
    };
    /**
     * Facebook login wrapper method
     *
     * @param {boolean} stylist
     * @returns {Promise<any>}
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doFacebookLogin = function (stylist) {
        console.log('doFacebookLogin()');
        if (this.plt.is('cordova')) {
            console.log('in cordova');
            return this.doFacebookCordovaLogin(stylist);
        }
        else {
            this.socialProvider = 'Facebook';
            return this.doSocialWebLogin(stylist, this.socialProvider);
        }
    };
    /**
     * Facebook login on device
     *
     * @param {boolean} stylist
     * @private
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doFacebookCordovaLogin = function (stylist) {
        var _this = this;
        return this.fb
            .login(['email'])
            .then(function (res) {
            console.log('Logged into Facebook using plugin', res);
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
            return _this.callSignInWithCredentials(facebookCredential).then(function (newUser) {
                _this.addUserProfile(stylist, newUser);
            });
        })
            .catch(function (e) {
            console.error('Error! ', e);
            return Promise.reject(e);
        });
    };
    /**
     * Wrapper method for Firebase.auth.signInWithPopup()
     *
     * @private
     * @param {boolean} stylist
     * @param {any} providerId
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doSocialWebLogin = function (stylist, providerId) {
        var _this = this;
        var socialProvider;
        switch (providerId) {
            case 'Facebook':
                socialProvider = new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider();
                break;
            case 'Google':
                socialProvider = new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider();
                break;
            case 'Twitter':
                socialProvider = new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.TwitterAuthProvider();
                break;
        }
        return this.afauth.auth
            .signInWithPopup(socialProvider)
            .then(function (res) {
            return res;
        })
            .then(function (newUser) {
            _this.addUserProfile(stylist, newUser);
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    AuthProvider.prototype.getFBLoginStatus = function () {
        return this.fb.getLoginStatus();
    };
    /**
     * Google login wrapper method
     *
     * @param {boolean} stylist
     * @returns {Promise<any>}
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doGoogleLogin = function (stylist) {
        if (this.plt.is('cordova')) {
            console.log('in cordova');
            return this.doGoogleCordovaLogin(stylist);
        }
        else {
            this.socialProvider = 'Google';
            return this.doSocialWebLogin(stylist, this.socialProvider);
        }
    };
    /**
     * Google OAuth login on device
     *
     * @param {boolean} stylist
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doGoogleCordovaLogin = function (stylist) {
        var _this = this;
        console.log('doCordovaLogin');
        return this.google
            .login({
            webClientId: __WEBPACK_IMPORTED_MODULE_9__config_api_config__["a" /* API_CONFIG_VALUES */].google_ab_app_web_client_id,
            offline: true,
        })
            .then(function (res) {
            var googleCred = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken);
            return _this.callSignInWithCredentials(googleCred).then(function (newUser) {
                _this.addUserProfile(stylist, newUser);
            });
        }, function (err) {
            console.error('Error: ', err);
            return Promise.reject(err);
        });
    };
    /**
     * Twitter login wrapper method
     *
     * @param {boolean} stylist
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doTwitterLogin = function (stylist) {
        if (this.plt.is('cordova')) {
            //On device
            return this.doTwitterCordovaLogin(stylist);
        }
        else {
            this.socialProvider = 'Twitter';
            return this.doSocialWebLogin(stylist, this.socialProvider);
        }
    };
    /**
     * Twitter login on device
     *
     * @param {boolean} stylist
     * @private
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doTwitterCordovaLogin = function (stylist) {
        var _this = this;
        return this.twitter.login().then(function (res) {
            var twitterCred = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.TwitterAuthProvider.credential(res.token, res.secret);
            return _this.callSignInWithCredentials(twitterCred).then(function (newUser) {
                _this.addUserProfile(stylist, newUser);
            });
        }, function (err) {
            console.error(err);
            return Promise.reject(err);
        });
    };
    // Registration
    /**
     * Register account in Firebase
     *
     * @param {any} user
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doRegister = function (user) {
        var _this = this;
        return this.afauth.auth
            .createUserWithEmailAndPassword(user.emailAddress, user.password)
            .then(function (newUser) {
            return Promise.all([
                _this.updateUserProfile(newUser, user),
                _this.addUserProfile(user.isStylist, newUser, user),
            ]);
        });
    };
    // Password Reset
    /**
     *
     *
     * @param {any} email
     * @returns {Promise<any>}
     * @memberof AuthProvider
     */
    AuthProvider.prototype.doResetPassword = function (email) {
        return this.afauth.auth.sendPasswordResetEmail(email).then(function (res) {
            console.log(res);
            return res;
        });
    };
    // Angular Fire utils
    /**
     * Wrapper for afauth.auth.signInWithCredentials
     *
     * @param {any} credential
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.callSignInWithCredentials = function (credential) {
        console.log('callsigninwithcreds');
        return this.afauth.auth
            .signInWithCredential(credential)
            .then(function (res) {
            console.log('Firebase success ' + JSON.stringify(res));
            return res;
        })
            .catch(function (err) {
            console.error('Firebase error: ' + JSON.stringify(err));
            return Promise.reject(err);
        });
    };
    // ** Firebase utils ** //
    /**
     * Wrapper for Firebase user.updateProfile object
     *
     * @param {any} firebaseUser
     * @param {any} user
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.updateUserProfile = function (firebaseUser, user) {
        console.log(firebaseUser);
        console.log(user);
        return firebaseUser.updateProfile({
            displayName: user.displayName,
        });
    };
    // ** Realtime DB ** //
    /**
     * Creates userProfile record in realtime DB
     *
     * @param {boolean} stylist Flag to denote whether user is stylist or not
     * @param {any} newUser FirebaseUser returned from native createUserWithEmailAndPassword()
     * @param {any} user user details from RegisterPage component
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.addUserProfile = function (stylist, newUser, user) {
        var _this = this;
        // Sometimes (on social web logins for eg) FirebaseUser comes within another object, this strips it out.
        var userParam;
        if (newUser.user) {
            userParam = newUser.user;
        }
        else {
            userParam = newUser;
        }
        var userProfile;
        if (!user) {
            // For Social logins, we need to location from storage
            this.storage.getStorage('geolocation').subscribe(function (res) {
                _this.geolocation = res;
                var userProfile = {
                    name: userParam.displayName,
                    emailAddress: userParam.email,
                    avatarImage: userParam.photoURL,
                    phoneNumber: null,
                    homeLocation: _this.geolocation,
                    isStylist: stylist,
                }; // dummy
                console.log(userProfile);
                return __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
                    .database()
                    .ref('/userProfile')
                    .child(userParam.uid)
                    .set(userProfile);
            });
        }
        else {
            this.createNativeUserProfile(user).then(function (res) {
                userProfile = res;
                return __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
                    .database()
                    .ref('/userProfile')
                    .child(userParam.uid)
                    .set(userProfile);
            });
        }
    };
    /**
     * Create the userProfile in Realtime DB with default avatar
     *
     * @private
     * @param {any} user
     * @returns
     * @memberof AuthProvider
     */
    AuthProvider.prototype.createNativeUserProfile = function (user) {
        return __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
            .storage()
            .ref()
            .child('default-images/no-avatar.png')
            .getDownloadURL()
            .then(function (url) {
            var userProfile = {
                name: user.displayName,
                emailAddress: user.emailAddress,
                avatarImage: url,
                phoneNumber: null,
                homeLocation: user.homeLocation,
            };
            return userProfile;
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_8__storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[510]);
//# sourceMappingURL=main.js.map