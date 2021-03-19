import { Component, OnInit } from '@angular/core';
import * as quizDataJSON from '../../assets/quiz-data.json';
import * as emojiQuizDataJSON from '../../assets/emojiquiz-data.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizData;
  emojiQuizData;

  constructor() { 
  }

  ngOnInit(): void {
    this.quizData = quizDataJSON;
    this.quizData = this.quizData.default;
    this.emojiQuizData =  emojiQuizDataJSON;
    this.emojiQuizData = this.emojiQuizData.default;
 }

}
