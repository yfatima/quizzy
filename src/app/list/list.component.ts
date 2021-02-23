import { Component, OnInit } from '@angular/core';
import * as quizDataJSON from '../../assets/quiz-data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  quizData;

  constructor() { }

  ngOnInit(): void {
    this.quizData = quizDataJSON;
    this.quizData = this.quizData.default;
  }

}
