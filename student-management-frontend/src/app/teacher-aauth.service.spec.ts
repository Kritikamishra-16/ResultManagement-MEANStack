import { TestBed } from '@angular/core/testing';

import { TeacherAauthService } from './teacher-aauth.service';

describe('TeacherAauthService', () => {
  let service: TeacherAauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherAauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
