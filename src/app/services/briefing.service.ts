import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Briefing } from '../model/Briefing';
import { AnswerBriefingRequest } from '../model/AnswerBriefingRequest';

@Injectable({
  providedIn: 'root'
})
export class BriefingService {
  base_url = "https://prancheta-be.azurewebsites.net/"
  constructor(
    private http: HttpClient
  ) { }

  getBriefing(key: string) {
    return this.http.get<Briefing>(`${this.base_url}/briefing/client?key=${key}`)
  }

  answerBriefing(payload: AnswerBriefingRequest) {
    return this.http.put<Briefing>(`${this.base_url}/briefing/client/answer`, payload)
  }
}
