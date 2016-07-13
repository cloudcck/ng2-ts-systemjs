"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var app_router_1 = require('./app/app.router');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    app_router_1.appRouterProviders
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map