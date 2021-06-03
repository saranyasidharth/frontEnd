import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

// import { CreatPlanComponent } from './Admin/creat-plan/creat-plan.component';
// import { CreateAddonComponent } from './Admin/create-addon/create-addon.component';
// import { CreateCarComponent } from './Admin/create-car/create-car.component';
// import { EditAddonComponent } from './Admin/edit-addon/edit-addon.component';
// import { EditCarComponent } from './Admin/edit-car/edit-car.component';
// import { EditPlanComponent } from './Admin/edit-plan/edit-plan.component';
// import { PlansManagementComponent } from './Admin/plans-management/plans-management.component';
import { EmployeeguardGuard } from './employeeguard.guard';

import { EmployeeApprovalComponent } from './Admin/employee-approval/employee-approval.component';
// import { StudentHomeComponent } from './Student/student-home/student-home.component';
// import { StudentdashboardComponent } from './Student/studentdashboard/studentdashboard.component';
// import { StudentprofileComponent } from './Student/studentprofile/studentprofile.component';
// import { EditprofileComponent } from './Student/editprofile/editprofile.component';
// import { LeaderboardComponent } from './Student/leaderboard/leaderboard.component';
// import { MyordersComponent } from './Student/myorders/myorders.component';
// import { OrderComponent } from './Student/order/order.component';
// import { ServicesComponent } from './services/services.component';
import { EmployeeEditProfileComponent } from './Employee/employee-edit-profile/employee-edit-profile.component';
import { EmployeeHomeComponent } from './Employee/employee-home/employee-home.component';
import { EmployeedashboardComponent } from './Employee/employeedashboard/employeedashboard.component';
import { EmployeeprofileComponent } from './Employee/employeeprofile/employeeprofile.component';
import { EmployeerequestsComponent } from './Employee/employeerequests/employeerequests.component';
import { AuthGuard } from './auth.guard';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
		{
			path:'',
			component:HomeComponent
		},
		{
			path:'help',
			component:HelpComponent
		},
		{
			path:'signup',
			component:SignupComponent
		},
		{
			path:'login',
			component:LoginComponent
		},
		{
			path:'student',
			canActivate: [AuthGuard],
			component:StudentComponent
		},
 		{
			 path: 'employeeApproval',
			  component : EmployeeApprovalComponent, 
			  canActivate:[AdminGuardGuard]
		},
		{
			path:'recruiter',
			canActivate: [AuthGuard],
			component:RecruiterComponent
		},
		{
			path:'recruiter/adminaddstudent',
			component:AdminAddStudentComponent
		},
		{
			path:'recruiter/edit/:id',
			component:AdminAddStudentComponent
		},
		{ path :'admin', component : AdminLoginComponent},
		{ path : 'adminDashboard', component:AdminDashboardComponent, canActivate:[AdminGuardGuard],
			children:[
			  {path: 'adminHome',component: AdminHomeComponent, canActivate:[AdminGuardGuard]},
			  {path: 'employeeApproval', component : EmployeeApprovalComponent, canActivate:[AdminGuardGuard]},
			]
		},
		{ path: 'employeeDashboard', component:EmployeedashboardComponent,  canActivate:[EmployeeguardGuard],
		children:[
		  {path: 'employeeHome', component: EmployeeHomeComponent,  canActivate:[EmployeeguardGuard]},
		  {path: 'employeeProfile', component: EmployeeprofileComponent,  canActivate:[EmployeeguardGuard] },
		  {path: 'editemployeeProfile', component: EmployeeEditProfileComponent,  canActivate:[EmployeeguardGuard]},
		  {path: 'employeeRequests', component: EmployeerequestsComponent,  canActivate:[EmployeeguardGuard]},
		]  
	}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { };
export const routingComponents =[ HomeComponent,LoginComponent,SignupComponent,EmployeeEditProfileComponent,StudentComponent, RecruiterComponent,EmployeeprofileComponent, AdminDashboardComponent, AdminHomeComponent, AdminLoginComponent,EmployeeHomeComponent,EmployeedashboardComponent];



