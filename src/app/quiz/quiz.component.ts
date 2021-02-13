import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styles: [
  `

  `
  ]
})
export class QuizComponent implements OnInit {

  questions: any = [];
  count: number = 0;

  constructor(
  		private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  
  	this.httpClient.get("assets/questions/quiz1.json").subscribe(data =>{
      console.log(data);
      this.questions = data;
    });

  
  }
  
  nextQuestion() {
  	if (this.count != 2) {
  		this.count++;
  	}
  	
  
  }
  
  prevQuestion() {
  	if ( this.count != 0) {
  		this.count--;
  	}
  }



}
