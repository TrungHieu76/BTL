import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  students;
  email;
  password;
  constructor(private d: DataserviceService, private router: Router) { }

  ngOnInit() {
    this.d.getstudents().subscribe(data => {
      this.students = data;

    })
  }
  login() {

    for (let i = 0; i < this.students.length; i++) {
      if (this.email == this.students[i].email && this.password == this.students[i].password) {
        alert('dang nhap thanh cong');
        this.d.username = this.students[i].username;
          this.router.navigate(['/danhmucmh']);
        return;

      }

    }
    alert('dang nhap khong thanh cong');
  }
}


