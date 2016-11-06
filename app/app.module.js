"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//rxjs
require('./rxjs-extensions');
//angular
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var about_component_1 = require('./about/about.component');
var list_component_1 = require('./list/list.component');
var single_component_1 = require('./single/single.component');
var home_component_1 = require('./home/home.component');
var button_service_1 = require('./shared/button.service');
var project_service_1 = require('./shared/project.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                list_component_1.ListComponent,
                single_component_1.SingleComponent
            ],
            providers: [
                button_service_1.ButtonService,
                project_service_1.ProjectService
            ],
            //  providers: [ ButtonService ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
