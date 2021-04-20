import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { SignupComponent } from './signup/signup.component';
import { EmojiquizComponent } from './emojiquiz/emojiquiz.component';
import { EmojiresultComponent } from './emojiresult/emojiresult.component';
import { HelpComponent }  from './help/help.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent},
  { path:'list', component: ListComponent},
  { path:'quiz', component: QuizComponent},
  { path:'result', component: ResultComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'emojiquiz', component: EmojiquizComponent},
  { path:'emojiresult', component: EmojiresultComponent},
  { path:'help', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
