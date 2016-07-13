"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./components/home');
var todos_1 = require('./components/todos');
var reports_1 = require('./components/reports');
var report_detail_1 = require('./components/reports/report-detail');
var routes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'todos', component: todos_1.TodosComponent },
    { path: 'reports', component: reports_1.ReportsComponent },
    { path: 'reports/:id', component: report_detail_1.ReportDetailComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.router.js.map