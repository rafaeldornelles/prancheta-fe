import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question } from 'src/app/model/Question';

@Component({
  selector: 'app-radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.scss']
})
export class RadioQuestionComponent {
  @Input() question!: Question
  @Input() control!: FormControl
}
