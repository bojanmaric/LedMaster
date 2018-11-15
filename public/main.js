(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adding/adding.component.css":
/*!*********************************************!*\
  !*** ./src/app/adding/adding.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adding/adding.component.html":
/*!**********************************************!*\
  !*** ./src/app/adding/adding.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <form class=\"col-md-5  items-center\" (submit)=\"onArikalSubmit()\" style=\"margin:0 auto;\">\n    <legend>Dodavanje proizvoda</legend>\n\n    <div class=\"form-group \">\n      <label class=\"col-form-label\" for=\"inputDefault\">Ime artikla</label>\n      <input type=\"text\" [(ngModel)]=\"imeArtikla\" class=\"form-control \" name=\"imeArtikla\" placeholder=\"Ime\" id=\"inputDefault\">\n    </div>\n    <div class=\"form-group  \">\n      <label class=\"col-form-label\" for=\"inputDefault\">Sifra</label>\n      <input type=\"text\" [(ngModel)]=\"sifra\" class=\"form-control \" name=\"sifra\" placeholder=\"Sifra artikla\" id=\"inputDefault\">\n    </div>\n    <div class=\"form-group \">\n      <label class=\"control-label\">Cena</label>\n      <div class=\"form-group\">\n        <div class=\"input-group mb-3 \">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">RSD</span>\n          </div>\n          <input type=\"number\" [(ngModel)]=\"cena\" class=\"form-control\" name=\"cena\" aria-label=\"Amount (to the nearest dollar)\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\">.00</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group \">\n      <div class=\"input-group mb-3\">\n        <div class=\"custom-file\">\n          <label class=\"custom-file-label\" for=\"inputGroupFile02\">{{im}}</label>\n          <input type=\"file\" (change)=\"onImageAdded($event)\" class=\"custom-file-input col-md-5\" name=\"file\" id=\"inputGroupFile02\">\n        </div>\n\n      </div>\n\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"akcija\" id=\"customCheck1\" (click)=\"gasi1()\" name=\"akcija\">\n        <label class=\"custom-control-label\" for=\"customCheck1\"><b> Akcijski artikal</b></label>\n\n      </div>\n      \n    </div>\n    <div class=\"form-group \">\n      <label for=\"opis\">Opis proizvoda</label>\n      <textarea class=\"form-control \" [(ngModel)]=\"opis\" name=\"opis\" id=\"opis\" rows=\"3\" placeholder=\"Opis proizvoda\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Dodaj proizvod</button>\n  </form>\n</div>\n<!-- \n  <img class=\"card-img-top\" [src]=\"slika\">\n-->"

/***/ }),

/***/ "./src/app/adding/adding.component.ts":
/*!********************************************!*\
  !*** ./src/app/adding/adding.component.ts ***!
  \********************************************/
/*! exports provided: AddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingComponent", function() { return AddingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _servisi_arti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servisi/arti.service */ "./src/app/servisi/arti.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddingComponent = /** @class */ (function () {
    function AddingComponent(router, alertService, artiService) {
        this.router = router;
        this.alertService = alertService;
        this.artiService = artiService;
        this.fileArt = null;
        // public slika="http://localhost:3000/artikli/image/";
        this.im = '';
    }
    AddingComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    AddingComponent.prototype.onImageAdded = function (event) {
        this.fileArt = event.target.files[0];
        this.im = this.fileArt.name;
    };
    AddingComponent.prototype.onArikalSubmit = function () {
        var _this = this;
        if (this.fileArt != null) {
            var artikal = {
                imeArtikla: this.imeArtikla,
                sifra: this.sifra,
                cena: this.cena,
                opis: this.opis,
                akcija: this.akcija.valueOf()
            };
            this.artiService.addArtikal(artikal, this.fileArt).subscribe(function (data) {
                if (data.success) {
                    _this.alertService.success('Uspesno dodato ');
                    _this.imeArtikla = null;
                    _this.sifra = null;
                    _this.cena = null;
                    _this.opis = null;
                    _this.im = null;
                    window.scrollTo(0, 0);
                    // this.router.navigate(['']);
                }
            });
        }
    };
    AddingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adding',
            template: __webpack_require__(/*! ./adding.component.html */ "./src/app/adding/adding.component.html"),
            styles: [__webpack_require__(/*! ./adding.component.css */ "./src/app/adding/adding.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _servisi_arti_service__WEBPACK_IMPORTED_MODULE_3__["ArtiService"]])
    ], AddingComponent);
    return AddingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Quicksand');\r\n*{\r\n    font-family: 'Quicksand', sans-serif;  \r\n    background-image: url('bakkk.jpg');\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<app-navbar></app-navbar>\n<div class=\"container-fluid jumbotron\">\n  <ngx-alerts></ngx-alerts>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _adding_adding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adding/adding.component */ "./src/app/adding/adding.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _servisi_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servisi/validate.service */ "./src/app/servisi/validate.service.ts");
/* harmony import */ var _servisi_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servisi/auth.service */ "./src/app/servisi/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./porudzbina/porudzbina.component */ "./src/app/porudzbina/porudzbina.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./galerija/galerija.component */ "./src/app/galerija/galerija.component.ts");
/* harmony import */ var _galerija_image_detalis_image_detalis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./galerija/image-detalis/image-detalis.component */ "./src/app/galerija/image-detalis/image-detalis.component.ts");
/* harmony import */ var _galerija_imser_imagee_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./galerija/imser/imagee.service */ "./src/app/galerija/imser/imagee.service.ts");
/* harmony import */ var _galerija_file_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./galerija/file.pipe */ "./src/app/galerija/file.pipe.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _servisi_arti_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./servisi/arti.service */ "./src/app/servisi/arti.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _katalozi_katalozi_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./katalozi/katalozi.component */ "./src/app/katalozi/katalozi.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { RegisterComponent } from './register/register.component';










//import { AgmCoreModule } from '@agm/core';










var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    //{ path: 'register', component: RegisterComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'katalozi', component: _katalozi_katalozi_component__WEBPACK_IMPORTED_MODULE_27__["KataloziComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'porudzbina', component: _porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_16__["PorudzbinaComponent"] },
    { path: 'add', component: _adding_adding_component__WEBPACK_IMPORTED_MODULE_9__["AddingComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'galerija', component: _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_19__["GalerijaComponent"] },
    { path: 'image/:id', component: _galerija_image_detalis_image_detalis_component__WEBPACK_IMPORTED_MODULE_20__["ImageDetalisComponent"] },
    { path: '', redirectTo: '/galerija', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                //RegisterComponent,
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _adding_adding_component__WEBPACK_IMPORTED_MODULE_9__["AddingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_16__["PorudzbinaComponent"],
                _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_19__["GalerijaComponent"],
                _galerija_image_detalis_image_detalis_component__WEBPACK_IMPORTED_MODULE_20__["ImageDetalisComponent"],
                _galerija_file_pipe__WEBPACK_IMPORTED_MODULE_22__["ImageFilterPipe"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _katalozi_katalozi_component__WEBPACK_IMPORTED_MODULE_27__["KataloziComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_24__["Ng2CarouselamosModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_26__["NgxPaginationModule"],
                ngx_alerts__WEBPACK_IMPORTED_MODULE_15__["AlertModule"].forRoot({ maxMessages: 5, timeout: 3000 })
                /*AgmCoreModule.forRoot({
                  apiKey: 'AIzaSyARX3SnMdBEaHIMmDKlSE5qRQVv1nVMBOU'
                })*/
            ],
            providers: [_servisi_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"], _servisi_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_16__["PorudzbinaComponent"], _galerija_imser_imagee_service__WEBPACK_IMPORTED_MODULE_21__["ImageeService"], _galerija_file_pipe__WEBPACK_IMPORTED_MODULE_22__["ImageFilterPipe"], _servisi_arti_service__WEBPACK_IMPORTED_MODULE_25__["ArtiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5, li, small{\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=containter>\n  <footer class=\"container py-5\">\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-6 col-md\">\n        <img src=\"../../assets/slike/ikonica.png\" alt=\"logo\">\n        <br>\n        <br>\n        <small class=\"d-block mb-3 text-muted \">LED-MASTER <br> Design and developed by  <img src=\"../../assets/slike/linkedin.png\" alt=\"\" style=\"width:16px; height:16px;\">  Bojan Maric.   </small>\n      \n        <p> </p>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Kontakt</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li> Tel: 063 670-458</li>\n          <li>Liljana Maric</li>\n          <li> <img src=\"../../assets/slike/em.png\" alt=\"klik\" style=\"width:20px;height:20px;\"><a href=\"\">\n              ledmasterva@gmail.com</a> </li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Kontakt</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li>Ponedeljak-Petak: 9:00-19:30 </li>\n          <li>Subota: 9:00-14:00</li>\n          <li>Nedelja: Ne radimo</li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Lokacija</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li>Ulica: Dr. Pantica 25</li>\n          <li>14000 Valjevo</li>\n          <a href=\" https://www.google.com/maps/place/LED+Master/@44.2721682,19.880096,17z/data=!3m1!4b1!4m5!3m4!1s0x4759eddca347cffb:0xf6ce65db6c8ad59e!8m2!3d44.2721644!4d19.8822901\">\n            <h4><img src=\"../../assets/slike/map1.png\" alt=\"klik\" style=\"width:50px;height:50px;\"></h4>\n          </a>\n        </ul>\n      </div>\n\n    </div>\n    <hr>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/galerija/file.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/galerija/file.pipe.ts ***!
  \***************************************/
/*! exports provided: ImageFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFilterPipe", function() { return ImageFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageFilterPipe = /** @class */ (function () {
    function ImageFilterPipe() {
    }
    ImageFilterPipe.prototype.transform = function (items, criteria) {
        if (criteria === 'all') {
            return items;
        }
        else
            return items.filter(function (item) {
                return item.category === criteria;
            });
    };
    ImageFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'imageFilter' })
    ], ImageFilterPipe);
    return ImageFilterPipe;
}());



/***/ }),

/***/ "./src/app/galerija/galerija.component.css":
/*!*************************************************!*\
  !*** ./src/app/galerija/galerija.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    border-radius: 15px;\r\n    margin: 5px;\r\n}\r\nul { padding:0; width:1200px; margin:20px auto}\r\nli { display:inline;}\r\n.tn{\r\n margin:6px 6px;\r\n border: 4px solid #eee;\r\n box-shadow:#555 1px 1px 8px 1px;\r\n cursor: pointer\r\n    }\r\n.modal-content {\r\n  width: 1200px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/galerija/galerija.component.html":
/*!**************************************************!*\
  !*** ./src/app/galerija/galerija.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n    <button type=\"button\" class=\"btn btn-success\" [class.active]=\"filterBy=='all'\" (click)=\"filterBy='all'\">Svi artikli</button>\n    <button type=\"button\" class=\"btn btn-primary\" [class.active]=\"filterBy=='lampe'\" (click)=\"filterBy='lampe'\">Lampe</button>\n    <button type=\"button\" class=\"btn btn-primary\" [class.active]=\"filterBy=='lusteri'\" (click)=\"filterBy='lusteri'\">Lusteri</button>\n    <button type=\"button\" class=\"btn btn-primary\" [class.active]=\"filterBy=='plafonjere'\" (click)=\"filterBy='plafonjere'\">Plafonjerke</button>\n    <button type=\"button\" class=\"btn btn-primary\" [class.active]=\"filterBy=='zidna'\" (click)=\"filterBy='zidna'\">Zidna rasveta</button>\n    <br>\n        <br>\n    \n    <div class=\"row\">\n        <ul id=\"thumbnailsList\">\n            <li *ngFor=\"let image of (visibleImages | imageFilter:filterBy) \">\n                <a [routerLink]=\"['/image', image.id]\">\n                    <img src=\"{{image.url}}\" class=\"tn\" width=\"250px\" height=\"250px\">\n\n                </a>\n            </li>\n        </ul>\n    </div>\n   \n</div>"

/***/ }),

/***/ "./src/app/galerija/galerija.component.ts":
/*!************************************************!*\
  !*** ./src/app/galerija/galerija.component.ts ***!
  \************************************************/
/*! exports provided: GalerijaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalerijaComponent", function() { return GalerijaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imser_imagee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imser/imagee.service */ "./src/app/galerija/imser/imagee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalerijaComponent = /** @class */ (function () {
    function GalerijaComponent(imageeService) {
        this.imageeService = imageeService;
        this.filterBy = 'all';
        this.visibleImages = [];
        this.visibleImages = this.imageeService.getImages();
    }
    GalerijaComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    GalerijaComponent.prototype.ngOnchanges = function () {
        this.visibleImages = this.imageeService.getImages();
    };
    GalerijaComponent.prototype.idiNa = function () {
        window.scrollTo(0, 50);
    };
    GalerijaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-galerija',
            template: __webpack_require__(/*! ./galerija.component.html */ "./src/app/galerija/galerija.component.html"),
            styles: [__webpack_require__(/*! ./galerija.component.css */ "./src/app/galerija/galerija.component.css")]
        }),
        __metadata("design:paramtypes", [_imser_imagee_service__WEBPACK_IMPORTED_MODULE_1__["ImageeService"]])
    ], GalerijaComponent);
    return GalerijaComponent;
}());



/***/ }),

/***/ "./src/app/galerija/image-detalis/image-detalis.component.css":
/*!********************************************************************!*\
  !*** ./src/app/galerija/image-detalis/image-detalis.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/galerija/image-detalis/image-detalis.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/galerija/image-detalis/image-detalis.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n   \n    <br>\n    \n          \n  <div class=\"row\">\n    \n    <div class=\"col-md-12\">\n\n      \n      <div [ngStyle]=\"{'background-image':'url('+image.url+')'}\" class=\"img-container\"></div>\n      <img src=\"{{image.url}}\" style=\"width:90%; height:auto;\" alt=\"\">\n      <div class=\"container\">\n        <div class=\"carousel-caption top \">\n            <a class=\"nav-link caption-side: top; \" [routerLink]=\"['/galerija']\"><img src=\"../../../assets/slike/x.png\" alt=\"Nazad\"></a>\n         \n        </div>\n        \n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/galerija/image-detalis/image-detalis.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/galerija/image-detalis/image-detalis.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageDetalisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetalisComponent", function() { return ImageDetalisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imser_imagee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imser/imagee.service */ "./src/app/galerija/imser/imagee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageDetalisComponent = /** @class */ (function () {
    function ImageDetalisComponent(imageeService, route) {
        this.imageeService = imageeService;
        this.route = route;
    }
    ImageDetalisComponent.prototype.ngOnInit = function () {
        this.image = this.imageeService.getImage(+this.route.snapshot.params['id']);
    };
    ImageDetalisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-detalis',
            template: __webpack_require__(/*! ./image-detalis.component.html */ "./src/app/galerija/image-detalis/image-detalis.component.html"),
            styles: [__webpack_require__(/*! ./image-detalis.component.css */ "./src/app/galerija/image-detalis/image-detalis.component.css")]
        }),
        __metadata("design:paramtypes", [_imser_imagee_service__WEBPACK_IMPORTED_MODULE_1__["ImageeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ImageDetalisComponent);
    return ImageDetalisComponent;
}());



/***/ }),

/***/ "./src/app/galerija/imser/imagee.service.ts":
/*!**************************************************!*\
  !*** ./src/app/galerija/imser/imagee.service.ts ***!
  \**************************************************/
/*! exports provided: ImageeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageeService", function() { return ImageeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageeService = /** @class */ (function () {
    function ImageeService() {
        this.visibleImages = [];
    }
    ImageeService.prototype.getImages = function () {
        return this.visibleImages = IMAGES.slice(0);
    };
    ImageeService.prototype.getImage = function (id) {
        return IMAGES.slice(0).find(function (image) { return image.id == id; });
    };
    ImageeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageeService);
    return ImageeService;
}());

var IMAGES = [
    { "id": 1, "category": "lampe", "url": "../../assets/galery/1.jpg" },
    { "id": 2, "category": "plafonjere", "url": "../../assets/galery/2.jpg" },
    { "id": 3, "category": "zidna", "url": "../../assets/galery/3.jpg" },
    { "id": 4, "category": "lampe", "url": "../../assets/galery/82.jpg" },
    { "id": 5, "category": "lampe", "url": "../../assets/galery/5.jpg" },
    { "id": 6, "category": "lampe", "url": "../../assets/galery/6.jpg" },
    { "id": 7, "category": "lusteri", "url": "../../assets/galery/83.jpg" },
    { "id": 8, "category": "plafonjere", "url": "../../assets/galery/8.jpg" },
    { "id": 9, "category": "plafonjere", "url": "../../assets/galery/9.jpg" },
    { "id": 10, "category": "lusteri", "url": "../../assets/galery/10.jpg" },
    { "id": 11, "category": "lusteri", "url": "../../assets/galery/11.jpg" },
    { "id": 12, "category": "plafonjere", "url": "../../assets/galery/12.jpg" },
    { "id": 13, "category": "lusteri", "url": "../../assets/galery/84.jpg" },
    { "id": 14, "category": "lampe", "url": "../../assets/galery/85.jpg" },
    { "id": 15, "category": "zidna", "url": "../../assets/galery/15.jpg" },
    { "id": 16, "category": "zidna", "url": "../../assets/galery/16.jpg" },
    { "id": 17, "category": "zidna", "url": "../../assets/galery/17.jpg" },
    { "id": 18, "category": "zidna", "url": "../../assets/galery/18.jpg" },
    { "id": 19, "category": "lusteri", "url": "../../assets/galery/86.jpg" },
    { "id": 21, "category": "zidna", "url": "../../assets/galery/19.jpg" },
    { "id": 22, "category": "lampe", "url": "../../assets/galery/87.jpg" },
    { "id": 23, "category": "lusteri", "url": "../../assets/galery/21.jpg" },
    { "id": 25, "category": "lusteri", "url": "../../assets/galery/23.jpg" },
    { "id": 26, "category": "lampe", "url": "../../assets/galery/24.jpg" },
    { "id": 27, "category": "lampe", "url": "../../assets/galery/25.jpg" },
    { "id": 29, "category": "lusteri", "url": "../../assets/galery/27.jpg" },
    { "id": 30, "category": "lusteri", "url": "../../assets/galery/28.jpg" },
    { "id": 31, "category": "lusteri", "url": "../../assets/galery/81.jpg" }
];


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servisi_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servisi/auth.service */ "./src/app/servisi/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLogged()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_servisi_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n   \r\nh4{\r\n    font-size: 17px;\r\n    \r\n}\r\n.parent{\r\n    position: relative;\r\n}\r\n.over-img{\r\n    position: absolute;\r\n    top: 98%;\r\n    right: 9%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containter \">\n  <!-- <div ng2-carouselamos class=\"slides-wrapper col-lg-10 m-auto m-t-5\" [items]=\"items\" [width]=\"1200\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\">\n  </div>\n  <ng-template #prev>\n    <img src=\"../../assets/homePic/lev.png\" style=\"width:50px;height:50px;\" id=\"left\">\n  </ng-template>\n  <ng-template #next>\n    <img src=\"../../assets/homePic/des.png\" style=\"width:50px;height:50px;\" id=\"right\">\n  </ng-template>\n  <ng-template #item let-item let-i=\"index\" #item>\n    <div class=\"items\">\n      <img src=\"{{ item.name }}\"   style=\"width:max-content; height:500px;\">\n    </div>\n  </ng-template> -->\n  <br>\n  <br>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"\"  >\n       <img class=\" col-md-12 col-sm-12 col-xs-12\" src=\"../../assets/homePic/pozz.png\"  style=\"border-radius:2%;\" alt=\"\">\n      </div>\n    </div>\n  </div>\n \n  <br>\n  <div class=\"container-fluid \" style=\"padding-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col-lg-10 m-auto m-t-5\">\n        <div id=\"slider\" class=\"carousel slide mb-3\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li class=\"active\" data-target=\"#slider\" data-slide-to=\"0\"></li>\n            <li data-target=\"#slider\" data-slide-to=\"1\"></li>\n            <li data-target=\"#slider\" data-slide-to=\"2\"></li>\n            <li data-target=\"#slider\" data-slide-to=\"3\"></li>\n            <li data-target=\"#slider\" data-slide-to=\"4\"></li>\n\n\n          </ol>\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block img-fluid\" src=\"../../assets/homePic/6.jpg\" alt=\"Prvi slajd\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"../../assets/homePic/1.jpg\" alt=\"Drugi slajd\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"../../assets/homePic/slikaRadnje.jpg\" alt=\"Treci slajd\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"../../assets/homePic/lusteri.jpg\" alt=\"Cetvrti slajd\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"../../assets/homePic/2.jpg\" alt=\"Peti slajd\">\n            </div>\n\n          </div>\n          <a href=\"#slider\" class=\"carousel-control-prev\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\"></span>\n          </a>\n          <a href=\"#slider\" class=\"carousel-control-next\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <script>\n    $('.carousel').carousel({\n      interval: 2200\n    })\n  </script>\n\n  <hr>\n  <div class=\"container \">\n  </div>\n  <div class=\"containter meni \">\n    <div class=\"row \" style=\"margin-left:9%;\">\n\n      <div *ngFor=\"let art of artikal | paginate: {  itemsPerPage:12, currentPage: p}\">\n        <div class=\"card border-secondary \" style=\"max-width: 15rem;  margin: 10px;\">\n          <!-- <div class=\"\" style=\"width:100%\"><img class=\"card-img-top\" [src]=\"getImageForArt(art)\" alt=\"slika\" width=\"100%\" height=\"150px\"></div>\n           -->\n          <div class=\"parent\">\n            <img class=\"card-img-top\" [src]=\"getImageForArt(art)\" alt=\"slika\" width=\"100%\" height=\"150px\" />\n            <div *ngIf=\"art.akcija\">\n              <img class=\"  over-img  \" src=\"../../assets/homePic/akcijaa.gif\" alt=\"akcija\" style=\"width:50px; height: 50px; \" />\n            </div>\n            \n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-caption\"> <b> {{art.imeArtikla}} </b></h4>\n            <p> <span style=\"font:18px; color: orangered; \"><b> {{art.cena}}.00 RSD </b> </span> </p>\n            <h4 class=\"card-text\"> Sifra artikla: {{art.sifra}}</h4>\n            <p class=\"card-text\">{{art.opis }}</p>\n            <!-- <img class=\"d-block  center\" src=\"../../assets/homePic/akcijaa.gif\" alt=\"akcija\" style=\"width:50%; height: auto; margin:0 auto;\"> -->\n            \n            <div *ngIf=\"!isLoggedIn();then nijeUlogovan else ulogovan\"></div>\n            <ng-template #ulogovan>\n              <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"izbrisiArtikal(art)\">Izbrisi</button>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"text-center\" layout-aling=\"center center\">\n    <pagination-controls class=\"center myPagination\" previousLabel=\" \" nextLabel=\" \" (pageChange)=\"p = $event\" (click)=\"idiNa()\"\n      maxSize=\"5\"> </pagination-controls>\n  </div>\n\n  <hr>\n  <div class=\"row\" style=\"margin:5%;\">\n    <div class=\"col-md-4 \">\n      <div class=\"card mb-4 shadow-sm\">\n        <img class=\"card-img-top\" src=\"../../assets/homePic/1.jpg\" style=\"width:100%; height:200px\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Nudi prodaju na 3 mesečne rata cekovima gradjana ili andministrativnom zabranom za sve penzionere i zaposlene, \n            velikog izbora elektromaterijala i rasvete(lustera, plafonjerki, lampi, led rasvete, malih kucnih aparata...). </p>\n          <small class=\"text-muted\"><img src=\"../../assets/homePic/lus.png\" alt=\"\" style=\"width:35px;height:35px\"></small>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4 shadow-sm\">\n        <img class=\"card-img-top\" src=\"../../assets/homePic/sijalice.jpg \" style=\"width:100%;height:200px\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Zašto izabrati LED sijalice? Prednost led sijalica je izuzetno dug vek trajanja , a\n            troši 90% manje energije u ondosu na klasicne sijalice. Takođe led rasveta nije osetljiva kao klasicno\n            osvetljenje na promene napona.</p>\n\n          <small class=\"text-muted\"><img src=\"../../assets/homePic/si.png\" alt=\"\" style=\"width:35px;height:35px\"></small>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4 shadow-sm\">\n        <img class=\"card-img-top\" src=\"../../assets/homePic/stednja.jpg\" style=\"width:100%;height:200px\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Štede STRUJU I DO 8 PUTA u odnosu na klasične sijalice , INVESTICIJA ZA BUDUĆNOST- DUG\n            ROK TRAJANJA – Vredi a štedi!!!\n            Obradujte svoje najmilije poklonom rasvete i sijalica…\n          </p>\n\n\n          <small class=\"text-centra\"> <img src=\"../../assets/homePic/mon.png\" alt=\"\" style=\"width:35px;height:35px\"></small>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _servisi_arti_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servisi/arti.service */ "./src/app/servisi/arti.service.ts");
/* harmony import */ var _servisi_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servisi/auth.service */ "./src/app/servisi/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(artiService, authService, alertService) {
        this.artiService = artiService;
        this.authService = authService;
        this.alertService = alertService;
        this.pik = null;
        this.slika = "/artikli/image/";
        /*
            this.items=[
             
              {name:'../../assets/homePic/6.jpg'},
              {name:'../../assets/homePic/1.jpg'},
              {name:'../../assets/homePic/slikaRadnje.jpg'},
              {name:'../../assets/homePic/lusteri.jpg'},
              {name:'../../assets/homePic/2.jpg'}
        
            ];*/
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artiService.getAllArtikle().subscribe(function (data) {
            _this.artikal = data.obj;
            _this.artikal.reverse();
        });
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.izbrisiArtikal = function (art) {
        var _this = this;
        if (this.authService.isLogged) {
            var ar = art._id;
            this.ima = art.fileArt;
            this.artiService.brisi(this.ima).subscribe(function (data) {
                if (data.success) {
                    if (_this.artiService.deleteArtikal(ar).subscribe()) {
                        _this.alertService.success('Uspesno ste obrisali');
                        window.location.reload();
                    }
                    else {
                        _this.alertService.info('Doslo je do greske u brisanju');
                    }
                }
                else {
                    _this.alertService.info('Doslo je do greske u brisanju');
                }
            });
        }
        else {
            console.log('Niste ulogovani');
        }
    };
    HomeComponent.prototype.idiNa = function () {
        window.scrollTo(0, 200);
    };
    HomeComponent.prototype.isLoggedIn = function () {
        //ako je prijavljen
        if (this.authService.isLogged()) {
            return true;
        }
    };
    HomeComponent.prototype.getImageForArt = function (art) {
        var filename = art.fileArt;
        return this.slika + filename;
        //return this.artiService.getImage(filename);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_servisi_arti_service__WEBPACK_IMPORTED_MODULE_2__["ArtiService"], _servisi_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_alerts__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/katalozi/katalozi.component.css":
/*!*************************************************!*\
  !*** ./src/app/katalozi/katalozi.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a,p{\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/katalozi/katalozi.component.html":
/*!**************************************************!*\
  !*** ./src/app/katalozi/katalozi.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n<div class=\"row\" style=\"margin: 0 auto;\">\n  <div class=\"col-md-3\">\n    <a target=\"_blank\" href=\"https://eglo.cld.bz/outdoor\"> <img class=\"img-thumbnail\" src=\"../../assets/homePic/katalog-eglo-spoljna-rasveta-2017.jpg\"\n        alt=\"\" style=\"widows: 250px; height:300px;\">\n      <p><b> Eglo spoljna rasveta 2016/2017</b></p>\n    </a>\n\n  </div>\n  <div class=\"col-md-3\">\n    <a target=\"_blank\" href=\"https://eglo.cld.bz/vintage\"> <img class=\"img-thumbnail\" src=\"../../assets/homePic/vintage-led-sijalice-eglo-2016_0.jpg\"\n        alt=\"\" style=\"widows: 250px; height:300px;\">\n      <p><b> Eglo katalog sijalica 2018/2019</b></p>\n    </a>\n\n  </div>\n  <div class=\"col-md-3\">\n    <a target=\"_blank\" href=\"https://cld.bz/8JSwBMi\"> <img class=\"img-thumbnail\" src=\"../../assets/homePic/eglo-2018-2019.jpg\"\n        alt=\"\" style=\"widows: 250px; height:300px;\">\n      <p><b>Eglo unutrasnja rasveta 2018/2019</b></p>\n    </a>\n\n  </div>\n  <div class=\"col-md-3\">\n    <a target=\"_blank\" href=\"http://www.rabalux.com/hu_HU/lapozo#page/1\"> <img class=\"img-thumbnail\" src=\"../../assets/homePic/rabalux-2018.jpg\"\n        alt=\"\" style=\"widows: 250px; height:300px;\">\n      <p><b> Rabalux katalog 2018</b></p>\n    </a>\n\n  </div>\n\n</div>\n<br>\n<div style=\"margin: 0 auto;\">\n  <a [routerLink]=\"['/porudzbina']\">\n    <h2 style=\"font-size:25px; \" class=\"text-center\">Za vise informacija iz kataloga kontaktirajte nas ili nam posaljite poruku.</h2>\n  </a>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/katalozi/katalozi.component.ts":
/*!************************************************!*\
  !*** ./src/app/katalozi/katalozi.component.ts ***!
  \************************************************/
/*! exports provided: KataloziComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KataloziComponent", function() { return KataloziComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KataloziComponent = /** @class */ (function () {
    function KataloziComponent(route) {
        this.route = route;
    }
    KataloziComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    KataloziComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-katalozi',
            template: __webpack_require__(/*! ./katalozi.component.html */ "./src/app/katalozi/katalozi.component.html"),
            styles: [__webpack_require__(/*! ./katalozi.component.css */ "./src/app/katalozi/katalozi.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], KataloziComponent);
    return KataloziComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <form (submit)=\"onLoginSubmit()\" class=\" col-md-6\" style=\"margin:0 auto;\">\n    <div class=\"text-left col-md-10\">\n      <br>\n\n      <img class=\"mb-4\" src=\"../../assets/slike/pic.jpg\" alt=\"\" width=\"100%\" height=\"auto \">\n      <h1 class=\"h3   mb-3 font-weight-normal\">Login</h1>\n    </div>\n\n    \n    <div class=\" col-md-10\">\n      <input type=\"text\" id=\"inputEmail\" class=\"form-control \" [(ngModel)]=\"username\" name=\"username\"\n        placeholder=\"Username\">\n      <label for=\"inputEmail\">Username</label>\n    </div>\n\n    <div class=\" col-md-10\">\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control \" [(ngModel)]=\"password\" name=\"password\"\n        placeholder=\"Password\">\n      <label for=\"inputPassword\">Password</label>\n    </div>\n\n\n    <button class=\"btn btn-lg btn-primary col-md-10 btn-block\" type=\"submit\">Sign in</button>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servisi_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/auth.service */ "./src/app/servisi/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _servisi_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servisi/validate.service */ "./src/app/servisi/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, alertService, validateService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.validateService = validateService;
        this.username = null;
        this.password = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (this.password != null && this.username != null) {
            if (!this.validateService.validateEmail(user.username)) {
                this.alertService.danger('Niste uneli validan email ili password');
                return false;
            }
            else {
                this.authService.authenicateUser(user).subscribe(function (data) {
                    if (data.success) {
                        _this.authService.storeUserData(data.token, data.user);
                        _this.alertService.success('Uspesno ste ulogovani');
                        _this.router.navigate(['']);
                    }
                    else {
                        _this.alertService.danger('Niste uneli validan email ili password');
                        _this.password = null;
                        _this.router.navigate(['login']);
                    }
                });
            }
        }
        else {
            this.alertService.warning('Niste popunili sva polja!');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_servisi_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _servisi_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img src=\"../../assets/slike/ikoo.png\" alt=\"Led Master\" style=\"width: 50px; height: 50px; border-radius: 50%;  \"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n\n    <ul class=\"navbar-nav nav-pills mr-auto\">\n\n      <li class=\"nav-item \" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\"><b>Home</b>  </a>\n      </li>\n\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/galerija']\"><b>Galerija </b></a>\n      </li>\n\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/porudzbina']\"><b>Porudzbina/Pitanja</b></a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/katalozi']\"><b>Katalozi</b></a>\n        </li>\n    </ul>\n    <ul class=\"navbar-nav nav-pills my-2 my-lg-0\">\n      <div *ngIf=\"!isLoggedIn();then nijeUlogovan else ulogovan\"></div>\n      <ng-template #ulogovan>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/add']\">Nov artikal</a>\n        </li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\"><img src=\"../../assets/slike/PROF.png\" alt=\"klik\" style=\"width:30px;height:30px;\"></a>\n        </li>\n        <li>\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\"> <img src=\"../../assets/slike/logoute.png\" alt=\"klik\"\n              style=\"width:30px;height:30px;\"> </a>\n        </li>\n      </ng-template>\n      <ng-template #nijeUlogovan>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\"><img src=\"../../assets/slike/log.png\" ></a>\n        </li>\n        <!-- <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n        </li> -->\n\n      </ng-template>\n    </ul>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servisi_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/auth.service */ "./src/app/servisi/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.alertService.info('Uspesno ste izlogovani');
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        //ako je prijavljen
        if (this.authService.isLogged()) {
            return true;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_servisi_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/porudzbina/porudzbina.component.css":
/*!*****************************************************!*\
  !*** ./src/app/porudzbina/porudzbina.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n  width: 1000px;\r\n    height:400px;\r\n  }\r\n  b{\r\n    color:green;\r\n  }"

/***/ }),

/***/ "./src/app/porudzbina/porudzbina.component.html":
/*!******************************************************!*\
  !*** ./src/app/porudzbina/porudzbina.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n  <form class=\"col-md-5\" (submit)=\"onPorInfoSubmit()\">\n    <fieldset>\n      <legend>Porudzbina/Pitanje <img src=\"../../assets/slike/korpa.jpg\" alt=\"\" style=\"width: 25px; height: 25px; \"></legend>\n \n\n      <div class=\"form-group\">\n\n        <label for=\"prezime\"> Ime i Prezime</label>\n        <input type=\"text\" [(ngModel)]=\"imeIprezime\" name=\"prezime\" class=\"form-control \" id=\"prezime\" placeholder=\"Ime i Prezime\">\n\n        <label for=\"adresa\">Adresa</label>\n        <input type=\"text\" [(ngModel)]=\"adresa\" name=\"adresa\" class=\"form-control \" id=\"adresa\" placeholder=\"Adresa\">\n\n\n        <label for=\"telefon\">Kontakt</label>\n        <input type=\"text\" [(ngModel)]=\"kontakt\" name=\"kontakt\" class=\"form-control \" id=\"telefon\" placeholder=\"Kontakt\">\n\n        <label for=\"exampleInputEmail1\">Email adresa</label>\n        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control \" id=\"exampleInputEmail1\"\n          placeholder=\"Enter email\">\n\n        <label for=\"opis\">Poruka/Porudzbina</label>\n        <textarea class=\"form-control \" [(ngModel)]=\"opis\" name=\"opis\" id=\"opis\" rows=\"3\" placeholder=\"Poruka/Porudzbina \"></textarea>\n\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">Posalji</button>\n    </fieldset>\n  </form>\n  <div class=\"col-md-1\" >\n\n  </div>\n <br>\n  <div class=\"embed-responsive embed-responsive-1by1 col-xs-1 col-md-6\" >\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.9509426419172!2d19.881047467744256!3d44.27219467704537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6ce65db6c8ad59e!2sLED+Master!5e1!3m2!1ssr!2srs!4v1540727702104\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n  </div>\n\n\n\n\n\n\n</div>\n  <br>\n  <br>\n  <!--<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\n    </agm-marker>\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.667184393649!2d19.88082098653412!3d44.27217968961482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ed0bdf14111b%3A0x3d6a45f7b8c947ae!2z0J_QsNC90YLQuNGb0LXQstCwIDI1LCDQktCw0ZnQtdCy0L4!5e1!3m2!1ssr!2srs!4v1539843284748\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n    <link rel=\"stylesheet\" href=\"https://www.google.com/maps/place/LED+Master/@44.2721682,19.880096,17z/data=!3m1!4b1!4m5!3m4!1s0x4759eddca347cffb:0xf6ce65db6c8ad59e!8m2!3d44.2721644!4d19.8822901\">\n  </agm-map>\n\n\n  <a href=\" https://www.google.com/maps/place/LED+Master/@44.2721682,19.880096,17z/data=!3m1!4b1!4m5!3m4!1s0x4759eddca347cffb:0xf6ce65db6c8ad59e!8m2!3d44.2721644!4d19.8822901\">\n    <h4><b>Kliknite za detaljniji prikaz </b></h4>\n  </a>\n-->\n \n<br>\n \n</div>"

/***/ }),

/***/ "./src/app/porudzbina/porudzbina.component.ts":
/*!****************************************************!*\
  !*** ./src/app/porudzbina/porudzbina.component.ts ***!
  \****************************************************/
/*! exports provided: PorudzbinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorudzbinaComponent", function() { return PorudzbinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _servisi_porudz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servisi/porudz.service */ "./src/app/servisi/porudz.service.ts");
/* harmony import */ var _servisi_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servisi/validate.service */ "./src/app/servisi/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PorudzbinaComponent = /** @class */ (function () {
    //latitude=44.272153;
    //longitude=19.882253;
    function PorudzbinaComponent(router, alertService, porudzService, validateService) {
        this.router = router;
        this.alertService = alertService;
        this.porudzService = porudzService;
        this.validateService = validateService;
    }
    PorudzbinaComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    PorudzbinaComponent.prototype.onPorInfoSubmit = function () {
        var _this = this;
        var porudz = {
            imeIprezime: this.imeIprezime,
            adresa: this.adresa,
            kontakt: this.kontakt,
            email: this.email,
            opis: this.opis
        };
        if (this.imeIprezime != null && this.kontakt != null && this.opis != null) {
            this.porudzService.porudzbina(porudz).subscribe(function (data) {
                if (data.success) {
                }
                else {
                    _this.alertService.danger('Doslo je do greske');
                    return false;
                }
            });
            this.alertService.success('Uspesno ste poslali poruku');
            this.imeIprezime = null;
            this.adresa = null;
            this.kontakt = null;
            this.email = null;
            this.opis = null;
            window.scrollTo(0, 0);
        }
        else {
            this.alertService.danger('Niste popunili odgovarajuca polja');
        }
    };
    PorudzbinaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-porudzbina',
            template: __webpack_require__(/*! ./porudzbina.component.html */ "./src/app/porudzbina/porudzbina.component.html"),
            styles: [__webpack_require__(/*! ./porudzbina.component.css */ "./src/app/porudzbina/porudzbina.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _servisi_porudz_service__WEBPACK_IMPORTED_MODULE_3__["PorudzService"], _servisi_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], PorudzbinaComponent);
    return PorudzbinaComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n  <div *ngIf=\"user\">\n    <div class=\"card border-primary mb-3\" style=\"max-width: 20rem;\">\n      <div class=\"card-header\">{{user.name}}</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Username: {{user.username}}</h4>\n        <p class=\"card-text\">Email: {{user.email}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servisi_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/auth.service */ "./src/app/servisi/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_servisi_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/servisi/arti.service.ts":
/*!*****************************************!*\
  !*** ./src/app/servisi/arti.service.ts ***!
  \*****************************************/
/*! exports provided: ArtiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtiService", function() { return ArtiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/servisi/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtiService = /** @class */ (function () {
    function ArtiService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ArtiService.prototype.addArtikal = function (artikal, fileArt) {
        var body = JSON.stringify(artikal);
        var formData = new FormData();
        formData.append('thisArti', body);
        if (fileArt != null)
            formData.append('file', fileArt, fileArt.name);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        console.log(body);
        return this.http.post('/artikli/add', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ArtiService.prototype.getAllArtikle = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/artikli/all', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ArtiService.prototype.brisi = function (ima) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.authService.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete('/artikli/brisi/' + ima, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ArtiService.prototype.deleteArtikal = function (artId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.authService.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete('/artikli/delete/' + artId, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ArtiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ArtiService);
    return ArtiService;
}());



/***/ }),

/***/ "./src/app/servisi/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/servisi/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenicateUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.isLogged = function () {
        return localStorage.getItem('id_token') !== null;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/servisi/porudz.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servisi/porudz.service.ts ***!
  \*******************************************/
/*! exports provided: PorudzService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorudzService", function() { return PorudzService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PorudzService = /** @class */ (function () {
    function PorudzService(http) {
        this.http = http;
    }
    PorudzService.prototype.porudzbina = function (porudz) {
        var body = JSON.stringify(porudz);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(porudz);
        return this.http.post('/users/porudzbina', porudz, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PorudzService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PorudzService);
    return PorudzService;
}());



/***/ }),

/***/ "./src/app/servisi/validate.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servisi/validate.service.ts ***!
  \*********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bolee\Desktop\LedMaster\AngularFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map