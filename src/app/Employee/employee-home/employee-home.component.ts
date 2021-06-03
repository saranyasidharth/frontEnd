import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/Employee/profile/profile.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
