import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { answerFeedbackRequest } from '../model/AnswerFeedbackRequest';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  base_url = "https://prancheta-be.azurewebsites.net" //todo: colocar em env

  constructor(
    private http: HttpClient
  ) { }

  getClientProject(key: string) {
    console.log(this.http)
    return this.http.get<Project>(`${this.base_url}/project/client?key=${key}`)
  }

  answerFeedback(body: answerFeedbackRequest) {
    return this.http.post(`${this.base_url}/projectstep/client/feedback`, body)
  }
}
