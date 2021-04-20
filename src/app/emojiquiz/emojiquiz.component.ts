import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-emojiquiz',
  templateUrl: './emojiquiz.component.html',
  styleUrls: ['./emojiquiz.component.css']
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
    public secondsToDday = 10;
    timerOff: boolean = true;
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
	this.secondsToDday = 10;
	this.timerOff = true;
   }

   	prevQuestion() {
		if ( this.count != 0) {
			this.count--;
		}
		this.progressPercentage = this.progressPercentage - 20;
		this.correctAnswer = "";
		this.secondsToDday = 10;
		this.timerOff = true;
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
		console.log(this.timerOff);

		
        //this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        //this.allocateTimeUnits(this.timeDifference);
    }

	ngOnDestroy() {
     this.subscription.unsubscribe();
    }

}
