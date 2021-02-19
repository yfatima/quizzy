import { Component, OnInit } from '@angular/core';
import * as quizDataJSON from '../../assets/quiz-data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizData;

  constructor() { 
  }

  ngOnInit(): void {
    this.quizData = quizDataJSON;
    this.quizData = this.quizData.default;
  }

}
