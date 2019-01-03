webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClanEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClanEditPage = /** @class */ (function () {
    function ClanEditPage(navCtrl, viewCtrl, loadingCtrl, alertCtrl, api, params, storage, actionSheetCtrl, camera, clanProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.params = params;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.clanProvider = clanProvider;
        this.userProvider = userProvider;
        this.clan = {};
        if (params.get('clan')) {
            this.clan = clanProvider.getCurrentClan();
        }
        else {
            this.clan = {};
        }
    }
    ClanEditPage.prototype.ionViewDidLeave = function () {
        var _this = this;
        this.clanProvider.setDescription(this.clan.description);
        this.clanProvider.setName(this.clan.name);
        this.clanProvider.setImage(this.clan.image);
        var data;
        data = {};
        data.clan = this.clanProvider.getCurrentClan();
        this.api.post('clan/update', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.clanProvider.setCurrentClan(body);
            _this.clan = _this.clanProvider.getCurrentClan();
            console.log(_this.clan);
            return;
        }, function (err) {
        }, function () {
        });
    };
    ClanEditPage.prototype.setDefaultClan = function (flag) {
    };
    ClanEditPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClanEditPage.prototype.createClan = function () {
        var _this = this;
        var data;
        data = {};
        data = this.clan;
        data.userId = this.userProvider.getId();
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Création du clan...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('clan/create', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            if (body.error) {
                loading.dismiss();
                _this.doAlert(body.message.text);
            }
            else {
                _this.clanProvider.setCurrentClan(body);
                _this.doAlert('Votre clan a été créé', 'Bravo');
                _this.viewCtrl.dismiss();
            }
        }, function (err) {
            loading.dismiss();
            _this.doAlert(err.message);
        }, function () {
        });
    };
    ClanEditPage.prototype.clanDelete = function () {
        var _this = this;
        var data;
        data = {};
        data.userId = this.userProvider.getId();
        data.clanId = this.clanProvider.getId();
        var alert = this.alertCtrl.create({
            title: 'Supprimer le clan',
            message: 'Attention ! Cette demande est irrévocable.',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.api.post('clan/delete', data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            if (!body.error) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
                            }
                        }, function (err) {
                        }, function () {
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ClanEditPage.prototype.openPhotoPicker = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Image du clan',
            buttons: [
                {
                    text: 'Choisir une photo',
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
                            _this.clanProvider.setImage(base64Image);
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
                            _this.clanProvider.setImage(base64Image);
                            // Test insert BACK
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClanEditPage.prototype.doAlert = function (message, title) {
        if (title === void 0) { title = 'Aïe!'; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    ClanEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-clanEdit',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\clan\clanEdit.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span class="color-white" *ngIf="!clan.id">Nouveau clan</span>\n\n            <span class="color-white" *ngIf="clan.id">{{clan.name}}</span>\n\n        </ion-title>\n\n        <div class="close-buttons" (click)="close()" *ngIf="clanId ">\n\n            <ion-icon name="close"></ion-icon>\n\n        </div>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n    <ion-list>\n\n        <ion-item>\n\n          <div class="big-thumb text-center settings-clan-image">\n\n            <img [src]="clan.image" class="rounded box-shadow" alt="" *ngIf="clan.image != null">\n\n            <img src="./assets/img/clan_default_image.png" class="rounded thumb-md" alt="" *ngIf="clan.image == null">\n\n            <button clear class="btn-edit" (click)="openPhotoPicker(i)">\n\n              <ion-icon name="md-create"></ion-icon>\n\n          </button>\n\n      </div>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Nom</ion-label>\n\n      <ion-input type="text" placeholder="Nom" [(ngModel)]="clan.name"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Description</ion-label>\n\n      <ion-input type="text" placeholder="Description" [(ngModel)]="clan.description"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="!clan.id">\n\n    <div class="clan-action text-center" ion-text color="dislike">\n\n     <button ion-button round color="muted" small outline (click)="createClan()">\n\n        <ion-icon name="add"></ion-icon>&nbsp;Créer mon clan\n\n    </button>\n\n</div>\n\n</ion-item>\n\n</ion-list>\n\n<div class="clan-action" ion-text color="dislike" *ngIf="clan.id">\n\n    <ion-row (click)="clanDelete()" class="padder">\n\n        <ion-col class="clanprofile-user-image" col-auto><ion-icon name="md-trash"></ion-icon></ion-col>\n\n        <ion-col class="margin-auto">\n\n            Supprimer le clan\n\n        </ion-col>\n\n    </ion-row>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\clan\clanEdit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Clan */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */]])
    ], ClanEditPage);
    return ClanEditPage;
}());

//# sourceMappingURL=clanEdit.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_storage__ = __webpack_require__(106);
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
    function Users(api, storage, storageProvider) {
        this.api = api;
        this.storage = storage;
        this.storageProvider = storageProvider;
    }
    Users.prototype.getId = function () {
        return this.id;
    };
    Users.prototype.getDescription = function () {
        return this.description;
    };
    Users.prototype.getImageAccount = function () {
        return this.account_image;
    };
    Users.prototype.getBirthday = function () {
        return this.birthday;
    };
    Users.prototype.getPlace = function () {
        return this.place;
    };
    Users.prototype.getBaseScore = function () {
        return this.base_score;
    };
    Users.prototype.getActualScore = function () {
        return this.actual_score;
    };
    Users.prototype.getEnabled = function () {
        return this.enabled;
    };
    Users.prototype.getFirstName = function () {
        return this.first_name;
    };
    Users.prototype.getLastName = function () {
        return this.last_name;
    };
    Users.prototype.getSexe = function () {
        return this.sexe;
    };
    Users.prototype.getUsualName = function () {
        return this.usual_name;
    };
    Users.prototype.getTimeWithoutNewPopy = function () {
        return this.dateServer - this.lastPopup;
    };
    Users.prototype.getPopies = function () {
        return this.popies;
    };
    Users.prototype.getNbTotalPopies = function () {
        return this.nbTotalPopies;
    };
    Users.prototype.getRank = function () {
        return this.rank;
    };
    Users.prototype.setUser = function (user) {
        this.id = user.id;
        this.account_image = user.account_image;
        this.base_score = user.base_score;
        this.actual_score = user.actual_score;
        this.birthday = user.birthday;
        this.dateServer = user.dateServer;
        this.lastPopup = user.lastPopup;
        this.description = user.description;
        this.enabled = user.enabled;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.place = user.place;
        this.popies = user.popies;
        this.nbTotalPopies = user.nb_total_popies;
        this.rank = user.rank;
        this.sexe = user.sexe;
        this.usual_name = user.usual_name;
        this.enabled_detail = user.enabled_detail;
        this.type_connexion = user.type_connexion;
        // Préchargement des images
        var imageAccount = new Image();
        imageAccount.src = this.account_image;
        for (var popy in this.popies) {
            if (this.popies[popy].image) {
                var imagePopy = new Image();
                imagePopy.src = this.popies[popy].image;
            }
        }
    };
    Users.prototype.getUser = function () {
        return this;
    };
    Users.prototype.isDeleted = function () {
        return !this.enabled && this.enabled_detail == "AD";
    };
    Users.prototype.isFirstConnexion = function () {
        return !this.enabled && this.enabled_detail == "FC";
    };
    Users.prototype.isFacebook = function () {
        return this.type_connexion == 'F';
    };
    Users = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__storage_storage__["a" /* StorageProvider */]])
    ], Users);
    return Users;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(56);
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
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.POPS);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.TRENDS);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.DEFAULT_RANKING);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading_loading__ = __webpack_require__(109);
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
    function FirstStep2Page(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, userProvider) {
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
        this.userProvider = userProvider;
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        this.storage.get('user').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.popyUrl = 'url(' + _this.userProvider.getPopies()[0].image + ')';
                //this.popy = this.userProvider.getPopies()[0].image;
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
                _this.api.post('addPopy/' + val, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    if (body.error) {
                        loading_1.dismiss();
                        _this.doAlert(body.message.text);
                    }
                    else {
                        _this.storage.set('launchTutoriel', true);
                        _this.userProvider.setUser(body);
                        _this.api.post('validInscription/' + val, data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            if (body.error) {
                                loading_1.dismiss();
                                _this.doAlert(body.message.text);
                            }
                            else {
                                _this.storage.remove('firstConnexion');
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__loading_loading__["a" /* LoadingPage */]);
                            }
                        }, function (err) {
                            loading_1.dismiss();
                            _this.doAlert(err.message);
                        }, function () {
                        });
                    }
                }, function (err) {
                    loading_1.dismiss();
                    _this.doAlert(err.message);
                }, function () {
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
                            quality: 50,
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
                            quality: 50,
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
            selector: 'page-first-step',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\firstStep\firstStep2.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="bg-popme">\n\n  <div>\n\n    <p>Maintenant, mets ta première photo</p>\n\n  </div>\n\n  <div class="profile-images-edit">\n\n    <div class="profile-image-popy" (click)="openPhotoPicker(i)">\n\n      <div class="div-img img-square r-3x" [style.background-image]="popyUrl"></div>\n\n      <button ion-button icon-only clear class="btn-edit">\n\n        <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n  <div col-sm-12 class="text-center">\n\n    <button class="valid-button" ion-button full round class="valider" (click)="validProfileStep2()">Valider</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\firstStep\firstStep2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */]])
    ], FirstStep2Page);
    return FirstStep2Page;
}());

//# sourceMappingURL=firstStep2.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__ = __webpack_require__(169);
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
    function LoadingPage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, users, storageProvider, gameProvider, rankProvider, ga, platform, translate) {
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
        this.users = users;
        this.storageProvider = storageProvider;
        this.gameProvider = gameProvider;
        this.rankProvider = rankProvider;
        this.ga = ga;
        this.platform = platform;
        this.translate = translate;
        this.currentSlide = 0;
        this.progressBar = 1;
        this.ga.startTrackerWithId('UA-129861313-1')
            .then(function () {
            console.log('Google analytics is ready now');
            _this.ga.trackView('Loading');
            _this.ga.trackEvent('Loading', 'Lancement');
        })
            .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED).then(function (val) {
                if (!val) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["h" /* LoginPage */]);
                }
                else {
                    console.log("loading");
                    _this.slides.lockSwipes(true);
                    _this.loadingInfos();
                }
            });
        });
    };
    LoadingPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LoadingPage.prototype.loadingInfos = function () {
        var _this = this;
        this.storage.set('firstLaunchProfile', true);
        this.storage.set('firstLaunchLog', true);
        this.storage.set('firstLaunchTrend', true);
        this.storageProvider.loadConfigurations();
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER).then(function (user) {
            var data;
            data = {};
            _this.api.post('getUser/' + user, data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                if (body.error) {
                    _this.storageProvider.clearConnexionStorage();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["h" /* LoginPage */]);
                    return;
                }
                _this.users.setUser(body);
                if (_this.users.isDeleted()) {
                    _this.storageProvider.clearConnexionStorage();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["h" /* LoginPage */]);
                }
                else if (_this.users.isFirstConnexion()) {
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION, true);
                    if (_this.users.isFacebook()) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["d" /* FirstStepFbPage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["c" /* FirstStep1Page */]);
                    }
                    return;
                }
                else {
                    _this.rankProvider.loadAllRanks();
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_7__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FROM_LOADING, true);
                    var timer = setTimeout(function (x) {
                        _this.gameProvider.loadPopies(20);
                        _this.goToSlide();
                    }, 1500);
                    timer = setTimeout(function (x) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["n" /* ProfilePage */]);
                    }, 3000);
                }
            });
        }, function (err) {
            alert('Impossible de se connecter à internet. Veuillez vérifier votre connexion !');
            _this.storageProvider.clearConnexionStorage();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["h" /* LoginPage */]);
        });
    };
    LoadingPage.prototype.goToSlide = function () {
        this.currentSlide++;
        this.progressBar++;
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], LoadingPage.prototype, "slides", void 0);
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loading',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\loading\loading.html"*/'<ion-content text-center class="bg-popme background-screensplash" >\n\n	<div layout vertical>\n\n		<div flex class="loading">\n\n			<div class="loading-desc">\n\n				<ion-slides slides #slides class="">\n\n					<ion-slide>\n\n						<div class="loading-desc">{{ \'PAGE.LOADING.PROFIL\' | translate }}</div>\n\n					</ion-slide>\n\n					<ion-slide>\n\n						<div class="loading-desc">{{ \'PAGE.LOADING.PHOTOS\' | translate }}</div>\n\n					</ion-slide>\n\n				</ion-slides>\n\n			</div>\n\n			<div *ngIf="progressBar == 1">\n\n				<div class="loading-count"><ion-icon class="color-yellow" name="radio-button-on"></ion-icon>  <ion-icon name="radio-button-on"></ion-icon></div>\n\n			</div>\n\n			<div *ngIf="progressBar == 2">\n\n				<div class="loading-count"><ion-icon class="color-yellow" name="radio-button-on"></ion-icon>  <ion-icon class="color-yellow" name="radio-button-on"></ion-icon></div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* GameProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* Rank */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* Translate */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeRankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(38);
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
    function RelativeRankPage(navCtrl, navParams, api, storage, storageProvider, loadingCtrl, modalCtrl, alertCtrl, userProfile, rankProvider, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.storageProvider = storageProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.userProfile = userProfile;
        this.rankProvider = rankProvider;
        this.translate = translate;
        this.userPlace = {};
        this.delta = 10;
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    RelativeRankPage.prototype.setDisplayMenu = function (menu) {
        this.displayMenu = menu;
        this.onDisplayMenuChange(menu);
    };
    RelativeRankPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('defaultRanking').then(function (rank) {
            if (rank) {
                _this.getAllWorld(false, rank);
                _this.setDisplayMenu(rank);
            }
            else {
                _this.getAllWorld(false, 1);
                _this.setDisplayMenu(1);
            }
        });
    };
    RelativeRankPage.prototype.getAllWorld = function (personalized, type) {
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
        this.userPlace = this.userProfile.getPlace();
        data.userId = this.userProfile.getId();
        this.api.post('ranking', data)
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
        data = {};
        data.userId = this.userProfile.getId();
        this.api.post('clans/get', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.clans = body;
            for (var id in _this.clans) {
                _this.goToRankingClan(_this.clans[id].id, id);
            }
        }, function (err) {
        }, function () {
        });
    };
    RelativeRankPage.prototype.getInfosClan = function (clanId) {
        var _this = this;
        var data;
        data = {};
        data.clanId = clanId;
        this.api.post('clan/get', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.clan = body;
        }, function (err) {
        }, function () {
        });
    };
    RelativeRankPage.prototype.createClan = function (name) {
        var data;
        data = {};
        data.name = name;
        data.description = 'test';
        data.userId = this.userProfile.getId();
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('clan/create', data)
            .subscribe(function (data) {
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        }, function () {
        });
    };
    RelativeRankPage.prototype.setDefaultRanking = function (typeRanking) {
        if (this.isDefaultRanking) {
            this.storage.set('defaultRanking', typeRanking);
            // Chargement de la place de l'utilisateur dans son profil
            this.rankProvider.loadRank(this.userProfile.getUser(), typeRanking);
        }
    };
    RelativeRankPage.prototype.goToRankingClan = function (clanId, index) {
        var _this = this;
        if (clanId != null) {
            var data = void 0;
            data = {};
            data.userId = this.userProfile.getId();
            data.clanId = clanId;
            this.api.post('ranking/clan', data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                _this.clans[index].ranking = body.clan;
                _this.getInfosClan(clanId);
            }, function (err) {
            }, function () {
            });
        }
    };
    RelativeRankPage.prototype.isRanks = function () {
        if (this.ranks !== undefined) {
            return this.ranks !== undefined;
        }
        return false;
    };
    RelativeRankPage.prototype.goToHisProfile = function (userId) {
        var _this = this;
        // Interdiction d'accéder à son profil vue VISITEUR
        if (userId == this.userProfile.getId()) {
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
        this.api.post('getUserWithPop/' + userId + '/' + this.userProfile.getId(), data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.prepareModal(body);
            loading.dismiss();
        }, function (err) {
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
            loading.dismiss();
        }, function () {
            //this.goToHome();
        });
    };
    RelativeRankPage.prototype.onDisplayMenuChange = function (menu) {
        var _this = this;
        this.storage.get('defaultRanking').then(function (rank) {
            _this.isDefaultRanking = (rank == menu);
        });
    };
    RelativeRankPage.prototype.prepareModal = function (user) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__["a" /* PoperProfilePage */], { userProfile: user });
        profileModal.present();
    };
    RelativeRankPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('defaultRanking').then(function (rank) {
            if (rank) {
                _this.displayMenu = rank;
            }
            else {
                _this.displayMenu = 1;
            }
        });
    };
    RelativeRankPage.prototype.ionViewDidLoad = function () {
        //this.rankType = 'world';
    };
    RelativeRankPage.prototype.pushToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages__["q" /* SettingsPage */], {}, { animate: true, direction: 'forward' });
    };
    RelativeRankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-relative-rank',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\rank\relativeRank.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="bg-popme">\n\n    <ion-title><span class="color-white">{{ \'PAGE.RANKING.TITLE\' | translate }}</span></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="swipe-bg" no-bounce padding-left padding-right>\n\n\n\n  <div [ngSwitch]="displayMenu">\n\n    <div layout vertical class="mt5">\n\n      <div flex three class="bg-white">\n\n        <ion-row class="border-none">\n\n          <ion-scroll scrollX="true" class="list-clan">\n\n            <div [class]="displayMenu == 1 ?\'text-center b-light list-clan-item selected\':\'text-center b-light list-clan-item\'">\n\n              <button ion-button icon-only color="light" [class]="displayMenu == 1 ?\'button-primary\':\'button-muted\'" (click)="setDisplayMenu(1)">\n\n                <ion-icon name="globe"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs world">{{ \'PAGE.RANKING.MENU_WORLD\' | translate }}</div>\n\n            </div>\n\n            <div [class]="displayMenu == 2 ?\'text-center b-light list-clan-item selected\':\'text-center b-light list-clan-item\'">\n\n              <button ion-button icon-only color="light" [class]="displayMenu == 2 ?\'button-primary\':\'button-muted\'" (click)="setDisplayMenu(2)">\n\n                <ion-icon name="flag"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">\n\n                <div *ngIf="userPlace.country == null">{{ \'PAGE.RANKING.MENU_COUNTRY\' | translate }}</div>\n\n                <div class="city" *ngIf="userPlace.country != null">{{userPlace.country}}</div>\n\n              </div>\n\n            </div>\n\n            <div [class]="displayMenu == 3 ?\'text-center b-light list-clan-item selected\':\'text-center b-light list-clan-item\'">\n\n              <button ion-button icon-only color="light"  [class]="displayMenu == 3 ?\'button-primary\':\'button-muted\'" (click)="setDisplayMenu(3)">\n\n                <ion-icon name="pin"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">\n\n                <div *ngIf="userPlace.city == null">{{ \'PAGE.RANKING.MENU_CITY\' | translate }}</div>\n\n                <div class="city" *ngIf="userPlace.city != null">{{userPlace.city}}</div>\n\n              </div>\n\n            </div>\n\n            <ng-container  *ngIf="clans?.length == 0">\n\n              <div class="text-center b-light list-clan-item">\n\n                <button ion-button icon-only color="light" [class]="displayMenu == 4 ?\'button-primary\':\'button-muted\'" (click)="setDisplayMenu(4)">\n\n                  <ion-icon name="people"></ion-icon>\n\n                </button>\n\n                <div class="text-muted text-xs l-s-1x m-t-xs">\n\n                  <div>Clan</div>\n\n                </div>\n\n              </div>\n\n            </ng-container>\n\n            <ng-container *ngIf="clans?.length > 0">\n\n              <div [class]="displayMenu == clan.id ?\'text-center b-light list-clan-item selected\':\'text-center b-light list-clan-item\'" *ngFor="let clan of clans; let i = index">\n\n                <img src="{{ clan.image }}" class="rounded box-shadow" *ngIf="clan.image != null" (click)="setDisplayMenu(clan.id)"/>\n\n                <img src="./assets/img/clan_default_image.png" class="rounded box-shadow" alt="" *ngIf="clan.image == null" (click)="setDisplayMenu(clan.id)">\n\n                <div class="text-muted text-xs l-s-1x m-t-xs">\n\n                  <div class="clan"> {{clan.name}}\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </ng-container>\n\n          </ion-scroll>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n\n\n    <div *ngIf="isRanks()" [ngSwitch]="displayMenu">\n\n      <ion-row *ngIf="displayMenu == 1 || ((displayMenu == 2 || displayMenu == 3) && userPlace.placeId != null)" class="mb5 border-none">\n\n        <ion-col auto>\n\n          <div class=\'text-center\'>\n\n            <button ion-button icon-only color="light" [class]="typeRank == 2 ?\'button-primary-small\':\'button-muted-small\'" (click)="getAllWorld(false, displayMenu)">\n\n              <ion-icon name="person"></ion-icon>\n\n            </button>\n\n            <div class="text-muted text-xs l-s-1x m-t-xs">{{ \'PAGE.RANKING.PERSONALIZE_RANKING\' | translate }}</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col auto>\n\n          <div class=\'text-center\'>\n\n            <button ion-button icon-only color="light" [class]="typeRank == 1 ?\'button-primary-small\':\'button-muted-small\'" (click)="getAllWorld(true, displayMenu)">\n\n              <ion-icon name="list"></ion-icon>\n\n            </button>\n\n            <div class="text-muted text-xs l-s-1x m-t-xs">{{ \'PAGE.RANKING.FULL_RANKING\' | translate }}</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="text-right border-none mt5" *ngIf="(displayMenu != 4 && displayMenu != 3 && displayMenu != 2) || (displayMenu == 2 && userPlace.country != null) || (displayMenu == 3 && userPlace.city != null)">\n\n        <ion-label>{{ \'PAGE.RANKING.DEFAULT_RANKING\' | translate }}</ion-label>\n\n        <ion-toggle [(ngModel)]="isDefaultRanking" (ionChange)="setDefaultRanking(displayMenu)"></ion-toggle>\n\n      </ion-row>  \n\n      <ion-row *ngIf="(displayMenu != 4 && displayMenu != 3 && displayMenu != 2) || (displayMenu == 2 && userPlace.country != null) || (displayMenu == 3 && userPlace.city != null)" class="table-label">\n\n        <ion-col>#</ion-col>\n\n        <ion-col>{{ \'PAGE.RANKING.PSEUDO\' | translate }}</ion-col>\n\n        <ion-col style="text-align:right;">{{ \'PAGE.RANKING.SCORE\' | translate }}</ion-col>\n\n      </ion-row>\n\n      <div *ngIf="(displayMenu == 2 || displayMenu == 3) && userPlace.placeId == null" class="text-center mt20">\n\n        {{ \'PAGE.RANKING.NO_ADDRESS\' | translate }}<br/>\n\n        <div class="text-center mt10">\n\n          <button ion-button round color="muted" outline (click)="pushToSettings()">Ajouter mon adresse</button>\n\n        </div>\n\n      </div>\n\n      <ion-list *ngSwitchCase="1">\n\n        <ion-row *ngFor="let rank of ranks.world; let i = index" [style.background-color]="rank.isUser ? \'#DDD\' : \'\'" (click)="goToHisProfile(rank.id)">\n\n          <ion-col col-2 class="mt-4">{{ rank.rank }}.</ion-col>\n\n          <ion-col col-7>\n\n            <img class="rounded thumb-md rank-profile-img" src="{{rank.accountImage}}" *ngIf="rank.accountImage != null">\n\n            <img src="./assets/img/user_default_image.png" class="rounded thumb-md rank-profile-img" alt="" *ngIf="rank.accountImage == null">\n\n            <div class="rank-profile-div mt-4">\n\n              <span *ngIf="rank.rank < 4" [class]="\'color-trophy\'+rank.rank">\n\n                <ion-icon name="trophy" ></ion-icon>\n\n              </span> {{ rank.usualName }}</div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class=\'float-right mt-4\'>{{ rank.score }}\n\n                <img src="./assets/img/logo.png" />\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="2">\n\n          <ion-row *ngFor="let rank of ranks.country; let i = index" [style.background-color]="rank.isUser ? \'#DDD\' : \'\'" (click)="goToHisProfile(rank.id)">\n\n            <ion-col col-2 class="mt-4">{{ rank.rank }}.</ion-col>\n\n            <ion-col col-7>\n\n              <img class="rounded thumb-md rank-profile-img" src="{{rank.accountImage}}" *ngIf="rank.accountImage != null">\n\n              <img src="./assets/img/user_default_image.png" class="rounded thumb-md rank-profile-img" alt="" *ngIf="rank.accountImage == null">\n\n              <div class="rank-profile-div mt-4">\n\n                <span *ngIf="rank.rank < 4" [class]="\'color-trophy\'+rank.rank">\n\n                  <ion-icon name="trophy" ></ion-icon>\n\n                </span> {{ rank.usualName }}\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class=\'float-right mt-4\'>{{ rank.score }}\n\n                <img src="./assets/img/logo.png" />\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="3">\n\n          <ion-row *ngFor="let rank of ranks.city; let i = index" [style.background-color]="rank.isUser ? \'#DDD\' : \'\'" (click)="goToHisProfile(rank.id)">\n\n            <ion-col col-2 class="mt-4">{{ rank.rank }}.</ion-col>\n\n            <ion-col col-7>\n\n              <img class="rounded thumb-md rank-profile-img" src="{{rank.accountImage}}" *ngIf="rank.accountImage != null">\n\n              <img src="./assets/img/user_default_image.png" class="rounded thumb-md rank-profile-img" alt="" *ngIf="rank.accountImage == null">\n\n              <div class="rank-profile-div mt-4">\n\n                <span *ngIf="rank.rank < 4" [class]="\'color-trophy\'+rank.rank">\n\n                  <ion-icon name="trophy" ></ion-icon>\n\n                </span> {{ rank.usualName }}\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class=\'float-right mt-4\'>{{ rank.score }}\n\n                <img src="./assets/img/logo.png" />\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n        <ng-container *ngFor="let clan of clans; let i = index">\n\n          <ion-list *ngSwitchCase="clan.id" >\n\n            <div>\n\n              <ion-row *ngFor="let rankClan of clan.ranking" [style.background-color]="rankClan.isUser ? \'#DDD\' : \'\'" (click)="goToHisProfile(rankClan.id)">\n\n                <ion-col col-2 class="mt-4">{{ rankClan.rank }}.</ion-col>\n\n                <ion-col col-7>\n\n                  <img class="rounded thumb-md rank-profile-img" src="{{rankClan.accountImage}}" *ngIf="rankClan.accountImage != null">\n\n                  <img src="./assets/img/user_default_image.png" class="rounded thumb-md rank-profile-img" alt="" *ngIf="rankClan.accountImage == null">\n\n                  <div class="rank-profile-div mt-4">\n\n                    <span *ngIf="rankClan.rank < 4" [class]="\'color-trophy\'+rankClan.rank">\n\n                      <ion-icon name="trophy" ></ion-icon>\n\n                    </span> {{ rankClan.usualName }}\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <div class=\'float-right mt-4\'>{{ rankClan.score }}\n\n                    <img src="./assets/img/logo.png" />\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>  \n\n          </ion-list>\n\n\n\n        </ng-container>\n\n        <ion-list *ngSwitchCase="4">\n\n          <div *ngIf="clans?.length == 0" class="text-center mt10">\n\n            {{ \'PAGE.RANKING.NO_CLAN\' | translate }}<br/>\n\n            <button ion-button round color="muted" outline (click)="goTo(\'ClanPage\')">{{ \'PAGE.RANKING.JOIN_CLAN\' | translate }}</button>\n\n          </div>\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\rank\relativeRank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* Rank */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], RelativeRankPage);
    return RelativeRankPage;
}());

//# sourceMappingURL=relativeRank.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pub_pub__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ga_ga__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_game__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clan_clan__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rank_rank__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tutoriel_tutoriel__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__translate_translate__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fcm_fcm__ = __webpack_require__(826);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* unused harmony reexport Pub */
/* unused harmony reexport Ga */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__users_users__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__storage_storage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__game_game__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__clan_clan__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__rank_rank__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__tutoriel_tutoriel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__translate_translate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__fcm_fcm__["a"]; });













//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 237:
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
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autoComplete/autoComplete.module": [
		282
	],
	"../pages/clan/clan.module": [
		338
	],
	"../pages/clan/clanEdit.module": [
		284
	],
	"../pages/clan/clanprofile.module": [
		337
	],
	"../pages/firstStep/firstStep1.module": [
		343
	],
	"../pages/firstStep/firstStep2.module": [
		339
	],
	"../pages/firstStep/firstStepFb.module": [
		340
	],
	"../pages/loading/loading.module": [
		341
	],
	"../pages/log/log.module": [
		342
	],
	"../pages/login/login.module": [
		344
	],
	"../pages/login/loginClassic.module": [
		348
	],
	"../pages/play/play.module": [
		349
	],
	"../pages/poperprofile/poperprofile.module": [
		345
	],
	"../pages/preview/preview.module": [
		346
	],
	"../pages/profile/popover-rank.module": [
		347
	],
	"../pages/profile/popover-score.module": [
		356
	],
	"../pages/profile/popover-time.module": [
		350
	],
	"../pages/profile/profile.module": [
		351
	],
	"../pages/rank/rankpopover.module": [
		352
	],
	"../pages/rank/relativeRank.module": [
		353
	],
	"../pages/register/register.module": [
		354
	],
	"../pages/settings/settings.module": [
		355
	],
	"../pages/trend/trend.module": [
		362
	],
	"../pages/tutoriel/tutoriel-profile-step1.module": [
		357
	],
	"../pages/tutoriel/tutoriel-profile-step2.module": [
		358
	],
	"../pages/tutoriel/tutoriel-profile-step3.module": [
		359
	],
	"../pages/tutoriel/tutoriel-profile-step4.module": [
		360
	],
	"../pages/tutoriel/tutoriel-profile-step5.module": [
		361
	],
	"../pages/tutoriel/tutoriel-profile-step6.module": [
		365
	],
	"../pages/tutoriel/tutoriel-profile-step7.module": [
		363
	],
	"../pages/tutoriel/tutoriel-profile-step8.module": [
		364
	],
	"../pages/tutoriel/tutoriel-profile-step9.module": [
		366
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
webpackAsyncContext.id = 281;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompletePageModule", function() { return AutoCompletePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoComplete__ = __webpack_require__(283);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        this.viewCtrl.dismiss(this.infos);
    };
    AutoCompletePage.prototype.chooseItem = function (item) {
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
            },
            types: ['(cities)']
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
                console.log(results[0]);
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
                for (var j = 0; j < results.length; j++) {
                    if (results[j].types[0] == 'locality') {
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
                //alert(city.long_name + " || " + region.long_name + " || " + country.long_name);
                _this.infos.city = city.long_name;
                _this.infos.region = region.long_name;
                _this.infos.country = country.long_name;
                _this.infos.latitude = latitude;
                _this.infos.longitude = longitude;
                _this.infos.placeId = results[0].place_id;
                //alert("lat: " + this.infos.latitude + ", long: " + this.infos.longitude);
                _this.storage.set('location', _this.infos);
                _this.viewCtrl.dismiss(_this.infos);
            }
            else {
                alert("No results found");
            }
            //}
        });
    };
    AutoCompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auto-complete',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\autoComplete\autoComplete.html"*/'<ion-header>\n\n	<ion-toolbar>\n\n		<ion-title><span class="color-white">Veuillez saisir votre ville</span></ion-title>\n\n		<ion-searchbar class="color-white" placeholder="Veuillez saisir votre adresse" [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">\n\n			{{ item }}\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\autoComplete\autoComplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AutoCompletePage);
    return AutoCompletePage;
}());

//# sourceMappingURL=autoComplete.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanEditPageModule", function() { return ClanEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clanEdit__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClanEditPageModule = /** @class */ (function () {
    function ClanEditPageModule() {
    }
    ClanEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clanEdit__["a" /* ClanEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clanEdit__["a" /* ClanEditPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__clanEdit__["a" /* ClanEditPage */],
            ]
        })
    ], ClanEditPageModule);
    return ClanEditPageModule;
}());

//# sourceMappingURL=clanEdit.module.js.map

/***/ }),

/***/ 286:
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStepFbPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firstStep_firstStep2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_settings__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FirstStepFbPage = /** @class */ (function () {
    function FirstStepFbPage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, storageProvider, userProvider) {
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
        this.userProvider = userProvider;
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
                _this.api.post('getUser/' + val, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    _this.userProvider.setUser(body);
                    _this.user = _this.userProvider.getUser();
                    _this.accountImageUrl = 'url(' + _this.userProvider.getImageAccount() + ')';
                    _this.description = _this.userProvider.getDescription();
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
    FirstStepFbPage.prototype.ionViewDidLoad = function () {
    };
    FirstStepFbPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FirstStepFbPage.prototype.validProfileStepFb = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val) {
                var data = void 0;
                data = {};
                data.description = _this.description;
                data.usualName = _this.usualName;
                data.gender = _this.gender;
                var loading_1 = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: 'Etape 1 ...',
                    dismissOnPageChange: true
                });
                loading_1.present();
                _this.api.post('updateStepFb/' + val, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    if (body.error) {
                        loading_1.dismiss();
                        _this.doAlert(body.message.text);
                    }
                    else {
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED, true);
                        _this.userProvider.setUser(body);
                        // On redirige l'utilisateur vers sa page si il est authentifié
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__firstStep_firstStep2__["a" /* FirstStep2Page */]);
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
    FirstStepFbPage.prototype.openPhotoPicker = function () {
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
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FirstStepFbPage.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aïe!',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    FirstStepFbPage.prototype.backToLogin = function () {
        this.storageProvider.clearConnexionStorage();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    FirstStepFbPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-first-step',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\firstStep\firstStepFb.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="bg-popme">\n\n  <div>\n\n    <p>Avant de commencer, il faut remplir les infos suivantes</p>\n\n  </div>\n\n  <ion-list class="w-full">\n\n    <div>\n\n     <div class=" rounded profile-image-user" [style.background-image]="accountImageUrl">\n\n     </div>\n\n     <div class="first-step-1-change-photo">\n\n      \n\n    </div>\n\n   </div>\n\n  <ion-item>\n\n    <ion-label>Sexe</ion-label>\n\n    <ion-select [(ngModel)]="gender" cancelText="Annuler">\n\n      <ion-option value="female">Femme</ion-option>\n\n      <ion-option value="male">Homme</ion-option>\n\n      <ion-option value="other">Autre</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Ton pseudo" [(ngModel)]="usualName"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-input type="text" placeholder="Ta description" [(ngModel)]="description"></ion-input>\n\n  </ion-item>\n\n  <div class="description-example">Exemples :\n\n    <ul>\n\n      <li>Fainéant professionnel</li>\n\n      <li>Cosmonaute le week-end</li>\n\n      <li>Plus populaire que ton frère</li>\n\n    </ul>\n\n  </div>\n\n</ion-list>\n\n<div col-sm-12 class="text-center">\n\n  <button class="valid-button" ion-button full round (click)="validProfileStepFb()">Valider</button>\n\n</div>\n\n<div col-sm-12 class="text-center">\n\n  <span class="pass-text" (click)="backToLogin()">Retour</span>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\firstStep\firstStepFb.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */]])
    ], FirstStepFbPage);
    return FirstStepFbPage;
}());

//# sourceMappingURL=firstStepFb.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poperprofile_poperprofile__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(38);
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
    function LogPage(navCtrl, navParams, loadingCtrl, storage, modalCtrl, api, userProvider, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.userProvider = userProvider;
        this.translate = translate;
        this.searchResult = [];
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
        this.searchOpen = false;
        this.getLastPops(true);
    }
    LogPage.prototype.ionViewDidLoad = function () {
    };
    LogPage.prototype.filterUsers = function (event) {
        var _this = this;
        if (this.search.length >= 3) {
            var data = void 0;
            data = {};
            data.search = this.search;
            this.api.post('searchUsers/' + this.userProvider.getId(), data)
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
        console.log(userId);
        var data;
        data = {};
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement de données ...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('getUserWithPop/' + userId + '/' + this.userProvider.getId(), data)
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
    LogPage.prototype.pushToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages__["n" /* ProfilePage */], {}, { animate: true, direction: 'back' });
    };
    LogPage.prototype.pushToPlay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages__["i" /* PlayPage */], {}, { animate: true, direction: 'back' });
    };
    LogPage.prototype.pushToTrend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages__["r" /* TrendPage */], {}, { animate: true, direction: 'forward' });
    };
    LogPage.prototype.getLastPops = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
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
        this.api.post('getLastPops/' + this.userProvider.getId(), data)
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
            _this.storage.set('pops', [_this.pops, _this.popsLength]);
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function () {
            //this.goToHome();
        });
    };
    LogPage.prototype.doRefresh = function (event) {
        this.getLastPops(true);
        event.complete();
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-log',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\log\log.html"*/'<ion-header>\n\n  <div class="bg-popme" layout horizontal justified>\n\n    <button ion-button color="muted" clear icon-only (click)="pushToProfile()">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="pushToPlay()">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="pushToTrend()">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n                pullingIcon="arrow-dropdown"\n\n                refreshingSpinner="crescent">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n  <div layout vertical>\n\n    <div flex three class="bg-white">\n\n      <div>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6 class="text-center b-r b-light">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-muted\':\'button-primary\'" (click)="searchOpen=false">\n\n                <ion-icon name="md-list"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">{{ \'PAGE.LOG.FILTER_ACTIVITY\' | translate }}</div>\n\n            </ion-col>\n\n            <ion-col col-6 class="text-center">\n\n              <button ion-button icon-only color="light" [class]="searchOpen?\'button-primary\':\'button-muted\'" (click)="searchOpen=true">\n\n                <ion-icon name="md-search"></ion-icon>\n\n              </button>\n\n              <div class="text-muted text-xs l-s-1x m-t-xs">{{ \'PAGE.LOG.FILTER_SEARCH\' | translate }}</div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="searchOpen">\n\n    <div class="wrapper-xs padder">\n\n      <div ion-text color="danger" class="font-bold">\n\n        {{ \'PAGE.LOG.ACTIVITY\' | translate }} ({{ popsLength }})\n\n      </div>\n\n    </div>\n\n    <div class="wrapper-xs padder-sm">\n\n      <div *ngIf="pops?.length == 0">\n\n        <ion-row align-items-center>\n\n          <ion-col>\n\n            <div>\n\n              <div class="text-lg">{{ \'PAGE.LOG.NO_RESULT_TITLE\' | translate }}</div>\n\n              <div class="text-muted">{{ \'PAGE.LOG.NO_RESULT_DESCRIPTION\' | translate }}</div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div *ngIf="pops?.length > 0">\n\n        <ion-row align-items-center *ngFor="let date of pops; let i = index">\n\n          <div full class="log-date-header">{{ pops[i][\'date\']}}</div>\n\n          <ion-row class="row-full" align-items-center *ngFor="let pop of pops[i].pops; let j = index">\n\n            <ion-col col-auto>\n\n              <img class="rounded thumb-md" src="{{pops[i].pops[j].poperAccountImage}}" (click)="goToHisProfile(pops[i].pops[j].poperId)">\n\n            </ion-col>\n\n            <ion-col>\n\n              <div *ngIf="pops[i].pops[j].usualName != \'\'">\n\n                <div class="text-muted">{{pops[i].pops[j].date}}</div>\n\n                <div class="text-lg">{{pops[i].pops[j].usualName}}</div>\n\n                <div class="text-muted">vous a popé</div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-auto>\n\n              <img class="thumb-md log-popy float-right" src="{{pops[i].pops[j].popyImage}}">\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div [hidden]="!searchOpen">\n\n    <ion-searchbar [(ngModel)]="search" showCancelButton="false" placeholder="Nom d\'utilisateur" (ionInput)="filterUsers($event)">\n\n    </ion-searchbar>\n\n    <div *ngIf="searchResult?.length > 0">\n\n      <ion-row align-items-center *ngFor="let result of searchResult; let i = index" (click)="goToHisProfile(searchResult[i].id)">\n\n        <ion-col col-auto>\n\n          <img class="rounded thumb-md" src="{{searchResult[i].accountImage}}">\n\n        </ion-col>\n\n        <ion-col>\n\n          <div *ngIf="searchResult[i].usualName != \'\'">\n\n            <div class="text-muted">{{searchResult[i].usualName}}</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div *ngIf="searchResult?.length == 0 && search?.length > 0">\n\n      <div class="h-full text-center unknown">Inconnu ...</div> \n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\log\log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginClassicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firstStep_firstStep1__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_settings__ = __webpack_require__(37);
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
    function LoginClassicPage(navCtrl, app, api, storage, loadingCtrl, alertCtrl, fb, storageProvider, modalCtrl, viewCtrl, userProvider) {
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
        this.userProvider = userProvider;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.isLoggedIn = false;
        this.loaded = false;
        this.storage.get('isConnected').then(function (val) {
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
            }
        });
        this.loaded = true;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER).then(function (val) {
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
                _this.userProvider.setUser(body);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED, true);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER, _this.userProvider.getId());
                if (!body.enabled) {
                    if (!_this.userProvider.isDeleted()) {
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION, true);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__firstStep_firstStep1__["a" /* FirstStep1Page */]);
                    }
                    else {
                        // User qui a supprimer son compte
                        _this.showAlertBadAccount('Votre compte a été supprimé...\nSi vous voulez le réactiver, merci de nous en faire la demande sur www.popme.app');
                    }
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__loading_loading__["a" /* LoadingPage */]);
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
    LoginClassicPage.prototype.reinitPassword = function () {
        var _this = this;
        var data;
        data = {};
        data.email = this.user;
        if (!this.user) {
            var alert_1 = this.alertCtrl.create({
                title: 'Email vide',
                subTitle: 'Inscris ton email pour réinitialiser le mot de passe',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.api.post('reinitPassword', data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                if (body) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Réinitialisation en cours',
                        subTitle: 'Tu recevras rapidement un lien pour le réinitialiser',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (err) {
                console.log(err);
                _this.showAlertBadAccount('Votre compte et\/ou mot de passe ne sont pas valides');
                //alert("ko");
                //this.navCtrl.setRoot(this.navCtrl.getActive().component);
            }, function () {
                //this.goToHome();
            });
        }
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], LoginClassicPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mailInput'),
        __metadata("design:type", Object)
    ], LoginClassicPage.prototype, "mailInput", void 0);
    LoginClassicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-classic',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\login\loginClassic.html"*/'<ion-content padding class="bg-popme">\n\n  <div layout vertical center>\n\n    <div class="close-buttons" (click)="back()">\n\n      <ion-icon name="close"></ion-icon>\n\n    </div>\n\n    <div class="logo-title">\n\n      <img src="./assets/img/logo_title.png">\n\n    </div>\n\n    <ion-list class="w-full login">\n\n      <ion-label class="text-center upper">{{ \'PAGE.LOGIN_CLASSIQUE.CONNECTION\' | translate }}</ion-label>\n\n      <ion-item class="mt5">\n\n        <ion-input [(ngModel)]="user" type="text" placeholder="Adresse Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="password" type="password" placeholder="Mot de passe"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button round color="muted" outline (click)="checkLogin()">{{ \'BUTTON.CONNECTION\' | translate }}</button>\n\n    <div class="button-blank">\n\n      <button small outline class="text-center upper" (click)="reinitPassword()">{{ \'PAGE.LOGIN_CLASSIQUE.REINIT_PASSWORD\' | translate }}</button>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\login\loginClassic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */]])
    ], LoginClassicPage);
    return LoginClassicPage;
}());

//# sourceMappingURL=loginClassic.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poperprofile_poperprofile__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_swing__);
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
    function PlayPage(navCtrl, storage, api, modalCtrl, loadingCtrl, gameProvider, userProvider, tutoriel, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.gameProvider = gameProvider;
        this.userProvider = userProvider;
        this.tutoriel = tutoriel;
        this.translate = translate;
        this.isLoading = true;
        this.userProfiled = {};
        this.cards = this.gameProvider.getCards();
        this.stackConfig = {
            // Default setting only allows UP, LEFT and RIGHT so you can override this as below
            allowedDirections: [
                __WEBPACK_IMPORTED_MODULE_9_angular2_swing__["Direction"].LEFT,
                __WEBPACK_IMPORTED_MODULE_9_angular2_swing__["Direction"].RIGHT
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
        var _this = this;
        var removedCard = this.gameProvider.getCards().shift();
        var pop;
        pop = {};
        this.api.post('unpop/' + this.userProvider.getId() + '/' + removedCard.id, pop)
            .subscribe(function (pop) {
            console.log("unpop réalisé");
            if (_this.tutoriel.isTutoriel()) {
                _this.tutoriel.nextStep({ popped: false });
            }
        }, function (err) {
            console.log(err);
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
        this.gameProvider.getCardsPlayed().push(removedCard.id);
        this.gameProvider.getMoreCardsIfNecessary();
    };
    PlayPage.prototype.liked = function () {
        var _this = this;
        var removedCard = this.gameProvider.getCards().shift();
        //this.checkMatching(removedCard);
        var pop;
        pop = {};
        this.api.post('pop/' + this.userProvider.getId() + '/' + removedCard.id, pop)
            .subscribe(function (pop) {
            console.log("pop réalisé");
            if (_this.tutoriel.isTutoriel()) {
                _this.tutoriel.nextStep({ popped: true });
            }
        }, function (err) {
            console.log(err);
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
            this.api.post('getUserWithPop/' + card.user.id + '/' + this.userProvider.getId(), data)
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
    PlayPage.prototype.pushToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages__["n" /* ProfilePage */], {}, { animate: true, direction: 'back' });
    };
    PlayPage.prototype.pushToLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages__["f" /* LogPage */], {}, { animate: true, direction: 'forward' });
    };
    PlayPage.prototype.pushToTrend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages__["r" /* TrendPage */], {}, { animate: true, direction: 'forward' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cardStack'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_angular2_swing__["SwingStackComponent"])
    ], PlayPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('card'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], PlayPage.prototype, "swingCards", void 0);
    PlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-play',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\play\play.html"*/'<ion-header>\n\n<div class="bg-popme" layout horizontal justified>\n\n  	<button ion-button color="muted" clear icon-only (click)="pushToProfile()">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="pushToLog()">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n  	<button ion-button color="muted" clear icon-only (click)="pushToTrend()">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n</div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="swipe-bg" no-bounce>\n\n  <!-- <div class="h-full no-cards" [hidden]="!isLoading" horizontal layout center center-center>\n\n    <div class="ripple-container">\n\n      <div class="thumb-lg ripple-trigger">\n\n        <img src="assets/img/hieu.png" class="rounded b b-2x box-shadow">\n\n      </div>\n\n      <div class="ripple-1"></div>\n\n      <div class="ripple-2"></div>\n\n    </div>\n\n  </div> -->\n\n\n\n  <div class="swipe-container">\n\n    <div class="h-full wrapper-sm">\n\n      <div class="card-stack" swing-stack #cardStack [stackConfig]="stackConfig" (throwoutleft)="disliked(c)" (throwoutright)="liked(c)">\n\n        <ng-container *ngIf="cards?.length == 0">\n\n          <div class="h-full text-center no-cards">{{ \'PAGE.PLAY.NO_PHOTOS\' | translate }}</div>\n\n        </ng-container>\n\n        <div class="card-item" #card [style.zIndex]="-1 * i" swing-card\n\n            *ngFor="let c of cards; trackBy: trackByFn; let i = index">\n\n          <div [style.backgroundImage]="\'url(\' + c.image + \')\'" class="div-img h-full r-3x"></div>\n\n\n\n          <div class="card-caption">\n\n            <div class="card-text pull-left">\n\n              <div class="font-bold text-xl" (click)="goToHisProfile()">\n\n                <div class="pull-left poper-card-image" [style.backgroundImage]="\'url(\' + c.user.accountImage + \')\'"></div>\n\n                <div class="pull-left poper-card-text">\n\n                  <div class="poper-card-usualname">{{c.user.usualName}}</div>\n\n                  <div class="poper-card-button">\n\n                    {{ \'PAGE.PLAY.SEE_PROFIL\' | translate }}\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <!--<div>{{c.job_title}}</div>-->\n\n            </div>\n\n           <!-- <div class="pull-right">\n\n              <ion-icon class="text-2x" name="md-information-circle" color="white"></ion-icon>\n\n            </div> -->\n\n          </div>\n\n\n\n          <div class="stamp stamp-like">Je pop</div>\n\n          <div class="stamp stamp-nope">Je passe</div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="bottom-actions" horizontal layout center around-justified>\n\n      <button ion-button color="white" class="button-dislike" (click)="disliked()" [disabled]="cards?.length == 0">\n\n        <ion-icon name="thumbs-down"></ion-icon>\n\n      </button>\n\n      <button ion-button color="white" class="button-star" (click)="goToHisProfile()" [disabled]="cards?.length == 0">\n\n        <ion-icon name="md-contact"></ion-icon>\n\n      </button>\n\n      <button ion-button color="white" class="button-like" (click)="liked()" [disabled]="cards?.length == 0">\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\play\play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* GameProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* Tutoriel */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], PlayPage);
    return PlayPage;
}());

//# sourceMappingURL=play.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverScorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverScorePage = /** @class */ (function () {
    function PopoverScorePage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverScorePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverScorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\profile\popover-score.html"*/'<ion-content class="popover">\n\n	<div layout vertical>\n\n		<div class="content">\n\n			<p>&Ccedil;a c\'est ton score total !</p>\n\n			<p>&Agrave; chaque fois que quelqu\'un aimera une de tes photos, ce score évoluera.</p>\n\n			<p>&Agrave; toi de partager tes photos et faire monter ton score pour devenir le plus populaire !</p>\n\n		<div class="text-center">\n\n			<button small ion-button color="white" (click)="close()">\n\n				J\'ai compris\n\n			</button>\n\n		</div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\profile\popover-score.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PopoverScorePage);
    return PopoverScorePage;
}());

//# sourceMappingURL=popover-score.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverRankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverRankPage = /** @class */ (function () {
    function PopoverRankPage(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    PopoverRankPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverRankPage.prototype.pushToRelativeRank = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["p" /* RelativeRankPage */], {}, { animate: true, direction: 'forward' });
        this.viewCtrl.dismiss();
    };
    PopoverRankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\profile\popover-rank.html"*/'<ion-content class="popover">\n\n	<div layout vertical>\n\n		<div class="content">\n\n			<p>&Ccedil;a c\'est ton classement !</p>\n\n			<p>Tu peux choisir quel classement par défaut tu souhaites voir sur ton profil</p>\n\n		<div class="text-center">\n\n			<button small ion-button color="white" (click)="pushToRelativeRank()">\n\n				Classements\n\n			</button>\n\n		</div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\profile\popover-rank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], PopoverRankPage);
    return PopoverRankPage;
}());

//# sourceMappingURL=popover-rank.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverTimePage = /** @class */ (function () {
    function PopoverTimePage(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    PopoverTimePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\profile\popover-time.html"*/'<ion-content class="popover">\n\n	<div layout vertical>\n\n		<div class="content">\n\n			<p>&Ccedil;a c\'est le temps d\'attent avant d\'ajouter une nouvelle popy</p>\n\n		<div class="text-center">\n\n			<button small ion-button color="white" (click)="close()">\n\n				J\'ai compris\n\n			</button>\n\n		</div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\profile\popover-time.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], PopoverTimePage);
    return PopoverTimePage;
}());

//# sourceMappingURL=popover-time.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firstStep_firstStep1__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_settings__ = __webpack_require__(37);
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
    function RegisterPage(navCtrl, app, api, storage, alertCtrl, loadingCtrl, viewCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED).then(function (val) {
            if (val) {
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION).then(function (valFirstCon) {
                    if (valFirstCon) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__firstStep_firstStep1__["a" /* FirstStep1Page */]);
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
            if (body.error) {
                loading.dismiss();
                _this.doAlert(body.message.text);
            }
            else {
                _this.storage.set('isConnected', true);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER, body.id);
                // On redirige l'utilisateur vers sa page si il est authentifié
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FIRST_CONNEXION, true);
                _this.storage.set('tutoriel', true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__firstStep_firstStep1__["a" /* FirstStep1Page */]);
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
        this.viewCtrl.dismiss();
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding text-center class="bg-popme">\n\n  <div class="close-buttons" (click)="goBack(\'LoginPage\')">\n\n    <ion-icon name="close"></ion-icon>\n\n  </div>\n\n  <div class="register">\n\n    <img src="./assets/img/logo_title.png" />\n\n  </div>\n\n  <div>\n\n    <p>{{ \'PAGE.REGISTER.TITLE\' | translate }}</p>\n\n  </div>\n\n  <ion-list class="w-full login">\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Adresse Email" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Mot de passe" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="input-with-info">\n\n      <ion-input type="text" placeholder="Pseudo (Max 20 caractères. Pas d\'espace)" [(ngModel)]="usualName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Date de naissance</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" cancelText="Annuler" doneText="OK" [(ngModel)]="birthday"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sexe</ion-label>\n\n      <ion-select [(ngModel)]="gender" cancelText="Annuler">\n\n        <ion-option value="f">Femme</ion-option>\n\n        <ion-option value="h">Homme</ion-option>\n\n        <ion-option value="a">Autre</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!--<ion-item>\n\n      <ion-input type="text" placeholder="Lieu" [(ngModel)]="city"></ion-input>\n\n    </ion-item>-->\n\n  </ion-list>\n\n  <button ion-button round color="muted" outline (click)="goToProfile()">Créer mon compte</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* Translate */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(13);
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
    function SettingsPage(navCtrl, navParams, storage, fb, storageProvider, alertCtrl, geolocation, platform, viewCtrl, zone, modalCtrl, loadingCtrl, api, actionSheetCtrl, camera, userProvider, translate) {
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
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.userProvider = userProvider;
        this.translate = translate;
        this.user = {};
        this.location = {};
        this.rank = {};
        this.hidevalue = true;
        this.distance = 80;
        this.ageRange = { lower: 18, upper: 30 };
        this.lang = this.translate.getDefaultLang();
        this.loadUserInfo(this.userProvider.getId());
        this.storage.get('location').then(function (locationStorage) {
            if (locationStorage) {
                _this.location = locationStorage;
            }
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    }
    SettingsPage.prototype.ionViewDidLeave = function () {
        var _this = this;
        var data;
        data = {};
        data = this.user;
        data.birthday = new Date(this.dateB);
        data.place = this.location;
        if (this.accountImage) {
            data.accountImage = this.accountImage;
        }
        this.api.post('updateUser/' + this.user.id, data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            if (!body.error) {
                _this.userProvider.setUser(body);
            }
        }, function (err) {
        }, function () {
            //this.goToHome();
        });
        //this.translate.use(this.lang);
        this.translate.setDefaultLang(this.lang);
        this.storage.set('defaultLang', this.lang);
    };
    SettingsPage.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages__["a" /* AutoCompletePage */]);
        modal.onDidDismiss(function (data) {
            _this.storage.get('location').then(function (infos) {
                if (infos) {
                    _this.location = infos;
                    var data_1;
                    data_1 = {};
                    data_1 = _this.user;
                    data_1.birthday = new Date(_this.dateB);
                    data_1.place = _this.location;
                    _this.api.post('updateUser/' + _this.user.id, data_1)
                        .subscribe(function (data) {
                        var body;
                        body = JSON.parse(data.text());
                        if (!body.error) {
                            _this.userProvider.setUser(body);
                        }
                    }, function (err) {
                    }, function () {
                        //this.goToHome();
                    });
                }
            });
        });
        modal.present();
    };
    SettingsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
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
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.fb.logout()
                            .then(function (res) { return false; })
                            .catch(function (e) { return console.log('Error logout from Facebook', e); });
                        _this.storageProvider.clearConnexionStorage();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage.prototype.deleteAccount = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Suppression',
            message: 'Souhaitez-vous supprimer votre compte ? Toutes vos données seront perdues.',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'crescent',
                            content: 'Supression de ton compte ...',
                            dismissOnPageChange: true
                        });
                        loading.present();
                        var data;
                        data = {};
                        _this.api.post('deleteAccount/' + _this.userProvider.getId(), data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            _this.storage.remove('user');
                            _this.storage.remove('isConnected');
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */]);
                        }, function (err) {
                        }, function () {
                            //this.goToHome();
                        });
                        loading.dismiss();
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
            _this.rank = _this.user.rank;
            _this.userProvider.setUser(body);
            _this.user = _this.userProvider.getUser();
            console.log(_this.userProvider.getBirthday());
            console.log(_this.userProvider.getBirthday().date);
            _this.dateB = new Date(_this.userProvider.getBirthday().date);
            var curr_date = _this.dateB.getDate();
            var curr_month = _this.dateB.getMonth() < 9 ? '0' + (_this.dateB.getMonth() + 1) : _this.dateB.getMonth() + 1; //Months are zero based
            var curr_year = _this.dateB.getFullYear();
            _this.dateB = curr_year + "-" + curr_month + "-" + curr_date;
        }, function (err) {
            _this.storage.remove('user');
            _this.storage.remove('isConnected');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */]);
        }, function () {
            //this.goToHome();
        });
        loading.dismiss();
    };
    SettingsPage.prototype.openPhotoPicker = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Photo de profil',
            buttons: [
                {
                    text: 'Choisir une photo',
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
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><span class="color-white">{{ \'PAGE.SETTINGS.TITLE\' | translate }}</span></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-custom">\n\n  <ion-card class="card-custom text-center wrapper">\n\n    <div class="text-xl font-bold">\n\n      <div class="thumb-sm">\n\n        <img src="assets/img/logo.png" alt="">\n\n      </div>\n\n      Popme\n\n    </div>\n\n    <div color="muted" ion-text>\n\n      {{ \'PAGE.SETTINGS.SLOGAN\' | translate }}\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-list-header class="upper">\n\n      {{ \'PAGE.SETTINGS.INFORMATIONS.TITLE\' | translate }}\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <div class="big-thumb text-center settings-account-image">\n\n        <img [src]="user.account_image" class="rounded box-shadow" alt="" *ngIf="user.account_image != null">\n\n        <button clear class="btn-edit" (click)="openPhotoPicker(i)">\n\n          <ion-icon name="md-create"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_DESCRIPTION\' | translate }}</ion-label>\n\n      <ion-input type="text" placeholder="Description" [(ngModel)]="user.description"></ion-input>\n\n    </ion-item>\n\n    <button ion-item (click)="showAddressModal()">\n\n      {{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_LOCATION\' | translate }}\n\n      <ion-note item-end>\n\n        {{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_LOCATION_DESCRIPTION\' | translate }}\n\n        <br>\n\n        <span class="text-xs">{{ location.city }}, {{ location.country }}</span>\n\n      </ion-note>\n\n    </button>\n\n    <ion-item>\n\n      <ion-label>{{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_BIRTHDAY\' | translate }}</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" cancelText="Annuler" doneText="OK" [(ngModel)]="dateB"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_SEX\' | translate }}</ion-label>\n\n      <ion-select [(ngModel)]="user.sexe" cancelText="Annuler">\n\n        <ion-option value="f">{{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_SEX_OPTION1\' | translate }}</ion-option>\n\n        <ion-option value="h">{{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_SEX_OPTION2\' | translate }}</ion-option>\n\n        <ion-option value="a">{{ \'PAGE.SETTINGS.INFORMATIONS.LABEL_SEX_OPTION3\' | translate }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <!--\n\n  <ion-list>\n\n    <ion-list-header>\n\n      NOTIFICATIONS\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Nouveaux pops</ion-label>\n\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Slot photo disponible</ion-label>\n\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>-->\n\n\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      {{ \'PAGE.SETTINGS.SETTING.TITLE\' | translate }}\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>{{ \'PAGE.SETTINGS.SETTING.LABEL_LANGUAGE\' | translate }}</ion-label>\n\n      <ion-select [(ngModel)]="lang" cancelText="Annuler">\n\n        <ion-option value="fr">{{ \'PAGE.SETTINGS.SETTING.LABEL_LANGUAGE_OPTION1\' | translate }}</ion-option>\n\n        <ion-option value="en">{{ \'PAGE.SETTINGS.SETTING.LABEL_LANGUAGE_OPTION2\' | translate }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      {{ \'PAGE.SETTINGS.CONTACT.TITLE\' | translate }}\n\n    </ion-list-header>\n\n    <button ion-item>\n\n      {{ \'PAGE.SETTINGS.CONTACT.LABEL_HELP\' | translate }}\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      {{ \'PAGE.SETTINGS.NOTICES.TITLE\' | translate }}\n\n    </ion-list-header>\n\n    <button ion-item>\n\n      {{ \'PAGE.SETTINGS.NOTICES.LABEL_PRIVACY_POLICY\' | translate }}\n\n    </button>\n\n    <a href="https://www.popme.app/conditions-generales-utilisation" target="_blank">\n\n      <button ion-item>\n\n        {{ \'PAGE.SETTINGS.NOTICES.LABEL_CONDITIONS_OF_USE\' | translate }}\n\n      </button>\n\n    </a>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines>\n\n    <ion-item text-center class="m-b-sm" (click)="logout()">\n\n      {{ \'PAGE.SETTINGS.ACCOUNT.SIGN_OUT\' | translate }}\n\n    </ion-item>\n\n    <div class="text-center m-b">\n\n      <div class="thumb-sm">\n\n        <img src="assets/img/logo.png" alt="">\n\n      </div>\n\n      <br/><br/>\n\n      <div>Version {{ \'APP.VERSION\' | translate }}</div>\n\n    </div>\n\n    <ion-item text-center (click)="deleteAccount()">\n\n      {{ \'PAGE.SETTINGS.ACCOUNT.DELETE\' | translate }}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["j" /* Users */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poperprofile_poperprofile__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rank_relativeRank__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(13);
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
    function TrendPage(navCtrl, navParams, loadingCtrl, api, modalCtrl, storage, platform, photoViewer, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.platform = platform;
        this.photoViewer = photoViewer;
        this.translate = translate;
        this.platform.ready().then(function () {
            _this.storage.get('isConnected').then(function (val) {
                if (!val) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
            });
            _this.storage.get('firstLaunchTrend').then(function (val) {
                _this.storage.remove('firstLaunchTrend');
                _this.getTrendPops(val);
            });
        });
    }
    TrendPage.prototype.isReadyFirstPopy = function () {
        return this.firstPopy !== undefined;
    };
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
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__rank_relativeRank__["a" /* RelativeRankPage */], { userProfile: type });
        profileModal.present();
    };
    TrendPage.prototype.ionViewDidLoad = function () {
    };
    TrendPage.prototype.pushToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages__["n" /* ProfilePage */], {}, { animate: true, direction: 'back' });
    };
    TrendPage.prototype.pushToPlay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages__["i" /* PlayPage */], {}, { animate: true, direction: 'back' });
    };
    TrendPage.prototype.pushToLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages__["f" /* LogPage */], {}, { animate: true, direction: 'back' });
    };
    TrendPage.prototype.viewImg = function () {
        this.photoViewer.show(this.firstPopy.image, 'Popy', { share: true });
    };
    TrendPage.prototype.getTrendPops = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.storage.get('user').then(function (user) {
            _this.storage.get('trends').then(function (trends) {
                if (user && !force && trends) {
                    _this.user = user;
                    _this.popeds = trends[0];
                    _this.popers = trends[1];
                    _this.firstPopy = trends[2];
                }
                else {
                    var loading = _this.loadingCtrl.create({
                        spinner: 'crescent',
                        content: 'Chargement des données ...'
                    });
                    loading.present();
                    var poped = void 0;
                    poped = {};
                    _this.api.post('trend/poped', poped)
                        .subscribe(function (data) {
                        _this.popeds = [];
                        var body;
                        body = JSON.parse(data.text());
                        for (var i = 0; i < body.length; i++) {
                            _this.popeds[i] = body[i];
                        }
                        var poper;
                        poper = {};
                        _this.api.post('trend/poper', poper)
                            .subscribe(function (data) {
                            _this.popers = [];
                            var body;
                            body = JSON.parse(data.text());
                            for (var i = 0; i < body.length; i++) {
                                _this.popers[i] = body[i];
                            }
                            var popy;
                            popy = {};
                            _this.api.post('trend/first-popy', popy)
                                .subscribe(function (data) {
                                _this.firstPopy = JSON.parse(data.text());
                                _this.storage.set('trends', [_this.popeds, _this.popers, _this.firstPopy]);
                            }, function (err) {
                            }, function () {
                                //this.goToHome();
                            });
                        }, function (err) {
                        }, function () {
                            //this.goToHome();
                        });
                    }, function (err) {
                    }, function () {
                        //this.goToHome();
                    });
                    loading.dismiss();
                }
            });
        });
    };
    TrendPage.prototype.doRefresh = function (event) {
        this.getTrendPops(true);
        event.complete();
    };
    TrendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trend',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\trend\trend.html"*/'<ion-header>\n\n    <div class="bg-popme" layout horizontal justified>\n\n     <button ion-button color="muted" clear icon-only (click)="pushToProfile()">\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="muted" clear icon-only (click)="pushToPlay()">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="muted" clear icon-only (click)="pushToLog()">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n  </button>\n\n</div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="crescent">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <div class="wrapper-xs padder">\n\n        <div ion-text color="danger" class="font-bold">\n\n            {{ \'PAGE.TREND.TITLE\' | translate }}\n\n        </div>\n\n    </div>\n\n\n\n    <div full class="subtitle">{{ \'PAGE.TREND.BEST_POPED\' | translate }}</div>\n\n    <div class="wrapper-xs padder-sm">\n\n        <div *ngIf="popeds?.length > 0">\n\n            <ion-row align-items-center *ngFor="let poped of popeds; let i = index">\n\n                <ion-col col-12 class="text-center" (click)="goToHisProfile(poped.user.id)">\n\n                    <div [class]="\'animate-ease-\'+i">\n\n                        <div class="account-image">\n\n                            <img class="rounded thumb-md account-image border-image-color{{i}}" src="{{poped.user.accountImage}}">\n\n                            <div [class]="\'background-color\'+i">\n\n                                <div class="trophy"><ion-icon name="trophy"></ion-icon></div>\n\n                                <div class="infos-trend">\n\n                                    <div class="usual-name">{{poped.user.usualName}}</div>\n\n                                    <div>{{poped.score}} pops</div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n    <div full class="subtitle">{{ \'PAGE.TREND.BEST_POPER\' | translate }}</div>\n\n    <div class="wrapper-xs padder-sm">\n\n        <div *ngIf="popers?.length > 0">\n\n            <ion-row align-items-center *ngFor="let poper of popers; let i = index">\n\n                <ion-col col-12 class="text-center" (click)="goToHisProfile(poper.user.id)">\n\n                    <div [class]="\'animate-ease-\'+i">\n\n                        <div class="account-image">\n\n                            <img class="rounded thumb-md account-image border-image-color{{i}}" src="{{poper.user.accountImage}}">\n\n                            <div [class]="\'background-color\'+i">\n\n                                <div class="trophy"><ion-icon name="trophy"></ion-icon></div>\n\n                                <div class="infos-trend">\n\n                                    <div class="usual-name">{{poper.user.usualName}}</div>\n\n                                    <div>{{poper.score}} pops</div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n    <div full class="subtitle">{{ \'PAGE.TREND.BEST_PHOTO\' | translate }}</div>\n\n    <div class="card-background-page">\n\n        <ion-card  (click)="viewImg()">\n\n            <img *ngIf="isReadyFirstPopy()" src="{{firstPopy.image}}" class="div-img h-full r-3x"/>\n\n        </ion-card>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\trend\trend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], TrendPage);
    return TrendPage;
}());

//# sourceMappingURL=trend.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clan_clanprofile__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clan_clanEdit__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClanPage = /** @class */ (function () {
    function ClanPage(navCtrl, storage, api, modalCtrl, loadingCtrl, viewCtrl, alertCtrl, actionSheetCtrl, camera, userProvider, translate) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.userProvider = userProvider;
        this.translate = translate;
        this.listClans();
        this.displayMenu = 1;
    }
    ClanPage.prototype.doRefresh = function (event) {
        this.listClans();
        event.complete();
    };
    ClanPage.prototype.listClans = function () {
        var _this = this;
        var data;
        data = {};
        data.userId = this.userProvider.getId();
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Inscription...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('clans/get', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.clans = body;
            if (body.error) {
                loading.dismiss();
            }
            else {
                loading.dismiss();
            }
        }, function (err) {
            loading.dismiss();
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    ClanPage.prototype.showKey = function (key) {
        var alert = this.alertCtrl.create({
            title: 'Mot de passe',
            subTitle: key,
            buttons: ['OK']
        });
        alert.present();
    };
    ClanPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClanPage.prototype.goToClanProfile = function (index) {
        //let profileModal = this.modalCtrl.create(ClanProfilePage, { clan: index });
        //profileModal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__clan_clanprofile__["a" /* ClanProfilePage */], { clan: index }, { animate: true, direction: 'forward' });
    };
    ClanPage.prototype.setDisplayMenu = function (menu) {
        this.displayMenu = menu;
    };
    ClanPage.prototype.showMessage = function (key, message) {
        var alert = this.alertCtrl.create({
            title: key,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ClanPage.prototype.goToCreateClan = function () {
        //this.navCtrl.push(ClanEditPage, {direction: 'forward'});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__clan_clanEdit__["a" /* ClanEditPage */], {}, { animate: true, direction: 'forward' });
    };
    ClanPage.prototype.joinClan = function () {
        var _this = this;
        var data;
        data = {};
        data.passCode = this.password;
        data.userId = this.userProvider.getId();
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Chargement...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('clan/join', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            if (body.error) {
                loading.dismiss();
                _this.showMessage('Erreur', body.message.text);
            }
            else {
                loading.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__clan_clanprofile__["a" /* ClanProfilePage */], { "clan": body.id }, { animate: true, direction: 'forward' });
                _this.displayMenu = 1;
            }
        }, function (err) {
            loading.dismiss();
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }, function () {
            //this.goToHome();
        });
    };
    ClanPage.prototype.openPhotoPicker = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Photo de profil',
            buttons: [
                {
                    text: 'Choisir une photo',
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
                            _this.clanImage = base64Image;
                            _this.clanImageUrl = 'url(' + base64Image + ')';
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
                            _this.clanImage = base64Image;
                            _this.clanImageUrl = 'url(' + base64Image + ')';
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
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-clan',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\clan\clan.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title><span class="color-white">{{ \'PAGE.CLAN.TITLE\' | translate }}</span></ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="swipe-bg" no-bounce>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n                pullingIcon="arrow-dropdown"\n\n                refreshingSpinner="crescent">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <div [ngSwitch]="displayMenu">\n\n        <div layout vertical class="mt5">\n\n            <div flex three class="bg-white">\n\n                <div>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-4 class="text-center b-r b-light">\n\n                                <button ion-button icon-only color="light" [class]="displayMenu == 1 ?\'button-primary\':\'button-muted\'" (click)="setDisplayMenu(1)">\n\n                                    <ion-icon name="md-list"></ion-icon>\n\n                                </button>\n\n                                <div class="text-muted text-xs l-s-1x m-t-xs">{{ \'PAGE.CLAN.MY_CLAN\' | translate }}</div>\n\n                            </ion-col>\n\n                            <ion-col col-4 class="text-center b-r b-light">\n\n                                <button ion-button icon-only color="light" [class]="displayMenu == 2 ?\'button-primary\':\'button-muted\'" (click)="setDisplayMenu(2)">\n\n                                    <ion-icon name="person-add"></ion-icon>\n\n                                </button>\n\n                                <div class="text-muted text-xs l-s-1x m-t-xs">{{ \'PAGE.CLAN.JOIN_CLAN\' | translate }}</div>\n\n                            </ion-col>\n\n                            <ion-col col-4 class="text-center b-r b-light">\n\n                                <button ion-button icon-only color="light" [class]="displayMenu == 3 ?\'button-primary\':\'button-muted\'" (click)="goToCreateClan()">\n\n                                    <ion-icon name="add"></ion-icon>\n\n                                </button>\n\n                                <div class="text-muted text-xs l-s-1x m-t-xs">{{ \'PAGE.CLAN.CREATE_CLAN\' | translate }}</div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div *ngSwitchCase="\'1\'">\n\n            <ng-container *ngIf="clans?.length > 0">\n\n                <div class="wrapper-xs padder">\n\n                    <div ion-text color="danger" class="font-bold mt10 mb5">\n\n                        {{ \'PAGE.CLAN.MY_CLAN\' | translate }} ({{ clans?.length }})\n\n                    </div>\n\n                </div>\n\n                <div class="wrapper-xs padder-sm">\n\n                    <div *ngIf="clans?.length > 0">\n\n                        <ion-row class="row-full" align-items-center *ngFor="let clan of clans; let i = index"(click)="goToClanProfile(clan.id)">\n\n                            <ion-col col-auto>\n\n                                <img [src]="clan.image" class="rounded thumb-md" alt="" *ngIf="clan.image != null">\n\n                                <img src="./assets/img/clan_default_image.png" class="rounded thumb-md" alt="" *ngIf="clan.image == null">\n\n                            </ion-col>\n\n                            <ion-col class="list-clans-name">{{ clan.name }}</ion-col>\n\n                            <ion-col class="list-clans-users" >{{ clan.nbrUser }} membre(s)</ion-col>\n\n                        </ion-row>\n\n                    </div>\n\n                </div>\n\n            </ng-container>\n\n            <ng-container *ngIf="clans?.length == 0">\n\n                <div class="text-center mt10">\n\n                    {{ \'PAGE.CLAN.NO_CLAN\' | translate }}\n\n      </div>\n\n            </ng-container>\n\n        </div>\n\n        <div *ngSwitchCase="\'2\'">\n\n            <div class="wrapper-xs padder">\n\n                <div ion-text color="danger" class="font-bold mt10 mb5">\n\n                    {{ \'PAGE.CLAN.JOIN_CLAN\' | translate }}\n\n                </div>\n\n            </div>\n\n            <div class="wrapper-xs padder-sm text-center">\n\n                <ion-list class="w-full login">\n\n                    <ion-item>\n\n                        <ion-input type="password" placeholder="Mot de passe" [(ngModel)]="password"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n                <button ion-button round color="muted" outline (click)="joinClan()">{{ \'BUTTON.JOIN\' | translate }}</button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\clan\clan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], ClanPage);
    return ClanPage;
}());

//# sourceMappingURL=clan.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClanProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clan_clanEdit__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClanProfilePage = /** @class */ (function () {
    function ClanProfilePage(navCtrl, navParams, storage, api, modalCtrl, loadingCtrl, viewCtrl, alertCtrl, actionSheetCtrl, socialSharing, platform, camera, clanProvider, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.camera = camera;
        this.clanProvider = clanProvider;
        this.userProvider = userProvider;
        this.clan = {};
        var clanInput;
        clanInput = {};
        clanInput.clanId = this.navParams.get("clan");
        this.api.post('clan/get', clanInput)
            .subscribe(function (data) {
            _this.clanProvider.setCurrentClan(JSON.parse(data.text()));
            _this.clan = _this.clanProvider.getCurrentClan();
            _this.userClanRole = _this.isUserAdmin();
        }, function (err) {
        }, function () {
            //this.goToHome();
        });
    }
    ClanProfilePage.prototype.ionViewDidEnter = function () {
    };
    ClanProfilePage.prototype.showActionsClan = function (clanId) {
    };
    ClanProfilePage.prototype.showActions = function (userId, clanId, role) {
        var _this = this;
        var data;
        data = {};
        data.userId = userId;
        data.clanId = clanId;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                }]
        });
        if (role == 'ROLE_USER') {
            actionSheet.addButton({
                text: 'Promouvoir',
                handler: function () {
                    data.role = 'ROLE_ADMIN';
                    _this.api.post('clan/grant', data)
                        .subscribe(function (data) {
                        var body;
                        body = JSON.parse(data.text());
                        _this.clan = body;
                        _this.isVisibleRankingClan = true;
                    }, function (err) {
                    }, function () {
                    });
                }
            });
        }
        if (role == 'ROLE_ADMIN' || role == 'ROLE_CREATEUR') {
            actionSheet.addButton({
                text: 'Rétrograder',
                handler: function () {
                    data.role = 'ROLE_USER';
                    _this.api.post('clan/grant', data)
                        .subscribe(function (data) {
                        var body;
                        body = JSON.parse(data.text());
                        _this.clan = body;
                        _this.isVisibleRankingClan = true;
                    }, function (err) {
                    }, function () {
                    });
                }
            });
        }
        actionSheet.addButton({
            text: 'Exclure',
            handler: function () {
                _this.api.post('clan/exclude', data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    _this.clan = body;
                    _this.isVisibleRankingClan = true;
                }, function (err) {
                }, function () {
                });
            }
        });
        actionSheet.addButton({
            text: 'Bannir',
            handler: function () {
                _this.api.post('clan/quit', data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    _this.clan = body;
                    _this.isVisibleRankingClan = true;
                }, function (err) {
                }, function () {
                });
            }
        });
        actionSheet.present();
    };
    ClanProfilePage.prototype.isUserAdmin = function () {
        for (var _i = 0, _a = this.clan.userClans; _i < _a.length; _i++) {
            var userClan = _a[_i];
            if (userClan.id == this.userProvider.getId()) {
                return userClan.role == 'ROLE_ADMIN' || userClan.role == 'ROLE_CREATEUR';
            }
        }
    };
    ClanProfilePage.prototype.isNotMe = function (userId) {
        return userId != this.userProvider.getId();
    };
    ClanProfilePage.prototype.hasImage = function () {
        return this.userProvider.getImageAccount() != null;
    };
    ClanProfilePage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ClanProfilePage.prototype.goTo = function (page, direction) {
        this.navCtrl.push(page, {}, {
            direction: direction
        });
    };
    ClanProfilePage.prototype.goToEditClan = function (clanId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__clan_clanEdit__["a" /* ClanEditPage */], { clan: clanId }, { direction: 'forward' });
    };
    ClanProfilePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClanProfilePage.prototype.showActionsClanQuit = function () {
        var _this = this;
        var data;
        data = {};
        data.userId = this.userProvider.getId();
        data.clanId = this.clan.id;
        var alert = this.alertCtrl.create({
            title: 'Quitter le clan',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Quitter',
                    handler: function () {
                        _this.api.post('clan/quit', data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            if (!body.error) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
                            }
                        }, function (err) {
                        }, function () {
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ClanProfilePage.prototype.sharePassword = function (clan) {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                message: 'Rejoins mon clan ' + clan.name + ' avec le mot de passe suivant : ' + clan.passCode + '. Rendez-vous sur Popme !',
                subject: '',
                files: [clan.image],
                url: '',
                chooserTitle: 'Mot de passe' // Android only
            };
            _this.socialSharing.shareWithOptions(options)
                .then(function () {
                //this.showSuccessShareMsg();
            })
                .catch(function (err) {
                //this.showErrorShareMsg(err);
            });
        });
    };
    ClanProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-clan',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\clan\clanprofile.html"*/'<ion-header>\n\n	<div class="bg-popme" layout horizontal justified>\n\n		<button left ion-button color="muted" clear icon-only (click)="back()">\n\n			<ion-icon name=\'arrow-dropleft-circle\'></ion-icon>\n\n		</button>\n\n		<div class="clan-title">\n\n			{{ clan.name }}\n\n		</div>\n\n	</div>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n	<div class="clan-profile padder">\n\n		<div class="image">\n\n			<img src="{{ clan.image }}" class="rounded box-shadow" *ngIf="clan.image != null"/>\n\n			<img src="./assets/img/clan_default_image.png" class="rounded box-shadow" alt="" *ngIf="clan.image == null">\n\n		</div>\n\n		<div class="description">\n\n			<div class="clan-profile-name">{{ clan.name}}</div>\n\n			<div class="clan-profile-description">{{ clan.description}}</div>\n\n			<div class="clan-profile-created">\n\n				créé le {{ clan.createdAt }}\n\n			</div>\n\n			<div class="clan-profile-action">\n\n				<div *ngIf="isUserAdmin">\n\n					 <button ion-button round color="muted" small outline (click)="goToEditClan(clan.id)"><ion-icon name="settings"></ion-icon>&nbsp;Modifier mon clan</button>\n\n				</div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n	<ion-list class="list-user">\n\n		<div class="wrapper-xs">\n\n			<div ion-text color="danger" class="font-bold mt5 mb5 padder">\n\n				Membres ({{ clan.userClans?.length }})\n\n			</div>\n\n		</div>\n\n		<ion-row *ngFor="let user of clan.userClans; let i = index" class="padder">\n\n			<ion-col class="clanprofile-user-image" col-auto>\n\n				<img src="{{ user.image }}" class="rounded box-shadow clanprofile-user-image" />\n\n			</ion-col>\n\n			<ion-col class="margin-auto">\n\n				<span class="clanprofile-user-name">{{ user.usualName }}</span><br/>\n\n				<span class="clanprofile-user-description">{{ user.description }}</span>\n\n			</ion-col>\n\n			<ion-col class="margin-auto float-right" col-auto>\n\n				<ion-badge *ngIf="user.role == \'ROLE_CREATEUR\'" item-end>Créateur</ion-badge>\n\n				<ion-badge *ngIf="user.role == \'ROLE_ADMIN\'" item-end>Admin</ion-badge>\n\n				<ion-badge *ngIf="user.role == \'ROLE_USER\'" color="secondary" item-end>Utilisateur</ion-badge>\n\n			</ion-col>\n\n			<ion-col class="clanprofile-user-action margin-auto" col-auto>\n\n				<div *ngIf="isUserAdmin() && isNotMe(user.id)">\n\n					<ion-icon name="more" (click)="showActions(user.id, clan.id, user.role)"></ion-icon>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-list>\n\n	<div class="clan-action" ion-text color="primary">\n\n		<ion-row (click)="sharePassword(clan)" class="padder">\n\n			<ion-col class="clanprofile-user-image" col-auto><ion-icon name="share-alt"></ion-icon></ion-col>\n\n			<ion-col class="margin-auto">\n\n				Partager le mot de passe\n\n			</ion-col>\n\n		</ion-row>\n\n	</div>\n\n	<div class="clan-action" ion-text color="dislike">\n\n		<ion-row (click)="showActionsClanQuit()" class="padder">\n\n			<ion-col class="clanprofile-user-image" col-auto><ion-icon name="exit"></ion-icon></ion-col>\n\n			<ion-col class="margin-auto">\n\n				Quitter ce clan\n\n			</ion-col>\n\n		</ion-row>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\clan\clanprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Clan */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */]])
    ], ClanProfilePage);
    return ClanProfilePage;
}());

//# sourceMappingURL=clanprofile.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PreviewPage = /** @class */ (function () {
    function PreviewPage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, photoViewer, tutoriel) {
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
        this.tutoriel = tutoriel;
        this.img = this.navParams.get("img");
    }
    PreviewPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    PreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-preview',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\preview\preview.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title><span class="color-white">PREVIEW</span></ion-title>\n\n        <div class="close-buttons"  (click)="back()">\n\n            <ion-icon name="close"></ion-icon>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n    <div layout vertical>\n\n        <div class="bg-white">\n\n            <div>\n\n                COUCOU\n\n            </div>\n\n            <div>\n\n                <img src="{{ img }}" alt="">\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\preview\preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* Tutoriel */]])
    ], PreviewPage);
    return PreviewPage;
}());

//# sourceMappingURL=preview.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep1Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep1Page, _super);
    function TutorielProfileStep1Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step1.html"*/'<ion-content class="tutoriel-content tutoriel-bottom">\n\n	<p class="title">{{ \'TUTORIAL.1.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.1.TEXT1\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.1.TEXT2\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="next()">\n\n				<button small ion-button>{{ \'BUTTON.NEXT\' | translate }} (1/5)<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step1.html"*/,
        })
    ], TutorielProfileStep1Page);
    return TutorielProfileStep1Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step1.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep2Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep2Page, _super);
    function TutorielProfileStep2Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step2.html"*/'<ion-content class="tutoriel-content tutoriel-bottom">\n\n	<p class="title">{{ \'TUTORIAL.2.TITLE\' | translate }}</p>\n\n	<ul>{{ \'TUTORIAL.2.TEXT1\' | translate }}\n\n		<br/><br/>\n\n		<li><ion-icon name="podium" class="color-yellow"></ion-icon>&nbsp;&nbsp;&nbsp;{{ \'TUTORIAL.2.TEXT2\' | translate }}</li>\n\n		<li><ion-icon name="globe" class="color-yellow"></ion-icon>&nbsp;&nbsp;&nbsp;{{ \'TUTORIAL.2.TEXT3\' | translate }}</li>\n\n		<li><ion-icon name="time" class="color-yellow"></ion-icon>&nbsp;&nbsp;&nbsp;{{ \'TUTORIAL.2.TEXT4\' | translate }}</li>\n\n	</ul>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="next()">\n\n				<button small ion-button>{{ \'BUTTON.NEXT\' | translate }} (2/5)<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step2.html"*/,
        })
    ], TutorielProfileStep2Page);
    return TutorielProfileStep2Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step2.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep3Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep3Page, _super);
    function TutorielProfileStep3Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step3.html"*/'<ion-content class="tutoriel-content tutoriel-big tutoriel-top">\n\n	<p class="title">{{ \'TUTORIAL.3.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.3.TEXT1\' | translate }}</p>\n\n	<p class="text-center"><img src="assets/img/tutoriel/icon_swipe.png" /></p>\n\n	<p class="text-center">ou</p>\n\n	<p class="text-center">\n\n		<button ion-button color="white" class="button-action">\n\n			<ion-icon name="thumbs-down" class="button-dislike" ></ion-icon>\n\n		</button>\n\n		<button ion-button color="white" class="button-action">\n\n			<ion-icon name="thumbs-up" class="button-like"></ion-icon>\n\n		</button>\n\n	</p>\n\n	<p>{{ \'TUTORIAL.3.TEXT2\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="next()">\n\n				<button small ion-button>{{ \'BUTTON.NEXT\' | translate }} (3/5)<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step3.html"*/,
        })
    ], TutorielProfileStep3Page);
    return TutorielProfileStep3Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step3.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep4Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep4Page, _super);
    function TutorielProfileStep4Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step4.html"*/'<ion-content class="tutoriel-content tutoriel-top">\n\n	<p class="title">{{ \'TUTORIAL.4.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.4.TEXT1\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.4.TEXT2\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="next()">\n\n				<button small ion-button>{{ \'BUTTON.NEXT\' | translate }} (4/6)<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step4.html"*/,
        })
    ], TutorielProfileStep4Page);
    return TutorielProfileStep4Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step4.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep5Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep5Page, _super);
    function TutorielProfileStep5Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step5.html"*/'<ion-content class="tutoriel-content tutoriel-bottom">\n\n	<p class="title">{{ \'TUTORIAL.5.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.5.TEXT1\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.5.TEXT2\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="next()">\n\n				<button small ion-button>{{ \'BUTTON.NEXT\' | translate }} (4/5)<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step5.html"*/,
        })
    ], TutorielProfileStep5Page);
    return TutorielProfileStep5Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step5.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep6Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep6Page, _super);
    function TutorielProfileStep6Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step6.html"*/'<ion-content class="tutoriel-content tutoriel-bottom">\n\n	<p class="title">{{ \'TUTORIAL.6.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.6.TEXT1\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="next()">\n\n				<button small ion-button>{{ \'BUTTON.NEXT\' | translate }} (6/6)<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step6.html"*/,
        })
    ], TutorielProfileStep6Page);
    return TutorielProfileStep6Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step6.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep7Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep7Page, _super);
    function TutorielProfileStep7Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step7.html"*/'<ion-content class="tutoriel-content tutoriel-bottom">\n\n	<p class="title">{{ \'TUTORIAL.7.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.7.TEXT1\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="next()">\n\n				<button small ion-button>5/6<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step7.html"*/,
        })
    ], TutorielProfileStep7Page);
    return TutorielProfileStep7Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step7.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep8Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep8Page, _super);
    function TutorielProfileStep8Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step8.html"*/'<ion-content class="tutoriel-content tutoriel-bottom">\n\n	<p class="title">{{ \'TUTORIAL.8.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.8.TEXT1\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.8.TEXT2\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-6 class="pull-left text-left pass">\n\n				<span class="pass-text" (click)="quit()">{{ \'BUTTON.SKIP\' | translate }}</span>\n\n			</div>\n\n			<div col-sm-6 class="pull-right text-right" (click)="close()">\n\n				<button small ion-button>{{ \'BUTTON.FINISH\' | translate }} (5/5)</button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step8.html"*/,
        })
    ], TutorielProfileStep8Page);
    return TutorielProfileStep8Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step8.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielProfileStep9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutoriel_base__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TutorielProfileStep9Page = /** @class */ (function (_super) {
    __extends(TutorielProfileStep9Page, _super);
    function TutorielProfileStep9Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorielProfileStep9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutoriel',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step9.html"*/'<ion-content class="tutoriel-overlay" (click)="end()">\n\n</ion-content>\n\n<ion-content class="tutoriel-content tutoriel-bottom">\n\n	<p class="title">{{ \'TUTORIAL.9.TITLE\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.9.TEXT1\' | translate }}</p>\n\n	<p>{{ \'TUTORIAL.9.TEXT2\' | translate }}</p>\n\n	<div class="step-level">\n\n			<div col-sm-12 class="pull-right text-right" (click)="end()">\n\n				<button small ion-button>{{ \'BUTTON.QUITTER\' | translate }}<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\tutoriel\tutoriel-profile-step9.html"*/,
        })
    ], TutorielProfileStep9Page);
    return TutorielProfileStep9Page;
}(__WEBPACK_IMPORTED_MODULE_1__tutoriel_base__["a" /* TutorielBase */]));

//# sourceMappingURL=tutoriel-profile-step9.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanProfilePageModule", function() { return ClanProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clanprofile__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClanProfilePageModule = /** @class */ (function () {
    function ClanProfilePageModule() {
    }
    ClanProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clanprofile__["a" /* ClanProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clanprofile__["a" /* ClanProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["SwingModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__clanprofile__["a" /* ClanProfilePage */]
            ]
        })
    ], ClanProfilePageModule);
    return ClanProfilePageModule;
}());

//# sourceMappingURL=clanprofile.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanPageModule", function() { return ClanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clan__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ClanPageModule = /** @class */ (function () {
    function ClanPageModule() {
    }
    ClanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clan__["a" /* ClanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clan__["a" /* ClanPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__clan__["a" /* ClanPage */]
            ]
        })
    ], ClanPageModule);
    return ClanPageModule;
}());

//# sourceMappingURL=clan.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep2PageModule", function() { return FirstStep2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep2__ = __webpack_require__(108);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStepFbPageModule", function() { return FirstStepFbPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStepFb__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstStepFbPageModule = /** @class */ (function () {
    function FirstStepFbPageModule() {
    }
    FirstStepFbPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firstStepFb__["a" /* FirstStepFbPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firstStepFb__["a" /* FirstStepFbPage */]),
            ],
        })
    ], FirstStepFbPageModule);
    return FirstStepFbPageModule;
}());

//# sourceMappingURL=firstStepFb.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], LoadingPageModule);
    return LoadingPageModule;
}());

//# sourceMappingURL=loading.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPageModule", function() { return LogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], LogPageModule);
    return LogPageModule;
}());

//# sourceMappingURL=log.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStep1PageModule", function() { return FirstStep1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep1__ = __webpack_require__(87);
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoperProfilePageModule", function() { return PoperProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poperprofile__ = __webpack_require__(71);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPageModule", function() { return PreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviewPageModule = /** @class */ (function () {
    function PreviewPageModule() {
    }
    PreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preview__["a" /* PreviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preview__["a" /* PreviewPage */]),
            ],
        })
    ], PreviewPageModule);
    return PreviewPageModule;
}());

//# sourceMappingURL=preview.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverRankPageModule", function() { return PopoverRankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_rank__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverRankPageModule = /** @class */ (function () {
    function PopoverRankPageModule() {
    }
    PopoverRankPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover_rank__["a" /* PopoverRankPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_rank__["a" /* PopoverRankPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__popover_rank__["a" /* PopoverRankPage */],
            ]
        })
    ], PopoverRankPageModule);
    return PopoverRankPageModule;
}());

//# sourceMappingURL=popover-rank.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginClassicPageModule", function() { return LoginClassicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginClassic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], LoginClassicPageModule);
    return LoginClassicPageModule;
}());

//# sourceMappingURL=loginClassic.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTimePageModule", function() { return PopoverTimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_time__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverTimePageModule = /** @class */ (function () {
    function PopoverTimePageModule() {
    }
    PopoverTimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover_time__["a" /* PopoverTimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_time__["a" /* PopoverTimePage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__popover_time__["a" /* PopoverTimePage */],
            ]
        })
    ], PopoverTimePageModule);
    return PopoverTimePageModule;
}());

//# sourceMappingURL=popover-time.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankpopoverPageModule", function() { return RankpopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rankpopover__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RankpopoverPageModule = /** @class */ (function () {
    function RankpopoverPageModule() {
    }
    RankpopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rankpopover__["a" /* RankpopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rankpopover__["a" /* RankpopoverPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__rankpopover__["a" /* RankpopoverPage */],
            ]
        })
    ], RankpopoverPageModule);
    return RankpopoverPageModule;
}());

//# sourceMappingURL=rankpopover.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeRankPageModule", function() { return RelativeRankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relativeRank__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], RelativeRankPageModule);
    return RelativeRankPageModule;
}());

//# sourceMappingURL=relativeRank.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverScorePageModule", function() { return PopoverScorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_score__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverScorePageModule = /** @class */ (function () {
    function PopoverScorePageModule() {
    }
    PopoverScorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover_score__["a" /* PopoverScorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_score__["a" /* PopoverScorePage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__popover_score__["a" /* PopoverScorePage */],
            ]
        })
    ], PopoverScorePageModule);
    return PopoverScorePageModule;
}());

//# sourceMappingURL=popover-score.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep1PageModule", function() { return TutorielProfileStep1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step1__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep1PageModule = /** @class */ (function () {
    function TutorielProfileStep1PageModule() {
    }
    TutorielProfileStep1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step1__["a" /* TutorielProfileStep1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step1__["a" /* TutorielProfileStep1Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step1__["a" /* TutorielProfileStep1Page */],
            ]
        })
    ], TutorielProfileStep1PageModule);
    return TutorielProfileStep1PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step1.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep2PageModule", function() { return TutorielProfileStep2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step2__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep2PageModule = /** @class */ (function () {
    function TutorielProfileStep2PageModule() {
    }
    TutorielProfileStep2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step2__["a" /* TutorielProfileStep2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step2__["a" /* TutorielProfileStep2Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step2__["a" /* TutorielProfileStep2Page */],
            ]
        })
    ], TutorielProfileStep2PageModule);
    return TutorielProfileStep2PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step2.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep3PageModule", function() { return TutorielProfileStep3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step3__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep3PageModule = /** @class */ (function () {
    function TutorielProfileStep3PageModule() {
    }
    TutorielProfileStep3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step3__["a" /* TutorielProfileStep3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step3__["a" /* TutorielProfileStep3Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step3__["a" /* TutorielProfileStep3Page */],
            ]
        })
    ], TutorielProfileStep3PageModule);
    return TutorielProfileStep3PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step3.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep4PageModule", function() { return TutorielProfileStep4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step4__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep4PageModule = /** @class */ (function () {
    function TutorielProfileStep4PageModule() {
    }
    TutorielProfileStep4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step4__["a" /* TutorielProfileStep4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step4__["a" /* TutorielProfileStep4Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step4__["a" /* TutorielProfileStep4Page */],
            ]
        })
    ], TutorielProfileStep4PageModule);
    return TutorielProfileStep4PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step4.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep5PageModule", function() { return TutorielProfileStep5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step5__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep5PageModule = /** @class */ (function () {
    function TutorielProfileStep5PageModule() {
    }
    TutorielProfileStep5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step5__["a" /* TutorielProfileStep5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step5__["a" /* TutorielProfileStep5Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step5__["a" /* TutorielProfileStep5Page */],
            ]
        })
    ], TutorielProfileStep5PageModule);
    return TutorielProfileStep5PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step5.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendPageModule", function() { return TrendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trend__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
        })
    ], TrendPageModule);
    return TrendPageModule;
}());

//# sourceMappingURL=trend.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep7PageModule", function() { return TutorielProfileStep7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step7__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep7PageModule = /** @class */ (function () {
    function TutorielProfileStep7PageModule() {
    }
    TutorielProfileStep7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step7__["a" /* TutorielProfileStep7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step7__["a" /* TutorielProfileStep7Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step7__["a" /* TutorielProfileStep7Page */],
            ]
        })
    ], TutorielProfileStep7PageModule);
    return TutorielProfileStep7PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step7.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep8PageModule", function() { return TutorielProfileStep8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step8__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep8PageModule = /** @class */ (function () {
    function TutorielProfileStep8PageModule() {
    }
    TutorielProfileStep8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step8__["a" /* TutorielProfileStep8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step8__["a" /* TutorielProfileStep8Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step8__["a" /* TutorielProfileStep8Page */],
            ]
        })
    ], TutorielProfileStep8PageModule);
    return TutorielProfileStep8PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step8.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep6PageModule", function() { return TutorielProfileStep6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step6__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep6PageModule = /** @class */ (function () {
    function TutorielProfileStep6PageModule() {
    }
    TutorielProfileStep6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step6__["a" /* TutorielProfileStep6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step6__["a" /* TutorielProfileStep6Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step6__["a" /* TutorielProfileStep6Page */],
            ]
        })
    ], TutorielProfileStep6PageModule);
    return TutorielProfileStep6PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step6.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorielProfileStep9PageModule", function() { return TutorielProfileStep9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step9__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorielProfileStep9PageModule = /** @class */ (function () {
    function TutorielProfileStep9PageModule() {
    }
    TutorielProfileStep9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step9__["a" /* TutorielProfileStep9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step9__["a" /* TutorielProfileStep9Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tutoriel_profile_step9__["a" /* TutorielProfileStep9Page */],
            ]
        })
    ], TutorielProfileStep9PageModule);
    return TutorielProfileStep9PageModule;
}());

//# sourceMappingURL=tutoriel-profile-step9.module.js.map

/***/ }),

/***/ 37:
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
        TUTORIEL: 'tutoriel',
        POPS: 'pops',
        TRENDS: 'trends',
        DEFAULT_RANKING: 'defaultRanking'
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firstStep_firstStep1__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firstStep_firstStep2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep_firstStepFb__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_log__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_loginClassic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_play__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__poperprofile_poperprofile__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_popover_score__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_popover_rank__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_popover_time__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings_settings__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trend_trend__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rank_relativeRank__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__clan_clan__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__clan_clanEdit__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__autoComplete_autoComplete__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__preview_preview__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tutoriel_tutoriel_profile_step1__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tutoriel_tutoriel_profile_step2__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tutoriel_tutoriel_profile_step3__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tutoriel_tutoriel_profile_step4__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tutoriel_tutoriel_profile_step5__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tutoriel_tutoriel_profile_step6__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tutoriel_tutoriel_profile_step7__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tutoriel_tutoriel_profile_step8__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tutoriel_tutoriel_profile_step9__ = __webpack_require__(332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__firstStep_firstStep1__["a"]; });
/* unused harmony reexport FirstStep2Page */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__firstStep_firstStepFb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__loading_loading__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__log_log__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__login_login__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__login_loginClassic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__play_play__["a"]; });
/* unused harmony reexport PoperProfilePage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_9__profile_profile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__profile_popover_score__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__profile_popover_rank__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_12__profile_popover_time__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__register_register__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_14__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_15__trend_trend__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_16__rank_relativeRank__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_17__clan_clan__["a"]; });
/* unused harmony reexport ClanEditPage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_19__autoComplete_autoComplete__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_20__preview_preview__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_21__tutoriel_tutoriel_profile_step1__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_22__tutoriel_tutoriel_profile_step2__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_23__tutoriel_tutoriel_profile_step3__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_24__tutoriel_tutoriel_profile_step4__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_25__tutoriel_tutoriel_profile_step5__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_26__tutoriel_tutoriel_profile_step6__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_27__tutoriel_tutoriel_profile_step7__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_28__tutoriel_tutoriel_profile_step8__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_29__tutoriel_tutoriel_profile_step9__["a"]; });






























// Pages

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(530);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firstStep_firstStep1__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(13);
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
    function LoginPage(navCtrl, app, api, storage, loadingCtrl, alertCtrl, fb, storageProvider, modalCtrl, translate) {
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
        this.translate = translate;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        this.isLoggedIn = false;
        var tutorialMessage1 = '';
        var tutorialMessage2 = '';
        var tutorialMessage3 = '';
        this.translate.get('PAGE.LOGIN.TUTORIAL1').subscribe(function (value) { tutorialMessage1 = value; });
        this.translate.get('PAGE.LOGIN.TUTORIAL2').subscribe(function (value) { tutorialMessage2 = value; });
        this.translate.get('PAGE.LOGIN.TUTORIAL3').subscribe(function (value) { tutorialMessage3 = value; });
        this.introSlides = [
            {
                title: '<br/>',
                image: 'assets/img/intro/intro_1.png'
            },
            {
                title: tutorialMessage1,
                image: 'assets/img/intro/intro_2.png'
            },
            {
                title: tutorialMessage2,
                image: 'assets/img/intro/intro_3.png'
            },
            {
                title: tutorialMessage3,
                image: 'assets/img/intro/intro_4.png'
            }
        ];
        this.loaded = false;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED).then(function (val) {
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
    LoginPage.prototype.goTo2 = function (page) {
        this.navCtrl.push(page);
    };
    LoginPage.prototype.pushRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["o" /* RegisterPage */], {}, {
            direction: 'forward'
        });
    };
    LoginPage.prototype.prepareModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["g" /* LoginClassicPage */], {}, {
            direction: 'forward'
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
            if (body.error) {
                if (body.message.key == 'AUTHENTICATION_USER_NOT_ENABLED') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__firstStep_firstStep1__["a" /* FirstStep1Page */]);
                }
                else {
                    _this.showAlertBadAccount(body.message.text);
                }
            }
            else {
                _this.storage.set('isConnected', true);
                _this.storage.set('user', body.id);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["e" /* LoadingPage */]);
            }
        }, function (err) {
            var badAccount = '';
            _this.translate.get('PAGE.LOGIN.BAD_ACCOUNT').subscribe(function (value) { badAccount = value; });
            _this.showAlertBadAccount(badAccount);
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
        var data;
        data = {};
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                data.id = res.authResponse.userID;
                data.facebookId = res.authResponse.userID;
                //data.user = this.user;
                data.password = 'facebook';
                data.access_token = res.authResponse.accessToken;
                // Get user infos from the API
                _this.fb.api("/me?fields=name,email,birthday", []).then(function (userFB) {
                    // Get the connected user details
                    data.usualName = userFB.name.split(' ').join('');
                    data.email = userFB.email;
                    data.gender = null;
                    data.birthday = userFB.birthday;
                    _this.api.post('connectFacebookUser', data)
                        .subscribe(function (data) {
                        var body;
                        body = JSON.parse(data.text());
                        if (body.error) {
                            _this.showAlertBadAccount(body.message.text);
                        }
                        else {
                            //alert(body);
                            // On redirige l'utilisateur vers sa page si il est authentifié
                            _this.storage.set('isConnected', true);
                            _this.storage.set('user', body.id);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["e" /* LoadingPage */]);
                        }
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
            .catch(function (e) { console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.checkLoginFb = function () {
        var _this = this;
        this.fb.getLoginStatus()
            .then(function (res) {
            if (res.status === "connect") {
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Slides */])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\login\login.html"*/'<ion-content padding class="bg-popme">\n\n  <div layout vertical center>\n\n    <ion-slides #slides pager flex>\n\n      <ion-slide *ngFor="let slide of introSlides">\n\n        <h3 class="font-thin" [innerHTML]="slide.title"></h3>\n\n        <img [src]="slide.image">\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <div class="text-center mt5">\n\n      <div>\n\n        <button ion-button round class="btn-tinder-login m-b-sm upper" (click)="loginFB()">{{ \'PAGE.LOGIN.CONNEXION_FACEBOOK\' | translate }}</button>\n\n      </div>\n\n      <div>\n\n        <button ion-button round color="muted" outline class="upper" (click)="prepareModal()">{{ \'PAGE.LOGIN.CONNEXION_CLASSIQUE\' | translate }}</button>\n\n      </div>\n\n      <div class="button-blank">\n\n        <button small outline class="upper" (click)="pushRegister()">{{ \'PAGE.LOGIN.REGISTER\' | translate }}</button>\n\n      </div>\n\n      <div class="popme-version">\n\n        {{ \'APP.VERSION\' | translate }}\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorielBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
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




var TutorielBase = /** @class */ (function () {
    function TutorielBase(viewCtrl, alertCtrl, tutoriel, storage) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.tutoriel = tutoriel;
        this.storage = storage;
    }
    TutorielBase.prototype.next = function () {
        this.tutoriel.nextStep({});
    };
    TutorielBase.prototype.quit = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Quitter le tutoriel',
            message: 'Souhaites-tu vraiment quitter le tutoriel ?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.end();
                    }
                }
            ]
        });
        confirm.present();
    };
    TutorielBase.prototype.end = function () {
        this.storage.set('launchTutoriel', false);
        this.viewCtrl.dismiss();
        this.tutoriel.quitTutoriel();
    };
    TutorielBase.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TutorielBase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({}),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* Tutoriel */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], TutorielBase);
    return TutorielBase;
}());

//# sourceMappingURL=tutoriel.base.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modules__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_viewer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_screenshot__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_analytics__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_deeplinks__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_crop__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_11__providers_providers__["f" /* Settings */](storage, {
        nbLaunch: 0
    });
}
var firebase = {
    apiKey: "AIzaSyBvmy2HlSyCPiQP-lEeoUwc87Uhz1dUqME",
    authDomain: "popme-1539891578740.firebaseapp.com",
    databaseURL: "https://popme-1539891578740.firebaseio.com",
    projectId: "popme-1539891578740",
    storageBucket: "popme-1539891578740.appspot.com",
    messagingSenderId: "607517360971"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/autoComplete/autoComplete.module#AutoCompletePageModule', name: 'AutoCompletePage', segment: 'autoComplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clan/clanEdit.module#ClanEditPageModule', name: 'ClanEditPage', segment: 'clanEdit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clan/clanprofile.module#ClanProfilePageModule', name: 'ClanProfilePage', segment: 'clanprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clan/clan.module#ClanPageModule', name: 'ClanPage', segment: 'clan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstStep/firstStep2.module#FirstStep2PageModule', name: 'FirstStep2Page', segment: 'firstStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstStep/firstStepFb.module#FirstStepFbPageModule', name: 'FirstStepFbPage', segment: 'firstStepFb', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log/log.module#LogPageModule', name: 'LogPage', segment: 'log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstStep/firstStep1.module#FirstStep1PageModule', name: 'FirstStep1Page', segment: 'firstStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/poperprofile/poperprofile.module#PoperProfilePageModule', name: 'PoperProfilePage', segment: 'poperprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview/preview.module#PreviewPageModule', name: 'PreviewPage', segment: 'preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/popover-rank.module#PopoverRankPageModule', name: 'PopoverRankPage', segment: 'popover-rank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/loginClassic.module#LoginClassicPageModule', name: 'LoginClassicPage', segment: 'loginClassic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play/play.module#PlayPageModule', name: 'PlayPage', segment: 'play', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/popover-time.module#PopoverTimePageModule', name: 'PopoverTimePage', segment: 'popover-time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rank/rankpopover.module#RankpopoverPageModule', name: 'RankpopoverPage', segment: 'rankpopover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rank/relativeRank.module#RelativeRankPageModule', name: 'RelativeRankPage', segment: 'relativeRank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/popover-score.module#PopoverScorePageModule', name: 'PopoverScorePage', segment: 'popover-score', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step1.module#TutorielProfileStep1PageModule', name: 'TutorielProfileStep1Page', segment: 'tutoriel-profile-step1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step2.module#TutorielProfileStep2PageModule', name: 'TutorielProfileStep2Page', segment: 'tutoriel-profile-step2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step3.module#TutorielProfileStep3PageModule', name: 'TutorielProfileStep3Page', segment: 'tutoriel-profile-step3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step4.module#TutorielProfileStep4PageModule', name: 'TutorielProfileStep4Page', segment: 'tutoriel-profile-step4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step5.module#TutorielProfileStep5PageModule', name: 'TutorielProfileStep5Page', segment: 'tutoriel-profile-step5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trend/trend.module#TrendPageModule', name: 'TrendPage', segment: 'trend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step7.module#TutorielProfileStep7PageModule', name: 'TutorielProfileStep7Page', segment: 'tutoriel-profile-step7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step8.module#TutorielProfileStep8PageModule', name: 'TutorielProfileStep8Page', segment: 'tutoriel-profile-step8', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step6.module#TutorielProfileStep6PageModule', name: 'TutorielProfileStep6Page', segment: 'tutoriel-profile-step6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoriel/tutoriel-profile-step9.module#TutorielProfileStep9PageModule', name: 'TutorielProfileStep9Page', segment: 'tutoriel-profile-step9', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__popmedb'
                    //driverOrder: ['localstorage' ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2__["AngularFireModule"].initializeApp(firebase),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["l" /* PlayPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["r" /* ProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["e" /* FirstStep1PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["f" /* FirstStep2PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["g" /* FirstStepFbPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["k" /* LoginPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["j" /* LoginClassicPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["i" /* LogPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["h" /* LoadingPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["m" /* PoperProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["o" /* PopoverScorePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["n" /* PopoverRankPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["p" /* PopoverTimePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["u" /* RelativeRankPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["a" /* AutoCompletePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["s" /* RankpopoverPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["c" /* ClanPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["d" /* ClanProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["b" /* ClanEditPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["q" /* PreviewPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["t" /* RegisterPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["v" /* SettingsPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["w" /* TrendPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["x" /* TutorielProfileStep1PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["y" /* TutorielProfileStep2PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["z" /* TutorielProfileStep3PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["A" /* TutorielProfileStep4PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["B" /* TutorielProfileStep5PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["C" /* TutorielProfileStep6PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["D" /* TutorielProfileStep7PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["E" /* TutorielProfileStep8PageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules__["F" /* TutorielProfileStep9PageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["g" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["d" /* GameProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_providers__["f" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["j" /* Users */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["b" /* Clan */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["e" /* Rank */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["i" /* Tutoriel */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["h" /* Translate */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Fcm */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(286);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], Pub);
    return Pub;
}());

//# sourceMappingURL=pub.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(37);
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

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__ = __webpack_require__(169);
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

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users__ = __webpack_require__(105);
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
    function GameProvider(api, storage, userProvider) {
        this.api = api;
        this.storage = storage;
        this.userProvider = userProvider;
        this.cardsPlayed = [];
        this.cards = [];
    }
    GameProvider.prototype.loadPopies = function (count) {
        this.addPopies(count, this.userProvider.getId());
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
        this.api.post('getGamePopies/' + userId + '/' + count, popies)
            .subscribe(function (popies) {
            var body;
            body = JSON.parse(popies.text());
            for (var popy in body) {
                var image = new Image();
                image.src = body[popy]['image'];
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
        if (this.cards.length < 10) {
            this.addPopies(10, this.userProvider.getId());
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__users_users__["a" /* Users */]])
    ], GameProvider);
    return GameProvider;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_storage__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Clan = /** @class */ (function () {
    function Clan(api, storage, storageProvider) {
        this.api = api;
        this.storage = storage;
        this.storageProvider = storageProvider;
    }
    Clan.prototype.setName = function (name) {
        this.name = name;
    };
    Clan.prototype.getId = function () {
        return this.id;
    };
    Clan.prototype.setId = function (id) {
        this.id = id;
    };
    Clan.prototype.setImage = function (imageBase64) {
        this.image = imageBase64;
        this.imageUrl = 'url(' + imageBase64 + ')';
    };
    Clan.prototype.getImage = function () {
        return this.image;
    };
    Clan.prototype.getImageUrl = function () {
        return this.imageUrl;
    };
    Clan.prototype.setDescription = function (description) {
        this.description = description;
    };
    Clan.prototype.getCurrentClan = function () {
        return this;
    };
    Clan.prototype.setCurrentClan = function (clan) {
        this.name = clan.name;
        this.userClans = clan.userClans;
        this.id = clan.id;
        this.description = clan.description;
        this.image = clan.image;
        this.createdAt = clan.createdAt;
        this.passCode = clan.passCode;
    };
    Clan = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__storage_storage__["a" /* StorageProvider */]])
    ], Clan);
    return Clan;
}());

//# sourceMappingURL=clan.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Rank = /** @class */ (function () {
    function Rank(api, storage, storageProvider, userProvider) {
        this.api = api;
        this.storage = storage;
        this.storageProvider = storageProvider;
        this.userProvider = userProvider;
    }
    Rank.prototype.getNumber = function () {
        return this.number;
    };
    Rank.prototype.setNumber = function (number) {
        this.number = number;
    };
    Rank.prototype.getText = function () {
        return this.text;
    };
    Rank.prototype.setText = function (text) {
        this.text = text;
    };
    Rank.prototype.setRank = function (rank) {
        this.rank = rank;
    };
    Rank.prototype.getRank = function () {
        return this.rank;
    };
    Rank.prototype.setImage = function (image) {
        this.image = image;
    };
    Rank.prototype.getImage = function () {
        return this.image;
    };
    Rank.prototype.getModel = function () {
        return this;
    };
    Rank.prototype.setAllRanks = function (ranks) {
        this.allRanks = ranks;
    };
    Rank.prototype.loadRank = function (user, rank) {
        switch (rank) {
            case 1:
                if (user.rank.world) {
                    console.log('rank world');
                    console.log(this.getRank());
                    this.setRank(user.rank.world);
                    this.setNumber(user.rank.world.number);
                    this.setText(user.rank.world.text);
                    this.setImage("world");
                }
                break;
            case 2:
                this.setRank(user.rank.country);
                this.setNumber(user.rank.country.number);
                this.setText(user.rank.country.text);
                this.setImage("country");
                break;
            case 3:
                this.setRank(user.rank.city);
                this.setNumber(user.rank.city.number);
                this.setText(user.rank.city.text);
                this.setImage("city");
                break;
            default:
                // Recuperation du classement du clan
                console.log(rank);
                console.log(this.allRanks);
                var rankChosen = this.allRanks[rank];
                this.setNumber(rankChosen.number);
                this.setText(rankChosen.text);
                this.setImage(rankChosen.image);
                break;
        }
    };
    Rank.prototype.loadAllRanks = function () {
        var _this = this;
        var data;
        data = {};
        data.userId = this.userProvider.getId();
        this.api.post('ranking/rank/clan', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.allRanks = body;
            console.log(_this.allRanks);
        }, function (err) {
        }, function () {
        });
    };
    Rank = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__users_users__["a" /* Users */]])
    ], Rank);
    return Rank;
}());

//# sourceMappingURL=rank.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tutoriel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Tutoriel = /** @class */ (function () {
    function Tutoriel(api, storage, modalCtrl, app, userProvider) {
        this.api = api;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.userProvider = userProvider;
        this.active = false;
        this.currentStep = 0;
        this.step1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["s" /* TutorielProfileStep1Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step2 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["t" /* TutorielProfileStep2Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step3 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["u" /* TutorielProfileStep3Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step4 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["v" /* TutorielProfileStep4Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step5 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["w" /* TutorielProfileStep5Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step6 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["x" /* TutorielProfileStep6Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step7 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["y" /* TutorielProfileStep7Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step8 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["z" /* TutorielProfileStep8Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
        this.step9 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["A" /* TutorielProfileStep9Page */], {}, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modal-tutoriel' });
    }
    Tutoriel.prototype.isTutoriel = function () {
        return this.active;
    };
    Tutoriel.prototype.setTutoriel = function () {
        this.active = true;
    };
    Tutoriel.prototype.quitTutoriel = function () {
        this.active = false;
    };
    Tutoriel.prototype.getCurrentStep = function () {
        return this.currentStep;
    };
    Tutoriel.prototype.nextStep = function (options) {
        if (options.step !== undefined) {
            this.currentStep = options.step;
        }
        else {
            this.currentStep++;
        }
        console.log('step : ' + this.currentStep);
        switch (this.currentStep) {
            case 1: {
                this.step1.present();
                break;
            }
            case 2: {
                this.step1.dismiss();
                this.step2.present();
                break;
            }
            case 3: {
                this.step2.dismiss();
                this.changePage(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["i" /* PlayPage */]);
                this.step3.present();
                var pop = void 0;
                pop = {};
                this.api.post('forcepop/' + this.userProvider.getId(), pop)
                    .subscribe(function (pop) {
                }, function (err) {
                    console.log(err);
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
                break;
            }
            case 4: {
                this.step3.dismiss();
                this.changePage(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["f" /* LogPage */]);
                this.step5.present();
                break;
            }
            case 5: {
                this.step5.dismiss();
                this.changePage(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["n" /* ProfilePage */]);
                this.step8.present();
                break;
            }
            case 6: {
                this.step9.present();
                break;
            }
            default: {
                break;
            }
        }
    };
    Tutoriel.prototype.changePage = function (page) {
        this.app.getActiveNavs()[0].push(page, {}, {
            direction: 'forward'
        });
    };
    Tutoriel.prototype.passTuto = function () {
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.TUTORIEL);
    };
    Tutoriel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__users_users__["a" /* Users */]])
    ], Tutoriel);
    return Tutoriel;
}());

//# sourceMappingURL=tutoriel.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_screenshot__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_crop__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_base64__ = __webpack_require__(296);
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
    function ProfilePage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, globalization, popoverCtrl, socialSharing, photoViewer, platform, screenshot, userProvider, rankProvider, modalCtrl, tutoriel, translate, crop, base64) {
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
        this.userProvider = userProvider;
        this.rankProvider = rankProvider;
        this.modalCtrl = modalCtrl;
        this.tutoriel = tutoriel;
        this.translate = translate;
        this.crop = crop;
        this.base64 = base64;
        this.user = {};
        this.rank = {};
        this.hidevalue = true;
        this.storage.get('isConnected').then(function (val) {
            if (!val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["h" /* LoginPage */]);
            }
        });
        this.user = this.userProvider.getUser();
        this.storage.get(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.FROM_LOADING).then(function (fromLoading) {
            if (fromLoading) {
                var loading = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: 'Chargement...',
                    dismissOnPageChange: true
                });
                loading.present();
                _this.storage.get('defaultRanking').then(function (rank) {
                    if (rank) {
                        _this.rankProvider.loadRank(_this.user, rank);
                    }
                    else {
                        _this.rankProvider.loadRank(_this.user, 1);
                    }
                });
                _this.rank = _this.rankProvider.getModel();
                console.log(_this.rank);
                loading.dismiss();
                _this.storage.remove('fromLoading');
                _this.storage.get('configurations').then(function (configurations) {
                    switch (_this.user.getNbTotalPopies()) {
                        case 1: {
                            _this.maxTime = +configurations['BLOCK_ADD_SECOND_POPY_DURATION'].value - _this.userProvider.getTimeWithoutNewPopy();
                            break;
                        }
                        case 2: {
                            _this.maxTime = +configurations['BLOCK_ADD_THIRD_POPY_DURATION'].value - _this.userProvider.getTimeWithoutNewPopy();
                            break;
                        }
                        case 3: {
                            _this.maxTime = +configurations['BLOCK_ADD_FOURTH_POPY_DURATION'].value - _this.userProvider.getTimeWithoutNewPopy();
                            break;
                        }
                        default: {
                            _this.maxTime = +configurations['BLOCK_ADD_POPY_DURATION'].value - _this.userProvider.getTimeWithoutNewPopy();
                            break;
                        }
                    }
                    _this.hidevalue = false;
                    _this.remainingTime = _this.determineTimeText();
                    _this.startTimer();
                });
                //this.storage.set('launchTutoriel', true);
                _this.storage.get('launchTutoriel').then(function (val) {
                    if (val) {
                        _this.tutoriel.setTutoriel();
                        if (tutoriel.getCurrentStep() == 0) {
                            tutoriel.nextStep({});
                        }
                        _this.storage.set('launchTutoriel', false);
                    }
                });
            }
            else {
                _this.storage.get('firstLaunchProfile').then(function (val) {
                    _this.storage.remove('firstLaunchProfile');
                    _this.loadUserInfo(_this.userProvider.getId(), val);
                });
            }
        });
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        this.rank = this.rankProvider.getModel();
    };
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
    ProfilePage.prototype.loadUserInfo = function (idUser, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.storage.get('user').then(function (userStorage) {
            if (userStorage && !force) {
                _this.user = _this.userProvider.getUser();
                _this.storage.get('defaultRanking').then(function (rank) {
                    if (rank) {
                        _this.rankProvider.loadRank(_this.user, rank);
                    }
                    else {
                        _this.rankProvider.loadRank(_this.user, 1);
                    }
                });
                _this.rank = _this.rankProvider.getModel();
            }
            else {
                var loading = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: 'Chargement de données ...',
                    dismissOnPageChange: true
                });
                loading.present();
                var data = void 0;
                data = {};
                _this.api.post('getUser/' + idUser, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    _this.userProvider.setUser(body);
                    _this.user = _this.userProvider.getUser();
                    _this.storage.get('defaultRanking').then(function (rank) {
                        if (rank) {
                            _this.rankProvider.loadRank(_this.user, rank);
                        }
                        else {
                            _this.rankProvider.loadRank(_this.user, 1);
                        }
                    });
                    _this.storage.get('configurations').then(function (configurations) {
                        _this.maxTime = +configurations['BLOCK_ADD_POPY_DURATION'].value - _this.userProvider.getTimeWithoutNewPopy();
                        if (_this.maxTime > 0) {
                            _this.hidevalue = false;
                            _this.remainingTime = _this.determineTimeText();
                        }
                        _this.startTimer();
                    });
                }, function (err) {
                    _this.storage.remove('user');
                    _this.storage.remove('isConnected');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["h" /* LoginPage */]);
                }, function () {
                    //this.goToHome();
                });
                loading.dismiss();
            }
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
    ProfilePage.prototype.isClasse = function () {
        if (this.rank !== undefined) {
            return this.rankProvider.getNumber() !== undefined;
        }
        return false;
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
        clearTimeout(this.timerNextPopy);
        this.loadUserInfo(this.userProvider.getId(), true);
        if (this.tutoriel.isTutoriel() && this.tutoriel.getCurrentStep() == 8) {
            this.tutoriel.nextStep({});
        }
        event.complete();
    };
    ProfilePage.prototype.openPhotoPicker = function (index) {
        var _this = this;
        if (this.user.popies[index].image) {
            this.doAlert('Votre stock de popies est atteint (4/4)');
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Modifier votre album',
                buttons: [
                    {
                        text: 'Choisir une photo',
                        handler: function () {
                            var options = {
                                sourceType: 0,
                                quality: 50,
                                destinationType: _this.camera.DestinationType.DATA_URL,
                                encodingType: _this.camera.EncodingType.JPEG,
                                mediaType: _this.camera.MediaType.PICTURE,
                                correctOrientation: true,
                                allowEdit: true
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
                                        _this.loadUserInfo(_this.userProvider.getId(), true);
                                    }
                                }, function (err) {
                                    loading.dismiss();
                                    _this.doAlert(err.message);
                                }, function () {
                                });
                            }, function (err) {
                            });
                        }
                    },
                    {
                        text: 'Prendre une photo',
                        handler: function () {
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
                                        _this.loadUserInfo(_this.userProvider.getId(), true);
                                    }
                                }, function (err) {
                                    loading.dismiss();
                                    _this.doAlert(err.message);
                                }, function () {
                                });
                            }, function (err) {
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
            actionSheet.present();
        }
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
                        _this.user.popies[index].image = "";
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.presentPopoverScore = function (event) {
        console.log(event);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages__["k" /* PopoverScorePage */]);
        popover.present({
            ev: event
        });
    };
    ProfilePage.prototype.presentPopoverRank = function (event) {
        console.log(event);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages__["j" /* PopoverRankPage */]);
        popover.present({
            ev: event
        });
    };
    ProfilePage.prototype.presentPopoverTime = function (event) {
        console.log(event);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages__["l" /* PopoverTimePage */]);
        popover.present({
            ev: event
        });
    };
    ProfilePage.prototype.goTo = function (page, direction) {
        this.navCtrl.setRoot(page, {}, { animate: true, direction: direction });
    };
    ProfilePage.prototype.pushToPlay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["i" /* PlayPage */], {}, { animate: true, direction: 'forward' });
    };
    ProfilePage.prototype.pushToLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["f" /* LogPage */], {}, { animate: true, direction: 'forward' });
    };
    ProfilePage.prototype.pushToTrend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["r" /* TrendPage */], {}, { animate: true, direction: 'forward' });
    };
    ProfilePage.prototype.pushToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["q" /* SettingsPage */], {}, { animate: true, direction: 'forward' });
    };
    ProfilePage.prototype.pushToRelativeRank = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["p" /* RelativeRankPage */], {}, { animate: true, direction: 'forward' });
    };
    ProfilePage.prototype.pushToClan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* ClanPage */], {}, { animate: true, direction: 'forward' });
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
        if (this.user.popies[index].image) {
            this.photoViewer.show(this.user.popies[index].image, 'Popy', { share: true });
        }
    };
    ProfilePage.prototype.shareViaSMS = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Take a screenshot and get temporary file URI
            _this.screenshot.URI(100)
                .then(function (res) {
                var options = {
                    message: 'Regarde mon profil Popme sur ',
                    subject: '',
                    files: [res.URI],
                    url: 'https://popme.app/loading',
                    chooserTitle: 'Partage ton profil' // Android only
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
    ProfilePage.prototype.presentPopoverPreview = function (img) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages__["m" /* PreviewPage */], { img: img });
        profileModal.onDidDismiss(function (coucou) {
        });
        profileModal.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\profile\profile.html"*/'<ion-header>\n\n  <div class="bg-popme" layout horizontal justified>\n\n  	<button ion-button color="danger" clear icon-only>\n\n      <ion-icon name=\'contact\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="pushToPlay()">\n\n      <ion-icon name=\'images\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="pushToLog()">\n\n      <ion-icon name=\'eye\'></ion-icon>\n\n    </button>\n\n    <button ion-button color="muted" clear icon-only (click)="pushToTrend()">\n\n      <ion-icon name=\'apps\'></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n    pullingIcon="arrow-dropdown"\n\n    refreshingSpinner="crescent">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n<div layout vertical class="profile-header">\n\n  <div flex>\n\n    <div class="score" id="profile-header-score" (click)="presentPopoverScore($event)">\n\n      <div class="text-center" id="profile-header-score-div">\n\n        <ion-icon name="podium" class="color-yellow"></ion-icon>\n\n        <span class="text">{{ user.actual_score }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="rank" (click)="presentPopoverRank($event)">\n\n      <div class="text-center">\n\n        <ng-container *ngIf="isClasse()">\n\n          <ng-container *ngIf="rank.image == \'world\'">\n\n            <ion-icon name="globe"></ion-icon>\n\n          </ng-container>\n\n          <ng-container *ngIf="rank.image == \'country\'">\n\n            <ion-icon name="flag"></ion-icon>\n\n          </ng-container>\n\n          <ng-container *ngIf="rank.image == \'city\'">\n\n            <ion-icon name="pin"></ion-icon>\n\n          </ng-container>\n\n          <ng-container *ngIf="rank.image == \'clan\'">\n\n            <img src="./assets/img/clan_default_image.png" class="rounded box-shadow profile-header-rank-img"/>\n\n          </ng-container>\n\n          <ng-container *ngIf="rank.image != \'world\' && rank.image != \'country\' && rank.image != \'city\' && rank.image != \'clan\'">\n\n            <img src="{{rank.image}}" class="rounded box-shadow profile-header-rank-img"/>\n\n          </ng-container>\n\n        </ng-container>\n\n        <span class="text" *ngIf="isClasse()">{{ rank.number }}<sup>{{ rank.text }}</sup></span>\n\n        <span class="text mini" *ngIf="!isClasse()">{{ user.rank }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="next-add" >\n\n      <div class="text-center" *ngIf="!hidevalue" (click)="presentPopoverTime($event)">\n\n        <ion-icon name="time"></ion-icon>\n\n      <ng-container *ngIf="remainingTime != \'0s\'">\n\n        <span class="text">{{ remainingTime }}</span>\n\n      </ng-container>\n\n      </div>\n\n      <div class="text-center" *ngIf="hidevalue" (click)="openPhotoPicker(3)">\n\n        <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n        <span class="text">{{ \'BUTTON.ADD\' | translate }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div layout vertical>\n\n  <div class="bg-white">\n\n    <div>\n\n      <div class="profile-picture">\n\n        <div class="text-center">\n\n          <div class="big-thumb float-left">\n\n            <img [src]="user.account_image" class="rounded box-shadow" alt="" *ngIf="user.account_image != null">\n\n          </div>\n\n        </div>\n\n      </div>\n\n      \n\n      <div class="profile-info">\n\n        <div class="text-center">\n\n          <div class="text-2x">{{ user.usual_name }}</div>\n\n          <div class="">{{ user.description }}</div>\n\n          <div class="mt5">\n\n              <button ion-button round color="muted" small outline (click)="pushToSettings()"><ion-icon name="settings"></ion-icon>&nbsp;{{ \'PAGE.PROFILE.EDIT_INFOS\' | translate }}</button>\n\n          </div>\n\n          </div>\n\n      </div>\n\n    </div>\n\n    <div class="profile-actions">\n\n      <ion-row>\n\n        <ion-col col-4 (click)="shareViaSMS()">\n\n         <ion-icon class="color-yellow" name="md-share"></ion-icon>\n\n       </ion-col>\n\n       <ion-col col-4 (click)="pushToRelativeRank()">\n\n        <ion-icon class="color-yellow" name="podium" ></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-4 (click)="pushToClan()">\n\n        <ion-icon class="color-yellow" name="people"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</div>\n\n</div>\n\n\n\n<div class="profile-images-edit">\n\n  <div class="profile-image" *ngFor="let image of user.popies; let i = index">\n\n    <ng-container *ngIf="user.popies[i].image != \'\'">\n\n    <div class="popy-label" *ngIf="user.popies[i].image != \'\'">{{user.popies[i].pop_count}}</div>\n\n    <div [style.backgroundImage]="\'url(\' + user.popies[i].image + \')\'" class="div-img img-square r-3x" (click)="viewImg(i)"></div>\n\n    <button ion-button icon-only clear class="btn-edit" (click)="removeImage(i)" *ngIf="user.popies[i].image != \'\'">\n\n      <ion-icon name="md-close" color="danger"></ion-icon>\n\n    </button></ng-container>\n\n    <ng-container *ngIf="user.popies[i].image == \'\'">\n\n      <div class="div-img img-square r-3x"></div>\n\n    <button ion-button icon-only clear class="btn-edit" *ngIf="maxTime <= 0 && user.popies[i].image == \'\'" (click)="openPhotoPicker(i)">\n\n      <ion-icon name="md-add-circle" color="danger"></ion-icon>\n\n    </button>\n\n    </ng-container>\n\n  </div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* Rank */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* Tutoriel */],
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_base64__["a" /* Base64 */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoperProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(88);
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
    function PoperProfilePage(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, photoViewer, tutoriel) {
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
        this.tutoriel = tutoriel;
        this.userProfile = {};
        this.userRank = {};
        this.popies = [];
        this.userProfile = this.navParams.get("userProfile");
        this.userRank = this.userProfile.rank;
    }
    PoperProfilePage.prototype.back = function () {
        this.viewCtrl.dismiss(this.popies);
        if (this.tutoriel.isTutoriel()) {
            this.tutoriel.nextStep({ step: 7 });
        }
    };
    PoperProfilePage.prototype.closeModal = function () {
    };
    PoperProfilePage.prototype.like = function (index) {
        var _this = this;
        if (!this.userProfile.popies[index].popped) {
            this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER).then(function (userId) {
                var pop;
                pop = {};
                _this.api.post('pop/' + userId + '/' + _this.userProfile.popies[index].id, pop)
                    .subscribe(function (pop) {
                    _this.userProfile.popies[index].popped = true;
                    _this.popies.push(_this.userProfile.popies[index].id);
                }, function (err) {
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
            });
        }
    };
    PoperProfilePage.prototype.viewImg = function (index) {
        if (this.userProfile.popies[index].image) {
            this.photoViewer.show(this.userProfile.popies[index].image);
        }
    };
    PoperProfilePage.prototype.dislike = function (index) {
        var _this = this;
        if (!this.userProfile.popies[index].popped) {
            this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.USER).then(function (userId) {
                var pop;
                pop = {};
                _this.api.post('unpop/' + userId + '/' + _this.userProfile.popies[index].id, pop)
                    .subscribe(function (pop) {
                    console.log("unpop réalisé");
                    _this.userProfile.popies[index].popped = true;
                    _this.popies.push(_this.userProfile.popies[index].id);
                }, function (err) {
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }, function () {
                    //this.goToHome();
                });
            });
        }
    };
    PoperProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-poperprofile',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\poperprofile\poperprofile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title><span class="color-white">{{ userProfile.usual_name }}</span></ion-title>\n\n        <div class="close-buttons"  (click)="back()">\n\n            <ion-icon name="close"></ion-icon>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n    <div layout vertical>\n\n        <div class="bg-white">\n\n            <div>\n\n                <div class="profile-picture">\n\n                    <div class="text-center">\n\n                        <div class="big-thumb float-left">\n\n                            <img [src]="userProfile.account_image" class="rounded box-shadow" alt="" *ngIf="userProfile.account_image != null">\n\n                            <img src="./assets/img/user_default_image.png" class="rounded box-shadow" alt="" *ngIf="userProfile.account_image == null">\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="profile-info">\n\n                    <div class="text-center">\n\n                        <div>\n\n                            <div class="text-2x">{{ userProfile.usual_name }}</div>\n\n                            <div class="">{{ userProfile.description }}</div>\n\n                        </div>\n\n                        <div layout vertical>\n\n                            <div flex class="ranking">\n\n                                <div class="wrapper">\n\n                                    <img src="./assets/img/logo.png">\n\n                                    <ng-container *ngIf="userRank.world !== undefined">\n\n                                        <span class="ranking-number">{{ userRank.world.number }}</span><span class="ranking-text"><sup>{{ userRank.world.text }}</sup></span>\n\n                                    </ng-container>\n\n                                    <ng-container *ngIf="userRank.world === undefined">\n\n                                        <span class="ranking-number non-classe">Non classé</span>\n\n                                    </ng-container>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="profile-images-edit">\n\n        <div class="profile-image" *ngFor="let image of userProfile.popies; let i = index">\n\n            <div [style.display]="userProfile.popies[i].popped ? \'block\' : \'none\'" class="stamp" color="danger">Déjà popé</div>\n\n            <div [style.backgroundImage]="\'url(\' + userProfile.popies[i].image + \')\'" class="div-img img-square r-3x" (click)="viewImg(i)"></div>\n\n            <button ion-button icon-only clear class="btn-edit-like" *ngIf="userProfile.popies[i].image != \'\' && !userProfile.popies[i].popped" (click)="like(i)">\n\n                <ion-icon name="thumbs-up" color="like"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only clear class="btn-edit-dislike" *ngIf="userProfile.popies[i].image != \'\' && !userProfile.popies[i].popped" (click)="dislike(i)">\n\n                <ion-icon name="thumbs-down" color="dislike"></ion-icon>\n\n            </button>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\poperprofile\poperprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* Tutoriel */]])
    ], PoperProfilePage);
    return PoperProfilePage;
}());

//# sourceMappingURL=poperprofile.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(13);
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
var Translate = /** @class */ (function () {
    function Translate(translate) {
        this.translate = translate;
        console.log('Provider : Translate');
        translate.setDefaultLang('en');
    }
    Translate.prototype.init = function () {
        this.translate.setDefaultLang('en');
    };
    Translate.prototype.getNumber = function (objet) {
        return objet;
    };
    Translate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], Translate);
    return Translate;
}());

//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fcm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Fcm = /** @class */ (function () {
    function Fcm(firebaseNative, afs, platform) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
    }
    // Get permission from the user
    Fcm.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    // Save the token to firestore
    Fcm.prototype.saveTokenToFirestore = function (token) {
        if (!token)
            return;
        //alert(token);
        var devicesRef = this.afs.collection('devices');
        var docData = {
            token: token,
            plt: this.platform.platforms(),
        };
        return devicesRef.doc(token).set(docData);
    };
    // Listen to incoming FCM messages
    Fcm.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    Fcm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], Fcm);
    return Fcm;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankpopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
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




var RankpopoverPage = /** @class */ (function () {
    function RankpopoverPage(viewCtrl, loadingCtrl, alertCtrl, api, params, storage, actionSheetCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.params = params;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.isVisibleRankingClan = false;
        this.clanId = params.get('clan');
        this.storage.get('user').then(function (user) {
            _this.user = user;
            _this.getInfosClan(_this.clanId);
            _this.getListUsersClan(_this.clanId);
        });
    }
    RankpopoverPage.prototype.setDefaultClan = function (flag) {
    };
    RankpopoverPage.prototype.refresh = function () {
        this.isVisibleRankingClan = true;
        this.getListUsersClan(this.clanId);
    };
    RankpopoverPage.prototype.getInfosClan = function (clanId) {
        var _this = this;
        var data;
        data = {};
        data.clanId = clanId;
        this.api.post('clan/get', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.clan = body;
        }, function (err) {
        }, function () {
        });
    };
    RankpopoverPage.prototype.getListUsersClan = function (clanId) {
        var _this = this;
        var data;
        data = {};
        data.clanId = clanId;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Inscription...',
            dismissOnPageChange: true
        });
        loading.present();
        this.api.post('getUsersByClan', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.users = body;
            _this.isVisibleRankingClan = true;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        }, function () {
        });
    };
    RankpopoverPage.prototype.showActions = function (userId, clanId) {
        var _this = this;
        var data;
        data = {};
        data.userId = userId;
        data.clanId = clanId;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: [
                {
                    text: 'Promouvoir',
                    handler: function () {
                        data.role = 'ROLE_ADMIN';
                        _this.api.post('clan/grant', data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            _this.users = body;
                            _this.isVisibleRankingClan = true;
                        }, function (err) {
                        }, function () {
                            _this.getListUsersClan(clanId);
                        });
                    }
                }, {
                    text: 'Rétrograder',
                    handler: function () {
                        data.role = 'ROLE_USER';
                        _this.api.post('clan/grant', data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            _this.users = body;
                            _this.isVisibleRankingClan = true;
                        }, function (err) {
                        }, function () {
                            _this.getListUsersClan(clanId);
                        });
                    }
                }, {
                    text: 'Exclure',
                    handler: function () {
                        _this.api.post('clan/exclude', data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            _this.users = body;
                            _this.isVisibleRankingClan = true;
                        }, function (err) {
                        }, function () {
                            _this.getListUsersClan(clanId);
                        });
                    }
                }, {
                    text: 'Supprimer',
                    handler: function () {
                        _this.api.post('clan/quit', data)
                            .subscribe(function (data) {
                            var body;
                            body = JSON.parse(data.text());
                            _this.users = body;
                            _this.isVisibleRankingClan = true;
                        }, function (err) {
                        }, function () {
                            _this.getListUsersClan(clanId);
                        });
                    }
                }, {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RankpopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    RankpopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rankpopover',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\rank\rankpopover.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title><span class="color-white">Paramètres</span></ion-title>\n\n        <div class="close-buttons" (click)="close()">\n\n            <ion-icon name="close"></ion-icon>\n\n        </div>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="bg-custom">\n\n    <div *ngIf="isVisibleRankingClan == true">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                {{ clan.name }}\n\n            </ion-card-header>\n\n            <ion-list>\n\n                <ion-list-header>\n\n                    Liste des membres\n\n                </ion-list-header>\n\n                <div *ngFor="let user of users">\n\n                    <ion-item>\n\n                        <ion-label>{{ user.usualName }}</ion-label>\n\n                        <ion-badge *ngIf="user.role == \'ROLE_CREATEUR\'" item-end>Créateur</ion-badge>\n\n                        <ion-badge *ngIf="user.role == \'ROLE_ADMIN\'" item-end>Admin</ion-badge>\n\n                        <ion-badge *ngIf="user.role == \'ROLE_USER\'" color="secondary" item-end>Utilisateur</ion-badge>\n\n                        <button ion-button outline item-end (click)="showActions(user.id, clanId)">Actions</button>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-list>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\rank\rankpopover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], RankpopoverPage);
    return RankpopoverPage;
}());

//# sourceMappingURL=rankpopover.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_providers__ = __webpack_require__(18);
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
    function MyApp(platform, statusBar, splashScreen, keyboard, deeplinks, translate, storage, fcm) {
        var _this = this;
        this.translate = translate;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_pages__["e" /* LoadingPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //keyboard.disableScroll(true);
            //keyboard.hideKeyboardAccessoryBar(true);
            if (window['FirebasePlugin']) {
                fcm.getToken();
            }
            deeplinks.routeWithNavController(_this.navChild, {}).subscribe(function (match) {
                console.log('OK ' + match);
            }, function (nomatch) {
                console.log('KO ' + nomatch);
            });
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        this.storage.get('defaultLang').then(function (value) {
            if (value) {
                _this.translate.use = value;
                _this.translate.setDefaultLang(value);
            }
            else {
                if (_this.translate.getBrowserLang() !== undefined) {
                    _this.translate.use(_this.translate.getBrowserLang());
                    _this.translate.setDefaultLang(_this.translate.getBrowserLang());
                }
                else {
                    _this.translate.use('en'); // Set your language here
                    _this.translate.setDefaultLang('en');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "navChild", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Apps\popme\popme\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_providers__["c" /* Fcm */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firstStep_firstStep1_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firstStep_firstStep2_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstStep_firstStepFb_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_log_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_loginClassic_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_play_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__poperprofile_poperprofile_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_popover_score_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_popover_rank_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_popover_time_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings_settings_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trend_trend_module__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rank_relativeRank_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autoComplete_autoComplete_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rank_rankpopover_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__clan_clan_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__clan_clanprofile_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__clan_clanEdit_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__preview_preview_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tutoriel_tutoriel_profile_step1_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tutoriel_tutoriel_profile_step2_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tutoriel_tutoriel_profile_step3_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tutoriel_tutoriel_profile_step4_module__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tutoriel_tutoriel_profile_step5_module__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tutoriel_tutoriel_profile_step6_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tutoriel_tutoriel_profile_step7_module__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__tutoriel_tutoriel_profile_step8_module__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tutoriel_tutoriel_profile_step9_module__ = __webpack_require__(366);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__firstStep_firstStep1_module__["FirstStep1PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__firstStep_firstStep2_module__["FirstStep2PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__firstStep_firstStepFb_module__["FirstStepFbPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__loading_loading_module__["LoadingPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__log_log_module__["LogPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__login_login_module__["LoginPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__login_loginClassic_module__["LoginClassicPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_7__play_play_module__["PlayPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_8__poperprofile_poperprofile_module__["PoperProfilePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_9__profile_profile_module__["ProfilePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_10__profile_popover_score_module__["PopoverScorePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_11__profile_popover_rank_module__["PopoverRankPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__profile_popover_time_module__["PopoverTimePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_13__register_register_module__["RegisterPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_14__settings_settings_module__["SettingsPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_15__trend_trend_module__["TrendPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_16__rank_relativeRank_module__["RelativeRankPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_17__autoComplete_autoComplete_module__["AutoCompletePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_18__rank_rankpopover_module__["RankpopoverPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_19__clan_clan_module__["ClanPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_20__clan_clanprofile_module__["ClanProfilePageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_21__clan_clanEdit_module__["ClanEditPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_22__preview_preview_module__["PreviewPageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_23__tutoriel_tutoriel_profile_step1_module__["TutorielProfileStep1PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_24__tutoriel_tutoriel_profile_step2_module__["TutorielProfileStep2PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_25__tutoriel_tutoriel_profile_step3_module__["TutorielProfileStep3PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_26__tutoriel_tutoriel_profile_step4_module__["TutorielProfileStep4PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_27__tutoriel_tutoriel_profile_step5_module__["TutorielProfileStep5PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_28__tutoriel_tutoriel_profile_step6_module__["TutorielProfileStep6PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_29__tutoriel_tutoriel_profile_step7_module__["TutorielProfileStep7PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_30__tutoriel_tutoriel_profile_step8_module__["TutorielProfileStep8PageModule"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_31__tutoriel_tutoriel_profile_step9_module__["TutorielProfileStep9PageModule"]; });
































// Modules

//# sourceMappingURL=modules.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firstStep_firstStep2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_settings__ = __webpack_require__(37);
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
    function FirstStep1Page(navCtrl, navParams, viewCtrl, imagePicker, app, api, storage, alertCtrl, camera, actionSheetCtrl, loadingCtrl, storageProvider, userProvider) {
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
        this.userProvider = userProvider;
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
                _this.api.post('getUser/' + val, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    _this.userProvider.setUser(body);
                    _this.user = _this.userProvider.getUser();
                    _this.accountImageUrl = 'url(' + _this.userProvider.getImageAccount() + ')';
                    _this.description = _this.userProvider.getDescription();
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
                _this.api.post('updateStep1/' + val, data)
                    .subscribe(function (data) {
                    var body;
                    body = JSON.parse(data.text());
                    if (body.error) {
                        loading_1.dismiss();
                        _this.doAlert(body.message.text);
                    }
                    else {
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].STORAGE_ATTRIBUTES.IS_CONNECTED, true);
                        _this.userProvider.setUser(body);
                        // On redirige l'utilisateur vers sa page si il est authentifié
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__firstStep_firstStep2__["a" /* FirstStep2Page */]);
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
            selector: 'page-first-step',template:/*ion-inline-start:"C:\Apps\popme\popme\src\pages\firstStep\firstStep1.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding text-center class="bg-popme">\n\n  <div>\n\n    <p>Avant de commencer, il faut remplir les infos suivantes</p>\n\n  </div>\n\n  <ion-list class="w-full">\n\n    <div (click)="openPhotoPicker()">\n\n     <div class=" rounded profile-image-user" [style.background-image]="accountImageUrl">\n\n     </div>\n\n     <div class="first-step-1-change-photo">\n\n      Mets ta photo de profil\n\n    </div>\n\n  </div>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Ta description" [(ngModel)]="description"></ion-input>\n\n  </ion-item>\n\n  <div class="description-example">Exemples :\n\n    <ul>\n\n      <li>Fainéant professionnel</li>\n\n      <li>Cosmonaute le week-end</li>\n\n      <li>Plus populaire que ton frère</li>\n\n    </ul>\n\n  </div>\n\n</ion-list>\n\n  <div col-sm-12 class="text-center">\n\n    <button class="valid-button" ion-button full round (click)="validProfileStep1()">Valider</button>\n\n  </div>\n\n  <div col-sm-12 class="text-center">\n\n        <span class="pass-text" (click)="backToLogin()">Retour</span>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\popme\popme\src\pages\firstStep\firstStep1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* Users */]])
    ], FirstStep1Page);
    return FirstStep1Page;
}());

//# sourceMappingURL=firstStep1.js.map

/***/ })

},[410]);
//# sourceMappingURL=main.js.map