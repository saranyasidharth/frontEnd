import { Component, OnInit } from '@angular/core';
import { EmployeerequestService } from 'src/app/Services/Employee/employeerequests/employeerequest.service';

@Component({
  selector: 'app-employeerequests',
  templateUrl: './employeerequests.component.html',
  styleUrls: ['./employeerequests.component.css']
})
export class EmployeerequestsComponent implements OnInit {

  requests=[];
  constructor(private EmployeerequestService: EmployeerequestService) { }
  
  ngOnInit(): void {
    this.requests=[];
    this.EmployeerequestService.getPendingRequests()
      .subscribe(
        res => this.requests = res,
        err => console.log(err)
      )
 
  }

  /* Accept a request */
  acceptRequest(orderId){
    this.EmployeerequestService.acceptRequest(orderId)
      .subscribe(
        res=> {console.log(res), this.ngOnInit()},
        err=> console.log(err)
      )
  }

  /* Reject a request */
  rejectRequest(orderId){
    this.EmployeerequestService.rejectRequest(orderId)
      .subscribe(
        res=> this.ngOnInit(),
        err=> console.log(err)
      )
  }

}
