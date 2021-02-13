import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent},
  { path:'list', component: ListComponent},
  { path:'quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
