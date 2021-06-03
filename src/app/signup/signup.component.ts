import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthServiceService } from 'src/app/Services/Student/auth/auth-service.service';
import { AuthServices } from 'src/app/Services/Employee/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  selected= "Student";
  emailError ='';
  passwordError ='';
  showMessage = false;
  succcessMsg = 'Thanks for registration! You will notified via mail after the admin approval.';
  constructor(private router : Router, private _auth: AuthServiceService, private _employeeAuth : AuthServices) { }

  ngOnInit(): void {
    this.showMessage= false;
  }

  /* Show and hide password */
  showpass(x,text)
  {
    if (x.type === "password") {
      x.type = "text";
      text.text = "Hide"
    } else {
      text.text ="Show";
      x.type = "password";
    }
  }

  /* Register the user */
  register(student)
  {
    this.emailError= ''; this.passwordError='';
    if(student.value.role == 'Student'){
      let user = { email: student.value.email, password : student.value.password};
      this._auth.registerStudent(user)
      .subscribe(
        res => {
          localStorage.setItem('cjwt',res.token)
          this.router.navigate(['/recruiter'])
        },
        err => {this.emailError =err.error.email, this.passwordError = err.error.password}
      )
    }

    if(student.value.role == 'Employee'){
      let user = { email: student.value.email, password : student.value.password};
      this._employeeAuth.registerEmployee(user)
      .subscribe(
        res => {
          student.reset();
          this.showMessage = true;
        },
        err => {
         this.emailError =err.error.email; 
          this.passwordError = err.error.password;
          console.log(err);
        }
      )
    }
     
  } 


}
