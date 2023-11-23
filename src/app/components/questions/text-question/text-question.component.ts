import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question, QuestionType } from 'src/app/model/Question';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent implements OnInit {
  @Input("question") question!: Question
  @Input("control") control!: FormControl

  ngOnInit(): void {
    this.control.valueChanges.subscribe(this.onChange.bind(this))
  }

  get questionInput() {
    if (this.question.questionType == QuestionType.TEXT) {
      return "text"
    }
    else if (this.question.questionType == QuestionType.NUMBER) {
      return "numeric"
    }
    else if (this.question.questionType == QuestionType.CURRENCY) {
      return "decimal"
    }
    return "text"
  }

  onChange(value: string) {
    if (this.question.questionType == QuestionType.NUMBER && value.startsWith("0") && value.length >1) {
      this.control.setValue(parseInt(value).toString())
    }
    
    if (this.question.questionType == QuestionType.CURRENCY) {
      const desiredFormat = new RegExp("^[0-9]+,[0-9]{2}$")
      if (!desiredFormat.test(value) || (value.startsWith("0") && value.length > 4)) {
        console.log(value)
        const currValue = value.replace(",", "").padStart(3, "0")
        const decimalValue = currValue.substring(0, currValue.length - 2) + "." + currValue.substring(currValue.length - 2)
        this.control.setValue(parseFloat(decimalValue).toFixed(2).toString().replace(".", ","))
      }
    }
  }
}
