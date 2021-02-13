import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
    .main{
      margin-top: 75px;
    }
    `
  ]
})
export class AppComponent {
  title = 'quizzie';
}
