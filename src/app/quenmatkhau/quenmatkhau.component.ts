import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  formSudent = {
    username: "",
    fullname: "",
    email: "",
    passwordnew: "",
  }
  students;
    
  constructor(private d: DataserviceService, private router: Router) {
    this.d.getstudents().subscribe(data => {
      this.students = data;

    })
   }

  ngOnInit() {
  }
  dem = 0;
  chua = -1;
  EditPass() {
    for (let index = 0; index < this.students.length; index++) {
      if (this.formSudent.username === this.students[index].username &&
        this.formSudent.fullname === this.students[index].fullname &&
        this.formSudent.email === this.students[index].email) {
        this.dem++;
        this.chua = index;
      }

    }
    if (this.dem === 1) {
      confirm("Thông tin chính xác,bạn có chắc muốn đổi?")
      this.students[this.chua].password = this.formSudent.passwordnew;
      this.formSudent = {
        username: "",
        fullname: "",
        email: "",
        passwordnew: "",
      }
    }
    else {
      alert("Thông tin không chính xác")
      this.formSudent = {
        username: "",
        fullname: "",
        email: "",
        passwordnew: "",
      }
    }
  }
}
