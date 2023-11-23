import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerBriefingComponent } from './pages/answer-briefing/answer-briefing.component';

const routes: Routes = [
  {path:"client/briefing", component: AnswerBriefingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
