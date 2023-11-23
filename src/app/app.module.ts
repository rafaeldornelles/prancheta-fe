import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerBriefingComponent } from './pages/answer-briefing/answer-briefing.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatRadioModule } from "@angular/material/radio"
import { MatButtonModule } from "@angular/material/button"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatIconModule } from "@angular/material/icon"
import { MatCardModule } from "@angular/material/card"
import { provideAnimations } from '@angular/platform-browser/animations';
import { TextQuestionComponent } from './components/questions/text-question/text-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputmodeDirective } from './components/directives/inputmode.directive';
import { RadioQuestionComponent } from './components/questions/radio-question/radio-question.component';
import { MultipleQuestionComponent } from './components/questions/multiple-question/multiple-question.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    AnswerBriefingComponent,
    TextQuestionComponent,
    InputmodeDirective,
    RadioQuestionComponent,
    MultipleQuestionComponent,
    AlertComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule, 
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
