import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerBriefingComponent } from './pages/answer-briefing/answer-briefing.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';

const routes: Routes = [
  {path:"client/briefing", component: AnswerBriefingComponent},
  {path:"client/project", component: ProjectPageComponent},
  {path:"client/project-feedback", component: FeedbackPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
