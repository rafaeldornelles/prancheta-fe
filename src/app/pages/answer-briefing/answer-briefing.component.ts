import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { AnswerBriefingRequest } from 'src/app/model/AnswerBriefingRequest';
import { Briefing } from 'src/app/model/Briefing';
import { QuestionType } from 'src/app/model/Question';
import { User } from 'src/app/model/User';
import { BriefingService } from 'src/app/services/briefing.service';

@Component({
  selector: 'app-answer-briefing',
  templateUrl: './answer-briefing.component.html',
  styleUrls: ['./answer-briefing.component.scss']
})
export class AnswerBriefingComponent implements OnInit {
  loading = true
  error = false
  briefing: Briefing | null = null
  formGroup = new FormGroup({})
  key?: string
  success = false
  showCard= true

  constructor(
    private briefingService: BriefingService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      map(params => params["key"]),
      mergeMap(key => {
        this.key = key
        return this.briefingService.getBriefing(key)
      })
    ).subscribe({
      next: (briefing) => {
        this.briefing = briefing
        console.log(this.briefing)
        this.loading = false
        this.initFormGroup()
      },
      error: (err) => {
          this.error = true
          this.loading = false
      }
    })
  }

  initFormGroup() {
    for(let question of this.briefing!.questions) {
      if(question.questionType != QuestionType.MULTIPLE_OPTIONS) {
        this.formGroup.addControl(question._id, new FormControl({value: "", disabled:false}, Validators.required))
      } else {
        this.formGroup.addControl(question._id, new FormGroup({}, Validators.required))
        for (let option of question.options??[]) {
          (this.formGroup.get(question._id) as FormGroup).addControl(option.text, new FormControl({value: false, disabled: false}))
        }
      }
    }
  }

  getControlByQuestionId(qid: string) {
    return this.formGroup.get(qid) as any
  }

  isButtonEnabled(){
    return this.formGroup.valid
  }

  submitAnswers(){
    const answers = Object.values(this.formGroup.value).map(item => {
      if(typeof item == "object") {
        return Object.entries(item!).filter(entry=> entry[1]===true).map(entry => entry[0]).join(",")
      } else {
        return item!.toString()
      }
    })
    const payload = <AnswerBriefingRequest>{
      key: this.key,
      answers: answers
    }
    this.loading = true
    this.briefingService.answerBriefing(payload).subscribe({
      next: () => {
        this.loading = false
        this.success = true
      },
      error: e => {
        this.error = true
        this.loading = false
      }
    })
  }

  refresh(){
    location.reload()
  }

  get senderName() {
    const sender = this.briefing?.sender as User
    if(sender && typeof sender == "object")
    return `${sender.firstName} ${sender.lastName}`
    return ""
  }

}
