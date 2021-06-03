import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { StudentcountService } from './studentcount.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudentcountService', () => {
  let service: StudentcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(StudentcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
