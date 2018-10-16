webpackJsonp([1],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(740);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(35);
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
    function SettingsPage(navCtrl, navParams, storage, fb, storageProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fb = fb;
        this.storageProvider = storageProvider;
        this.alertCtrl = alertCtrl;
        this.distance = 80;
        this.ageRange = { lower: 18, upper: 30 };
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Déconnexion',
            message: 'Souhaitez-vous confirmer ?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.fb.logout()
                            .then(function (res) { return false; })
                            .catch(function (e) { return console.log('Error logout from Facebook', e); });
                        _this.storageProvider.clearConnexionStorage();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage.prototype.deleteAccount = function () {
        var confirm = this.alertCtrl.create({
            title: 'Suppression',
            message: 'Souhaitez-vous supprimer votre compte ? Toutes vos données seront perdues.',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        //TODO
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Paramètres</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-custom">\n\n  <ion-card class="card-custom text-center wrapper">\n\n    <div class="text-xl font-bold">\n\n      <div class="thumb-sm">\n\n        <img src="assets/img/logo.png" alt="">\n\n      </div>\n\n      Popme\n\n    </div>\n\n    <div color="muted" ion-text>\n\n      Devenez le plus populaire\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      MES INFORMATIONS\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Description</ion-label>\n\n      <ion-input type="text" placeholder="Description" [(ngModel)]="usualName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Date de naissance</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" cancelText="Annuler" doneText="OK" [(ngModel)]="birthday"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sexe</ion-label>\n\n      <ion-select [(ngModel)]="gender">\n\n        <ion-option value="f">Femme</ion-option>\n\n        <ion-option value="h">Homme</ion-option>\n\n        <ion-option value="a">Autre</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <!--\n\n  <ion-list>\n\n    <ion-list-header>\n\n      NOTIFICATIONS\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Nouveaux pops</ion-label>\n\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Slot photo disponible</ion-label>\n\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>-->\n\n\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      NOUS CONTACTER\n\n    </ion-list-header>\n\n    <button ion-item>\n\n      Aide et assistance\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      MENTIONS LEGALES\n\n    </ion-list-header>\n\n    <button ion-item>\n\n      Politique de confidentialité\n\n    </button>\n\n    <button ion-item>\n\n      Conditions d\'utilisations\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines>\n\n    <ion-item text-center class="m-b-sm" (click)="logout()">\n\n      Déconnexion\n\n    </ion-item>\n\n    <div class="text-center m-b">\n\n      <div class="thumb-sm">\n\n        <img src="assets/img/logo.png" alt="">\n\n      </div>\n\n      <br/><br/>\n\n      <div>Version 8.4.0</div>\n\n    </div>\n\n    <ion-item text-center (click)="deleteAccount()">\n\n      Supprimer mon compte\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=1.js.map