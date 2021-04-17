import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';

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
		padding: 5%;
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
	
	.progbar {
		margin-top: 5%;
		margin-bottom: 2%;
	}
	
	.userinput {
		width: 20% !important;
		margin: 1rem !important;
	}
	
	.timer {
    	text-align: center;
    	font-family: Arial, sans-serif;
    	font-size: 1.4em;
    	letter-spacing: -1px;
  	}
  	.timer span {
    	font-size: 2em;
    	margin: 0 3px 0 15px;
  	}
  	
  	.btn-circle.btn-xl {
            width: 60px;
            height: 60px;
            padding-top: 14px;
            border-radius: 30px;
            font-size: 20px;
            text-align: center;
            float: right;
        }
        
	`
  ]
})
export class EmojiquizComponent implements OnInit, OnDestroy {

	progressPercentage: number = 0;
	started: boolean = false;
	questionList: any = [];
	questions: any = [];
	type : string = "";
	count: number = 0;
	userinput: string = "";
	correctAnswer: string = "";
  
	private subscription: Subscription;
  
	public dateNow = new Date();
    public dDay = new Date();
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference;
    public secondsToDday = 30;
    timerOff: boolean = true;
    timerStatus: string = "stilltime";
    size: any = 0.3;
    color: string = "black";

  	
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
			//this.type = "Guess Food By Emoji";
			this.route.queryParams.subscribe(params => {
				this.type = params["type2"];
			})
			
			for (let id in this.questionList){
				if(this.questionList[id].type == this.type){
					this.questions = this.questionList[id]
				}
			}
		});  

  }
  
  startQuiz() {
  
  	this.subscription = interval(1000)
    .subscribe(x => { 
           		if (this.secondsToDday <= 1) {
           			this.size = 1;
           			this.color = "red";
           		}
           		if (this.timerOff){
           			this.getTimeDifference();
           		}
           		
    }); 
   

  	this.progressPercentage = 20;
  	this.started = true;
  	this.dDay.setSeconds(this.dDay.getSeconds() + 62); 
  }
  
  nextQuestion() {
	if (this.count != 4) {
		this.count++;
	}
	this.progressPercentage = this.progressPercentage + 20;
	this.correctAnswer = "";
	this.secondsToDday = 30;
	this.timerOff = true;
	this.timerStatus = "stilltime";
   }

   	prevQuestion() {
		if ( this.count != 0) {
			this.count--;
		}
		this.progressPercentage = this.progressPercentage - 20;
		this.correctAnswer = "";
		this.secondsToDday = 30;
		this.timerOff = true;
		this.timerStatus = "stilltime";
	}
	
	checkAnswer(value: string) {
		this.userinput = value;	
	}
	
	check() {
		if (this.userinput === this.questions.questions[this.count].correct_answer) {
			this.correctAnswer = "correct";
		}
		else {
			this.userinput = "error";
			this.correctAnswer = "wrong";
		}
	}
	
	proceedAvailable() {
		if (this.correctAnswer === "correct" || this.timerOff == false)
			return true;
		else
			return false;
	}

	private getTimeDifference () {
		this.secondsToDday = this.secondsToDday - 1;
		console.log(this.secondsToDday);
		if (this.secondsToDday == 0) {
			this.timerOff = false;
		}
		if (this.secondsToDday == 5) {
			this.timerStatus = "timeupsoon";
		}
		console.log(this.timerStatus);

		
        //this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        //this.allocateTimeUnits(this.timeDifference);
    }

	ngOnDestroy() {
     this.subscription.unsubscribe();
    }

}
