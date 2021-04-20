import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
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
		//console.log("next")
		//console.log(this.pickedAnswers.length)
		//console.log(this.count)
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
		
		//console.log(this.pickedAnswers)
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
