import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subjects;
  constructor(private d: DataserviceService) { }

  ngOnInit() {
    this.d.getsubjects().subscribe(data => {
      this.subjects = data;

    })
  }
}
