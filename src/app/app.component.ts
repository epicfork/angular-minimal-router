import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Router App</h1>
    <!-- This nav gives you links to click, which tells the router which route to use (defined in the routes constant in  AppRoutingModule) -->
    <nav>
      <ul>
        <li>
          <a routerLink="/page-one" routerLinkActive="active">Page One</a>
        </li>
        <li>
          <a routerLink="/page-two" routerLinkActive="active">Page Two</a>
        </li>
      </ul>
    </nav>
    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
