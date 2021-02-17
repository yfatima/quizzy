import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  	`
  	.quizname {
  		color: white;
  	}
  	
  	`
  ]
})
export class HeaderComponent implements OnInit {

	questionTitle: any;

  constructor(
  		private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  
  	this.httpClient.get("assets/questions/quiz1.json").subscribe(data =>{
      console.log(data);
      this.questionTitle = data;
    });

  
  }
}
