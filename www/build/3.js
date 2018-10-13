webpackJsonp([3],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(51);
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
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("chargement");
                _this.slides.lockSwipes(true);
                _this.loadingInfos();
            }
        });
    };
    LoadingPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LoadingPage.prototype.loadingInfos = function () {
        this.storageProvider.loadConfigurations();
        this.storage.get('user').then(function (user) {
            var data;
            data = {};
            /*this.api.post('getUser/' + user.id, data)
            .subscribe(
                (data) => {
                    let body: any;
                    body = JSON.parse(data.text());

                    this.storage.set('user', body);
                    this.storage.set('fromLoading', true);


                    let timer = setTimeout(x => {
                        this.gameProvider.loadPopies(20);
                        this.goToSlide();
                    }, 1500);

                    timer = setTimeout(x => {
                        this.navCtrl.setRoot(ProfilePage);
                    }, 3000);

                },
                (err) => {
                    this.storageProvider.clearConnexionStorage();
                    this.navCtrl.setRoot(LoginPage);
                },
                () => {
                          //this.goToHome();
                      }
                      );*/
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]) === "function" && _a || Object)
    ], LoadingPage.prototype, "slides", void 0);
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loading',template:/*ion-inline-start:"C:\wamp64-v3\www\appli\popme\src\pages\loading\loading.html"*/'\n\n<ion-content text-center class="background-screensplash">\n\n	<ion-slides #slides>\n\n		<ion-slide>\n\n			<div class="loading-desc">Chargement des constantes </div>\n\n			<div class="loading-count">1/3 </div>\n\n		</ion-slide>\n\n		<ion-slide>\n\n			<div class="loading-desc">Chargement du profil </div>\n\n			<div class="loading-count">2/3 </div>\n\n		</ion-slide>\n\n		<ion-slide>\n\n			<div class="loading-desc">Terminé </div>\n\n			<div class="loading-count">3/3 </div>\n\n		</ion-slide>\n\n	</ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64-v3\www\appli\popme\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["a" /* Users */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["a" /* Users */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* GameProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* GameProvider */]) === "function" && _q || Object])
    ], LoadingPage);
    return LoadingPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(169);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingPage */]),
            ],
        })
    ], LoadingPageModule);
    return LoadingPageModule;
}());

//# sourceMappingURL=loading.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map