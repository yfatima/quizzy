import { Component, OnInit } from '@angular/core';
import * as quizDataJSON from '../../assets/quiz-data.json';
import * as emojiQuizDataJSON from '../../assets/emojiquiz-data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  quizData;
  emojiQuizData;

  constructor() { }

  ngOnInit(): void {
    this.quizData = quizDataJSON;
    this.quizData = this.quizData.default;
    this.emojiQuizData =  emojiQuizDataJSON;
    this.emojiQuizData = this.emojiQuizData.default;
  }

}
