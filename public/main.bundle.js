webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Currency converter</a>\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink = \"login\">Login</a>\n     \n    \n    </li>\n  \n  </ul>\n</nav>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__["a" /* LogoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'login/register',
                        component: __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__["a" /* RegistrationComponent */]
                    },
                    {
                        path: 'dashboard/:id/:name',
                        component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */]
                    },
                    {
                        path: 'dashboard',
                        component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */]
                    },
                    {
                        path: 'Logout',
                        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"row\">\n \n  <form #currencyForm=\"ngForm\" name=\"myFormName\" (ngSubmit)=\"submitCurrency(currencyForm, currencyformModel)\">\n  <div class=\"col-sm-2\" style=\"margin-left:1250px;margin-top:60px;\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"logout()\">Logout</button></div>\n        <div class=\"col-sm-8\" style=\"margin:90px;\">\n           \n\t\t   <select name=\"usd\">\n\t\t   <option>USD</option>\n\t\t   </select>\n\t\t  <!--  {{selectedCurrency}}-----{{ selectedCurrency * selectedValue}} -->\n\t\t   <input type=\"text\" name=\"number\" [(ngModel)]=\"currencyformModel.mynumber\" />\n  <select name=\"currencies\" [(ngModel)]=\"currencyformModel.currencies\">\n    \n   \n    <option [value]=\"currency.value\" *ngFor=\"let currency of currencyRates\">\n  {{currency.name}}\n\t</option>\n  </select>\n\t\t\n\t\t\t</div>\n\t\t\n\t\t\t<div class=\"col-sm-2\" style=\"margin-left:190px\">\n <button type=\"submit\" class=\"btn btn-success btn-lg float-right\">convert Currency</button>\n\t\t\t\n\t\t   </div>\n\t\t\n\t\t</form>\n\t\t\n    \n    </div>\n \n<div class=\"row\">\n<div class=\"col-sm-12\">\n\t\n<div class=\"table-responsive\">\n            <table class=\"table table-striped\" style=\"margin:30px\">\n              <thead>\n               \n\t\t\t   <tr>\n      <th>ID</th>\n\t   <th>Name</th>\n      <th>Number</th>\n\t  <th>USD to</th>\n      <th>converted currencies</th>\n      <th>Total</th>\n \n    </tr>\n              </thead>\n              <tbody>\n               <tr *ngFor=\"let data of users; let i = index\">\n\t\n      <th scope=\"row\">{{i+1}}</th>\n\t  <td>{{data.name}}</td>\n      <td>{{data.mynumber}}<span style=\"font-size:20px\">*</span></td>\n      <td>{{1}}</td>\n      <td>{{data.currencies}}{{[[data.currencyName]]}}</td>\n      <td>{{data.mynumber*data.currencies}}</td>\n     </tr> \n\t  \n              </tbody>\n            </table>\n          </div>\n\t\t \n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.currencyRates = [];
        this.users = [];
        this.user = {};
        this.selectedValue = 0;
        this.selectedCurrency = 0;
        this.currencyformModel = {};
        this.currencyName = {};
        this.http.get("http://openexchangerates.org/api/latest.json/?app_id=3ed2a10310934d24b2362107e4cdf3ff").subscribe(function (getcurrency) {
            var currencyRates = getcurrency.json();
            //console.log(currencyRates.rates);
            for (var x in currencyRates.rates) {
                _this.currencyName = x;
                var item = currencyRates.rates[x];
                //console.log(x, item);
                var singleRate = {
                    name: x,
                    value: item
                };
                _this.currencyRates.push(singleRate);
            }
            //console.log(this.currencyRates)	
            //	console.log(10*this.currencyRates.rates.INR);
        }, function (err) {
            console.log(err);
        });
        this.route.params.subscribe(function (params) {
            //console.log(params);
            _this.user._id = params.id;
            _this.user.name = params.name;
        });
        //console.log(this.user._id);
        this.http.get("http://localhost:4000/personlist/" + this.user._id, this.user.name).subscribe(function (data) {
            _this.users = data.json();
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.http.get("http://localhost:4000/logout/").subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.router.navigate(['/Logout']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.submitCurrency = function (currencyForm, currencyModel) {
        this.currencyformModel.userIdd = this.user._id;
        this.currencyformModel.name = this.user.name;
        this.currencyformModel.currencyName = this.currencyName;
        //console.log(this.currencyName);
        this.http.post("http://localhost:4000/currencies", this.currencyformModel).subscribe(function (data) {
            //console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2 class=\"text-center text-white mb-4\">Currency Converter Login Form</h2>\n            <div class=\"row\">\n                <div class=\"col-md-6 mx-auto\">\n\n                    <!-- form card login -->\n                    <div class=\"card rounded-0\">\n                        <div class=\"card-header\">\n                            <h3 class=\"mb-0\">Login</h3>\n                        </div>\n                        <div class=\"card-body\">\n                           <form #loginForm=\"ngForm\" name=\"myFormName\" (ngSubmit)=\"submitForm(loginForm, loginformModel)\">\n                                <div class=\"form-group\">\n                                    <label for=\"uname1\">Username</label>\n                                    <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"name\" id=\"uname1\" required=\"\" [(ngModel)]=\"loginformModel.name\" >\n                                    <div class=\"invalid-feedback\">Oops, you missed this one.</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Password</label>\n                                    <input type=\"password\" class=\"form-control form-control-lg rounded-0\" id=\"pwd1\" required=\"\" [(ngModel)]=\"loginformModel.password\" autocomplete=\"new-password\" name=\"password\">\n                                    <div class=\"invalid-feedback\">Enter your password too!</div>\n                                </div>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t  <input class=\"form-check-input\" type=\"checkbox\"> Remember me\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t<div class=\"float-sm-left\">Forget-password</div>\n\t\t\t\t\t\t\t\t<span class=\"float-sm-right\"><a routerLink = \"register\">Registration form</a></span><br>\n\t\t\t\t\t\t\t\t<br>\n                                <button type=\"submit\" class=\"btn btn-success btn-lg float-right\" id=\"btnLogin\">Login</button>\n                            </form>\n                        </div>\n                        <!--/card-block-->\n                    </div>\n                    <!-- /form card login -->\n\n                </div>\n\t\t\t\n\n\n            </div>\n            <!--/row-->\n\n        </div>\n        <!--/col-->\n    </div>\n    <!--/row-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.loginformModel = {};
    }
    LoginComponent.prototype.submitForm = function (myForm, data) {
        var _this = this;
        {
            this.http.post("https://maheshcurrency.herokuapp.com/authentication", this.loginformModel).subscribe(function (data) {
                _this.users = data.json();
                if (_this.users) {
                    //console.log(this.users);
                    _this.router.navigate(['/dashboard', _this.users._id, _this.users.name]);
                    console.log(_this.users);
                }
                else {
                    _this.router.navigate(['/login']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2 class=\"text-center mb-5\">Currency Converter Register Form</h2>\n            <div class=\"row\">\n                <div class=\"col-md-6 mx-auto\">\n                    <div class=\"card border-secondary\">\n                        <div class=\"card-header\">\n                            <h3 class=\"mb-0 my-2\">Sign Up</h3>\n                        </div>\n                        <div class=\"card-body\">\n                           <form #loginForm=\"ngForm\" name=\"myFormName\" (ngSubmit)=\"submitForm(loginForm, registrationformModel)\">\n                                <div class=\"form-group\">\n                                    <label for=\"inputName\">Name</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"full name\" name=\"name\" [(ngModel)]=\"registrationformModel.name\" #nameM=\"ngModel\">\n                                </div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                    <label for=\"inputName\">Contact</label>\n                                    <input type=\"text\" name=\"contact\" class=\"form-control\" id=\"contact\" placeholder=\"Contact\" [(ngModel)]=\"registrationformModel.contact\" #contactM=\"ngModel\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"inputEmail3\">Email</label>\n                                    <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"email@gmail.com\" required=\"\" [(ngModel)]=\"registrationformModel.email\" #emailM=\"ngModel\">\n                                </div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                    <label for=\"inputName\">Address</label>\n                                    <input type=\"text\" name=\"address\" class=\"form-control\" id=\"a\" placeholder=\"Address\" [(ngModel)]=\"registrationformModel.address\" #addressM=\"ngModel\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"inputPassword3\">Password</label>\n                                    <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"password\" title=\"At least 6 characters with letters and numbers\" required=\"\" [(ngModel)]=\"registrationformModel.password\" #passwordM=\"ngModel\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"inputVerify3\">Verify password</label>\n                                    <input type=\"password\" name=\"vPassword\" class=\"form-control\" id=\"inputVerify3\" placeholder=\"password (again)\" required=\"\" [(ngModel)]=\"registrationformModel.confirm_password\" #verifyPasswordM=\"ngModel\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <button type=\"submit\" class=\"btn btn-success btn-lg float-right\">Register</button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--/row-->\n\n        </div>\n        <!--/col-->\n    </div>\n    <!--/row-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = (function () {
    function RegistrationComponent(route, http) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.registrationformModel = {};
        this.submitted = false;
        route.params.subscribe(function (params) {
            //this.registrationformModel = params;
            console.log(params);
            if (params.id) {
                //alert("ID present");
                _this.http.get("http://localhost:4000/userlist/" + params.id).subscribe(function (updateperson) {
                    _this.registrationformModel = updateperson.json();
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                //alert("ID not present");
            }
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.submitForm = function (myForm, data) {
        this.submitted = true;
        // Send Form Data(registrationformModel) to Server
        this.http.post("http://localhost:4000/submit", this.registrationformModel).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationComponent.prototype.changeInput = function (model) {
        console.log(model);
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map