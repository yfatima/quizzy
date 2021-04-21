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
import { EmojiquizComponent } from './emojiquiz/emojiquiz.component';
import { HelpComponent } from './help/help.component';
import { EmojiresultComponent } from './emojiresult/emojiresult.component';
import { ChartsModule } from 'ng2-charts';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAngHVsh2ZXWIfC3jLfNlkHGyggGB-tySM",
  authDomain: "quizzie-v4.firebaseapp.com",
  projectId: "quizzie-v4",
  storageBucket: "quizzie-v4.appspot.com",
  messagingSenderId: "1026726533867",
  appId: "1:1026726533867:web:5e39cb890e174f72bffcae",
  measurementId: "G-4X18D6X495"
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
    SignupComponent,
    EmojiquizComponent,
    HelpComponent,
    EmojiresultComponent
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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignupComponent]
})
export class AppModule { }
