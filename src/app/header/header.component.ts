import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .navbar-brand{
      font-size: 25px;
    }
    .nav-item{
      font-size: 16px;
    }
  
  ` 
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
