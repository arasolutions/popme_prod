webpackJsonp([0],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendPageModule", function() { return TrendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trend__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrendPageModule = /** @class */ (function () {
    function TrendPageModule() {
    }
    TrendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trend__["a" /* TrendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trend__["a" /* TrendPage */]),
            ],
        })
    ], TrendPageModule);
    return TrendPageModule;
}());

//# sourceMappingURL=trend.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poperprofile_poperprofile__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
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
 * Generated class for the TrendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrendPage = /** @class */ (function () {
    function TrendPage(navCtrl, navParams, loadingCtrl, api, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement des données ...'
        });
        loading.present();
        this.storage.get('user').then(function (user) {
            _this.user = user;
        });
        /*this.api.get('trend/poped')
            .subscribe(
                (data) => {
                    this.popeds= [];
                    let body: any;
                    body = JSON.parse(data.text());
                    for(let i=0; i<body.length;i++){
                        this.popeds[i]=body[i];
                    }
                    console.log(this.popeds);
                },
                (err) => {
                },
                () => {
                    //this.goToHome();
                }
            );*/
        /*this.api.get('trend/poper')
            .subscribe(
                (data) => {
                    this.popers= [];
                    let body: any;
                    body = JSON.parse(data.text());
                    for(let i=0; i<body.length;i++){
                        this.popers[i]=body[i];
                    }
                    console.log(this.popers);
                },
                (err) => {
                },
                () => {
                    //this.goToHome();
                }
            );*/
        loading.dismiss();
    }
    TrendPage.prototype.goToHisProfile = function (userId) {
        var data;
        data = {};
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement de données ...',
            dismissOnPageChange: true
        });
        loading.present();
        /*this.api.post('getUserWithPop/' + userId + '/' + this.user.id, data)
            .subscribe(
                (data) => {
                    let body: any;
                    body = JSON.parse(data.text());

                    this.prepareModal(body);

                    loading.dismiss();

                },
                (err) => {
                    loading.dismiss();
                },
                () => {
                    //this.goToHome();
                }
            );*/
    };
    TrendPage.prototype.prepareModal = function (user) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__poperprofile_poperprofile__["a" /* PoperProfilePage */], { userProfile: user });
        profileModal.present();
    };
    TrendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrendPage');
    };
    TrendPage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    TrendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trend',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\trend\trend.html"*/'<ion-header>\n\n<div class="bg-popme" layout horizontal justified>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'ProfilePage\',\'back\')">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'back\')">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'LogPage\',\'back\')">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n</div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <div class="wrapper-xs padder">\n\n        <div ion-text color="danger" class="font-bold">\n\n            Top profil\n\n        </div>\n\n    </div>\n\n    <div class="wrapper-xs padder-sm">\n\n        <div *ngIf="popeds?.length > 0">\n\n            <ion-row align-items-center>\n\n                <ion-col col-4 class="text-center" *ngFor="let poped of popeds; let i = index" (click)="goToHisProfile(poped.user.id)">\n\n                    <img class="rounded thumb-md" src="{{poped.user.accountImage}}">\n\n                    <div>\n\n                        <div class="text-lg">{{poped.user.usualName}}</div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n    <div class="wrapper-xs padder">\n\n        <div ion-text color="danger" class="font-bold">\n\n            Top popeur\n\n        </div>\n\n    </div>\n\n    <div class="wrapper-xs padder-sm">\n\n        <div *ngIf="popers?.length > 0">\n\n            <ion-row align-items-center>\n\n                <ion-col col-4 class="text-center" *ngFor="let poper of popers; let i = index" (click)="goToHisProfile(poper.user.id)">\n\n                    <img class="rounded thumb-md" src="{{poper.user.accountImage}}">\n\n                    <div>\n\n                        <div class="text-lg">{{poper.user.usualName}}</div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\trend\trend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TrendPage);
    return TrendPage;
}());

//# sourceMappingURL=trend.js.map

/***/ })

});
//# sourceMappingURL=0.js.map