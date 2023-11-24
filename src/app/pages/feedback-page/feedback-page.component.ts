import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { answerFeedbackRequest } from 'src/app/model/AnswerFeedbackRequest';
import { Briefing, Client } from 'src/app/model/Briefing';
import { Project } from 'src/app/model/Project';
import { ProjectStepType } from 'src/app/model/ProjectStep';
import { User } from 'src/app/model/User';
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
  error = false
  loading = true
  success = false
  sent= false
  showCard=true

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
        this.loading = false

        if (!this.project.steps.some(ps => ps.type == ProjectStepType.FEEDBACK_REQUEST) || this.project.steps.some(ps => ps.type == ProjectStepType.FEEDBACK_RESPONSE)) {
          this.error = true
        }
      },
      error: () => {
        this.error = true
        this.loading = false
      }
    })  
  }

  submit() {
    const payload = <answerFeedbackRequest>{
      key: this.key,
      type: ProjectStepType.FEEDBACK_RESPONSE,
      text: this.control.value
    }
    this.loading = true
    this.sent = true
    this.service.answerFeedback(payload).subscribe({
      next: () => {
        this.success = true
        this.loading = false
      },
      error: (e) => {
        this.error = true
        this.loading = false
      }
    })
  }

  refresh() {
    location.reload()
  }

  get senderName() {
    if(this.project) {
      const user = this.project.user as User
      return `${user.firstName} ${user.lastName}` ?? ""
    }
    return ""
  }

  get clientName() {
    if(this.project) {
      const briefing = this.project.briefing as Briefing
      return briefing.client.name ?? ""
    }
    return ""
  }
}
