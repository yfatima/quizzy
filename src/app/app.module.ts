import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { SignupComponent } from './signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


const config = {
  apiKey: "AIzaSyBpOlQxHOQVJw7bqidKA5mJAFaJZpOYwfs",
  authDomain: "quizzie-4c9e8.firebaseapp.com",
  databaseUrl: "https://quizzie-4c9e8-default-rtdb.firebaseio.com",
  projectId: "quizzie-4c9e8",
  storageBucket: "quizzie-4c9e8.appspot.com",
  messagingSenderId: "468120506353",
  appId: "1:468120506353:web:549e035186ab0e05df3e50",
  measurementId: "G-RPFFMSB4D7"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    QuizComponent,
    LoginComponent,
    ResultComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignupComponent]
})
export class AppModule { }
