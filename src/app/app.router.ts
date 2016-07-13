import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './components/home';
import {TodosComponent} from './components/todos';
import {ReportsComponent} from './components/reports';
import {ReportDetailComponent} from './components/reports/report-detail'
const routes:RouterConfig = [
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'reports/:id', component: ReportDetailComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];
