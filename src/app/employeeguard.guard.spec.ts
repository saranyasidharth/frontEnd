import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { EmployeeguardGuard } from './employeeguard.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeguardGuard', () => {
  let guard: EmployeeguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(EmployeeguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
