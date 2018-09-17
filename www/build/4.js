webpackJsonp([4],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, viewCtrl, imagePicker, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.profileImages = [
            'assets/img/instagram/insta_0.jpg',
            'assets/img/instagram/insta_1.jpg',
            'assets/img/instagram/insta_2.jpg',
            ''
        ];
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProfilePage.prototype.openPhotoPicker = function (index) {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 1 })
            .then(function (results) {
            _this.profileImages[index] = results[0];
        }, function (err) { });
    };
    ProfilePage.prototype.removeImage = function (index) {
        this.profileImages[index] = '';
    };
    ProfilePage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/damien/app/popme/src/pages/profile/profile.html"*/'<ion-header>\n<div class="bg-white" layout horizontal justified>\n  	<button ion-button color="danger" clear icon-only>\n      <ion-icon name=\'person\'></ion-icon>\n    </button>\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'forward\')">\n      <ion-icon name=\'star\'></ion-icon>\n    </button>\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'LogPage\',\'forward\')">\n      <ion-icon name=\'list-box\'></ion-icon>\n    </button>\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n      <ion-icon name=\'flame\'></ion-icon>\n    </button>\n</div>\n</ion-header>\n<ion-content class="bg-custom">\n\n<div layout vertical>\n    <div flex class="bg-white">\n      <div class="wrapper text-center">\n        <div class="big-thumb" (click)="openProfile()">\n          <img src="assets/img/hieu.png" class="rounded box-shadow" alt="">\n        </div>\n        <div class="text-2x">Hieu, 29</div>\n        <div class="">Front-end dev. UX/UI lover</div>\n      </div>\n      <div text-center>\n      <button ion-button icon-start round small color="muted" outline (click)="goTo(\'SettingsPage\',\'forward\')"><ion-icon name="settings"></ion-icon>Paramètres</button>\n  	  </div>\n  </div>\n</div>\n\n  <div class="profile-images-edit">\n    <div class="profile-image" *ngFor="let image of profileImages; let i = index" (click)="openPhotoPicker(i)">\n      <div [style.backgroundImage]="\'url(\' + profileImages[i] + \')\'" class="div-img img-square r-3x"></div>\n      <button ion-button icon-only clear class="btn-edit" (click)="removeImage(i)" *ngIf="profileImages[i] != \'\'">\n        <ion-icon name="md-close" color="danger"></ion-icon>\n      </button>\n      <button ion-button icon-only clear class="btn-edit" *ngIf="profileImages[i] == \'\'">\n        <ion-icon name="md-add-circle" color="danger"></ion-icon>\n      </button>\n    </div>\n  </div>\n\n  <ion-list no-lines>\n    <ion-list-header>\n      ABOUT ME\n    </ion-list-header>\n    <ion-item class="text-muted" text-wrap>\n      <ion-textarea placeholder="Enter a description" value="A UX/UI lover who has a hobby of making UI clones"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        <span class="text-xs">435</span>\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/damien/app/popme/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map