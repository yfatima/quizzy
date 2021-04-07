import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

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
	
	.btn-image:hover{
 		cursor: pointer;
	}

	.btn-image:hover div{
 		width: 150px;
 		padding: 8px 15px;
 		visibility: visible;
 		opacity: 0.7; 
	}
	.btn-image div{
 		position: absolute;
 		bottom: 0;
 		right: 0;
 		background: black;
 		color: white;
 		margin-bottom: 5px;
 		font-family: sans-serif;
 		opacity: 0;
 		visibility: hidden;
 		-webkit-transition: visibility 0s, opacity 0.5s linear; 
 		transition: visibility 0s, opacity 0.5s linear;
	}
	
  `
  ]
})
export class QuizComponent implements OnInit {

	questionList: any = [];
	questions: any = [];
	count: number = 0;
	progressPercentage: number = 0;
	started: boolean = false;
	pickedAnswers: [number, string, number][] = [];

	type : string = "";
	
	toggle = [true, true, true, true, true];
	prevToggleIndex: number = 0;

	constructor(
			private httpClient: HttpClient,
			private route: ActivatedRoute
	) { }

	ngOnInit(): void {
	
		this.httpClient.get("assets/quiz-data.json").subscribe(data =>{
			this.questionList = data;

			// get the type of quiz we are looking for
			this.route.queryParams.subscribe(params => {
				this.type = params["type"];
			})
			
			for (let id in this.questionList){
				if(this.questionList[id].type == this.type){
					this.questions = this.questionList[id]
				}
			}
		});

		
	}
	
	nextQuestion() {
		console.log("next")
		console.log(this.pickedAnswers.length)
		console.log(this.count)
		if (this.count + 1 <= this.pickedAnswers.length) {
			this.count++;
			this.progressPercentage = this.progressPercentage + 20;
			this.toggle = [true, true, true, true, true];
		} 
		else{
			alert("Please select an answer before moving onto the next question");
		}
		
		
		if (this.pickedAnswers.length >= this.count){
			this.toggle[this.pickedAnswers[this.count][2]-1] = false;
		}
		
	
	}
	
	prevQuestion() {
		if ( this.count != 0) {
			this.count--;
			//this.pickedAnswers.pop();
		}
		this.progressPercentage = this.progressPercentage - 20;
		
		console.log(this.pickedAnswers)
		this.toggle = [true, true, true, true, true];
		this.toggle[this.pickedAnswers[this.count][2] - 1] = false;
	}
	
	startQuiz() {
		this.started = true;
	}

	doneFunction() {
		if(this.pickedAnswers.length < 5){
			alert("Must pick an answer before you finish the quiz")
		}
		else{
			return "/result";
		}

	}
	
	saveOption (value : string, id: number) {
		
		this.toggle[this.prevToggleIndex] = true;
		this.toggle[id-1] = !this.toggle[id-1];
		this.prevToggleIndex = id-1;
	
		if (this.pickedAnswers[this.count] == undefined) {
			this.pickedAnswers.push([this.count+1, value, id]);
		}
		else {
		
			this.pickedAnswers[this.count][1] = value;
			this.pickedAnswers[this.count][2] = id;
		}
	
		console.log("Save")
		console.log(this.pickedAnswers.length);
		console.log(this.count);
	}



}
