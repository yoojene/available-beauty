webpackJsonp([1],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]),
            ],
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(82);
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
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, navParams, formBuilder, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.resetSent = false;
        this.passwordForm = formBuilder.group({
            emailAddress: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])
            ]
        });
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordPage');
    };
    PasswordPage.prototype.doResetPassword = function () {
        var _this = this;
        console.log(this.passwordForm);
        console.log('resetting pw');
        var email = this.passwordForm.value.emailAddress;
        this.auth
            .doResetPassword(email)
            .then(function () {
            // TODO Show success message
            _this.resetSent = true;
        })
            .catch(function (err) { return console.error(err); });
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-password',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/password/password.html"*/'<ion-header no-border>\n  <ion-navbar transparent hideBackButton="false">\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="password-container">\n    <form [formGroup]="passwordForm" (submit)="doResetPassword()">\n      <h4> Forgot your password? </h4>\n      <div> Enter your email to locate your account </div>\n      <br>\n      <ion-item>\n        <ion-input formControlName="emailAddress" type="email" placeholder="Email"></ion-input>\n      </ion-item>\n        <p *ngIf="resetSent">\n          <strong>\n            Check your email for reset instructions\n          </strong>\n        </p>\n        <button\n          ion-button\n          margin\n          [disabled]="!passwordForm.valid"\n          color="tonal">Reset\n        </button>\n    </form>\n\n    <!-- <div class="ab-logo"></div> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=1.js.map