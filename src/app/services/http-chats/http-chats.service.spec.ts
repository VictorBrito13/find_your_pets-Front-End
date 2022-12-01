import { TestBed } from '@angular/core/testing';

import { HttpChatsService } from './http-chats.service';

describe('HttpChatsService', () => {
  let service: HttpChatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpChatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
