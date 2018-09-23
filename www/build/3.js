webpackJsonp([3],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPageModule", function() { return LogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogPageModule = /** @class */ (function () {
    function LogPageModule() {
    }
    LogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__log__["a" /* LogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__log__["a" /* LogPage */]),
            ],
        })
    ], LogPageModule);
    return LogPageModule;
}());

//# sourceMappingURL=log.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogPage = /** @class */ (function () {
    function LogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchOpen = false;
    }
    LogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogPage');
    };
    LogPage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-log',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\log\log.html"*/'<ion-header>\n\n  <div class="bg-white" layout horizontal justified>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'ProfilePage\',\'back\')">\n\n      <ion-icon name=\'person\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'back\')">\n\n      <ion-icon name=\'star\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'list-box\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n\n      <ion-icon name=\'flame\'></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div layout vertical>\n\n    <div flex three class="bg-white">\n\n      <div>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6 class="text-center b-r b-light">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-muted\':\'button-primary\'" (click)="searchOpen=false">\n\n                <ion-icon name="md-list"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">Activité</div>\n\n            </ion-col>\n\n            <ion-col col-6 class="text-center">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-primary\':\'button-muted\'" (click)="searchOpen=true">\n\n                <ion-icon name="md-search"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">Recherche</div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="searchOpen">\n\n    <div class="wrapper-xs padder">\n\n      <div ion-text color="danger" class="font-bold">\n\n        Activité\n\n      </div>\n\n    </div>\n\n    <div class="wrapper-xs padder-sm">\n\n      <ion-row align-items-center>\n\n        <ion-col col-auto>\n\n          <img class="rounded thumb-md" src="assets/img/mike.png">\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            <div class="text-lg">Antho33</div>\n\n            <div class="text-muted">Vous a popé!</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col col-auto>\n\n          <img class="rounded thumb-md" src="assets/img/perry.png">\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            <div class="text-lg">Antho666</div>\n\n            <div class="text-muted">Vous a bashé!</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="!searchOpen">\n\n    <ion-searchbar [(ngModel)]="myInput" showCancelButton="false">\n\n    </ion-searchbar>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\log\log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ })

});
//# sourceMappingURL=3.js.map