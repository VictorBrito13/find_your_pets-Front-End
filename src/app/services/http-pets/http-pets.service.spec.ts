import { TestBed } from '@angular/core/testing';

import { HttpPetsService } from './http-pets.service';

describe('HttpPetsService', () => {
  let service: HttpPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
