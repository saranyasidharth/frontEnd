import { Component, OnInit } from '@angular/core';
import { StudentcountService } from 'src/app/Services/Admin/studentcount/studentcount.service';
import { EmployeeapprovalService } from 'src/app/Services/Admin/employeeApproval/employeeapproval.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  /* variables */
  activeServicesCount :number;
  studentsCount: number;
  employeesCount : number;
  completedordersCount : number;


  constructor(
              private _EmployeeService : EmployeeapprovalService,
              private _studentService : StudentcountService,
            ) { }

  ngOnInit() {
    // this._planService.countServices()
    //     .subscribe(
    //       res => this.activeServicesCount = res,
    //       err => console.log(err)
    //     )

    this._EmployeeService.countEmployees()
          .subscribe(
            res => this.employeesCount = res,
            err => console.log(err)
          )

    this._studentService.studentsCount()
          .subscribe(
            res => this.studentsCount = res,
            err => console.log(err)
          )

 
  }

}
