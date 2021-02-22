import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.Component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .navbar-brand{
      font-size: 25px;
    }
    .nav-item{
      font-size: 16px;
    }
  
  ` 
  ]
})
export class HeaderComponent implements OnInit {

  constructor( private dialog: MatDialog,
  			   public auth: AuthService 
  ) { }

  ngOnInit(): void {
  
  }
  
/*onLogin() {
  	const dialogConfig = new MatDialogConfig();
  	dialogConfig.disableClose = true;
  	dialogConfig.autoFocus = true;
  	dialogConfig.width = "40%";
  	dialogConfig.height = "40%";
  	this.dialog.open(LoginComponent, dialogConfig);
  }
 */ 
  onSignup() {
  	const dialogConfig = new MatDialogConfig();
  	dialogConfig.disableClose = true;
  	dialogConfig.autoFocus = true;
  	dialogConfig.width = "40%";
  	dialogConfig.height = "50%";
  	this.dialog.open(SignupComponent, dialogConfig);
  }
}
