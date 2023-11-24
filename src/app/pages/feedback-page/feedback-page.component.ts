import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { answerFeedbackRequest } from 'src/app/model/AnswerFeedbackRequest';
import { Project } from 'src/app/model/Project';
import { ProjectStepType } from 'src/app/model/ProjectStep';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss']
})
export class FeedbackPageComponent implements OnInit {
  control = new FormControl("", Validators.required)
  key?: string
  project?: Project

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProjectService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      map(params => params["key"]),
      mergeMap(key => {
        this.key = key
        return this.service.getClientProject(key)
      })
    ).subscribe({
      next: project => {
        this.project = project
      }
    })  
  }
  submit() {
    const payload = <answerFeedbackRequest>{
      key: this.key,
      type: ProjectStepType.FEEDBACK_RESPONSE,
      text: this.control.value
    }
    console.log("aaa")
    this.service.answerFeedback(payload).subscribe({
      next: () => {
        console.log("deu bom")
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
}
