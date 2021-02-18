import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styles: [
  `
  .btn-image {
    width: 25rem; 
    height: 15rem;
    margin: 0.5rem;
    background-repeat: no-repeat;
    background-size: 100% 100% !important;
	}
	
	.options {
		color:white;
		width: 100%;
		height: 100%;
		padding: 10%;
		font-weight: bold;
	}
	
	.questionborder {
		padding: 1rem;
	}

	.btn {
		margin: 2px !important;
	}
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
  	if (this.count != 4) {
  		this.count++;
  	}
  	
  
  }
  
  prevQuestion() {
  	if ( this.count != 0) {
  		this.count--;
  	}
  }



}
