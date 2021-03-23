import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: [ './help.component.css' ]
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
