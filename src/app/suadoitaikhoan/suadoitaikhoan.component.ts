import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suadoitaikhoan',
  templateUrl: './suadoitaikhoan.component.html',
  styleUrls: ['./suadoitaikhoan.component.css']
})
export class SuadoitaikhoanComponent implements OnInit {
  formSudent = {
    id: 0,
    username: "",
    fullname: "",
    email: "",
    password: "",
    gender: "",
    birthday: new Date().toISOString().substring(0, 10),
  }
  students;
  constructor(private d: DataserviceService, private router: Router) {
    this.d.getstudents().subscribe(data => {
      this.students = data;

    })
  }

  ngOnInit() {
  }
  selectStudentId = -1;
  ShowEditStudent(students) {
    this.formSudent = {
      id: students.id,
      username: students.username,
      fullname: students.fullname,
      email: students.email,
      password: students.password,
      gender: students.gender,
      birthday: new Date().toISOString().substring(0, 10),
    }
    this.selectStudentId = this.formSudent.id
  }
  SaveStudentEdit(id: number) {
    let index = this.students.indexOf(this.students.find(sv => sv.id === id));
    this.students[index] = Object.assign(this.formSudent);
    this.selectStudentId = -1;
    this.formSudent = {
      id: 0,
      username: "",
      fullname: "",
      email: "",
      password: "",
      gender: "",
      birthday: new Date().toISOString().substring(0, 10),
    }
  }
}
