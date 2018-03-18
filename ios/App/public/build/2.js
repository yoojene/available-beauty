webpackJsonp([2],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookingPageModule", function() { return LookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__looking__ = __webpack_require__(734);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LookingPageModule = /** @class */ (function () {
    function LookingPageModule() {
    }
    LookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__looking__["a" /* LookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__looking__["a" /* LookingPage */]),
            ],
        })
    ], LookingPageModule);
    return LookingPageModule;
}());

//# sourceMappingURL=looking.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LookingPage = /** @class */ (function () {
    function LookingPage(navCtrl, navParams, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.lookingForTitle = 'What are you looking for?';
        this.lookingWhenTitle = 'When do you need it?';
        this.searchTitle = 'Search';
        this.hairText = 'Hair';
        this.nailsText = 'Nails';
        this.treatmentsText = 'Treatments';
        this.dayOfWeekFmt = 'ddd Do';
        this.beautyOptions = [
            {
                name: this.hairText,
                disabled: false
            },
            {
                name: this.nailsText,
                disabled: false
            },
            {
                name: this.treatmentsText,
                disabled: false
            }
        ];
        this.availableDates = [
            {
                // 'day': moment().format(this.dayOfWeekFmt),
                day: 'Today',
                disabled: false
            },
            {
                day: __WEBPACK_IMPORTED_MODULE_2_moment__()
                    .add(1, 'days')
                    .format(this.dayOfWeekFmt),
                disabled: false
            },
            {
                day: __WEBPACK_IMPORTED_MODULE_2_moment__()
                    .add(2, 'days')
                    .format(this.dayOfWeekFmt),
                disabled: false
            },
            {
                day: __WEBPACK_IMPORTED_MODULE_2_moment__()
                    .add(3, 'days')
                    .format(this.dayOfWeekFmt),
                disabled: false
            },
            {
                day: __WEBPACK_IMPORTED_MODULE_2_moment__()
                    .add(4, 'days')
                    .format(this.dayOfWeekFmt),
                disabled: false
            },
            {
                day: __WEBPACK_IMPORTED_MODULE_2_moment__()
                    .add(5, 'days')
                    .format(this.dayOfWeekFmt),
                disabled: false
            },
            {
                day: __WEBPACK_IMPORTED_MODULE_2_moment__()
                    .add(6, 'days')
                    .format(this.dayOfWeekFmt),
                disabled: false
            }
        ];
    }
    LookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LookingPage');
        console.log(this.availableDates);
        this.entryLoader;
    };
    LookingPage.prototype.goToHome = function () {
        this.navCtrl.push('TabsPage', { isStylist: false });
    };
    LookingPage.prototype.setDisabled = function (option, optionobj) {
        console.log(option);
        console.log(optionobj);
        optionobj.forEach(function (el) {
            console.log(el);
            if (option.name !== el.name) {
                el.disabled = !option.disabled;
            }
            else if (option.day !== el.day) {
                el.disabled = !option.disabled;
            }
        });
    };
    LookingPage.prototype.resetDisabled = function () {
        this.availableDates.forEach(function (el) {
            el.disabled = false;
        });
        this.beautyOptions.forEach(function (el) {
            el.disabled = false;
        });
    };
    LookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-looking',template:/*ion-inline-start:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/looking/looking.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>\n      <!-- Available Beauty -->\n      <img src="assets/img/AB_logo_text.png">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<br>\n  <div text-center> {{lookingForTitle}} </div>\n<br>\n <ion-buttons text-center>\n  <button\n  *ngFor="let option of beautyOptions"\n  ion-button round\n  [color]="option.disabled ? \'primary\' : \'aubergine\'"\n  (click)="setDisabled(option, beautyOptions)"\n  [disabled]="option.disabled"\n  >\n    {{option.name}}\n  </button>\n</ion-buttons>\n  <br>\n  <br>\n    <div text-center> {{lookingWhenTitle}} </div>\n  <br>\n  <ion-buttons text-center>\n      <button\n       *ngFor="let date of availableDates; let i = index"\n      ion-button\n      round\n      [color]="date.disabled ? \'primary\' : \'aubergine\'"\n      (click)="setDisabled(date, availableDates)"\n      [disabled]="date.disabled">\n      {{date.day}}\n    </button>\n  </ion-buttons>\n  <br>\n  <ion-buttons right>\n    <button\n    ion-button\n    icon-only\n    color="danger"\n    (click)="resetDisabled()">\n    <ion-icon outline name="close">\n    </ion-icon>\n    </button>\n  </ion-buttons>\n  <br>\n    <!-- <div text-center> {{searchTitle}} </div> -->\n  <br>\n<div text-center>\n  <button ion-button large color="secondary" (click)="goToHome()"> Search </button>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eugene/Development/Repos/AvailableBeauty/available-beauty/src/pages/looking/looking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], LookingPage);
    return LookingPage;
}());

//# sourceMappingURL=looking.js.map

/***/ })

});
//# sourceMappingURL=2.js.map