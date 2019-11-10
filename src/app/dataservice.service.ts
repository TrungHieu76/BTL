import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  username;
  urlStudent = "../assets/db/Students.json";
  urlSubject = "../assets/db/Subjects.json";
  getstudents() {
    return this.http.get(this.urlStudent);
  }
  getsubjects() {
    return this.http.get(this.urlSubject);
  }
  getQuiz(url: string) {
    return this.http.get(url);
  }
  constructor(private http: HttpClient) { }
}



