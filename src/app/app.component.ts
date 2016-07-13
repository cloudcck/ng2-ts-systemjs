import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import  {NavbarComponent} from './components/navbar';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent {
  title = 'app works!';
}
