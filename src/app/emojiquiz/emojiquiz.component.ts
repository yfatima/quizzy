import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emojiquiz',
  templateUrl: './emojiquiz.component.html',
  styles: [
  `	
 	.btn-image {
    	width: 15rem; 
   	 	height: 15rem;
   		margin: 0.5rem;
    	background-repeat: no-repeat;
    	background-size: 100% 100% !important;
	}
	
	.start-image {
		max-width: 25rem; 
    	max-height: 15rem;
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
		padding: 0.5rem;
		margin-top: 1rem;
		border-width: medium !important;
	}
	
	.quizborder {
		padding: 2rem;
		margin-top: 1rem;
		height: 500px !important;
		border-width: medium !important;
	}

	.btn {
		margin: 2px !important;
	}

	.picked {
    	background-color: black;
    	opacity: 0.5;
	}	
	
	.progbar {
		margin-top: 5%;
		margin-bottom: 2%;
	}
	
	.userinput {
		width: 30% !important;
		margin: 1rem !important;
	}
	`
  ]
})
export class EmojiquizComponent implements OnInit {

  progressPercentage: number = 0;
  started: boolean = false;
  questionList: any = [];
  questions: any = [];
  type : string = "";
  count: number = 0;
  userinput: string = "";
  correctAnswer: string;
  	
  constructor(
  			private httpClient: HttpClient,
			private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  
		this.httpClient.get("assets/emojiquiz-data.json").subscribe(data =>{
			this.questionList = data;

			// get the type of quiz we are looking for
			// this.route.queryParams.subscribe(params => {
// 				this.type = params["type"];
// 			})
// 			
			this.type = "Guess Food By Emoji";
			
			for (let id in this.questionList){
				if(this.questionList[id].type == this.type){
					this.questions = this.questionList[id]
				}
			}
		});  

  }
  
  startQuiz() {
  	this.progressPercentage = 15;
  	this.started = true;
  }
  
  nextQuestion() {
	if (this.count != 4) {
		this.count++;
	}
	this.progressPercentage = this.progressPercentage + 25;
	this.correctAnswer = "";
   }
   
   	prevQuestion() {
		if ( this.count != 0) {
			this.count--;
		}
		this.progressPercentage = this.progressPercentage - 25;
		this.correctAnswer = "";
	}
	
	checkAnswer(value: string) {
		if (value === this.questions.questions[this.count].correct_answer) {
			this.userinput = value;
			this.correctAnswer = "correct";
		}
		else {
			this.userinput = "error";
			this.correctAnswer = "wrong";
		}
		
	}

}
