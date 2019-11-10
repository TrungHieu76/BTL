import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './../dataservice.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  subject: any;
  sodong = 4;
  sotrang = 1;


  constructor(private service: DataserviceService) { }

  ngOnInit() {
    this.service.getsubjects().subscribe(data => {
      this.subject = data;
      console.log('subjevv0', this.subject)
    })
  }

  nextpage() {
    if (this.sodong > this.sotrang) {
      this.sotrang++;
    }
  }
  luipage() {
    if (this.sotrang > 1) {
      this.sotrang--;
    }
  }

}
