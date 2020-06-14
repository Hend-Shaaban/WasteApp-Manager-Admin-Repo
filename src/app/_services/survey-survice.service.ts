import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../port';
import { SurveyQuestions } from '../_models/survey-questions';

@Injectable({
  providedIn: 'root'
})
export class SurveySurviceService {
  port:Port=new Port()

addSurvey(survQues:SurveyQuestions[]){
  return this.http.post("http://localhost:"+this.port.port+"/api/survey/PostAddSurvey",survQues)
}
  constructor(private http:HttpClient) { }
}