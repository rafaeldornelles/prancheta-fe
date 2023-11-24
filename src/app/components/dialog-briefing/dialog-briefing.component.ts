import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Briefing } from 'src/app/model/Briefing';
import { Question } from 'src/app/model/Question';

@Component({
  selector: 'app-dialog-briefing',
  templateUrl: './dialog-briefing.component.html',
  styleUrls: ['./dialog-briefing.component.scss']
})
export class DialogBriefingComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogBriefingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

  get briefing() {
    return this.data.briefing
  }

  close() {
    this.dialogRef.close()
  }
  images(question: Question) {
    const images = []
    for (let opt of question.options??[]) {
      if(question.answer?.includes(opt.text) && opt.image) {
        images.push(opt.image)
      }
    }
    return images
  }
}

export interface DialogData {
  briefing: Briefing
}