import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/model/Question';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.scss']
})
export class MultipleQuestionComponent {
  @Input() question!: Question
  @Input() control!: FormGroup
}
