webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
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
    function StorageProvider(api, storage) {
        this.api = api;
        this.storage = storage;
    }
    StorageProvider.prototype.loadConfigurations = function () {
        var _this = this;
        var data;
        data = {};
        data.lang = 'fr';
        this.api.post('getConfiguration', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.CONFIGURATIONS, body);
        }, function (err) {
            _this.clearConnexionStorage();
        }, function () {
            //this.goToHome();
        });
    };
    StorageProvider.prototype.clearConnexionStorage = function () {
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.CONFIGURATIONS);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FROM_LOADING);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.TUTORIEL);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firstStep1_firstStep1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firstStep2_firstStep2__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep3_firstStep3__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_log__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_loginClassic__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_play__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__poperprofile_poperprofile__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_popover__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trend_trend__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rank_relativeRank__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__firstStep1_firstStep1__["a"]; });
/* unused harmony reexport FirstStep2Page */
/* unused harmony reexport FirstStep3Page */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__loading_loading__["a"]; });
/* unused harmony reexport LogPage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__login_login__["a"]; });
/* unused harmony reexport LoginClassicPage */
/* unused harmony reexport PlayPage */
/* unused harmony reexport PoperProfilePage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__profile_profile__["a"]; });
/* unused harmony reexport PopoverPage */
/* unused harmony reexport RegisterPage */
/* unused harmony reexport SettingsPage */
/* unused harmony reexport TrendPage */
/* unused harmony reexport RelativeRankPage */















// Pages

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firstStep3_firstStep3__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FirstStep2Page = /** @class */ (function () {
    function FirstStep2Page(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        var data;
        data = {};
        this.storage.get('user').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.popyUrl = 'url(' + val.popies[0].image + ')';
            }
        });
    }
    FirstStep2Page.prototype.ionViewDidLoad = function () {
    };
    FirstStep2Page.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FirstStep2Page.prototype.validProfileStep2 = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val) {
                var data = void 0;
                data = {};
                data.popy = _this.popy;
                var loading_1 = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: 'Etape 2 ...',
                    dismissOnPageChange: true
                });
                loading_1.present();
                _this.api.post('addPopy/' + val.id, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    if (body.error) {
                        loading_1.dismiss();
                        _this.doAlert(body.message.text);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__firstStep3_firstStep3__["a" /* FirstStep3Page */]);
                    }
                }, function (err) {
                    loading_1.dismiss();
                    _this.doAlert(err.message);
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
            }
        });
    };
    FirstStep2Page.prototype.openPhotoPicker = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Photo de profil',
            buttons: [
                {
                    text: 'Choisir une photo',
                    role: 'destructive',
                    handler: function () {
                        var options = {
                            sourceType: 0,
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 2000
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            //this.profileImages[index].image = base64Image;
                            _this.popy = base64Image;
                            _this.popyUrl = 'url(' + base64Image + ')';
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Prendre une photo',
                    handler: function () {
                        var options = {
                            sourceType: 1,
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 2000
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            //this.profileImages[index].image = base64Image;
                            _this.popy = base64Image;
                            _this.popyUrl = 'url(' + base64Image + ')';
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FirstStep2Page.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aïe!',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    FirstStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-first-step2',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\firstStep2\firstStep2.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="bg-popme">\n\n  <div>\n\n    <p>Maintenant, mets ta première photo</p>\n\n  </div>\n\n  <div class="profile-images-edit">\n\n    <div class="profile-image" (click)="openPhotoPicker(i)">\n\n      <div class="div-img img-square r-3x" [style.background-image]="popyUrl"></div>\n\n      <button ion-button icon-only clear class="btn-edit">\n\n        <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n  <button ion-button full round (click)="validProfileStep2()">Valider</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\firstStep2\firstStep2.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _l || Object])
    ], FirstStep2Page);
    return FirstStep2Page;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=firstStep2.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirstStep3Page = /** @class */ (function () {
    function FirstStep3Page(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        var data;
        data = {};
        this.storage.get('user').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.user = val;
            }
        });
    }
    FirstStep3Page.prototype.ionViewDidLoad = function () {
    };
    FirstStep3Page.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FirstStep3Page.prototype.validProfileStep3 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Terminé ...',
            dismissOnPageChange: true
        });
        loading.present();
        var data;
        data = {};
        this.api.post('validInscription/' + this.user.id, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            if (body.error) {
                loading.dismiss();
                _this.doAlert(body.message.text);
            }
            else {
                _this.storage.remove('firstConnexion');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
            }
        }, function (err) {
            loading.dismiss();
            _this.doAlert(err.message);
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    FirstStep3Page.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aïe!',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    FirstStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-first-step3',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\firstStep3\firstStep3.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="bg-popme">\n\n  <div>\n\n    <p>Parfait, merci</p>\n\n  </div>\n\n  <button ion-button full round (click)="validProfileStep3()">Valider</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\firstStep3\firstStep3.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _j || Object])
    ], FirstStep3Page);
    return FirstStep3Page;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=firstStep3.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = /** @class */ (function () {
    function PopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\profile\popover.html"*/'<ion-content class="popover">\n\n	<div layout vertical>\n\n		<div class="content">\n\n			<p>&Ccedil;a c\'est ton score total !</p>\n\n			<p>&Agrave; chaque fois que quelqu\'un aimera une de tes photos, ce score évoluera.</p>\n\n			<p>&Agrave; toi de partager tes photos et faire monter ton score pour devenir le plus populaire !</p>\n\n		<div class="text-center">\n\n			<button small ion-button color="white" (click)="close()">\n\n				J\'ai compris\n\n			</button>\n\n		</div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\profile\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_settings__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoadingPage = /** @class */ (function () {
    function LoadingPage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, users, storageProvider, gameProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.users = users;
        this.storageProvider = storageProvider;
        this.gameProvider = gameProvider;
        this.currentSlide = 0;
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED).then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["c" /* LoginPage */]);
            }
            else {
                console.log("loading");
                _this.slides.lockSwipes(true);
                _this.loadingInfos();
            }
        });
    };
    LoadingPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LoadingPage.prototype.loadingInfos = function () {
        var _this = this;
        this.storageProvider.loadConfigurations();
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER).then(function (user) {
            var data;
            data = {};
            _this.api.post('getUser/' + user.id, data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER, body);
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION).then(function (firstConnexion) {
                    if (firstConnexion) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstStep1Page */]);
                    }
                    else {
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FROM_LOADING, true);
                        var timer = setTimeout(function (x) {
                            _this.gameProvider.loadPopies(20);
                            _this.goToSlide();
                        }, 1500);
                        timer = setTimeout(function (x) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["d" /* ProfilePage */]);
                        }, 3000);
                    }
                });
            }, function (err) {
                alert('erreur loading');
                _this.storageProvider.clearConnexionStorage();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["c" /* LoginPage */]);
            }, function () {
                //this.goToHome();
            });
        });
    };
    LoadingPage.prototype.goToSlide = function () {
        this.currentSlide++;
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.currentSlide, 400);
        this.slides.lockSwipes(true);
    };
    LoadingPage.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aïe!',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], LoadingPage.prototype, "slides", void 0);
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loading',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\loading\loading.html"*/'\n\n<ion-content text-center class="background-screensplash" class="bg-popme">\n\n	<ion-slides #slides class="background-screensplash">\n\n		<ion-slide>\n\n			<div layout vertical>\n\n				<div flex class="loading">\n\n					<div class="loading-desc">Chargement des constantes </div>\n\n					<div class="loading-count">1/3 </div>\n\n				</div>\n\n			</div>\n\n		</ion-slide>\n\n		<ion-slide>\n\n			<div layout vertical>\n\n				<div flex class="loading">\n\n					<div class="loading-desc">Chargement du profil </div>\n\n					<div class="loading-count">2/3 </div>\n\n				</div>\n\n			</div>\n\n		</ion-slide>\n\n		<ion-slide>\n\n			<div layout vertical>\n\n				<div flex class="loading">\n\n					<div class="loading-desc">Terminé </div>\n\n					<div class="loading-count">3/3 </div>\n\n				</div>\n\n			</div>\n\n		</ion-slide>\n\n	</ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* Users */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* GameProvider */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginClassicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_loading__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firstStep1_firstStep1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_settings__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import {page} from '../register/register';
var LoginClassicPage = /** @class */ (function () {
    function LoginClassicPage(navCtrl, app, api, storage, loadingCtrl, alertCtrl, fb, storageProvider, modalCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.storageProvider = storageProvider;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
        this.isLoggedIn = false;
        this.loaded = false;
        var loading = this.loadingCtrl.create({
            content: 'Chargement...'
        });
        this.storage.get('isConnected').then(function (val) {
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
            }
        });
        this.loaded = true;
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.user = val;
            }
        });
    }
    LoginClassicPage.prototype.ionViewDidLoad = function () {
        console.log(this.mailInput);
    };
    LoginClassicPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    LoginClassicPage.prototype.goTo = function (page) {
        this.app.getRootNav().setRoot(page)
            .then(function () {
        });
    };
    LoginClassicPage.prototype.checkLogin = function () {
        var _this = this;
        var data;
        data = {};
        data.user = this.user;
        data.password = this.password;
        this.api.post('connectUser', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            if (body.error) {
                _this.showAlertBadAccount(body.message.text);
            }
            else {
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED, true);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER, body);
                if (!body.enabled) {
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION, true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__firstStep1_firstStep1__["a" /* FirstStep1Page */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__loading_loading__["a" /* LoadingPage */]);
                }
            }
        }, function (err) {
            console.log(err);
            _this.showAlertBadAccount('Votre compte et\/ou mot de passe ne sont pas valides');
            //alert("ko");
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    LoginClassicPage.prototype.showAlertBadAccount = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Erreur de connexion',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], LoginClassicPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mailInput'),
        __metadata("design:type", Object)
    ], LoginClassicPage.prototype, "mailInput", void 0);
    LoginClassicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-classic',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\login\loginClassic.html"*/'<ion-content padding class="bg-popme">\n\n  <div layout vertical center>\n\n    <div class="close-buttons" (click)="back()">\n\n      <ion-icon name="close"></ion-icon>\n\n    </div>\n\n    <div class="logo-title">\n\n      <img src="./assets/img/logo_title.png">\n\n    </div>\n\n    <ion-list class="w-full login">\n\n      <ion-label class="text-center">CONNEXION</ion-label>\n\n      <ion-item class="mt5">\n\n        <ion-input [(ngModel)]="user" type="text" placeholder="Adresse Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="password" type="password" placeholder="Mot de passe"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button round color="muted" outline (click)="checkLogin()">Se connecter</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\login\loginClassic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], LoginClassicPage);
    return LoginClassicPage;
}());

//# sourceMappingURL=loginClassic.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeRankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__ = __webpack_require__(55);
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
var RelativeRankPage = /** @class */ (function () {
    function RelativeRankPage(navCtrl, navParams, api, storage, storageProvider, loadingCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.storageProvider = storageProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
        this.getAllWorld(false);
    }
    RelativeRankPage.prototype.getAllWorld = function (personalized) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement des données ...'
        });
        loading.present();
        var data;
        data = {};
        data.all = personalized;
        if (personalized == true) {
            this.typeRank = 1;
        }
        else {
            this.typeRank = 2;
        }
        this.storage.get('configurations').then(function (configurations) {
            data.range = +configurations.ACTIVITY_RANGE_DAY.value;
        });
        this.storage.get('user').then(function (user) {
            _this.user = user;
            _this.api.post('ranking/' + user.id, data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                _this.ranks = body;
                loading.dismiss();
            }, function (err) {
                loading.dismiss();
                _this.storageProvider.clearConnexionStorage();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }, function () {
                //this.goToHome();
            });
        });
        console.log(this.typeRank);
    };
    RelativeRankPage.prototype.goToHisProfile = function (userId) {
        var _this = this;
        var data;
        data = {};
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement de données ...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('getUserWithPop/' + userId + '/' + this.user.id, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.prepareModal(body);
            loading.dismiss();
        }, function (err) {
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            loading.dismiss();
        }, function () {
            //this.goToHome();
        });
    };
    RelativeRankPage.prototype.prepareModal = function (user) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__["a" /* PoperProfilePage */], { userProfile: user });
        profileModal.present();
    };
    RelativeRankPage.prototype.ionViewDidEnter = function () {
        this.rankType = 'world';
        console.log('ionViewDidLoad RelativeRankPage');
    };
    RelativeRankPage.prototype.ionViewDidLoad = function () {
        //this.rankType = 'world';
        console.log('ionViewDidLoad RelativeRankPage');
    };
    RelativeRankPage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    RelativeRankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-relative-rank',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\rank\relativeRank.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="bg-popme">\n\n    <ion-title><span class="color-white">Classements</span></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <ion-segment [(ngModel)]="rankType">\n\n      <ion-segment-button value="world">\n\n        <ion-icon name="globe"></ion-icon>\n\n        Monde\n\n      </ion-segment-button>\n\n      <ion-segment-button value="country">\n\n        <ion-icon name="flag"></ion-icon>\n\n        Pays\n\n      </ion-segment-button>\n\n      <ion-segment-button value="city">\n\n        <ion-icon name="pin"></ion-icon>\n\n        Ville\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="rankType">\n\n    <ion-row class="mb5 border-none">\n\n      <ion-col auto>\n\n        <div class=\'text-center\'>\n\n          <button class="button-classement"  [ngClass]="typeRank == 2 ? \'button-classement-activated\' : \'\'" (click)="getAllWorld(false)">Voir le classement<br/>personnalisé</button>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col auto>\n\n        <div class=\'text-center\'>\n\n          <button class="button-classement" [ngClass]="typeRank == 1 ? \'button-classement-activated\' : \'\'" (click)="getAllWorld(true)">Voir le classement<br/>complet</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="table-label">\n\n      <ion-col>#</ion-col>\n\n      <ion-col>Pseudo</ion-col>\n\n      <ion-col style="text-align:right;">Score</ion-col>\n\n    </ion-row>\n\n    <ion-list *ngSwitchCase="\'world\'">\n\n      <ion-row *ngFor="let rank of ranks.world; let i = index" [style.background-color]="rank.isUser ? \'#DDD\' : \'\'" (click)="goToHisProfile(rank.id)">\n\n        <ion-col>{{ rank.rank }}</ion-col>\n\n        <ion-col><span *ngIf="rank.rank < 4" [class]="\'color-trophy\'+rank.rank"><ion-icon name="trophy" ></ion-icon></span> {{ rank.usualName }}</ion-col>\n\n        <ion-col>\n\n          <div class=\'float-right\'>{{ rank.score }}\n\n            <img src="./assets/img/logo.png" />\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'country\'">\n\n      <ion-row *ngFor="let rank of ranks.country; let i = index" [style.background-color]="rank.isUser ? \'#DDD\' : \'\'">\n\n        <ion-col>{{ rank.rank }}.</ion-col>\n\n        <ion-col>{{ rank.usualName }}</ion-col>\n\n        <ion-col>\n\n          <div class=\'float-right\'>{{ rank.score }}\n\n            <img src="./assets/img/logo.png" />\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'city\'">\n\n      <ion-row *ngFor="let rank of ranks.city; let i = index" [style.background-color]="rank.isUser ? \'#DDD\' : \'\'">\n\n        <ion-col>{{ rank.rank }}.</ion-col>\n\n        <ion-col>{{ rank.usualName }}</ion-col>\n\n        <ion-col>\n\n          <div class=\'float-right\'>{{ rank.score }}\n\n            <img src="./assets/img/logo.png" />\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\rank\relativeRank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], RelativeRankPage);
    return RelativeRankPage;
}());

//# sourceMappingURL=relativeRank.js.map

/***/ }),

/***/ 186:
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
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autoComplete/autoComplete.module": [
		344
	],
	"../pages/firstStep1/firstStep1.module": [
		232
	],
	"../pages/firstStep2/firstStep2.module": [
		345
	],
	"../pages/firstStep3/firstStep3.module": [
		346
	],
	"../pages/loading/loading.module": [
		347
	],
	"../pages/log/log.module": [
		348
	],
	"../pages/login/login.module": [
		350
	],
	"../pages/login/loginClassic.module": [
		349
	],
	"../pages/play/play.module": [
		351
	],
	"../pages/poperprofile/poperprofile.module": [
		353
	],
	"../pages/profile/popover.module": [
		352
	],
	"../pages/profile/profile.module": [
		355
	],
	"../pages/rank/relativeRank.module": [
		354
	],
	"../pages/register/register.module": [
		357
	],
	"../pages/settings/settings.module": [
		356
	],
	"../pages/trend/trend.module": [
		358
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
webpackAsyncContext.id = 231;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep1PageModule", function() { return FirstStep1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep1__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstStep1PageModule = /** @class */ (function () {
    function FirstStep1PageModule() {
    }
    FirstStep1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firstStep1__["a" /* FirstStep1Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firstStep1__["a" /* FirstStep1Page */]),
            ],
        })
    ], FirstStep1PageModule);
    return FirstStep1PageModule;
}());

//# sourceMappingURL=firstStep1.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(14);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '__settingsPOPME';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameProvider = /** @class */ (function () {
    function GameProvider(api, storage) {
        this.api = api;
        this.storage = storage;
        this.url = __WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].API_URL;
        this.apiToken = __WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].API_TOKEN;
        this.cardsPlayed = [];
        this.cards = [];
    }
    GameProvider.prototype.loadPopies = function (count) {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.user = val;
                _this.addPopies(count, val.id);
            }
        });
    };
    GameProvider.prototype.addPopies = function (count, userId) {
        var _this = this;
        var popies;
        popies = {};
        popies.reject = [];
        for (var card in this.cardsPlayed) {
            popies.reject.push(this.cardsPlayed[card]);
        }
        for (var card in this.cards) {
            popies.reject.push(this.cards[card].id);
        }
        var newPopies;
        newPopies = [];
        this.api.post('getGamePopies/' + this.user.id + '/' + count, popies)
            .subscribe(function (popies) {
            var body;
            body = JSON.parse(popies.text());
            for (var popy in body) {
                newPopies.push({
                    id: body[popy]['id'],
                    image: body[popy]['image'],
                    user: {
                        usualName: body[popy]['user']['usualName'],
                        accountImage: body[popy]['user']['accountImage'],
                        id: body[popy]['user']['id']
                    }
                });
            }
            _this.addNewCards(newPopies);
        }, function (err) {
            console.log(err);
            alert("kos");
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    // Add new cards to our array
    GameProvider.prototype.addNewCards = function (popies) {
        (_a = this.cards).push.apply(_a, popies);
        var _a;
    };
    GameProvider.prototype.getMoreCardsIfNecessary = function () {
        var _this = this;
        if (this.cards.length < 10) {
            this.storage.get('user').then(function (val) {
                if (val) {
                    _this.addPopies(10, val.id);
                }
            });
        }
    };
    GameProvider.prototype.getCards = function () {
        return this.cards;
    };
    GameProvider.prototype.getCardsPlayed = function () {
        return this.cardsPlayed;
    };
    GameProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], GameProvider);
    return GameProvider;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].API_URL;
        this.apiToken = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].API_TOKEN;
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        //return this.http.get('assets/json/initGame.json');
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        body.token = this.apiToken;
        return this.http.post(this.url + '/' + endpoint, JSON.stringify(body), reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.postAuthent = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__ = __webpack_require__(55);
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
    function LogPage(navCtrl, navParams, loadingCtrl, storage, modalCtrl, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.searchResult = [];
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
        this.searchOpen = false;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement des données ...'
        });
        loading.present();
        var data;
        data = {};
        this.storage.get('configurations').then(function (configurations) {
            data.range = +configurations.ACTIVITY_RANGE_DAY.value;
        });
        this.storage.get('user').then(function (user) {
            _this.user = user;
            _this.api.post('getLastPops/' + user.id, data)
                .subscribe(function (data) {
                _this.pops = [];
                var body;
                body = JSON.parse(data.text());
                _this.pops = body;
                _this.popsLength = 0;
                for (var pops in _this.pops) {
                    _this.popsLength = _this.popsLength + _this.pops[pops].pops.length;
                }
                ;
                loading.dismiss();
            }, function (err) {
                loading.dismiss();
                _this.storage.remove('user');
                _this.storage.remove('isConnected');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }, function () {
                //this.goToHome();
            });
        });
    }
    LogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogPage');
    };
    LogPage.prototype.filterUsers = function (event) {
        var _this = this;
        if (this.search.length >= 3) {
            var data = void 0;
            data = {};
            data.search = this.search;
            this.api.post('searchUsers/' + this.user.id, data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                _this.searchResult = body;
            }, function (err) {
                _this.storage.remove('user');
                _this.storage.remove('isConnected');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }, function () {
                //this.goToHome();
            });
        }
        else {
            this.searchResult = [];
        }
    };
    LogPage.prototype.goToHisProfile = function (userId) {
        var _this = this;
        var data;
        data = {};
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement de données ...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('getUserWithPop/' + userId + '/' + this.user.id, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.prepareModal(body);
            loading.dismiss();
        }, function (err) {
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            loading.dismiss();
        }, function () {
            //this.goToHome();
        });
    };
    LogPage.prototype.prepareModal = function (user) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__["a" /* PoperProfilePage */], { userProfile: user });
        profileModal.present();
    };
    LogPage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-log',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\log\log.html"*/'<ion-header>\n\n  <div class="bg-popme" layout horizontal justified>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'ProfilePage\',\'back\')">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'back\')">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div layout vertical>\n\n    <div flex three class="bg-white">\n\n      <div>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6 class="text-center b-r b-light">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-muted\':\'button-primary\'" (click)="searchOpen=false">\n\n                <ion-icon name="md-list"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">Activité</div>\n\n            </ion-col>\n\n            <ion-col col-6 class="text-center">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-primary\':\'button-muted\'" (click)="searchOpen=true">\n\n                <ion-icon name="md-search"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">Recherche</div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="searchOpen">\n\n    <div class="wrapper-xs padder">\n\n      <div ion-text color="danger" class="font-bold">\n\n        Activité ({{ popsLength }})\n\n      </div>\n\n    </div>\n\n    <div class="wrapper-xs padder-sm">\n\n      <div *ngIf="pops?.length == 0">\n\n        <ion-row align-items-center>\n\n          <ion-col col-auto>\n\n            <img class="rounded thumb-md" src="assets/img/mike.png">\n\n          </ion-col>\n\n          <ion-col>\n\n            <div>\n\n              <div class="text-lg">Dommage</div>\n\n              <div class="text-muted">Personne n\'a encore popé</div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div *ngIf="pops?.length > 0">\n\n        <ion-row align-items-center *ngFor="let date of pops; let i = index">\n\n          <div full class="log-date-header">{{ pops[i][\'date\']}}</div>\n\n          <ion-row class="row-full" align-items-center *ngFor="let pop of pops[i].pops; let j = index">\n\n            <ion-col col-auto>\n\n              <img class="rounded thumb-md" src="{{pops[i].pops[j].poperAccountImage}}" (click)="goToHisProfile(pops[i].pops[j].poperId)">\n\n            </ion-col>\n\n            <ion-col>\n\n              <div *ngIf="pops[i].pops[j].usualName != \'\'">\n\n                <div class="text-muted">{{pops[i].pops[j].date}}</div>\n\n                <div class="text-lg">{{pops[i].pops[j].usualName}}</div>\n\n                <div class="text-muted">vous a popé</div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-auto>\n\n              <img class="thumb-md log-popy float-right" src="{{pops[i].pops[j].popyImage}}">\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="!searchOpen">\n\n    <ion-searchbar [(ngModel)]="search" showCancelButton="false" placeholder="Nom d\'utilisateur" (ionInput)="filterUsers($event)">\n\n    </ion-searchbar>\n\n    <div *ngIf="searchResult?.length > 0">\n\n      <ion-row align-items-center *ngFor="let result of searchResult; let i = index" (click)="goToHisProfile(searchResult[i].id)">\n\n        <ion-col col-auto>\n\n          <img class="rounded thumb-md" src="{{searchResult[i].accountImage}}">\n\n        </ion-col>\n\n        <ion-col>\n\n          <div *ngIf="searchResult[i].usualName != \'\'">\n\n            <div class="text-muted">{{searchResult[i].usualName}}</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div *ngIf="searchResult?.length == 0 && search?.length > 0">\n\n      Pas de résultat\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\log\log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_game__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_swing__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlayPage = /** @class */ (function () {
    function PlayPage(navCtrl, storage, api, modalCtrl, loadingCtrl, gameProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.gameProvider = gameProvider;
        this.isLoading = true;
        this.userProfiled = {};
        this.cards = this.gameProvider.getCards();
        this.stackConfig = {
            // Default setting only allows UP, LEFT and RIGHT so you can override this as below
            allowedDirections: [
                __WEBPACK_IMPORTED_MODULE_8_angular2_swing__["Direction"].LEFT,
                __WEBPACK_IMPORTED_MODULE_8_angular2_swing__["Direction"].RIGHT
            ],
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.userId = val.id;
            }
        });
        console.log(this.gameProvider.getCards().length);
        if (this.gameProvider.getCards().length == 0) {
            console.log("chargement ");
            this.gameProvider.loadPopies(20);
        }
    }
    PlayPage.prototype.ngAfterViewInit = function () {
        this.gameProvider.addNewCards(this.popies);
    };
    // Called whenever we drag an element
    PlayPage.prototype.onItemMove = function (element, x, y, r) {
        var nope = element.querySelector('.stamp-nope');
        var like = element.querySelector('.stamp-like');
        var caculatedValue = Math.min(100, Math.abs(x) - 20) / 100; // 0 - 1
        if (x < 0 && Math.abs(x) > 20) {
            nope.style.opacity = caculatedValue;
        }
        else {
            like.style.opacity = caculatedValue;
        }
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
        // Zoom effect for the cards underneath
        if (this.swingCards.toArray()[1] != undefined) {
            var cardBehind = this.swingCards.toArray()[1].getNativeElement();
            cardBehind.style['transform'] = "scale(" + (0.94 + 0.06 * caculatedValue) + ", " + (0.94 + 0.06 * caculatedValue) + ")";
        }
    };
    PlayPage.prototype.disliked = function () {
        var removedCard = this.gameProvider.getCards().shift();
        console.log('You disliked: ' + removedCard.usualName);
        var pop;
        pop = {};
        this.api.post('unpop/' + this.userId + '/' + removedCard.id, pop)
            .subscribe(function (pop) {
            var body;
            body = JSON.parse(pop.text());
        }, function (err) {
            console.log(err);
            alert("ko");
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
        this.gameProvider.getCardsPlayed().push(removedCard.id);
        this.gameProvider.getMoreCardsIfNecessary();
    };
    PlayPage.prototype.liked = function () {
        var removedCard = this.gameProvider.getCards().shift();
        //this.checkMatching(removedCard);
        console.log('You liked: ' + removedCard.usualName);
        var pop;
        pop = {};
        this.api.post('pop/' + this.userId + '/' + removedCard.id, pop)
            .subscribe(function (pop) {
            var body;
            body = JSON.parse(pop.text());
        }, function (err) {
            console.log(err);
            alert("ko");
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
        this.gameProvider.getCardsPlayed().push(removedCard.id);
        this.gameProvider.getMoreCardsIfNecessary();
    };
    PlayPage.prototype.goToHisProfile = function () {
        var _this = this;
        var card = this.cards[0];
        if (card.user.id == this.userProfiled.id) {
            // Pas besoin de chargement
            console.log("Pas besoin de chargement");
            this.prepareModal(this.userProfiled);
        }
        else {
            var data = void 0;
            data = {};
            var loading_1 = this.loadingCtrl.create({
                spinner: 'crescent',
                content: 'Chargement de données ...',
                dismissOnPageChange: true
            });
            loading_1.present();
            this.api.post('getUserWithPop/' + card.user.id + '/' + this.userId, data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                _this.userProfiled = body;
                _this.prepareModal(body);
                loading_1.dismiss();
            }, function (err) {
                _this.storage.remove('user');
                _this.storage.remove('isConnected');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                loading_1.dismiss();
            }, function () {
                //this.goToHome();
            });
        }
    };
    PlayPage.prototype.prepareModal = function (user) {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__["a" /* PoperProfilePage */], { userProfile: user });
        profileModal.onDidDismiss(function (popiesPlayed) {
            var _loop_1 = function (popy) {
                var found = _this.gameProvider.getCards().findIndex(function (element) {
                    return element.id == popiesPlayed[popy];
                });
                if (found > -1) {
                    _this.gameProvider.getCardsPlayed().push(_this.cards[found].id);
                    _this.gameProvider.getCards().splice(found, 1);
                }
            };
            for (var popy in popiesPlayed) {
                _loop_1(popy);
            }
        });
        profileModal.present();
    };
    PlayPage.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    PlayPage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cardStack'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular2_swing__["SwingStackComponent"])
    ], PlayPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('card'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], PlayPage.prototype, "swingCards", void 0);
    PlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-play',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\play\play.html"*/'<ion-header>\n\n<div class="bg-popme" layout horizontal justified>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'ProfilePage\',\'back\')">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'LogPage\',\'forward\')">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n</div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="swipe-bg" no-bounce>\n\n  <!-- <div class="h-full no-cards" [hidden]="!isLoading" horizontal layout center center-center>\n\n    <div class="ripple-container">\n\n      <div class="thumb-lg ripple-trigger">\n\n        <img src="assets/img/hieu.png" class="rounded b b-2x box-shadow">\n\n      </div>\n\n      <div class="ripple-1"></div>\n\n      <div class="ripple-2"></div>\n\n    </div>\n\n  </div> -->\n\n\n\n  <div class="swipe-container">\n\n    <div class="h-full wrapper-sm">\n\n      <div class="card-stack" swing-stack #cardStack [stackConfig]="stackConfig" (throwoutleft)="disliked(c)" (throwoutright)="liked(c)">\n\n        <div class="card-item" #card [style.zIndex]="-1 * i" swing-card\n\n            *ngFor="let c of cards; trackBy: trackByFn; let i = index">\n\n          <div [style.backgroundImage]="\'url(\' + c.image + \')\'" class="div-img h-full r-3x"></div>\n\n\n\n          <div class="card-caption">\n\n            <div class="card-text pull-left">\n\n              <div class="font-bold text-xl" (click)="goToHisProfile()">\n\n                <div class="pull-left poper-card-image" [style.backgroundImage]="\'url(\' + c.user.accountImage + \')\'"></div>\n\n                <div class="pull-left poper-card-text">\n\n                  <div class="poper-card-usualname">{{c.user.usualName}}</div>\n\n                  <div class="poper-card-button">\n\n                    Voir son profil\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <!--<div>{{c.job_title}}</div>-->\n\n            </div>\n\n           <!-- <div class="pull-right">\n\n              <ion-icon class="text-2x" name="md-information-circle" color="white"></ion-icon>\n\n            </div> -->\n\n          </div>\n\n\n\n          <div class="stamp stamp-like">Je pop</div>\n\n          <div class="stamp stamp-nope">Je passe</div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="bottom-actions" horizontal layout center around-justified>\n\n      <button ion-button color="white" class="button-dislike" (click)="disliked()">\n\n        <ion-icon name="thumbs-down"></ion-icon>\n\n      </button>\n\n      <button ion-button color="white" class="button-star" (click)="goToHisProfile()">\n\n        <ion-icon name="md-contact"></ion-icon>\n\n      </button>\n\n      <button ion-button color="white" class="button-like" (click)="liked()">\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\play\play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_game_game__["a" /* GameProvider */]])
    ], PlayPage);
    return PlayPage;
}());

//# sourceMappingURL=play.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_loginClassic__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firstStep1_firstStep1__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import {page} from '../register/register';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, app, api, storage, loadingCtrl, alertCtrl, fb, storageProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.storageProvider = storageProvider;
        this.modalCtrl = modalCtrl;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        this.isLoggedIn = false;
        this.introSlides = [
            {
                title: '<br/>',
                image: 'assets/img/intro/intro_1.png'
            },
            {
                title: 'Swipe Right to like someone <br /> or Swipe Left to pass',
                image: 'assets/img/intro/intro_2.png'
            },
            {
                title: 'If they also Swipe Right <br /> then "It\'s a Match!"',
                image: 'assets/img/intro/intro_3.png'
            },
            {
                title: 'Only people you\'ve matched <br /> with can message you',
                image: 'assets/img/intro/intro_4.png'
            }
        ];
        this.loaded = false;
        var loading = this.loadingCtrl.create({
            content: 'Chargement...'
        });
        this.storage.get('isConnected').then(function (val) {
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
            }
        });
        this.loaded = true;
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.user = val;
            }
        });
        this.checkLoginFb();
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.goTo = function (page) {
        this.app.getRootNav().setRoot(page, {}, { animate: true, direction: 'forward' })
            .then(function () {
        });
    };
    LoginPage.prototype.prepareModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__login_loginClassic__["a" /* LoginClassicPage */], {});
        profileModal.present();
    };
    LoginPage.prototype.checkLogin = function () {
        var _this = this;
        var data;
        data = {};
        data.user = this.user;
        data.password = this.password;
        this.api.post('connectUser', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            if (body.error) {
                console.log(body.message.key);
                if (body.message.key == 'AUTHENTICATION_USER_NOT_ENABLED') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__firstStep1_firstStep1__["a" /* FirstStep1Page */]);
                }
                else {
                    _this.showAlertBadAccount(body.message.text);
                }
            }
            else {
                _this.storage.set('isConnected', true);
                _this.storage.set('user', body);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* LoadingPage */]);
            }
        }, function (err) {
            console.log(err);
            _this.showAlertBadAccount('Votre compte et\/ou mot de passe ne sont pas valides');
            //alert("ko");
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    LoginPage.prototype.showAlertBadAccount = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Erreur de connexion',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.loginFB = function () {
        var _this = this;
        console.log('Login FB');
        var data;
        data = {};
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            //alert(res.authResponse.userID);
            if (res.status === "connected") {
                data.id = res.authResponse.userID;
                data.facebookId = res.authResponse.userID;
                //data.user = this.user;
                data.password = 'facebook';
                // Get user infos from the API
                _this.fb.api("/me?fields=name,email", []).then(function (userFB) {
                    // Get the connected user details
                    data.usualName = userFB.name;
                    data.email = userFB.email;
                    _this.api.post('connectFacebookUser', data)
                        .subscribe(function (data) {
                        var body;
                        body = JSON.parse(data.text());
                        _this.storage.set('configurations', body);
                        //alert(body);
                        // On redirige l'utilisateur vers sa page si il est authentifié
                        _this.storage.set('isConnected', true);
                        _this.storage.set('user', body);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* LoadingPage */]);
                    }, function (err) {
                        //alert(err);
                        _this.storageProvider.clearConnexionStorage();
                        _this.navCtrl.setRoot(LoginPage_1);
                    }, function () {
                        //this.goToHome();
                    });
                });
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.checkLoginFb = function () {
        var _this = this;
        this.fb.getLoginStatus()
            .then(function (res) {
            if (res.status === "connect") {
                alert('Point 8');
                _this.isLoggedIn = true;
                // On redirige l'utilisateur vers sa page si il est authentifié
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.usersFb = res;
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Slides */])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\login\login.html"*/'<ion-content padding class="bg-popme">\n\n  <div layout vertical center>\n\n    <ion-slides #slides pager flex>\n\n      <ion-slide *ngFor="let slide of introSlides">\n\n        <h3 class="font-thin" [innerHTML]="slide.title"></h3>\n\n        <img [src]="slide.image">\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <div class="text-center login-buttons">\n\n      <div>\n\n        <button ion-button round class="btn-tinder-login m-b-sm" (click)="loginFB()">CONNEXION PAR FACEBOOK</button>\n\n      </div>\n\n      <div>\n\n        <button ion-button round color="muted" outline (click)="prepareModal()">CONNEXION CLASSIQUE</button>\n\n      </div>\n\n      <div class="button-blank">\n\n        <button small outline (click)="goTo(\'RegisterPage\')">INSCRIS-TOI</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firstStep1_firstStep1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_settings__ = __webpack_require__(44);
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
    function RegisterPage(navCtrl, app, api, storage, alertCtrl, loadingCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED).then(function (val) {
            if (val) {
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION).then(function (valFirstCon) {
                    if (valFirstCon) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__firstStep1_firstStep1__["a" /* FirstStep1Page */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                    }
                });
            }
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    RegisterPage.prototype.back = function () {
        this.viewCtrl.dismiss();
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
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Inscription...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('createUser', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            console.log(body);
            if (body.error) {
                loading.dismiss();
                _this.doAlert(body.message.text);
            }
            else {
                _this.storage.set('isConnected', true);
                _this.storage.set('user', body);
                // On redirige l'utilisateur vers sa page si il est authentifié
                _this.storage.set('firstConnexion', true);
                _this.storage.set('tutoriel', true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__firstStep1_firstStep1__["a" /* FirstStep1Page */]);
            }
        }, function (err) {
            loading.dismiss();
            _this.doAlert(err.message);
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    RegisterPage.prototype.goTo = function (page) {
        this.app.getRootNav().setRoot(page, {}, { animate: true, direction: 'forward' })
            .then(function () {
        });
    };
    RegisterPage.prototype.goBack = function (page) {
        this.app.getRootNav().setRoot(page, {}, { animate: true, direction: 'back' })
            .then(function () {
        });
    };
    RegisterPage.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aïe!',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding text-center class="bg-popme">\n\n  <div class="close-buttons" (click)="goBack(\'LoginPage\')">\n\n    <ion-icon name="close"></ion-icon>\n\n  </div>\n\n  <div class="register">\n\n    <img src="./assets/img/logo_title.png" />\n\n  </div>\n\n  <div>\n\n    <p>Bienvenue sur PopMe, avec seulement 4 photos, devient plus pop que tes amis.\n\n    Pour créer ton profil, il te suffit de renseigner les informations suivantes :</p>\n\n  </div>\n\n  <ion-list class="w-full login">\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Adresse Email" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Mot de passe" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Pseudo" [(ngModel)]="usualName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Date de naissance</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" cancelText="Annuler" doneText="OK" [(ngModel)]="birthday"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sexe</ion-label>\n\n      <ion-select [(ngModel)]="gender">\n\n        <ion-option value="f">Femme</ion-option>\n\n        <ion-option value="h">Homme</ion-option>\n\n        <ion-option value="a">Autre</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!--<ion-item>\n\n      <ion-input type="text" placeholder="Lieu" [(ngModel)]="city"></ion-input>\n\n    </ion-item>-->\n\n  </ion-list>\n\n  <button ion-button round color="muted" outline (click)="goToProfile()">Créer mon compte</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__autoComplete_autoComplete__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_providers__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var map;
var infowindow;
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, fb, storageProvider, alertCtrl, geolocation, platform, viewCtrl, zone, modalCtrl, loadingCtrl, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fb = fb;
        this.storageProvider = storageProvider;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.user = {};
        this.location = {};
        this.rank = {};
        this.hidevalue = true;
        this.distance = 80;
        this.ageRange = { lower: 18, upper: 30 };
        this.storage.get('user').then(function (userStorage) {
            if (userStorage) {
                _this.storage.get('fromLoading').then(function (fromLoading) {
                    if (fromLoading) {
                        _this.user = userStorage;
                    }
                    else {
                        _this.loadUserInfo(userStorage.id);
                    }
                });
            } //
        });
        this.storage.get('location').then(function (locationStorage) {
            if (locationStorage) {
                _this.location = locationStorage;
            }
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    }
    SettingsPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave SettingsPage');
        var data;
        data = {};
        data = this.user;
        data.birthday = new Date(this.dateB);
        data.place = this.location;
        this.api.post('updateUser/' + this.user.id, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            console.log(body);
            if (body.error) {
                console.log('Update user : KO');
            }
            else {
                console.log('Update user : OK');
            }
        }, function (err) {
            console.log('Update user : KO');
        }, function () {
            //this.goToHome();
        });
    };
    SettingsPage.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__autoComplete_autoComplete__["a" /* AutoCompletePage */]);
        var me = this;
        modal.onDidDismiss(function (data) {
            _this.storage.get('location').then(function (locationStorage) {
                if (locationStorage) {
                    _this.location = locationStorage;
                }
            });
        });
        modal.present();
    };
    SettingsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
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
    SettingsPage.prototype.loadUserInfo = function (idUser) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement de données ...',
            dismissOnPageChange: true
        });
        loading.present();
        var data;
        data = {};
        this.api.post('getUser/' + idUser, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.user = body;
            _this.rank = _this.user.rank;
            _this.storage.set('user', body);
            console.log(_this.user.birthday.date);
            _this.dateB = new Date(_this.user.birthday.date);
            var curr_date = _this.dateB.getDate();
            var curr_month = _this.dateB.getMonth() + 1; //Months are zero based
            var curr_year = _this.dateB.getFullYear();
            _this.dateB = curr_year + "-" + curr_month + "-" + curr_date;
            //this.dateB = "2017-11-20";'AAAA-MM-DD'
            console.log(_this.dateB);
        }, function (err) {
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }, function () {
            //this.goToHome();
        });
        loading.dismiss();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><span class="color-white">Paramètres</span></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-custom">\n\n  <ion-card class="card-custom text-center wrapper">\n\n    <div class="text-xl font-bold">\n\n      <div class="thumb-sm">\n\n        <img src="assets/img/logo.png" alt="">\n\n      </div>\n\n      Popme\n\n    </div>\n\n    <div color="muted" ion-text>\n\n      Devenez le plus populaire\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      MES INFORMATIONS\n\n    </ion-list-header>\n\n\n\n    <button ion-item (click)="showAddressModal()">\n\n      Location\n\n      <ion-note item-end>\n\n        Mon adresse actuelle\n\n        <br>\n\n        <span class="text-xs">{{ location.city }}, {{ location.country }}</span>\n\n      </ion-note>\n\n    </button>\n\n    <ion-item>\n\n      <ion-label>Description</ion-label>\n\n      <ion-input type="text" placeholder="Description" [(ngModel)]="user.description"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Date de naissance</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" cancelText="Annuler" doneText="OK" [(ngModel)]="dateB"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sexe</ion-label>\n\n      <ion-select [(ngModel)]="user.sexe">\n\n        <ion-option value="f">Femme</ion-option>\n\n        <ion-option value="h">Homme</ion-option>\n\n        <ion-option value="a">Autre</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <!--\n\n  <ion-list>\n\n    <ion-list-header>\n\n      NOTIFICATIONS\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Nouveaux pops</ion-label>\n\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Slot photo disponible</ion-label>\n\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>-->\n\n\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      NOUS CONTACTER\n\n    </ion-list-header>\n\n    <button ion-item>\n\n      Aide et assistance\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      MENTIONS LEGALES\n\n    </ion-list-header>\n\n    <button ion-item>\n\n      Politique de confidentialité\n\n    </button>\n\n    <button ion-item>\n\n      Conditions d\'utilisations\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines>\n\n    <ion-item text-center class="m-b-sm" (click)="logout()">\n\n      Déconnexion\n\n    </ion-item>\n\n    <div class="text-center m-b">\n\n      <div class="thumb-sm">\n\n        <img src="assets/img/logo.png" alt="">\n\n      </div>\n\n      <br/><br/>\n\n      <div>Version 8.4.0</div>\n\n    </div>\n\n    <ion-item text-center (click)="deleteAccount()">\n\n      Supprimer mon compte\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_providers__["a" /* Api */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var map;
var infowindow;
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
var AutoCompletePage = /** @class */ (function () {
    function AutoCompletePage(viewCtrl, zone, storage) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.storage = storage;
        this.user = {};
        this.infos = {};
        this.latitude = 0;
        this.longitude = 0;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AutoCompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutoCompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
        this.getInfos(item);
    };
    AutoCompletePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query,
            componentRestrictions: {
                country: 'fr'
            }
        }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    };
    AutoCompletePage.prototype.getInfos = function (address) {
        var _this = this;
        var city;
        var region;
        var country;
        var latitude;
        var longitude;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (results[0]) {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
                var indice = 0;
                for (var j = 0; j < results.length; j++) {
                    if (results[j].types[0] == 'locality') {
                        indice = j;
                        break;
                    }
                }
                for (var i = 0; i < results[j].address_components.length; i++) {
                    if (results[j].address_components[i].types[0] == "locality") {
                        //this is the object you are looking for City
                        city = results[j].address_components[i];
                    }
                    if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
                        //this is the object you are looking for State
                        region = results[j].address_components[i];
                    }
                    if (results[j].address_components[i].types[0] == "country") {
                        //this is the object you are looking for
                        country = results[j].address_components[i];
                    }
                }
                //city data
                alert(city.long_name + " || " + region.long_name + " || " + country.long_name);
                _this.infos.city = city.long_name;
                _this.infos.region = region.long_name;
                _this.infos.country = country.long_name;
                _this.infos.latitude = latitude;
                _this.infos.longitude = longitude;
                alert("lat: " + _this.infos.latitude + ", long: " + _this.infos.longitude);
                _this.storage.set('location', _this.infos);
            }
            else {
                alert("No results found");
            }
            //}
        });
    };
    AutoCompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auto-complete',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\autoComplete\autoComplete.html"*/'<ion-header>\n\n	<ion-toolbar>\n\n		<ion-title><span class="color-white">Entre ton adresse</span></ion-title>\n\n		<ion-searchbar class="color-white" [(ngModel)]="autocomplete.query" [showCancelButton]="true"   (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">\n\n			{{ item }}\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\autoComplete\autoComplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AutoCompletePage);
    return AutoCompletePage;
}());

//# sourceMappingURL=autoComplete.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poperprofile_poperprofile__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rank_relativeRank__ = __webpack_require__(154);
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
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
        });
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement des données ...'
        });
        loading.present();
        this.storage.get('user').then(function (user) {
            _this.user = user;
        });
        this.api.get('trend/poped')
            .subscribe(function (data) {
            _this.popeds = [];
            var body;
            body = JSON.parse(data.text());
            for (var i = 0; i < body.length; i++) {
                _this.popeds[i] = body[i];
            }
            console.log(_this.popeds);
        }, function (err) {
        }, function () {
            //this.goToHome();
        });
        this.api.get('trend/poper')
            .subscribe(function (data) {
            _this.popers = [];
            var body;
            body = JSON.parse(data.text());
            for (var i = 0; i < body.length; i++) {
                _this.popers[i] = body[i];
            }
            console.log(_this.popers);
        }, function (err) {
        }, function () {
            //this.goToHome();
        });
        loading.dismiss();
    }
    TrendPage.prototype.goToHisProfile = function (userId) {
        var _this = this;
        // Interdiction d'accéder à son profil vue VISITEUR
        if (userId == this.user.id) {
            return;
        }
        var data;
        data = {};
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement de données ...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('getUserWithPop/' + userId + '/' + this.user.id, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.prepareModal(body);
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        }, function () {
            //this.goToHome();
        });
    };
    TrendPage.prototype.prepareModal = function (user) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__poperprofile_poperprofile__["a" /* PoperProfilePage */], { userProfile: user });
        profileModal.present();
    };
    TrendPage.prototype.prepareModalRanking = function (type) {
        console.log('ionViewDidLoad TrendPage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__rank_relativeRank__["a" /* RelativeRankPage */], { userProfile: type });
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
            selector: 'page-trend',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\trend\trend.html"*/'<ion-header>\n\n    <div class="bg-popme" layout horizontal justified>\n\n     <button ion-button color="muted" clear icon-only (click)="goTo(\'ProfilePage\',\'back\')">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'back\')">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="muted" clear icon-only (click)="goTo(\'LogPage\',\'back\')">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n  </button>\n\n</div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <div class="wrapper-xs padder">\n\n        <div ion-text color="danger" class="font-bold">\n\n            Tendances\n\n        </div>\n\n    </div>\n\n\n\n    <div full class="subtitle">Les plus popés de la semaine</div>\n\n    <div class="wrapper-xs padder-sm">\n\n        <div *ngIf="popeds?.length > 0">\n\n            <ion-row align-items-center *ngFor="let poped of popeds; let i = index">\n\n                <ion-col col-12 class="text-center" (click)="goToHisProfile(poped.user.id)">\n\n                    <div [class]="\'animate-ease-\'+i">\n\n                        <div class="account-image">\n\n                            <img class="rounded thumb-md account-image border-image-color{{i}}" src="{{poped.user.accountImage}}">\n\n                            <div [class]="\'background-color\'+i">\n\n                                <div class="trophy"><ion-icon name="trophy"></ion-icon></div>\n\n                                <div class="infos-trend">\n\n                                    <div class="usual-name">{{poped.user.usualName}}</div>\n\n                                    <div>{{poped.score}} pops recus</div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n    <div full class="subtitle">Les plus grands popers de la semaine</div>\n\n    <div class="wrapper-xs padder-sm">\n\n        <div *ngIf="popers?.length > 0">\n\n            <ion-row align-items-center *ngFor="let poper of popers; let i = index">\n\n                <ion-col col-12 class="text-center" (click)="goToHisProfile(poper.user.id)">\n\n                    <div [class]="\'animate-ease-\'+i">\n\n                        <div class="account-image">\n\n                            <img class="rounded thumb-md account-image border-image-color{{i}}" src="{{poper.user.accountImage}}">\n\n                            <div [class]="\'background-color\'+i">\n\n                                <div class="trophy"><ion-icon name="trophy"></ion-icon></div>\n\n                                <div class="infos-trend">\n\n                                    <div class="usual-name">{{poper.user.usualName}}</div>\n\n                                    <div>{{poper.score}} pops</div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="wrapper-xs padder">\n\n        <div ion-text color="danger" class="font-bold">\n\n            Classements\n\n        </div>\n\n    </div>\n\n    <div class="card-background-page">\n\n        <ion-card (click)="prepareModalRanking(1)">\n\n            <img src="./assets/img/city.jpg"/>\n\n            <div class="card-title">Ville</div>\n\n            <div class="card-subtitle">Classement dans ta ville</div>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <img src="./assets/img/country.jpg"/>\n\n            <div class="card-title">Pays</div>\n\n            <div class="card-subtitle">Classement dans ton pays</div>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <img src="./assets/img/world.jpg"/>\n\n            <div class="card-title">Monde</div>\n\n            <div class="card-subtitle">Classement dans le monde</div>\n\n        </ion-card>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\trend\trend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], TrendPage);
    return TrendPage;
}());

//# sourceMappingURL=trend.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompletePageModule", function() { return AutoCompletePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoComplete__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutoCompletePageModule = /** @class */ (function () {
    function AutoCompletePageModule() {
    }
    AutoCompletePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__autoComplete__["a" /* AutoCompletePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autoComplete__["a" /* AutoCompletePage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__autoComplete__["a" /* AutoCompletePage */],
            ]
        })
    ], AutoCompletePageModule);
    return AutoCompletePageModule;
}());

//# sourceMappingURL=autoComplete.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep2PageModule", function() { return FirstStep2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep2__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstStep2PageModule = /** @class */ (function () {
    function FirstStep2PageModule() {
    }
    FirstStep2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firstStep2__["a" /* FirstStep2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firstStep2__["a" /* FirstStep2Page */]),
            ],
        })
    ], FirstStep2PageModule);
    return FirstStep2PageModule;
}());

//# sourceMappingURL=firstStep2.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep3PageModule", function() { return FirstStep3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep3__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstStep3PageModule = /** @class */ (function () {
    function FirstStep3PageModule() {
    }
    FirstStep3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firstStep3__["a" /* FirstStep3Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firstStep3__["a" /* FirstStep3Page */]),
            ],
        })
    ], FirstStep3PageModule);
    return FirstStep3PageModule;
}());

//# sourceMappingURL=firstStep3.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoadingPageModule = /** @class */ (function () {
    function LoadingPageModule() {
    }
    LoadingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingPage */]),
            ],
        })
    ], LoadingPageModule);
    return LoadingPageModule;
}());

//# sourceMappingURL=loading.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPageModule", function() { return LogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(242);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__log__["a" /* LogPage */]),
            ],
        })
    ], LogPageModule);
    return LogPageModule;
}());

//# sourceMappingURL=log.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginClassicPageModule", function() { return LoginClassicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginClassic__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginClassicPageModule = /** @class */ (function () {
    function LoginClassicPageModule() {
    }
    LoginClassicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loginClassic__["a" /* LoginClassicPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loginClassic__["a" /* LoginClassicPage */]),
            ],
        })
    ], LoginClassicPageModule);
    return LoginClassicPageModule;
}());

//# sourceMappingURL=loginClassic.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(29);
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlayPageModule = /** @class */ (function () {
    function PlayPageModule() {
    }
    PlayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__play__["a" /* PlayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__play__["a" /* PlayPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["SwingModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__play__["a" /* PlayPage */]
            ]
        })
    ], PlayPageModule);
    return PlayPageModule;
}());

//# sourceMappingURL=play.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ]
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoperProfilePageModule", function() { return PoperProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poperprofile__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PoperProfilePageModule = /** @class */ (function () {
    function PoperProfilePageModule() {
    }
    PoperProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__poperprofile__["a" /* PoperProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__poperprofile__["a" /* PoperProfilePage */]),
            ],
        })
    ], PoperProfilePageModule);
    return PoperProfilePageModule;
}());

//# sourceMappingURL=poperprofile.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeRankPageModule", function() { return RelativeRankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relativeRank__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RelativeRankPageModule = /** @class */ (function () {
    function RelativeRankPageModule() {
    }
    RelativeRankPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__relativeRank__["a" /* RelativeRankPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__relativeRank__["a" /* RelativeRankPage */]),
            ],
        })
    ], RelativeRankPageModule);
    return RelativeRankPageModule;
}());

//# sourceMappingURL=relativeRank.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(53);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(340);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(339);
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

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendPageModule", function() { return TrendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trend__ = __webpack_require__(343);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trend__["a" /* TrendPage */]),
            ],
        })
    ], TrendPageModule);
    return TrendPageModule;
}());

//# sourceMappingURL=trend.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modules__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_viewer__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_screenshot__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */](storage, {
        nbLaunch: 0
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/firstStep1/firstStep1.module#FirstStep1PageModule', name: 'FirstStep1Page', segment: 'firstStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/autoComplete/autoComplete.module#AutoCompletePageModule', name: 'AutoCompletePage', segment: 'autoComplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstStep2/firstStep2.module#FirstStep2PageModule', name: 'FirstStep2Page', segment: 'firstStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstStep3/firstStep3.module#FirstStep3PageModule', name: 'FirstStep3Page', segment: 'firstStep3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log/log.module#LogPageModule', name: 'LogPage', segment: 'log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/loginClassic.module#LoginClassicPageModule', name: 'LoginClassicPage', segment: 'loginClassic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play/play.module#PlayPageModule', name: 'PlayPage', segment: 'play', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/poperprofile/poperprofile.module#PoperProfilePageModule', name: 'PoperProfilePage', segment: 'poperprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rank/relativeRank.module#RelativeRankPageModule', name: 'RelativeRankPage', segment: 'relativeRank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trend/trend.module#TrendPageModule', name: 'TrendPage', segment: 'trend', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__popmedb'
                    //driverOrder: ['localstorage' ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["i" /* PlayPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["l" /* ProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["b" /* FirstStep1PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["c" /* FirstStep2PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["d" /* FirstStep3PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["h" /* LoginPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["g" /* LoginClassicPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["f" /* LogPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["e" /* LoadingPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["j" /* PoperProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["k" /* PopoverPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["m" /* RelativeRankPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["a" /* AutoCompletePageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["d" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["b" /* GameProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["e" /* Users */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_screenshot__["a" /* Screenshot */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(233);
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
  Generated class for the PubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Pub = /** @class */ (function () {
    function Pub(settings, http, plt, admobFree) {
        this.settings = settings;
        this.http = http;
        this.plt = plt;
        this.admobFree = admobFree;
        this.firstPubDisplayed = false;
    }
    Pub.prototype.initPub = function (firstPub) {
        var _this = this;
        //permet de s'assure que la pub initié par welcomme ne passe qu'au lancement
        if (!firstPub || (firstPub && !this.firstPubDisplayed)) {
            this.firstPubDisplayed = true;
            //if (this.settings.allSettings.nbLaunch > 1) {
            setTimeout(function () {
                var interConfig = {
                    id: '',
                    isTesting: false,
                    autoShow: true
                };
                if (_this.plt.is('android')) {
                    interConfig.id = ''; //ca-app-pub-3956495131739396/1272328460
                }
                _this.admobFree.interstitial.config(interConfig);
                _this.admobFree.interstitial.prepare()
                    .then(function () {
                    //alert('interstitial');
                    //this.admobFree.interstitial.show().then(() => { /*alert('interstitialOK');*/ }).catch(e => alert(e));
                })
                    .catch(function (e) { return console.log(e); });
            }, 4000);
            //}
        }
    };
    Pub = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], Pub);
    return Pub;
}());

//# sourceMappingURL=pub.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__ = __webpack_require__(438);
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
  Generated class for the GaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Ga = /** @class */ (function () {
    function Ga(ga) {
        this.ga = ga;
    }
    Ga.prototype.init = function () {
        this.ga.startTrackerWithId('TODO', 15)
            .then(function () {
            console.log('Google analytics is ready now');
            //this.ga.trackView('test');
        })
            .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
    };
    Ga.prototype.track = function (label) {
        //console.log(label);
        this.ga.trackView(label);
    };
    Ga = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], Ga);
    return Ga;
}());

//# sourceMappingURL=ga.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Users = /** @class */ (function () {
    function Users(api, storage) {
        this.api = api;
        this.storage = storage;
        this.url = __WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].API_URL;
        this.apiToken = __WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].API_TOKEN;
    }
    Users.prototype.loadUser = function () {
        var _this = this;
        var result = {};
        this.storage.get('user').then(function (user) {
            var data;
            data = {};
            _this.api.post('getUser/' + user.id, data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                _this.storage.set('user', body);
                _this.storage.set('fromLoading', true);
                _this.user = body;
                console.log(_this.user);
            }, function (err) {
                _this.storage.remove('configurations');
                _this.storage.remove('user');
                _this.storage.remove('isConnected');
                _this.storage.remove('fromLoading');
            }, function () {
                //this.goToHome();
            });
        });
    };
    Users = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], Users);
    return Users;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appSettings; });
var appSettings = {
    PRODUCTION: false,
    API_ENDPOINT: 'https://www.escapegamecity.com/api/',
    SERVER_URL: 'https://www.escapegamecity.com/',
    API_TOKEN: '66CA3297B61DC38B-9925DC75FDE8EC3AFC2B6E5974228-CD625CB234A5FEDC',
    API_URL: 'https://www.popme.app/api',
    DEBUG: false,
    BLOCK_ADD_POPY_DURATION: 24 * 60 * 60,
    STORAGE_ATTRIBUTES: {
        USER: 'user',
        CONFIGURATIONS: 'configurations',
        FROM_LOADING: 'from_loading',
        IS_CONNECTED: 'isConnected',
        FIRST_CONNEXION: 'firstConnexion',
        TUTORIEL: 'tutoriel'
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pub_pub__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ga_ga__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_game__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* unused harmony reexport Pub */
/* unused harmony reexport Ga */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__users_users__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__storage_storage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__game_game__["a"]; });








//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_globalization__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_screenshot__ = __webpack_require__(241);
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
    function ProfilePage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, globalization, popoverCtrl, socialSharing, photoViewer, platform, screenshot) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.globalization = globalization;
        this.popoverCtrl = popoverCtrl;
        this.socialSharing = socialSharing;
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.screenshot = screenshot;
        this.user = {};
        this.rank = {};
        this.hidevalue = true;
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        this.storage.get('user').then(function (userStorage) {
            if (userStorage) {
                _this.storage.get('fromLoading').then(function (fromLoading) {
                    if (fromLoading) {
                        _this.user = userStorage;
                        _this.rank = _this.user.rank.world;
                        _this.storage.remove('fromLoading');
                        _this.storage.get('configurations').then(function (configurations) {
                            _this.maxTime = +configurations['BLOCK_ADD_POPY_DURATION'].value - (_this.user.dateServer - _this.user.lastPopup);
                            _this.hidevalue = false;
                            _this.remainingTime = _this.determineTimeText();
                            _this.startTimer();
                        });
                        _this.storage.get('tutoriel').then(function (tutoriel) {
                            if (tutoriel) {
                                var evt = new MouseEvent("click", {
                                    bubbles: true,
                                    cancelable: true,
                                    view: window
                                });
                                _this.presentPopoverScore(evt);
                            }
                        });
                    }
                    else {
                        _this.loadUserInfo(userStorage.id);
                    }
                });
            }
        });
    }
    ProfilePage.prototype.getPreferredLanguage = function () {
        this.globalization.getPreferredLanguage()
            .then(function (res) { return alert(res.value); })
            .catch(function (e) { return alert(e); });
    };
    ProfilePage.prototype.getLocaleName = function () {
        this.globalization.getLocaleName()
            .then(function (res) { return alert(res.value); })
            .catch(function (e) { return alert(e); });
    };
    ProfilePage.prototype.loadUserInfo = function (idUser) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement de données ...',
            dismissOnPageChange: true
        });
        loading.present();
        var data;
        data = {};
        this.api.post('getUser/' + idUser, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.user = body;
            _this.rank = _this.user.rank.world;
            _this.storage.set('user', body);
            _this.storage.get('configurations').then(function (configurations) {
                _this.maxTime = +configurations['BLOCK_ADD_POPY_DURATION'].value - (_this.user.dateServer - _this.user.lastPopup);
                if (_this.maxTime > 0) {
                    _this.hidevalue = false;
                    _this.remainingTime = _this.determineTimeText();
                }
                _this.startTimer();
            });
        }, function (err) {
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }, function () {
            //this.goToHome();
        });
        loading.dismiss();
    };
    ProfilePage.prototype.startTimer = function () {
        var _this = this;
        this.timerNextPopy = setTimeout(function (x) {
            if (_this.maxTime <= 0) { }
            _this.maxTime -= 1;
            if (_this.maxTime > 0) {
                _this.hidevalue = false;
                _this.remainingTime = _this.determineTimeText();
                _this.startTimer();
            }
            else {
                _this.hidevalue = true;
            }
        }, 1000);
    };
    ProfilePage.prototype.determineTimeText = function () {
        var days = Math.floor(this.maxTime / 86400);
        var hours = Math.floor((this.maxTime - (days * 86400)) / 3600);
        var minutes = Math.floor((this.maxTime - (hours * 3600)) / 60);
        var seconds = (this.maxTime - (hours * 3600) - (minutes * 60));
        if (days > 0) {
            return days + "j " + hours + "h ";
        }
        else {
            if (hours > 0) {
                return hours + "h " + minutes + "m ";
            }
            else {
                if (minutes > 0) {
                    return minutes + "m " + seconds + "s";
                }
                else {
                    return seconds + "s";
                }
            }
        }
        ;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProfilePage.prototype.doRefresh = function (event) {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val) {
                clearTimeout(_this.timerNextPopy);
                _this.loadUserInfo(val.id);
                _this.storage.get('configurations').then(function (configurations) {
                    _this.maxTime = +configurations['BLOCK_ADD_POPY_DURATION'].value - (_this.user.dateServer - _this.user.lastPopup);
                    _this.startTimer();
                });
                event.complete();
            }
        });
    };
    ProfilePage.prototype.openPhotoPicker = function (index) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modifier votre album',
            buttons: [
                {
                    text: 'Choisir une photo',
                    handler: function () {
                        console.log('Destructive clicked');
                        var options = {
                            sourceType: 0,
                            quality: 50,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.user.popies[index].image = base64Image;
                            var data;
                            data = {};
                            data.popy = base64Image;
                            var loading = _this.loadingCtrl.create({
                                spinner: 'crescent',
                                content: 'Chargement ...',
                                dismissOnPageChange: true
                            });
                            loading.present();
                            _this.api.post('addPopy/' + _this.user.id, data)
                                .subscribe(function (data) {
                                var body;
                                body = JSON.parse(data.text());
                                if (body.error) {
                                    loading.dismiss();
                                    _this.doAlert(body.message.text);
                                }
                                else {
                                    loading.dismiss();
                                    _this.loadUserInfo(_this.user.id);
                                }
                            }, function (err) {
                                loading.dismiss();
                                _this.doAlert(err.message);
                                //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                            }, function () {
                                //this.goToHome();
                            });
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Prendre une photo',
                    handler: function () {
                        console.log('Archive clicked');
                        var options = {
                            sourceType: 1,
                            quality: 50,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.user.popies[index].image = base64Image;
                            var data;
                            data = {};
                            data.popy = base64Image;
                            var loading = _this.loadingCtrl.create({
                                spinner: 'crescent',
                                content: 'Chargement ...',
                                dismissOnPageChange: true
                            });
                            loading.present();
                            _this.api.post('addPopy/' + _this.user.id, data)
                                .subscribe(function (data) {
                                var body;
                                body = JSON.parse(data.text());
                                if (body.error) {
                                    loading.dismiss();
                                    _this.doAlert(body.message.text);
                                }
                                else {
                                    loading.dismiss();
                                    _this.loadUserInfo(_this.user.id);
                                }
                            }, function (err) {
                                loading.dismiss();
                                _this.doAlert(err.message);
                                //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                            }, function () {
                                //this.goToHome();
                            });
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.removeImage = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Supprimer cette photo',
            message: 'Tu veux vraiment supprimer cette photo ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        console.log(_this.user.popies[index].id);
                        var loading = _this.loadingCtrl.create({
                            spinner: 'crescent',
                            content: 'Suppression ...'
                        });
                        loading.present();
                        var data;
                        data = {};
                        _this.api.post('deletePopy/' + _this.user.id
                            + '/' + _this.user.popies[index].id, data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            if (body.error) {
                                loading.dismiss();
                                _this.doAlert(body.message.text);
                            }
                            else {
                                loading.dismiss();
                                _this.loadUserInfo(_this.user.id);
                            }
                        }, function (err) {
                            loading.dismiss();
                            _this.doAlert(err.message);
                            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                        }, function () {
                            //this.goToHome();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.presentPopoverScore = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popover__["a" /* PopoverPage */]);
        popover.present({
            ev: event
        });
    };
    ProfilePage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    ProfilePage.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aïe!',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    ProfilePage.prototype.viewImg = function (index) {
        this.photoViewer.show(this.user.popies[index].image);
    };
    ProfilePage.prototype.shareViaSMS = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Take a screenshot and get temporary file URI
            _this.screenshot.URI(100)
                .then(function (res) {
                var options = {
                    message: 'test',
                    subject: '',
                    files: [res.URI],
                    url: 'test',
                    chooserTitle: 'test' // Android only
                };
                _this.socialSharing.shareWithOptions(options)
                    .then(function () {
                    //this.showSuccessShareMsg();
                })
                    .catch(function (err) {
                    //this.showErrorShareMsg(err);
                });
            }, function (err) {
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\profile\profile.html"*/'<ion-header>\n\n  <div class="bg-popme" layout horizontal justified>\n\n  	<button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'forward\')">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'LogPage\',\'forward\')">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n    pullingIcon="arrow-dropdown"\n\n    refreshingSpinner="crescent">\n\n  </ion-refresher-content>\n\n</ion-refresher>\n\n<div layout vertical class="profile-header">\n\n  <div flex>\n\n    <div class="score" id="profile-header-score" (click)="presentPopoverScore($event)">\n\n      <div class="text-center">\n\n        <ion-icon name="podium" class="color-yellow"></ion-icon>\n\n        <span class="text">{{ user.actual_score }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="rank">\n\n      <div class="text-center">\n\n        <img src="./assets/img/logo-white.png" />\n\n        <span class="text">{{ rank.number }}<sup>{{ rank.text }}</sup></span>\n\n      </div>\n\n    </div>\n\n    <div class="next-add">\n\n      <div class="text-center" *ngIf="!hidevalue">\n\n        <ion-icon name="time"></ion-icon>\n\n        <span class="text">{{ remainingTime }}</span>\n\n      </div>\n\n      <div class="text-center" *ngIf="hidevalue" (click)="openPhotoPicker(4)">\n\n        <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n        <span class="text">Ajouter</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div layout vertical>\n\n  <div class="bg-white profile-card">\n\n    <div>\n\n      <div class="profile-picture">\n\n        <div class="text-center">\n\n          <div class="big-thumb float-left">\n\n            <img [src]="user.account_image" class="rounded box-shadow" alt="" *ngIf="user.account_image != null">\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class="text-right">\n\n        <button ion-button icon-start round small color="muted" class="pd1" outline (click)="shareViaSMS()"><ion-icon name="md-share"></ion-icon></button><button ion-button icon-start round small color="muted" class="pd1" outline (click)="goTo(\'SettingsPage\',\'forward\')"><ion-icon name="settings"></ion-icon>Paramètres</button>\n\n        <button ion-button icon-start round small color="muted" class="pd1" outline (click)="goTo(\'RelativeRankPage\',\'forward\')"><ion-icon name="podium"></ion-icon>Classement</button>\n\n      </div>\n\n      <div class="profile-info">\n\n        <div class="text-center">\n\n          <div class="big-thumb">\n\n            <div class="text-2x">{{ user.usual_name }}</div>\n\n            <div class="">{{ user.description }}</div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div class="profile-images-edit">\n\n  <div class="profile-image" *ngFor="let image of user.popies; let i = index">\n\n    <div class="popy-label" *ngIf="user.popies[i].image != \'\'">{{user.popies[i].pop_count}}</div>\n\n    <div [style.backgroundImage]="\'url(\' + user.popies[i].image + \')\'" class="div-img img-square r-3x" (click)="viewImg(i)"></div>\n\n    <button ion-button icon-only clear class="btn-edit" (click)="removeImage(i)" *ngIf="user.popies[i].image != \'\'">\n\n      <ion-icon name="md-close" color="danger"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only clear class="btn-edit" *ngIf="maxTime <= 0 && user.popies[i].image == \'\'" (click)="openPhotoPicker(i)">\n\n      <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n    </button>\n\n  </div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_screenshot__["a" /* Screenshot */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoperProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PoperProfilePage = /** @class */ (function () {
    function PoperProfilePage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.photoViewer = photoViewer;
        this.userProfile = {};
        this.userRank = {};
        this.popies = [];
        this.userProfile = this.navParams.get("userProfile");
        this.userRank = this.userProfile.rank;
    }
    PoperProfilePage.prototype.back = function () {
        this.viewCtrl.dismiss(this.popies);
    };
    PoperProfilePage.prototype.closeModal = function () {
        console.log("close");
    };
    PoperProfilePage.prototype.like = function (index) {
        var _this = this;
        if (!this.userProfile.popies[index].popped) {
            this.storage.get('user').then(function (user) {
                var pop;
                pop = {};
                _this.api.post('pop/' + user.id + '/' + _this.userProfile.popies[index].id, pop)
                    .subscribe(function (pop) {
                    var body;
                    body = JSON.parse(pop.text());
                    _this.userProfile.popies[index].popped = true;
                    _this.popies.push(_this.userProfile.popies[index].id);
                }, function (err) {
                    console.log(err);
                    alert("ko");
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
            });
        }
    };
    PoperProfilePage.prototype.viewImg = function (index) {
        this.photoViewer.show(this.userProfile.popies[index].image);
    };
    PoperProfilePage.prototype.dislike = function (index) {
        var _this = this;
        if (!this.userProfile.popies[index].popped) {
            this.storage.get('user').then(function (user) {
                var pop;
                pop = {};
                _this.api.post('unpop/' + user.id + '/' + _this.userProfile.popies[index].id, pop)
                    .subscribe(function (pop) {
                    var body;
                    body = JSON.parse(pop.text());
                    _this.userProfile.popies[index].popped = true;
                    _this.popies.push(_this.userProfile.popies[index].id);
                }, function (err) {
                    console.log(err);
                    alert("ko");
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
            });
        }
    };
    PoperProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-poperprofile',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\poperprofile\poperprofile.html"*/'<ion-header>\n\n	<div class="bg-popme" layout horizontal justified>\n\n		<button left ion-button color="muted" clear icon-only (click)="back()">\n\n			<ion-icon name=\'arrow-dropleft-circle\'></ion-icon>\n\n		</button>\n\n		<div class="pop-title">\n\n		{{ userProfile.usual_name }}\n\n		</div>\n\n	</div>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n	<div layout vertical>\n\n		<div class="bg-white profile-card">\n\n			<div>\n\n				<div class="profile-picture">\n\n					<div class="text-center">\n\n						<div class="big-thumb float-left">\n\n							<img [src]="userProfile.account_image" class="rounded box-shadow" alt="">\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<div class="profile-info">\n\n					<div class="text-center">\n\n						<div class="big-thumb">\n\n							<div class="text-2x">{{ userProfile.usual_name }}</div>\n\n							<div class="">{{ userProfile.description }}</div>\n\n						</div>\n\n						<div layout vertical>\n\n							<div flex class="ranking">\n\n								<div class="wrapper">\n\n									<img src="./assets/img/logo.png">\n\n									<span class="ranking-number">{{ userRank.world.number }}</span><span class="ranking-text"><sup>{{ userRank.world.text }}</sup></span>\n\n								</div>\n\n							</div>\n\n						</div>\n\n					</div>\n\n				</div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n\n\n	<div class="profile-images-edit">\n\n		<div class="profile-image" *ngFor="let image of userProfile.popies; let i = index">\n\n			<div [style.display]="userProfile.popies[i].value == 0 ? \'block\' : \'none\'" class="stamp" color="danger">J\'ai passé</div>\n\n			<div [style.display]="userProfile.popies[i].value == 1 ? \'block\' : \'none\'" class="stamp stamp-like" color="warning">J\'ai popé</div>\n\n			<div [style.backgroundImage]="\'url(\' + userProfile.popies[i].image + \')\'" class="div-img img-square r-3x" (click)="viewImg(i)"></div>\n\n			<button ion-button icon-only clear class="btn-edit-like" *ngIf="userProfile.popies[i].image != \'\' && !userProfile.popies[i].popped" (click)="like(i)">\n\n				<ion-icon name="thumbs-up" color="like"></ion-icon>\n\n			</button>\n\n			<button ion-button icon-only clear class="btn-edit-dislike" *ngIf="userProfile.popies[i].image != \'\' && !userProfile.popies[i].popped" (click)="dislike(i)">\n\n				<ion-icon name="thumbs-down" color="dislike"></ion-icon>\n\n			</button>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\poperprofile\poperprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], PoperProfilePage);
    return PoperProfilePage;
}());

//# sourceMappingURL=poperprofile.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firstStep2_firstStep2__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_settings__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FirstStep1Page = /** @class */ (function () {
    function FirstStep1Page(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, storageProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storageProvider = storageProvider;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED).then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION).then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        var data;
        data = {};
        this.storage.get(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER).then(function (val) {
            if (val) {
                _this.api.post('getUser/' + val.id, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    _this.user = body['account_image'];
                    _this.usualName = body['usual_name'];
                    _this.description = body['description'];
                    _this.accountImageUrl = 'url(' + body['account_image'] + ')';
                }, function (err) {
                    console.log(err);
                    alert("ko");
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
            }
        });
    }
    FirstStep1Page.prototype.ionViewDidLoad = function () {
    };
    FirstStep1Page.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FirstStep1Page.prototype.validProfileStep1 = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val) {
                var data = void 0;
                data = {};
                data.description = _this.description;
                data.accountImage = _this.accountImage;
                var loading_1 = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: 'Etape 1 ...',
                    dismissOnPageChange: true
                });
                loading_1.present();
                _this.api.post('updateStep1/' + val.id, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    if (body.error) {
                        loading_1.dismiss();
                        _this.doAlert(body.message.text);
                    }
                    else {
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED, true);
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER, body);
                        // On redirige l'utilisateur vers sa page si il est authentifié
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__firstStep2_firstStep2__["a" /* FirstStep2Page */]);
                    }
                }, function (err) {
                    loading_1.dismiss();
                    _this.doAlert(err.message);
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
            }
        });
    };
    FirstStep1Page.prototype.openPhotoPicker = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Photo de profil',
            buttons: [
                {
                    text: 'Choisir une photo',
                    role: 'destructive',
                    handler: function () {
                        var options = {
                            sourceType: 0,
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            //this.profileImages[index].image = base64Image;
                            _this.accountImage = base64Image;
                            _this.accountImageUrl = 'url(' + base64Image + ')';
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Prendre une photo',
                    handler: function () {
                        var options = {
                            sourceType: 1,
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            //this.profileImages[index].image = base64Image;
                            _this.accountImage = base64Image;
                            _this.accountImageUrl = 'url(' + base64Image + ')';
                            // Test insert BACK
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FirstStep1Page.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aïe!',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    FirstStep1Page.prototype.backToLogin = function () {
        this.storageProvider.clearConnexionStorage();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    FirstStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-first',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\firstStep1\firstStep1.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="bg-popme">\n\n  <div>\n\n    <p>Avant de commencer, il faut remplir les infos suivantes</p>\n\n  </div>\n\n  <ion-list class="w-full">\n\n    <div (click)="openPhotoPicker()">\n\n     <div class=" rounded profile-image" [style.background-image]="accountImageUrl">\n\n     </div>\n\n     <div class="first-step-1-change-photo">\n\n      Mets ta photo de profil\n\n    </div>\n\n  </div>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Ta description" [(ngModel)]="description"></ion-input>\n\n  </ion-item>\n\n  <div class="description-example">Exemples :\n\n    <ul>\n\n      <li>Fainéant professionnel</li>\n\n      <li>Cosmonaute le week-end</li>\n\n      <li>Plus populaire que ton frère</li>\n\n    </ul>\n\n  </div>\n\n</ion-list>\n\n<button ion-button full round (click)="validProfileStep1()">Valider</button>\n\n<button ion-button full round (click)="backToLogin()">Retour</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\firstStep1\firstStep1.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* StorageProvider */]) === "function" && _m || Object])
    ], FirstStep1Page);
    return FirstStep1Page;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=firstStep1.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["b" /* LoadingPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            keyboard.disableScroll(true);
            keyboard.hideKeyboardAccessoryBar(true);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firstStep1_firstStep1_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firstStep2_firstStep2_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep3_firstStep3_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_log_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_loginClassic_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_play_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__poperprofile_poperprofile_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_popover_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trend_trend_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rank_relativeRank_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__autoComplete_autoComplete_module__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__firstStep1_firstStep1_module__["FirstStep1PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__firstStep2_firstStep2_module__["FirstStep2PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__firstStep3_firstStep3_module__["FirstStep3PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__loading_loading_module__["LoadingPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__log_log_module__["LogPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__login_login_module__["LoginPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__login_loginClassic_module__["LoginClassicPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__play_play_module__["PlayPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__poperprofile_poperprofile_module__["PoperProfilePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__profile_profile_module__["ProfilePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__profile_popover_module__["PopoverPageModule"]; });
/* unused harmony reexport RegisterPageModule */
/* unused harmony reexport SettingsPageModule */
/* unused harmony reexport TrendPageModule */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_14__rank_relativeRank_module__["RelativeRankPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_15__autoComplete_autoComplete_module__["AutoCompletePageModule"]; });
















// Modules

//# sourceMappingURL=modules.js.map

/***/ })

},[401]);
//# sourceMappingURL=main.js.map