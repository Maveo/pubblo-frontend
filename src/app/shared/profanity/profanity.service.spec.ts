import { TestBed } from '@angular/core/testing';

import { ProfanityService } from './profanity.service';
import { ChatService } from '../api/chat/chat.service';
import { provideHttpClient } from '@angular/common/http';

describe('ProfanityService', () => {
  let service: ProfanityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfanityService,
        ChatService,
        provideHttpClient(),
      ],
    });
    service = TestBed.inject(ProfanityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
