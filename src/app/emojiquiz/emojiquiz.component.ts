import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-emojiquiz',
  templateUrl: './emojiquiz.component.html',
  styleUrls: ['./emojiquiz.component.css']
})
export class EmojiquizComponent implements OnInit, OnDestroy, AfterViewChecked {

	progressPercentage: number = 0;
	started: boolean = false;
	questionList: any = [];
	questions: any = [];
	type : string = "";
	count: number = 0;
	userinput: string = "";
	correctAnswer: string = "";
	userAnswers: any = ["default", "default", "default", "default", "default"];
  
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

	ngAfterViewChecked(): void{
		$('[data-toggle="tooltip"]').tooltip();
	}

	
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
		if (this.userinput.toLowerCase().trim() === this.questions.questions[this.count].correct_answer) {
			this.correctAnswer = "correct";
		}
		else {
			this.userinput = "incorrect";
			this.correctAnswer = "wrong";
		}
		this.userAnswers[this.count] = this.userinput;
		console.log(this.userAnswers);
	}
	
	proceedAvailable() {
		if (this.correctAnswer === "correct" || this.timerOff == false)
			return true;
		else
			return false;
	}

	private getTimeDifference () {
		this.secondsToDday = this.secondsToDday - 1;
		//console.log(this.secondsToDday);
		if (this.secondsToDday == 0) {
			this.timerOff = false;
		}
		if (this.secondsToDday == 5) {
			this.timerStatus = "timeupsoon";
		}
		//console.log(this.timerStatus);

		
        //this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        //this.allocateTimeUnits(this.timeDifference);
    }
    
    getinput() {
    	return this.userAnswers;
    }

	ngOnDestroy() {
     this.subscription.unsubscribe();
    }

}
