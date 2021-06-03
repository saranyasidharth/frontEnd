import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeEditProfileComponent } from './employee-edit-profile.component';
import { HttpClientTestingModule} from '@angular/common/http/testing'

describe('EmployeeEditProfileComponent', () => {
  let component: EmployeeEditProfileComponent;
  let fixture: ComponentFixture<EmployeeEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[RouterTestingModule, HttpClientTestingModule],
      declarations: [ EmployeeEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
