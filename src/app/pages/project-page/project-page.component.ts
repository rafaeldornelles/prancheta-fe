import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { DialogBriefingComponent } from 'src/app/components/dialog-briefing/dialog-briefing.component';
import { DialogConstructionComponent } from 'src/app/components/dialog-construction/dialog-construction.component';
import { Briefing } from 'src/app/model/Briefing';
import { Project } from 'src/app/model/Project';
import { ProjectStepType } from 'src/app/model/ProjectStep';
import { User } from 'src/app/model/User';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit{
  key?: string
  project?: Project
  error = false
  loading = true
  showCard=true

  isFeedbackAvaliable=false
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProjectService,
    private dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
      this.activatedRoute.queryParams.pipe(
        map(params => params["key"]),
        mergeMap(key => {
          this.key = key
          return this.service.getClientProject(key)
        })
      ).subscribe({
        next: project => {
          console.log(project)
          this.project = project
          this.loading = false
          console.log(project)
          this.isFeedbackAvaliable = this.project.steps.some(ps => ps.type == ProjectStepType.FEEDBACK_REQUEST) && 
            !this.project.steps.some(ps => ps.type == ProjectStepType.FEEDBACK_RESPONSE)
        },
        error: () => {
          console.log(this.error)
          this.loading = false
          this.error = true
        }
      })
  }

  get clientName() {
    console.log(this.project)
    if(this.project?.briefing) {
      const briefing = this.project.briefing as Briefing
      return briefing.client.name
    }
    return ""
  }

  get archName() {
    if(this.project) {
      const user = this.project.user as User
      return `${user.firstName} ${user.lastName}`
    }
    return ""
  }

  refresh() {
    location.reload()
  }

  openBriefingDialog() {
    this.dialog.open(DialogBriefingComponent, {
      data: {
        briefing: this.project?.briefing
      }
    })
  }

  openContructionDialog() {
    this.dialog.open(DialogConstructionComponent, {
      data: {
        steps: this.project?.steps.filter(ps => ps.type == ProjectStepType.VISITATION)
      }
    })
  }
}
