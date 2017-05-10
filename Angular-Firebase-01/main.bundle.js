webpackJsonp([0,3],{

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(_af) {
        this._af = _af;
    }
    FirebaseService.prototype.getUsers = function () {
        this.users = this._af.database.list('/users');
        return this.users;
    };
    FirebaseService.prototype.getRoles = function () {
        this.roles = this._af.database.list('/roles');
        return this.roles;
    };
    FirebaseService.prototype.addUser = function (newUser) {
        return this.users.push(newUser);
    };
    FirebaseService.prototype.updateUser = function (key, updateUser) {
        return this.users.update(key, updateUser);
    };
    FirebaseService.prototype.deleteUser = function (key) {
        return this.users.remove(key);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a;
}()); // class 
//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/firebase.service.js.map

/***/ },

/***/ 368:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 368;


/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(477);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/main.js.map

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    } // constructor
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
        this._firebaseService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
        });
    }; // ngOnInit
    AppComponent.prototype.changeState = function (state, key) {
        console.log('state: ' + state + '; - key: ' + key);
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    }; // changeState
    AppComponent.prototype.showEdit = function (user) {
        this.changeState('edit', user.$key);
        this.activeRole = user.role;
        this.activeName = user.name;
        this.activeSurname = user.surname;
        this.activeDetails = user.details;
        this.activeStreet = user.street;
        this.activeCity = user.city;
        this.activeCountry = user.country;
        this.activePostcode = user.postcode;
        this.activeEmail = user.email;
        this.activePhone = user.phone;
    };
    AppComponent.prototype.updateUser = function () {
        var updateUser = {
            role: this.activeRole,
            name: this.activeName,
            surname: this.activeSurname,
            email: this.activeEmail,
            phone: this.activePhone,
            street: this.activeStreet,
            city: this.activeCity,
            country: this.activeCountry,
            details: this.activeDetails,
            postcode: this.activePostcode
        };
        this._firebaseService.updateUser(this.activeKey, updateUser);
        this.changeState('default', '');
    };
    AppComponent.prototype.deleteUser = function (key) {
        this._firebaseService.deleteUser(key);
        this.changeState('default', '');
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(650),
            styles: [__webpack_require__(647)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}()); // Class
//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/app.component.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_adduser_adduser_component__ = __webpack_require__(478);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var firebaseConfig = {
    apiKey: "AIzaSyDXzk48nZXCQ4ciIJvzk-Rg9B33KIF-dVc",
    authDomain: "contacts-d0aab.firebaseapp.com",
    databaseURL: "https://contacts-d0aab.firebaseio.com",
    storageBucket: "contacts-d0aab.appspot.com",
    messagingSenderId: "392078188679"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_adduser_adduser_component__["a" /* AdduserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/app.module.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdduserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdduserComponent = (function () {
    function AdduserComponent(_af) {
        this._af = _af;
    }
    AdduserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._af.getUsers().subscribe(function (addusers) {
            _this.addusers = addusers;
        });
        this._af.getRoles().subscribe(function (addroles) {
            _this.addroles = addroles;
        });
    };
    AdduserComponent.prototype.addUser = function (role, name, surname, email, phone, street, city, country, details, postcode) {
        var newUser = {
            role: role,
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            street: street,
            city: city,
            country: country,
            details: details,
            postcode: postcode };
        this._af.addUser(newUser);
        this.changeState('default', '');
    };
    AdduserComponent.prototype.changeState = function (state, key) {
        console.log('state: ' + state + '; - key: ' + key);
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    }; // changeState
    AdduserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-adduser',
            template: __webpack_require__(651),
            styles: [__webpack_require__(648)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], AdduserComponent);
    return AdduserComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/adduser.component.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(652),
            styles: [__webpack_require__(649)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/navbar.component.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/environment.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Projects/Code School/angularList/contacts/src/polyfills.js.map

/***/ },

/***/ 647:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 648:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 649:
/***/ function(module, exports) {

module.exports = ".size-12 { font-size: 12px; }\r\n      \r\n      .size-14 { font-size: 14px; }\r\n      \r\n      .size-16 { font-size: 16px; }\r\n      \r\n      .size-18 { font-size: 18px; }\r\n      \r\n      .size-21 { font-size: 21px; }\r\n      \r\n      .size-24 { font-size: 24px; }\r\n      \r\n      .size-36 { font-size: 36px; }\r\n      \r\n      .size-48 { font-size: 48px; }\r\n      \r\n      .size-60 { font-size: 60px; }\r\n      \r\n      .size-72 { font-size: 72px; }"

/***/ },

/***/ 650:
/***/ function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n <!-----------------------------------------------add user--------------------- -->\n\n<app-adduser></app-adduser>\n\n\n<!----------------------------------------------edit user -------------------------->\n\n<div *ngIf=\"appState== 'edit'\" class=\"row\">\n  <div class=\"large-12 columns\">\n    <h3>Edit User</h3>\n    <form (submit)=\"updateUser()\" >\n      \n      <div class=\"row\"> <!--row:  role, name, surname-->\n        <div class=\"medium-4 columns\">\n          <label>Role\n            <select [(ngModel)]=\"activeRole\" name=\"activeRole\" #role>\n              <option value=\"0\">Select</option>\n              <option *ngFor=\"let item of roles\"  value=\"{{ item.role }}\">{{ item.role }}</option>\n            </select>\n          </label>\n        </div>\n        <div class=\"medium-4 columns\">\n          <label>Name\n            <input type=\"text\" [(ngModel)]=\"activeName\" name=\"activeName\" placeholder=\"Name\" #name>\n          </label>\n        </div>\n        <div class=\"medium-4 columns\">\n           <label>Surname\n            <input type=\"text\" [(ngModel)]=\"activeSurname\" name=\"activeSurname\" placeholder=\"Surname\" #surname>\n          </label>\n        </div>\n      </div>   <!----enf of row---->\n\n      <div class=\"row\"><!--row: email, phone, details-->\n        <div class=\"medium-4 columns\">\n           <label>Email\n            <input type=\"text\" [(ngModel)]=\"activeEmail\" name=\"activeEmail\" placeholder=\"Email\" #email>\n          </label>\n        </div>\n        <div class=\"medium-4 columns\">\n           <label>Phone\n            <input type=\"text\" [(ngModel)]=\"activePhone\" name=\"activePhone\" placeholder=\"Phone\" #phone>\n          </label>\n        </div>\n        <div class=\"medium-4 columns\">\n           <label>Details\n            <textarea placeholder=\"Some details\" [(ngModel)]=\"activeDetails\" name=\"activeDetails\"  #details></textarea>\n          </label>\n        </div>\n      </div>    <!----end of row---->\n       \n      <div class=\"row\"> <!--row: street, city, country, postcode-->\n        <div class=\"medium-4 columns\">\n           <label>Street\n            <input type=\"text\" [(ngModel)]=\"activeStreet\" name=\"activeStreet\" placeholder=\"Street Address\" #street>\n          </label>\n        </div>\n        <div class=\"medium-4 columns\">\n           <label>City\n            <input type=\"text\" [(ngModel)]=\"activeCity\" name=\"activeCity\" placeholder=\"City\" #city>\n          </label>\n        </div>\n        <div class=\"medium-4 columns\">\n           <label>Country\n            <input type=\"text\" [(ngModel)]=\"activeCountry\" name=\"activeCountry\" placeholder=\"Country\" #country>\n          </label>\n        </div>\n        <div class=\"medium-3 columns\">\n           <label>Postcode\n            <input type=\"text\" [(ngModel)]=\"activePostcode\" name=\"activePostcode\" placeholder=\"Postcode\" #postcode>\n          </label>\n        </div>\n      </div> <!----end of row---->\n      <div class=\"row\">\n        <div class=\"button-group\">\n          <input class=\"button success\" type=\"submit\"  value=\"Submit Form\">\n          <button (click)=\"changeState('default')\" class=\"button alert\">Cancel Form</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n\n<!-- --------------------------------------- more window ---------------------------------- -->\n<div *ngIf=\"appState == 'extend'\">\n  <div class=\"row\">\n    <div class=\"large-12 columns\">\n      <button (click)=\"changeState('default')\" class=\"hollow button alert\">Go Back</button>\n    </div>\n  </div>  <!--row-->\n\n  <div *ngFor=\"let user of users\"  >\n    <div *ngIf=\"user.$key == activeKey\">\n      <div class=\"row\">\n        <div class=\"large-5 columns large-offset-1\">\n          <h3> {{ user.name }} {{ user.surname }} </h3>\n          <h5> {{ user.role }}</h5>\n          <p>Details: {{ user.details }} </p>\n        </div>\n        <div class=\"large-5 columns large-offset-1\">\n          <h4>Contact Info</h4>\n          <ul>\n            <li>Phone: {{ user.phone }} </li>\n            <li>Email: {{ user.email }} </li>\n            <li>Located: {{ user.city }}, {{ user.country }} </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>  <!--ngFor-->\n</div><!--appState == extend-->\n \n <!-- -------------------------------main table------------------------------------ -->\n <div class=\"row\">\n   <div class=\"large-12 columns\">\n    <div *ngIf=\"users\">\n      <table>\n        <thead>\n        <tr>\n          <th>Role</th>\n          <th>Name</th>\n          <th>Surname</th>\n          <th>Administrate</th>\n        </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users\" >\n            <td> {{ user.role }} </td>\n            <td> {{ user.name }} </td>\n            <td> {{ user.surname }} </td>\n            <td>\n              <button (click)=\"changeState('extend', user.$key)\" class=\"hollow button\">More</button>\n              <button (click)=\"showEdit(user)\" class=\"hollow button secondary\">Edit</button>\n              <button (click)=\"deleteUser(user.$key)\" class=\"hollow button alert\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n   </div>\n </div>\n\n"

/***/ },

/***/ 651:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"small-9 columns\"></div>\r\n  <div class=\"small-3 columns\">\r\n    <button (click)=\"changeState('add')\" class=\"dropdown button slide-right\"> <i class=\"step fi-plus size-16\"></i> Add User</button>\r\n  </div>\r\n</div> <!----row---->\r\n\r\n\r\n<div *ngIf=\"appState== 'add'\" class=\"row\">\r\n  <div class=\"large-12 columns\">\r\n    <h3>Add User</h3>\r\n    <form (submit)=\"addUser(\r\n      role.value,\r\n      name.value,\r\n      surname.value,\r\n      email.value,\r\n      phone.value,\r\n      street.value,\r\n      city.value,\r\n      country.value,\r\n      details.value,\r\n      postcode.value )\" >\r\n      \r\n      <div class=\"row\"> <!--row:  role, name, surname-->\r\n        <div class=\"medium-4 columns\">\r\n          <label>Role\r\n            <select #role>\r\n              <option value=\"0\">Select</option>\r\n              <option *ngFor=\"let item of addroles\"  value=\"{{ item.role }}\">{{ item.role }}</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n        <div class=\"medium-4 columns\">\r\n          <label>Name\r\n            <input type=\"text\" placeholder=\"Name\" #name>\r\n          </label>\r\n        </div>\r\n        <div class=\"medium-4 columns\">\r\n           <label>Surname\r\n            <input type=\"text\" placeholder=\"Surname\" #surname>\r\n          </label>\r\n        </div>\r\n      </div>   <!----enf of row---->\r\n\r\n      <div class=\"row\"><!--row: email, phone, details-->\r\n        <div class=\"medium-4 columns\">\r\n           <label>Email\r\n            <input type=\"text\" placeholder=\"Email\" #email>\r\n          </label>\r\n        </div>\r\n        <div class=\"medium-4 columns\">\r\n           <label>Phone\r\n            <input type=\"text\" placeholder=\"Phone\" #phone>\r\n          </label>\r\n        </div>\r\n        <div class=\"medium-4 columns\">\r\n           <label>Details\r\n            <textarea placeholder=\"Some details\"  #details></textarea>\r\n          </label>\r\n        </div>\r\n      </div>    <!----end of row---->\r\n       \r\n      <div class=\"row\"> <!--row: street, city, country, postcode-->\r\n        <div class=\"medium-4 columns\">\r\n           <label>Street\r\n            <input type=\"text\" placeholder=\"Street Address\" #street>\r\n          </label>\r\n        </div>\r\n        <div class=\"medium-4 columns\">\r\n           <label>City\r\n            <input type=\"text\" placeholder=\"City\" #city>\r\n          </label>\r\n        </div>\r\n        <div class=\"medium-4 columns\">\r\n           <label>Country\r\n            <input type=\"text\" placeholder=\"Country\" #country>\r\n          </label>\r\n        </div>\r\n        <div class=\"medium-3 columns\">\r\n           <label>Postcode\r\n            <input type=\"text\" placeholder=\"Postcode\" #postcode>\r\n          </label>\r\n        </div>\r\n      </div> <!----end of row---->\r\n      <div class=\"row\">\r\n        <div class=\"button-group\">\r\n          <input class=\"button success\" type=\"submit\"  value=\"Submit Form\">\r\n          <button (click)=\"changeState('default')\" class=\"button alert\">Cancel Form</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 652:
/***/ function(module, exports) {

module.exports = "<div class=\"top-bar\">\n  <div class=\"row\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <h3><li class=\"menu-text\"> <i class=\"step fi-address-book size-36\"></i> Contacts</li></h3>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n        <h3> <span><img src=\"../../../favicon.ico\" alt=\"\" /></span>  Project <i class=\"step fi-widget size-18\"></i></h3>\n    </div>\n  </div>\n</div> <!--top bar -->\n<br>\n\n"

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(369);


/***/ }

},[677]);
//# sourceMappingURL=main.bundle.map