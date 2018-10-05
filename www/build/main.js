webpackJsonp([4],{

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/firstStep1/firstStep1.module": [
		219
	],
	"../pages/firstStep2/firstStep2.module": [
		227
	],
	"../pages/firstStep3/firstStep3.module": [
		226
	],
	"../pages/loading/loading.module": [
		725,
		3
	],
	"../pages/log/log.module": [
		228
	],
	"../pages/login/login.module": [
		229
	],
	"../pages/play/play.module": [
		230
	],
	"../pages/poperprofile/poperprofile.module": [
		329
	],
	"../pages/profile/profile.module": [
		330
	],
	"../pages/register/register.module": [
		728,
		2
	],
	"../pages/settings/settings.module": [
		726,
		1
	],
	"../pages/trend/trend.module": [
		727,
		0
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
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep1PageModule", function() { return FirstStep1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep1__ = __webpack_require__(374);
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

/***/ 220:
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
    BLOCK_ADD_POPY_DURATION: 24 * 60 * 60
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firstStep3_firstStep3__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(51);
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
                        _this.doAlert(body.message);
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
            selector: 'page-first-step2',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\firstStep2\firstStep2.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="defaultBg">\n\n  <div>\n\n    <p>Maintenant, mets ta première photo</p>\n\n  </div>\n\n  <div class="profile-images-edit">\n\n    <div class="profile-image" (click)="openPhotoPicker(i)">\n\n      <div class="div-img img-square r-3x" [style.background-image]="popyUrl"></div>\n\n      <button ion-button icon-only clear class="btn-edit">\n\n        <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n  <button ion-button full round (click)="validProfileStep2()">Valider</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\firstStep2\firstStep2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], FirstStep2Page);
    return FirstStep2Page;
}());

//# sourceMappingURL=firstStep2.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(91);
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
        });
    }
    FirstStep3Page.prototype.ionViewDidLoad = function () {
    };
    FirstStep3Page.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FirstStep3Page.prototype.validProfileStep3 = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Terminé ...',
            dismissOnPageChange: true
        });
        loading.present();
        this.storage.remove('firstConnexion');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
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
            selector: 'page-first-step3',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\firstStep3\firstStep3.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="defaultBg">\n\n  <div>\n\n    <p>Parfait, merci</p>\n\n  </div>\n\n  <button ion-button full round (click)="validProfileStep3()">Valider</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\firstStep3\firstStep3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], FirstStep3Page);
    return FirstStep3Page;
}());

//# sourceMappingURL=firstStep3.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep3PageModule", function() { return FirstStep3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep3__ = __webpack_require__(225);
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

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep2PageModule", function() { return FirstStep2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep2__ = __webpack_require__(224);
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPageModule", function() { return LogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(409);
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

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(43);
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

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(138);
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

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoperProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(51);
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
    function PoperProfilePage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl) {
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
        this.userProfile = {};
        this.popies = [];
        this.userProfile = this.navParams.get("userProfile");
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
    PoperProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-poperprofile',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\poperprofile\poperprofile.html"*/'<ion-header>\n\n	<div class="bg-white" layout horizontal justified>\n\n		<button left ion-button color="muted" clear icon-only (click)="back()">\n\n			<ion-icon name=\'arrow-dropleft-circle\'></ion-icon>\n\n		</button>\n\n	</div>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n	<div layout vertical>\n\n		<div flex class="bg-white">\n\n			<div class="wrapper">\n\n				<div class="profile-picture">\n\n					<div class="text-center">\n\n						<div class="big-thumb float-left">\n\n							<img [src]="userProfile.account_image" class="rounded box-shadow" alt="">\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<div class="profile-info">\n\n					<div class="text-center">\n\n						<div class="big-thumb">\n\n							<div class="text-2x">{{ userProfile.usual_name }}</div>\n\n							<div class="">{{ userProfile.description }}</div>\n\n						</div>\n\n						<div layout vertical>\n\n							<div flex class="bg-white ranking">\n\n								<div class="wrapper">\n\n									<img src="./assets/img/logo.png"><span class="ranking-text">18</span>\n\n								</div>\n\n							</div>\n\n						</div>\n\n					</div>\n\n				</div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n	<div class="profile-images-edit">\n\n		<div class="profile-image" *ngFor="let image of userProfile.popies; let i = index">\n\n			<div [style.display]="userProfile.popies[i].popped ? \'block\' : \'none\'" class="stamp stamp-like">J\'ai popé</div>\n\n			<div [style.backgroundImage]="\'url(\' + userProfile.popies[i].image + \')\'" class="div-img img-square r-3x" (click)="like(i)"></div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\poperprofile\poperprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PoperProfilePage);
    return PoperProfilePage;
}());

//# sourceMappingURL=poperprofile.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(220);
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoperProfilePageModule", function() { return PoperProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poperprofile__ = __webpack_require__(231);
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(91);
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

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(23);
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firstStep2_firstStep2__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(51);
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
    function FirstStep1Page(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl) {
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
        this.storage.get('firstConnexion').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        var data;
        data = {};
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.api.post('getUser/' + val.id, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    _this.accountImage = body['account_image'];
                    _this.usualName = body['usual_name'];
                    _this.description = body['description'];
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
                        _this.doAlert(body.message);
                    }
                    else {
                        _this.storage.set('isConnected', true);
                        _this.storage.set('user', body);
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
    FirstStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-first',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\firstStep1\firstStep1.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="defaultBg">\n\n  <div>\n\n    <p>Avant de commencer, il faut remplir les infos suivantes</p>\n\n  </div>\n\n  <ion-list class="w-full">\n\n    <div (click)="openPhotoPicker()">\n\n     <div class=" rounded profile-image" [style.background-image]="accountImageUrl">\n\n     </div>\n\n     <div class="first-step-1-change-photo">\n\n      Mets ta photo de profil\n\n    </div>\n\n  </div>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Ta description" [(ngModel)]="description"></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n<button ion-button full round (click)="validProfileStep1()">Valider</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\firstStep1\firstStep1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], FirstStep1Page);
    return FirstStep1Page;
}());

//# sourceMappingURL=firstStep1.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
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

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_play_play_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_firstStep1_firstStep1_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_firstStep2_firstStep2_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_firstStep3_firstStep3_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_poperprofile_poperprofile_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_log_log_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_globalization__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_11__providers_providers__["b" /* Settings */](storage, {
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
                        { loadChildren: '../pages/firstStep3/firstStep3.module#FirstStep3PageModule', name: 'FirstStep3Page', segment: 'firstStep3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstStep2/firstStep2.module#FirstStep2PageModule', name: 'FirstStep2Page', segment: 'firstStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log/log.module#LogPageModule', name: 'LogPage', segment: 'log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play/play.module#PlayPageModule', name: 'PlayPage', segment: 'play', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/poperprofile/poperprofile.module#PoperProfilePageModule', name: 'PoperProfilePage', segment: 'poperprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trend/trend.module#TrendPageModule', name: 'TrendPage', segment: 'trend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__popmedb'
                    //driverOrder: ['localstorage' ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__pages_play_play_module__["PlayPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_firstStep1_firstStep1_module__["FirstStep1PageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_firstStep2_firstStep2_module__["FirstStep2PageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_firstStep3_firstStep3_module__["FirstStep3PageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_log_log_module__["LogPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_poperprofile_poperprofile_module__["PoperProfilePageModule"]
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
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_providers__["b" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Users */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_globalization__["a" /* Globalization */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(43);
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
    function LogPage(navCtrl, navParams, loadingCtrl, storage, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.api = api;
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
            _this.api.post('getLastPops/' + user.id, data)
                .subscribe(function (data) {
                _this.pops = [];
                var body;
                body = JSON.parse(data.text());
                for (var i = 0; i < body.length; i++) {
                    _this.pops[i] = body[i];
                }
                console.log(_this.pops);
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
    LogPage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-log',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\log\log.html"*/'<ion-header>\n\n  <div class="bg-white" layout horizontal justified>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'ProfilePage\',\'back\')">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'back\')">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div layout vertical>\n\n    <div flex three class="bg-white">\n\n      <div>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6 class="text-center b-r b-light">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-muted\':\'button-primary\'" (click)="searchOpen=false">\n\n                <ion-icon name="md-list"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">Activité</div>\n\n            </ion-col>\n\n            <ion-col col-6 class="text-center">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-primary\':\'button-muted\'" (click)="searchOpen=true">\n\n                <ion-icon name="md-search"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">Recherche</div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="searchOpen">\n\n    <div class="wrapper-xs padder">\n\n      <div ion-text color="danger" class="font-bold">\n\n        Activité ({{ pops?.length }})\n\n      </div>\n\n    </div>\n\n    <div class="wrapper-xs padder-sm">\n\n      <div *ngIf="pops?.length == 0">\n\n        <ion-row align-items-center>\n\n          <ion-col col-auto>\n\n            <img class="rounded thumb-md" src="assets/img/mike.png">\n\n          </ion-col>\n\n          <ion-col>\n\n            <div>\n\n              <div class="text-lg">Dommage</div>\n\n              <div class="text-muted">Personne n\'a encore popé</div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div *ngIf="pops?.length > 0">\n\n        <ion-row align-items-center *ngFor="let pop of pops; let i = index">\n\n          <ion-col col-auto>\n\n            <img class="rounded thumb-md" src="{{pops[i].poperAccountImage}}">\n\n          </ion-col>\n\n          <ion-col>\n\n            <div *ngIf="pops[i].usualName != \'\'">\n\n              <div class="text-muted">{{pops[i].date}}</div>\n\n              <div class="text-lg">{{pops[i].usualName}}</div>\n\n              <div class="text-muted">Vous a popé</div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="!searchOpen">\n\n    <ion-searchbar [(ngModel)]="myInput" showCancelButton="false">\n\n    </ion-searchbar>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\log\log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poperprofile_poperprofile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_swing__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_swing__);
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
    function PlayPage(navCtrl, storage, api, modalCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = true;
        this.userProfiled = {};
        this.stackConfig = {
            // Default setting only allows UP, LEFT and RIGHT so you can override this as below
            allowedDirections: [
                __WEBPACK_IMPORTED_MODULE_7_angular2_swing__["Direction"].LEFT,
                __WEBPACK_IMPORTED_MODULE_7_angular2_swing__["Direction"].RIGHT
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
                _this.addPopies(20);
            }
        });
    }
    PlayPage.prototype.ngAfterViewInit = function () {
        this.cards = [];
        this.popies = [];
        this.cardsPlayed = [];
        this.addNewCards(this.popies);
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
    PlayPage.prototype.addPopies = function (count) {
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
        this.api.post('getGamePopies/' + this.userId + '/' + count, popies)
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
    PlayPage.prototype.addNewCards = function (popies) {
        (_a = this.cards).push.apply(_a, popies);
        var _a;
    };
    PlayPage.prototype.disliked = function () {
        var removedCard = this.cards.shift();
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
        this.cardsPlayed.push(removedCard.id);
        this.getMoreCardsIfNecessary();
    };
    PlayPage.prototype.liked = function () {
        var removedCard = this.cards.shift();
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
        this.cardsPlayed.push(removedCard.id);
        this.getMoreCardsIfNecessary();
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                loading_1.dismiss();
            }, function () {
                //this.goToHome();
            });
        }
    };
    PlayPage.prototype.prepareModal = function (user) {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__poperprofile_poperprofile__["a" /* PoperProfilePage */], { userProfile: user });
        profileModal.onDidDismiss(function (popiesPlayed) {
            var _loop_1 = function (popy) {
                var found = _this.cards.findIndex(function (element) {
                    return element.id = popiesPlayed[popy];
                });
                if (found > -1) {
                    _this.cardsPlayed.push(_this.cards[found].id);
                    _this.cards.splice(found, 1);
                }
            };
            for (var popy in popiesPlayed) {
                _loop_1(popy);
            }
        });
        profileModal.present();
    };
    PlayPage.prototype.getMoreCardsIfNecessary = function () {
        if (this.cards.length < 10) {
            this.addPopies(10);
        }
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular2_swing__["SwingStackComponent"])
    ], PlayPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('card'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], PlayPage.prototype, "swingCards", void 0);
    PlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-play',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\play\play.html"*/'<ion-header>\n\n<div class="bg-white" layout horizontal justified>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'ProfilePage\',\'back\')">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'LogPage\',\'forward\')">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n</div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="swipe-bg" no-bounce>\n\n  <!-- <div class="h-full no-cards" [hidden]="!isLoading" horizontal layout center center-center>\n\n    <div class="ripple-container">\n\n      <div class="thumb-lg ripple-trigger">\n\n        <img src="assets/img/hieu.png" class="rounded b b-2x box-shadow">\n\n      </div>\n\n      <div class="ripple-1"></div>\n\n      <div class="ripple-2"></div>\n\n    </div>\n\n  </div> -->\n\n\n\n  <div class="swipe-container">\n\n    <div class="h-full wrapper-sm">\n\n      <div class="card-stack" swing-stack #cardStack [stackConfig]="stackConfig" (throwoutleft)="disliked(c)" (throwoutright)="liked(c)">\n\n        <div class="card-item" #card [style.zIndex]="-1 * i" swing-card\n\n            *ngFor="let c of cards; trackBy: trackByFn; let i = index">\n\n          <div [style.backgroundImage]="\'url(\' + c.image + \')\'" class="div-img h-full r-3x"></div>\n\n\n\n          <div class="card-caption">\n\n            <div class="card-text pull-left">\n\n              <div class="font-bold text-xl" (click)="goToHisProfile()">\n\n                <div class="pull-left poper-card-image" [style.backgroundImage]="\'url(\' + c.user.accountImage + \')\'"></div>\n\n                <div class="pull-left poper-card-text">\n\n                  <div class="poper-card-usualname">{{c.user.usualName}}</div>\n\n                  <div class="poper-card-button">\n\n                    Voir le profil {{ c.id }}\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <!--<div>{{c.job_title}}</div>-->\n\n            </div>\n\n           <!-- <div class="pull-right">\n\n              <ion-icon class="text-2x" name="md-information-circle" color="white"></ion-icon>\n\n            </div> -->\n\n          </div>\n\n\n\n          <div class="stamp stamp-like">Je pop</div>\n\n          <div class="stamp stamp-nope">Je passe</div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="bottom-actions" horizontal layout center around-justified>\n\n      <button ion-button color="white" class="button-dislike" (click)="disliked()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n      <button ion-button color="white" class="button-star" (click)="goToHisProfile()">\n\n        <ion-icon name="md-contact"></ion-icon>\n\n      </button>\n\n      <button ion-button color="white" class="button-like" (click)="liked()">\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\play\play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PlayPage);
    return PlayPage;
}());

//# sourceMappingURL=play.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(162);
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
    function LoginPage(navCtrl, app, api, storage, loadingCtrl, alertCtrl, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.isLoggedIn = false;
        this.loaded = false;
        var loading = this.loadingCtrl.create({
            content: 'Chargement...'
        });
        this.storage.get('isConnected').then(function (val) {
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
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
        this.app.getRootNav().setRoot(page)
            .then(function () {
        });
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
            console.log(body);
            if (body.error) {
                _this.showAlertBadAccount(body.message);
            }
            else {
                _this.storage.set('isConnected', true);
                _this.storage.set('user', body);
            }
        }, function (err) {
            console.log(err);
            _this.showAlertBadAccount('Votre compte et\/ou mot de passe ne sont pas valides');
            //alert("ko");
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
        this.api.post('getConfiguration', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.storage.set('configurations', body);
            // On redirige l'utilisateur vers sa page si il est authentifié
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
        }, function (err) {
            _this.storage.remove('configurations');
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.storage.remove('fromLoading');
            _this.navCtrl.setRoot(LoginPage_1);
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
        var data;
        data = {};
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            alert('Point 0');
            alert(res);
            alert(res.authResponse);
            alert(res.authResponse.userID);
            if (res.status === "connected") {
                alert('Point 1');
                data.id = res.authResponse.userID;
                alert('Point 2');
                _this.api.post('connectFacebookUser', data)
                    .subscribe(function (data) {
                    alert('Point 3');
                    var body;
                    body = JSON.parse(data.text());
                    _this.storage.set('configurations', body);
                    alert('Point 4');
                    // On redirige l'utilisateur vers sa page si il est authentifié
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                }, function (err) {
                    _this.storage.remove('configurations');
                    _this.storage.remove('user');
                    _this.storage.remove('isConnected');
                    _this.storage.remove('fromLoading');
                    _this.navCtrl.setRoot(LoginPage_1);
                }, function () {
                    //this.goToHome();
                });
                //this.isLoggedIn = true;
                //this.getUserDetail(res.authResponse.userID);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
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
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\login\login.html"*/'<ion-content padding class="defaultBg">\n\n  <div layout vertical center>\n\n    <div class="title">Popme</div>\n\n    <ion-list class="w-full login">\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="user" type="text" placeholder="Adresse Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="password" type="password" placeholder="Mot de passe"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button round (click)="checkLogin()">Se connecter</button>\n\n    <div class="mt10">\n\n      <button ion-button round small color="muted" outline (click)="goTo(\'RegisterPage\')">Créer un compte</button>\n\n    </div>\n\n    <div class="text-center mt5">\n\n      <div>\n\n        <button ion-button round class="btn-tinder-login m-b-sm" (click)="loginFB()">Se connecter avec FACEBOOK</button>\n\n      </div>\n\n      <!--<div>\n\n        <button ion-button round class="btn-tinder-login-instagram m-b-sm" (click)="LoginFacebook()">Se connecter avec INSTAGRAM</button>\n\n      </div>-->\n\n\n\n    </div>\n\n    <div class="text-muted version">\n\n      Version 1.0\n\n    </div>\n\n    <div class="logo">\n\n      <img src="./assets/img/logo.png">\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(718);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* LoadingPage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Apps\popme\popme\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\app\app.html"*/
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

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
var LoadingPage = 'LoadingPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pub_pub__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ga_ga__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users__ = __webpack_require__(375);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* unused harmony reexport Pub */
/* unused harmony reexport Ga */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__users_users__["a"]; });






//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(373);
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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__ = __webpack_require__(724);
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__ = __webpack_require__(223);
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
    function ProfilePage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, globalization) {
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
        this.user = {};
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
                        _this.storage.remove('fromLoading');
                        _this.storage.get('configurations').then(function (configurations) {
                            _this.maxTime = +configurations['BLOCK_ADD_POPY_DURATION'].value - (_this.user.dateServer - _this.user.lastPopup);
                            _this.hidevalue = false;
                            _this.remainingTime = _this.determineTimeText();
                            _this.startTimer();
                        });
                    }
                    else {
                        _this.loadUserInfo(userStorage.id);
                    }
                });
            }
        });
    }
    ProfilePage.prototype.getLanguage = function () {
        this.globalization.getPreferredLanguage()
            .then(function (res) { return alert(res); })
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
            _this.storage.set('user', body);
            _this.storage.get('configurations').then(function (configurations) {
                _this.maxTime = +configurations['BLOCK_ADD_POPY_DURATION'].value - (_this.user.dateServer - _this.user.lastPopup);
                if (_this.maxTime > 0) {
                    _this.hidevalue = false;
                    _this.remainingTime = _this.determineTimeText();
                }
                _this.startTimer();
            });
            loading.dismiss();
        }, function (err) {
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }, function () {
            //this.goToHome();
        });
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
                    role: 'destructive',
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
                                    _this.doAlert(body.message);
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
                                    _this.doAlert(body.message);
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
                                _this.doAlert(body.message);
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\profile\profile.html"*/'<ion-header style="background-color:#f0c30e;">\n\n  <div class="bg-white" layout horizontal justified>\n\n  	<button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'PlayPage\',\'forward\')">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'LogPage\',\'forward\')">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="goTo(\'TrendPage\',\'forward\')">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n    pullingIcon="arrow-dropdown"\n\n    refreshingSpinner="crescent">\n\n  </ion-refresher-content>\n\n</ion-refresher>\n\n<div layout vertical>\n\n  <div flex class="bg-white">\n\n    <div class="wrapper">\n\n      <div class="profile-picture">\n\n        <div class="text-center">\n\n          <div class="big-thumb float-left">\n\n            <img [src]="user.account_image" class="rounded box-shadow" alt="">\n\n          </div>\n\n        </div>\n\n        <!-- MES SCORES -->\n\n        <div layout vertical>\n\n          <div flex class="bg-white">\n\n            <div class="wrapper text-center">\n\n              Score cumulé : {{ user.actual_score }}\n\n            </div>\n\n            <div class="wrapper" *ngIf="!hidevalue">\n\n              Prochain pop dans : {{ remainingTime }}\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class="profile-info">\n\n        <div class="text-center">\n\n          <div class="big-thumb">\n\n            <div class="text-2x">{{ user.usual_name }}</div>\n\n            <div class="">{{ user.description }}</div>\n\n            <div text-center>\n\n              <button ion-button icon-start round small color="muted" outline (click)="goTo(\'SettingsPage\',\'forward\')"><ion-icon name="settings"></ion-icon>Paramètres</button>\n\n              <button ion-button icon-start round small color="muted" outline (click)="getLanguage()"><ion-icon name="settings"></ion-icon>Langue ?</button>\n\n            </div>\n\n          </div>\n\n          <div layout vertical>\n\n            <div flex class="bg-white ranking">\n\n              <div class="wrapper">\n\n                <img src="./assets/img/logo.png"><span class="ranking-text">18</span>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class="profile-images-edit">\n\n  <div class="profile-image" *ngFor="let image of user.popies; let i = index">\n\n    <div class="popy-label" *ngIf="user.popies[i].image != \'\'">{{user.popies[i].pop_count}}</div>\n\n    <div [style.backgroundImage]="\'url(\' + user.popies[i].image + \')\'" class="div-img img-square r-3x"></div>\n\n    <button ion-button icon-only clear class="btn-edit" (click)="removeImage(i)" *ngIf="user.popies[i].image != \'\'">\n\n      <ion-icon name="md-close" color="danger"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only clear class="btn-edit" *ngIf="maxTime <= 0 && user.popies[i].image == \'\'" (click)="openPhotoPicker(i)">\n\n      <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n    </button>\n\n  </div>\n\n</div>\n\n\n\n<!--<ion-list no-lines>\n\n  <ion-list-header>\n\n    ABOUT ME\n\n  </ion-list-header>\n\n  <ion-item class="text-muted" text-wrap>\n\n    <ion-textarea placeholder="Enter a description" value="A UX/UI lover who has a hobby of making UI clones"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-note item-end>\n\n      <span class="text-xs">435</span>\n\n    </ion-note>\n\n  </ion-item>\n\n</ion-list>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__["a" /* Globalization */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[376]);
//# sourceMappingURL=main.js.map