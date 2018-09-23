webpackJsonp([2],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(717);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(360);
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
    function RegisterPage(navCtrl, app, api, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    RegisterPage.prototype.goToProfile = function () {
        var _this = this;
        var data;
        data = {};
        data.email = this.email;
        data.password = this.password;
        data.usualName = this.usualName;
        data.birthday = this.birthday;
        data.gender = this.gender;
        data.city = this.city;
        this.api.post('createUser', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            console.log(body);
            if (body.error) {
                _this.showAlertBadRegister(body.message);
                //alert(body.message);
            }
            else {
                _this.storage.set('isConnected', true);
                _this.storage.set('user', body);
                // On redirige l'utilisateur vers sa page si il est authentifié
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
            }
        }, function (err) {
            console.log(err);
            _this.showAlertBadRegister('Une erreur est survenue lors de l\'enregistrement');
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    RegisterPage.prototype.goBackPage = function () {
        this.nav = this.app.getRootNavById('n4');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.showAlertBadRegister = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Erreur de connexion',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="goBackPage()"><ion-icon name="arrow-back"></ion-icon></button>\n\n    </ion-buttons>\n\n    <ion-title>Créer un compte</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n  <div>\n\n    <p>Bienvenue sur PopMe, avec seulement 4 photos, devient plus pop que tes amis.\n\n      Pour créer ton profil, il te suffit de renseigner les informations suivantes :</p>\n\n  </div>\n\n  <ion-list class="w-full login">\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Adresse Email" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Mot de passe" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Pseudo" [(ngModel)]="usualName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Date de naissance</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="birthday"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sexe</ion-label>\n\n      <ion-select [(ngModel)]="gender">\n\n        <ion-option value="a">Autre</ion-option>\n\n        <ion-option value="f">Femme</ion-option>\n\n        <ion-option value="h">Homme</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Lieu" [(ngModel)]="city"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full round (click)="goToProfile()">Enregistrer</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=2.js.map