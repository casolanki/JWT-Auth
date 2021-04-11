import { TestBed } from '@angular/core/testing';

import { AdminAuthgaurd } from './admin-auth.gaurd';

describe('AdminAuthgaurdService', () => {
  let service: AdminAuthgaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthgaurd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
