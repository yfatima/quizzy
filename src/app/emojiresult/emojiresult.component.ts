import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-emojiresult',
  templateUrl: './emojiresult.component.html',
  styles: [ `
  	.result{
    padding-bottom: 10px;
    background-color: #2cd9d0;
    color: white;
}
  `
  ]
})
export class EmojiresultComponent implements OnInit {


  answers: any = [];
  
  data: any;
  result: number = 100;
  public chartType: string = 'pie';
  
  public chartDatasets: Array<any> = [
    { data: [20, 20, 20, 20, 20], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F75642', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  
  pieChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem, data) {
          return "Question " + (tooltipItem.index+1);
        },
      }
    },
  };


  constructor(private route: ActivatedRoute) { }
  
  

  ngOnInit() {
  	  this.route.queryParams.subscribe(params => {
        this.chartLabels = params["type"];
      	console.log(this.answers);
        });
        
        for(let i=0; i<this.chartLabels.length; i++){
    		 //use i instead of 0
    		 if (this.chartLabels[i] === "incorrect") {
    		 	this.chartColors[0].backgroundColor[i] = '#F75642';
    		 	this.chartColors[0].hoverBackgroundColor[i] = '#FF5A5E';
    		 	this.result = this.result - 20;
    		 }
    		 else {
    		 	this.chartColors[0].backgroundColor[i] = '#46BFBD';
    		 	this.chartColors[0].hoverBackgroundColor[i] = '#5AD3D1';
    		 }
		}
		console.log(this.chartColors[0].backgroundColor);	
		
        
  }

 
}
