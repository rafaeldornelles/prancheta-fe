import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectStep } from 'src/app/model/ProjectStep';

@Component({
  selector: 'app-dialog-construction',
  templateUrl: './dialog-construction.component.html',
  styleUrls: ['./dialog-construction.component.scss']
})
export class DialogConstructionComponent {
    baseUrl = "https://prancheta-be.azurewebsites.net" //todo: colocar em env
    openPanels = []
    constructor(
      public dialogRef: MatDialogRef<DialogConstructionComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
    ){}
  
    get steps() {
      return this.data.steps
    }

    close() {
      this.dialogRef.close()
    }
  }
  
  export interface DialogData {
    steps: ProjectStep[]
  }