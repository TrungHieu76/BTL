import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  formStudent = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: new Date().toISOString().substring(0, 10),
  }
  constructor(private http: HttpClient,private d: DataserviceService, private router: Router) { }
  students;
  ngOnInit() {
    this.d.getstudents().subscribe(data => {
      this.students = data;
      console.log(this.students);
    });
  
    
  }
  Addthongtin() {
    this.students.push(Object.assign(this.formStudent))
    this.formStudent = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      gender: "",
      birthday: new Date().toISOString().substring(0, 10),
    }
  }
}
