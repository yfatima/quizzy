import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  quizData: any = [];
  type: string = ""; 
  allResults: any = [];
  result: any = {};

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient.get("assets/quiz-data.json").subscribe(data => {
      this.quizData = data;

      this.route.queryParams.subscribe(params => {
        console.log(params)
        this.type = params["type"];
      
        for (let id in this.quizData){
          if(this.quizData[id].type == this.type){
            this.allResults = this.quizData[id].result;
          }
        }

        this.result = this.allResults[0];
      })
    })
  }

}
