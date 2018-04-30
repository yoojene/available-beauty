webpackJsonp([0],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylistRegisterPageModule", function() { return StylistRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylist_register__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(67);
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

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WebPluginRegistry */
/* unused harmony export WebPlugins */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mergeWebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergeWebPlugin; });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        listeners.forEach(function (listener) { return listener(data); });
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Capacitor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugins; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_runtime__ = __webpack_require__(733);

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = new __WEBPACK_IMPORTED_MODULE_0__web_runtime__["a" /* CapacitorWeb */]();
Capacitor = window.Capacitor || Capacitor;
// Export window.Capacitor if not available already (ex: web)
if (!window.Capacitor) {
    window.Capacitor = Capacitor;
}
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uuid4; });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stylist_stylist__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_phone_number_validators__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_location_location__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_photo_photo__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeLast__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeLast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeLast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__capacitor_core__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(58);
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
 * Generated class for the StylistRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StylistRegisterPage = /** @class */ (function () {
    function StylistRegisterPage(navCtrl, plt, navParams, formBuilder, storage, stylist, location, cordovaCamera, actionSheetCtrl, photo, afdb, sanitizer) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.stylist = stylist;
        this.location = location;
        this.cordovaCamera = cordovaCamera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photo = photo;
        this.afdb = afdb;
        this.sanitizer = sanitizer;
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
                        // this.photo
                        //   .takePhoto(this.cordovaCamera.PictureSourceType.CAMERA)
                        //   .then(res => {
                        //     console.log(res);
                        //     this.photo.getBase64Data(res).then(baseres => {
                        //       this.photo.pushPhotoToStorage(baseres).then(stores => {
                        //         console.log(stores[0]);
                        //         this.monitorUploadProgress(stores[0]);
                        //       });
                        //     });
                        //   });
                        _this.takePhoto();
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
    // Cordova
    StylistRegisterPage.prototype.takeCordovaPhoto = function () {
        var _this = this;
        this.photo
            .takePhoto(this.cordovaCamera.PictureSourceType.CAMERA)
            .then(function (res) {
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
        return __awaiter(this, void 0, void 0, function () {
            var Camera, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.photo.getLibraryPictures().then(res => {
                        //   let photos: any = res;
                        //   photos.forEach(el => {
                        //     this.photo.getBase64Data(el.photoFullPath, el.path).then(baseress => {
                        //       console.log(baseress);
                        //       this.photo.pushPhotoToStorage(baseress).then(stores => {
                        //         console.log(stores[0]);
                        //         // TODO: this looks to be the place to update RTDB
                        //         this.monitorUploadProgress(stores[0]);
                        //       });
                        //     });
                        //   });
                        // });
                        console.log('selectPhotot uing cpx');
                        Camera = __WEBPACK_IMPORTED_MODULE_12__capacitor_core__["c" /* Plugins */].Camera;
                        return [4 /*yield*/, Camera.getPhoto({
                                quality: 90,
                                allowEditing: true,
                                resultType: __WEBPACK_IMPORTED_MODULE_12__capacitor_core__["a" /* CameraResultType */].Base64,
                                source: __WEBPACK_IMPORTED_MODULE_12__capacitor_core__["b" /* CameraSource */].Prompt,
                            }).catch(function (err) { return console.error(err); })];
                    case 1:
                        image = _a.sent();
                        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.base64Data);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Capacitor
    StylistRegisterPage.prototype.takePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Camera, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('takePhoto uing cpx');
                        Camera = __WEBPACK_IMPORTED_MODULE_12__capacitor_core__["c" /* Plugins */].Camera;
                        return [4 /*yield*/, Camera.getPhoto({
                                quality: 90,
                                allowEditing: true,
                                resultType: __WEBPACK_IMPORTED_MODULE_12__capacitor_core__["a" /* CameraResultType */].Base64,
                            }).catch(function (err) { return console.error(err); })];
                    case 1:
                        image = _a.sent();
                        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.base64Data);
                        return [2 /*return*/];
                }
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]) === "function" && _a || Object)
    ], StylistRegisterPage.prototype, "slides", void 0);
    StylistRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stylist-register',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-register/stylist-register.html"*/'<!--\n  Generated template for the StylistRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n      <ion-buttons start *ngIf=!slides.isBeginning()>\n        <button ion-button clear color="aubergine" (click)="back()"> Back</button>\n      </ion-buttons>\n      <ion-title>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="stylistRegForm" (submit)="onSubmitStylistRegForm()">\n  <ion-slides (ionSlideDidChange)="onSlideChange($event)">\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{pageSubheader}} </h3>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{stylistHeaderLabel}} </h3>\n      <ion-item>\n        <ion-input formControlName="stylistName" type="text" placeholder="{{stylistNameLabel}}">\n        </ion-input>\n      </ion-item>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{bioLabel}} </h3>\n      <ion-textarea formControlName="bio" type="text" placeholder="{{bioPlaceholder}}">\n      </ion-textarea>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h3> {{phoneNumberLabel}} </h3>\n      <ion-label>\n        <ion-icon name="call"></ion-icon>\n      </ion-label>\n      <ion-input formControlName="phoneNumber" type="text" placeholder="{{phoneNumberLabel}}">\n      </ion-input>\n      <!-- <div *ngIf="stylistRegForm.get(\'phoneNumber\').hasError(\'invalidPhone\')"> Invalid phone number</div> -->\n    </ion-slide>\n    <ion-slide  class="page-stylist-register--stylist-reg-slide">\n       <h3> {{locationLabel}}</h3>\n      <button text-center ion-item icon-start detail-none (click)="useCurrentAddress()" type="button">\n        <ion-icon class="page-stylist-register--locate" name="locate"></ion-icon> {{useMyCurrentLocationLabel}}\n      </button>\n      <div text-center> {{orLabel}} </div>\n      <ion-item>\n        <ion-label text-center floating>{{enterLocationLabel}}</ion-label>\n        <ion-input formControlName="locationLookup" type="text">\n        </ion-input>\n        <button ion-button icon-only small item-end type="button" (click)="findAddress()" color="aubergine">\n          <ion-icon name="search">\n          </ion-icon>\n          </button>\n      </ion-item>\n      <div *ngIf="showAddressForm">\n        <ion-item>\n          <ion-label floating>{{addressLine1Label}}</ion-label>\n          <ion-input formControlName="addressLine1" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressLine2Label}}</ion-label>\n          <ion-input formControlName="addressLine2" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressTownCityLabel}}</ion-label>\n          <ion-input formControlName="addressTownCity" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressCountyLabel}}</ion-label>\n          <ion-input formControlName="addressCounty" type="text">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{addressPostcodeLabel}}</ion-label>\n          <ion-input formControlName="addressPostcode" type="text">\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-slide>\n    <ion-slide class="page-stylist-register--stylist-reg-slide">\n      <h2>{{mobileLabel}}</h2>\n        <ion-buttons>\n          <button round ion-button outline type="button" (click)="setMobile(true)" [class.activated]="stylistRegForm.get(\'mobile\').value === true" color="aubergine">\n            {{yesButtonText}}\n          </button>\n          <button round ion-button outline type="button"(click)="setMobile(false)" color="aubergine">\n            {{noButtonText}}\n          </button>\n        </ion-buttons>\n        <br>\n        <div *ngIf="showMobileRange">\n          <h5> {{mobileRangeLabel}}</h5>\n          <ion-item>\n            <ion-input formControlName="mobileRange" type="number" placeholder="{{mobileRangePlaceholder}}">\n            </ion-input>\n          </ion-item>\n        </div>\n\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/390.jpg">\n      <!-- <ion-item>\n        <ion-label>{{loadImagesLabel}}</ion-label>\n        <ion-toggle formControlName="loadImages">\n        </ion-toggle>\n\n      </ion-item> -->\n      <h2>{{loadImagesLabel}}</h2>\n\n      <button block round ion-button outline type="button" (click)="selectPhoto()" color="aubergine">\n        {{choosePhotoButtonText}}\n      </button>\n      <button block round ion-button outline type="button" (click)="takePhoto()" color="aubergine">\n        {{useCameraButtonText}}\n      </button>\n\n      <div *ngIf="image">\n        <img [src]="image" />\n      </div>\n\n      <progress-bar *ngIf="stylistRegForm.get(\'loadImages\').value === true && loadProgress < 100" [progress]="loadProgress">\n      </progress-bar>\n\n    </ion-slide>\n  </ion-slides>\n\n  <button *ngIf="activeSlideIdx === 6" ion-button block round color="aubergine">\n     {{finishButtonText}}\n  </button>\n</form>\n\n  <!-- Sign up your Salon or business here -->\n  <!-- <form\n  [formGroup]="stylistRegForm"\n  (submit)="onSubmitStylistRegForm()">\n\n  <div>{{pageSubheader}}</div>\n\n  <ion-item>\n    <ion-label floating>{{stylistNameLabel}}</ion-label>\n    <ion-input formControlName="stylistName" type="text">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>{{bioLabel}}</ion-label>\n    <ion-textarea formControlName="bio" type="text">\n    </ion-textarea>\n  </ion-item>\n <ion-item icon-start>\n    <ion-label> <ion-icon name="call"></ion-icon></ion-label>\n    <ion-input formControlName="phoneNumber" type="number" placeholder="{{phoneNumberLabel}}">\n    </ion-input>\n  </ion-item>\n     {{locationLabel}}\n  <button text-center ion-item icon-start detail-none (click)="useCurrentAddress()" type="button">\n    <ion-icon name="locate"></ion-icon> {{useMyCurrentLocationLabel}}\n  </button>\n  <div text-center> {{orLabel}} </div>\n  <ion-item>\n    <ion-label text-center floating>{{enterLocationLabel}}</ion-label>\n      <ion-input formControlName="locationLookup" type="text">\n      </ion-input>\n      <button ion-button item-end type="button" (click)="findAddress()"> {{findAddressLabel}}</button>\n  </ion-item>\n\n  <div *ngIf="showAddressForm">\n      <ion-item>\n        <ion-label floating>{{addressLine1Label}}</ion-label>\n        <ion-input formControlName="addressLine1" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressLine2Label}}</ion-label>\n        <ion-input formControlName="addressLine2" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressTownCityLabel}}</ion-label>\n        <ion-input formControlName="addressTownCity" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressCountyLabel}}</ion-label>\n        <ion-input formControlName="addressCounty" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{addressPostcodeLabel}}</ion-label>\n        <ion-input formControlName="addressPostcode" type="text">\n        </ion-input>\n      </ion-item>\n  </div>\n\n\n <ion-item>\n    <ion-label>{{mobileLabel}}</ion-label>\n    <ion-toggle item-end formControlName="mobile">\n    </ion-toggle>\n  </ion-item>\n  <ion-item *ngIf="showMobileRange">\n    <ion-label stacked>{{mobileRangeLabel}}</ion-label>\n    <ion-input formControlName="mobileRange" type="number" placeholder="{{mobileRangePlaceholder}}">\n    </ion-input>\n  </ion-item>\n<ion-item>\n  <ion-label>{{loadImagesLabel}}</ion-label>\n  <ion-toggle formControlName="loadImages">\n  </ion-toggle>\n</ion-item>\n  <progress-bar *ngIf="stylistRegForm.get(\'loadImages\').value === true && loadProgress < 100" [progress]="loadProgress">\n  </progress-bar>\n\n<button\nion-button\nblock\ncolor="tonal">\nRegister\n</button>\n\n  </form> -->\n\n  <!-- <button ion-button (click)="goBack()">\n    Go back\n  </button> -->\n\n  <button *ngIf="activeSlideIdx !== 6" block round ion-button (click)="next()" color="aubergine" [disabled]="checkDisabled()">\n   {{nextButtonText}}\n  </button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/stylist-register/stylist-register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_stylist_stylist__["a" /* StylistProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_stylist_stylist__["a" /* StylistProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__providers_location_location__["a" /* LocationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_location_location__["a" /* LocationProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__providers_photo_photo__["a" /* PhotoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_photo_photo__["a" /* PhotoProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _o || Object])
    ], StylistRegisterPage);
    return StylistRegisterPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=stylist-register.js.map

/***/ }),

/***/ 727:
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

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var takeLast_1 = __webpack_require__(729);
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(15);
var ArgumentOutOfRangeError_1 = __webpack_require__(730);
var EmptyObservable_1 = __webpack_require__(107);
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

/***/ 730:
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

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_plugin_definitions__ = __webpack_require__(732);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_plugin_definitions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__core_plugin_definitions__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__(721);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__global__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_plugins__ = __webpack_require__(734);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_index__ = __webpack_require__(720);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraResultType; });
/* unused harmony export FilesystemDirectory */
/* unused harmony export FilesystemEncoding */
/* unused harmony export HapticsImpactStyle */
/* unused harmony export ActionSheetOptionStyle */
/* unused harmony export PhotosAlbumType */
/* unused harmony export StatusBarStyle */
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Application directory
     */
    FilesystemDirectory["Application"] = "APPLICATION";
    /**
     * The Documents directory
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory (Android only)
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory (Android only)
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf18";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    StatusBarStyle["Dark"] = "DARK";
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapacitorWeb; });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.Plugins = {};
        this.platform = 'web';
        this.isNative = false;
        // Build a proxy for the Plugins object that returns the "Noop Plugin"
        // if a plugin isn't available
        this.Plugins = new Proxy(this.Plugins, {
            get: function (target, prop) {
                if (typeof target[prop] === 'undefined') {
                    var thisRef_1 = _this;
                    return new Proxy({}, {
                        get: function (_target, _prop) {
                            if (typeof _target[_prop] === 'undefined') {
                                return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                            }
                            else {
                                return _target[_prop];
                            }
                        }
                    });
                }
                else {
                    return target[prop];
                }
            }
        });
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerWebPlugin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_index__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_browser__ = __webpack_require__(735);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_camera__ = __webpack_require__(736);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_clipboard__ = __webpack_require__(737);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_geolocation__ = __webpack_require__(738);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_device__ = __webpack_require__(739);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_share__ = __webpack_require__(740);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__web_modals__ = __webpack_require__(741);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_storage__ = __webpack_require__(742);
/* unused harmony namespace reexport */










Object(__WEBPACK_IMPORTED_MODULE_1__web_index__["c" /* mergeWebPlugins */])(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* Plugins */]);
var registerWebPlugin = function (plugin) {
    Object(__WEBPACK_IMPORTED_MODULE_1__web_index__["b" /* mergeWebPlugin */])(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* Plugins */], plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserPluginWeb */
/* unused harmony export Browser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);


var BrowserPluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || "_blank");
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CameraPluginWeb */
/* unused harmony export Camera */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);


//import '@ionic/pwa-elements';
var CameraPluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                options;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](_this, void 0, void 0, function () {
                        var _this = this;
                        var cameraModal;
                        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    cameraModal = document.createElement('ion-pwa-camera-modal');
                                    document.body.appendChild(cameraModal);
                                    return [4 /*yield*/, cameraModal.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    cameraModal.addEventListener('onPhoto', function (e) { return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject();
                                                    return [3 /*break*/, 3];
                                                case 1:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo)];
                                                case 2:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 3;
                                                case 3:
                                                    cameraModal.dismiss();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(photo);
            reader.onloadend = function () {
                resolve({
                    base64Data: reader.result,
                    webPath: reader.result,
                    format: 'jpeg'
                });
            };
            reader.onerror = function (e) {
                reject(e);
            };
        });
    };
    return CameraPluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ClipboardPluginWeb */
/* unused harmony export Clipboard */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);


var ClipboardPluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string || options.url)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string || options.label)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (options.image) {
                            return [2 /*return*/, Promise.reject("Setting images not supported on the web")];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function (_options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            var data, _i, _a, item;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        return [4 /*yield*/, navigator.clipboard.read()];
                    case 1:
                        data = _b.sent();
                        for (_i = 0, _a = data.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            if (item.type === 'text/plain') {
                                return [2 /*return*/, Promise.resolve(item.getAs('text/plain'))];
                            }
                        }
                        return [2 /*return*/, Promise.reject('Unable to get data from clipboard')];
                }
            });
        });
    };
    return ClipboardPluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GeolocationPluginWeb */
/* unused harmony export Geolocation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(722);



var GeolocationPluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* extend */])({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* extend */])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DevicePluginWeb */
/* unused harmony export Device */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(722);



var DevicePluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            var ua, battery, e_1;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ua = navigator.userAgent;
                        console.log(ua);
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            model: 'web',
                            platform: 'web',
                            appVersion: '',
                            osVersion: '',
                            manufacturer: '',
                            isVirtual: false,
                            batteryLevel: battery.level,
                            isCharging: battery.charging,
                            uuid: this.getUid()
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        return {};
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* uuid4 */])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SharePluginWeb */
/* unused harmony export Share */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);


var SharePluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject("Web Share API not available");
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalsPluginWeb */
/* unused harmony export Modals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);


var ModalsPluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            var val;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                val = window.prompt(options.message, options.inputPlaceholder || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            var val;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](_this, void 0, void 0, function () {
                        var controller, items, actionSheetElement;
                        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    controller = document.querySelector('ion-action-sheet-controller');
                                    if (!controller) {
                                        controller = document.createElement('ion-action-sheet-controller');
                                        document.body.appendChild(controller);
                                    }
                                    return [4 /*yield*/, controller.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    items = options.options.map(function (o, i) {
                                        return {
                                            text: o.title,
                                            role: o.style && o.style.toLowerCase() || '',
                                            icon: o.icon || '',
                                            handler: function () {
                                                resolve({
                                                    index: i
                                                });
                                            }
                                        };
                                    });
                                    return [4 /*yield*/, controller.create({
                                            title: options.title,
                                            buttons: items
                                        })];
                                case 2:
                                    actionSheetElement = _a.sent();
                                    return [4 /*yield*/, actionSheetElement.present()];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StoragePluginWeb */
/* unused harmony export Storage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(720);


var StoragePluginWeb = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = "_cap_";
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* WebPlugin */]));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ })

});
//# sourceMappingURL=0.js.map