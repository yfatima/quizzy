import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  `
  	.title {
  		background-color: #006BE1;
  		color: white;
  		padding: 1rem;
  		display: flex;
  	}
  	
  	.login {
  		margin: 1rem;
  	}
  	
  	.libtn {
  		width: 50%;
  	}
  	
  	.exitlogin {
  		margin-left: 75%;
  		border-width: medium !important;
  		padding: 0.5rem;
    	color: white;
  	}
  `
  ]
})
export class LoginComponent implements OnInit {
  
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });  
  
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  
  submitLogin() {
  	this.dialogRef.close();
  }
  
  close() {
  	this.dialogRef.close();
  }

}
