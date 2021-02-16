import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styles: [
  `
  .btn-image {
    background-image: url('https://brandflow.net/assets/img/featured/mdb-prolog.jpg') !important;
    background-size: contain; //or cover
	}
	
	.options {
		color:white;
		width: 100%;
		height: 100%;
		padding: 10%;
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
